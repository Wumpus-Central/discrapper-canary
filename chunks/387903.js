(n.d(t, {
    Y: () => Y,
    Z: () => Q
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
    f = n(481060),
    p = n(438139),
    m = n(410030),
    g = n(726542),
    h = n(600164),
    b = n(686546),
    v = n(111028),
    _ = n(925329),
    y = n(810568),
    O = n(168524),
    S = n(565138),
    I = n(833858),
    j = n(223135),
    x = n(707409),
    E = n(769654),
    P = n(424678),
    C = n(750154),
    T = n(81063),
    N = n(768581),
    A = n(630388),
    w = n(153066),
    D = n(740265),
    Z = n(122810),
    L = n(833664),
    M = n(503438),
    k = n(802856),
    U = n(420660),
    R = n(39628),
    V = n(701488),
    F = n(981631),
    G = n(388032),
    B = n(636424);
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
function H(e) {
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
                W(e, t, n[t]);
            }));
    }
    return e;
}
var Y = (((i = {}).ACTIVITY_FEED = 'ActivityFeed'), (i.STREAM_PREVIEW = 'StreamPreview'), (i.VOICE_CHANNEL = 'VoiceChannel'), i);
let z = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    J = (0, p.Z)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)('div', {
                    className: B.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function K(e) {
    let { activity: t } = e,
        n = (0, m.ZP)(),
        r = (function (e) {
            let { activity: t } = e,
                n = null;
            return ((0, M.Z)(t) && (n = F.ABu.SPOTIFY), null != t.platform && [F.M7m.PS4, F.M7m.PS5].includes(t.platform) && (n = F.ABu.PLAYSTATION), n);
        })({ activity: t });
    if (null == r) return null;
    let i = g.Z.get(r);
    return (0, l.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: B.platformIcon
    });
}
class q extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== F.IIU.PLAYING && (null == e ? void 0 : e.type) !== F.IIU.WATCHING && (null == e ? void 0 : e.type) !== F.IIU.LISTENING && (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS
            ? {
                  type: F.IIU.PLAYING,
                  name: G.intl.string(G.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.l)(B, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, U.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: c } = o;
        switch (o.type) {
            case F.IIU.STREAMING:
                t = G.intl.formatToPlainString(G.t.Dzgz4u, {
                    platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(F.ABu.TWITCH).name
                });
                break;
            case F.IIU.LISTENING:
                t = G.intl.formatToPlainString(G.t['5sYPnp'], { name: c });
                break;
            case F.IIU.WATCHING:
                t = G.intl.formatToPlainString(G.t.Ge29Z2, { name: c });
                break;
            case F.IIU.PLAYING:
                t = (0, D.Z)(o);
                break;
            case F.IIU.COMPETING:
                t = G.intl.formatToPlainString(G.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, A.yE)(null != (u = null == o ? void 0 : o.flags) ? u : 0, F.xjy.EMBEDDED) ? (o.type === F.IIU.WATCHING ? G.intl.formatToPlainString(G.t['M/L8oq'], { guildName: r.name }) : G.intl.formatToPlainString(G.t['4chKQk'], { guildName: r.name })) : G.intl.formatToPlainString(G.t.sddlGB, { server: r.name });
        }
        return (
            (null == o ? void 0 : o.type) === F.IIU.HANG_STATUS && (t = G.intl.string(G.t['74vS//'])),
            (0, l.jsxs)('div', {
                className: B.headerContainer,
                children: [
                    (0, l.jsx)(f.X6q, {
                        className: s()((0, w.l)(B, 'headerText', e ? 'EmptyBody' : 'Normal')),
                        variant: i ? 'text-xs/semibold' : 'eyebrow',
                        children: (0, l.jsx)(v.Z, { children: t })
                    }),
                    null == a ? void 0 : a()
                ]
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)('div', {
            className: B.assets,
            children: (0, l.jsx)('img', {
                alt: '',
                src: g.Z.get(F.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, r;
        let i, o;
        if (e.type === F.IIU.HANG_STATUS)
            return (0, l.jsx)('div', {
                className: B.assets,
                children: (0, l.jsx)(j.Z, {
                    hangStatusActivity: e,
                    className: s()(B.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, U.Z)(e) && (i = z[c]);
        let p = (0, M.Z)(e),
            m =
                null != u.large_image
                    ? (0, l.jsx)('img', {
                          alt: null != (t = u.large_text) ? t : '',
                          src: (0, T.xF)(d, u.large_image, null != i ? i : [V.Si.LARGE, V.Si.LARGE]),
                          className: s()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : ''), {
                              [null != (n = this.getTypeClass('assetsLargeMask')) ? n : '']: null != u.small_image,
                              [B.assetsLargeImageSpotify]: p
                          })
                      })
                    : null;
        if (p)
            m = (0, l.jsx)(f.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: m
            });
        else if ((0, C.dS)(e)) {
            let t = (0, C.rq)(e);
            if (null == t) return null;
            m = (0, l.jsx)(b.ZP, {
                mask: b.ZP.Masks.SQUIRCLE,
                width: V.Si.SMALL,
                height: V.Si.SMALL,
                children: (0, l.jsx)('img', {
                    src:
                        null !=
                        (r = N.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: u.small_image,
                            size: V.Si.SMALL
                        }))
                            ? r
                            : void 0,
                    className: B.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (m = (0, l.jsxs)('div', {
                className: B.twitchImageContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: B.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(f.H, {
                                className: B.streamName,
                                children: e.name
                            }),
                            (0, l.jsx)('div', {
                                className: B.streamGame,
                                children: G.intl.format(G.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, l.jsx)(f.eee, {
                        className: B.twitchBackgroundImage,
                        href: e.url,
                        children: m
                    })
                ]
            })),
        (0, C.dS)(e) ||
            null == u.small_image ||
            (o = (0, l.jsx)(f.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, l.jsx)(
                        'img',
                        H(
                            {
                                alt: null != (t = u.small_text) ? t : '',
                                src: (0, T.xF)(d, u.small_image, [V.Si.SMALL, V.Si.SMALL]),
                                className: this.getTypeClass('assetsSmallImage', null == m ? 'WithoutLargeImage' : void 0)
                            },
                            e
                        )
                    );
                }
            })),
        null == m)
            ? (0, l.jsx)('div', {
                  className: B.assets,
                  children: o
              })
            : (0, l.jsxs)('div', {
                  className: B.assets,
                  children: [
                      (0, l.jsx)(f.ua7, {
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
        return null != e.assets || (0, Z.Z)(e) || e.type !== F.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == r && null != i
              ? (0, l.jsx)('div', { className: s()(B.gameIcon, B.screenshareIcon) })
              : (0, l.jsx)(_.Z, {
                    className: B.gameIcon,
                    game: r
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: i, type: a } = e;
        if (a === F.IIU.CUSTOM_STATUS) return null;
        let o = (0, L.Z)(e),
            c = e.name,
            u = c;
        return (a === F.IIU.HANG_STATUS
            ? (u = (0, I.O8)(e))
            : o && null != n
              ? (u = (0, l.jsx)('span', {
                    className: B.activityName,
                    children: u
                }))
              : !o &&
                ((c = i),
                (u = i),
                (0, M.Z)(e) && null != e.sync_id && null != i
                    ? (u = (0, l.jsx)(f.eee, {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: i
                      }))
                    : (0, C.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, l.jsx)(f.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: s()((0, w.l)(B, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: i } = this.props,
            a = n,
            o = n;
        if (e.type === F.IIU.CUSTOM_STATUS) a = r;
        else if (e.type === F.IIU.HANG_STATUS && null != i)
            ((a = G.intl.formatToPlainString(G.t.IAZiW1, { guildName: i.name })),
                (t = () => {
                    (0, E.X)(i.id);
                }));
        else if (!(0, L.Z)(e)) {
            if (((a = r), (o = r), (0, M.Z)(e) && null != r))
                a = G.intl.format(G.t.uU9le3, {
                    artists: o,
                    artistsHook: (t, n) =>
                        (0, l.jsx)(
                            P.Z,
                            {
                                artists: r,
                                linkClassName: B.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, C.dS)(e)) {
                var s;
                a = null == (s = e.assets) ? void 0 : s.small_text;
            }
        }
        return null == a || '' === a
            ? null
            : ((0, U.Z)(e) && (a = G.intl.formatToPlainString(G.t.gmCZRU, { game: a })), null != t)
              ? (0, l.jsx)(f.P3F, {
                    onClick: t,
                    title: null != o ? o : void 0,
                    className: B.clickableDetails,
                    children: a
                })
              : (0, l.jsx)('div', {
                    title: null != o ? o : void 0,
                    className: (0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details,
                    children: a
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, l.jsx)('div', {
                      className: (0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details,
                      children: G.intl.format(G.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, l.jsxs)('div', {
                      className: s()((0, U.Z)(e) || (0, M.Z)(e) ? B.detailsWrap : B.details, B.guildDetails),
                      children: [
                          (0, l.jsx)(S.Z, {
                              guild: t,
                              size: S.Z.Sizes.SMOL,
                              className: B.guildIcon
                          }),
                          (0, l.jsx)(f.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, l.jsxs)('div', {
                              className: B.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(f.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, l.jsx)(f.Text, {
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
        if (!(0, L.Z)(e) || (0, M.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, Z.Z)(e)
              ? (0, l.jsx)(J, { timestamps: n })
              : (0, l.jsx)(x.ZP, {
                    start: n.start,
                    location: x.ZP.Locations.USER_ACTIVITY,
                    className: B.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, M.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, l.jsx)(R.Z, {
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
        return (!(0, L.Z)(e) &&
            ((c = null == s ? void 0 : s.large_text),
            (u = null == s ? void 0 : s.large_text),
            (0, M.Z)(e) &&
                null != c &&
                (c = G.intl.format(G.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, l.jsx)(
                                  f.eee,
                                  {
                                      className: B.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== F.IIU.CUSTOM_STATUS) || (0, C.dS)(e))
            ? ((null == o ? void 0 : o.size) == null && [V.Zc].includes(null != (n = e.application_id) ? n : '')
                  ? (i = G.intl.formatToPlainString(G.t['u//9Bw'], {
                        count: '0',
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0
                    }))
                  : (0, C.dS)(e) && (null == o ? void 0 : o.size) != null
                    ? (i = G.intl.formatToPlainString(G.t['JC/3x8'], {
                          numSpeakers: o.size[0],
                          numListeners: o.size[1] - o.size[0]
                      }))
                    : (null == o ? void 0 : o.size) != null &&
                      o.size.length >= 2 &&
                      (i =
                          0 === o.size[1]
                              ? G.intl.formatToPlainString(G.t.IM4J4e, { count: o.size[0] })
                              : G.intl.formatToPlainString(G.t['u//9Bw'], {
                                    count: o.size[0],
                                    max: o.size[1]
                                })),
              (0, l.jsxs)('div', {
                  className: B.state,
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
        if (null == c || c.type === F.IIU.CUSTOM_STATUS) return null;
        let u = 'ActivityFeed' === t,
            d = 'StreamPreview' === t,
            p = !1;
        (0, k.Z)(c) ? ((e = this.renderXboxImage()), (p = !0)) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
        let m = this.renderName(c),
            g = this.renderDetails(c),
            b = this.renderState(c, i),
            v = this.renderTimePlayed(c),
            _ = this.renderChannelDetails(c),
            y = null != n ? n() : null,
            O = this.renderTimeBar(c),
            S = ![e, m, g, b, v, O, y].some((e) => null != e);
        return (0, l.jsxs)('div', {
            className: s()(this.getTypeClass('activity'), r),
            children: [
                this.renderHeader(S),
                (0, l.jsx)('div', {
                    className: s()(p ? B.bodyAlignCenter : B.bodyNormal),
                    children: (0, l.jsxs)('div', {
                        className: B.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(h.Z.Child, {
                                      className: s()((0, w.l)(B, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, l.jsxs)(f.P3F, {
                                              className: s()(null != o && B.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            (o(e), null == a || a());
                                                        }
                                                      : void 0,
                                              children: [m, g, b, v]
                                          }),
                                          _,
                                          d ? null : O,
                                          u ? y : null
                                      ]
                                  })
                        ]
                    })
                }),
                d ? y : null,
                (0, l.jsx)(K, { activity: c })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            W(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                (u()(null != e, 'Spotify activity was null'), null == t || t(e));
            }),
            W(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                (u()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e));
            }),
            W(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                (u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id));
            }));
    }
}
W(q, 'Types', Y);
let X = (e) => {
    var t, n, r, i, a;
    let o = (0, O.Z)({
        location: 'UserActivity',
        applicationId: null != (r = null == (t = e.application) ? void 0 : t.id) ? r : null == (n = e.activity) ? void 0 : n.application_id,
        source: y.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(
        q,
        ((i = H({}, e)),
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
X.Types = Y;
let Q = X;
