n.d(t, {
    Y: () => B,
    Z: () => K
}),
    n(789020),
    n(47120);
var r,
    l,
    i = n(200651),
    o = n(192379),
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
    y = n(111028),
    h = n(925329),
    v = n(810568),
    j = n(168524),
    S = n(565138),
    P = n(707409),
    N = n(424678),
    I = n(750154),
    E = n(81063),
    Z = n(768581),
    x = n(630388),
    w = n(153066),
    C = n(740265),
    T = n(122810),
    A = n(833664),
    D = n(503438),
    _ = n(802856),
    k = n(420660),
    L = n(39628),
    W = n(701488),
    M = n(981631),
    U = n(388032),
    R = n(636424);
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
function F(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
var B = (((l = {}).ACTIVITY_FEED = 'ActivityFeed'), (l.STREAM_PREVIEW = 'StreamPreview'), (l.VOICE_CHANNEL = 'VoiceChannel'), l);
let Y = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    G = (0, f.Z)(
        class extends o.PureComponent {
            render() {
                return (0, i.jsx)('div', {
                    className: R.timestamp,
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
            return (0, D.Z)(t) && (n = M.ABu.SPOTIFY), null != t.platform && [M.M7m.PS4, M.M7m.PS5].includes(t.platform) && (n = M.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == r) return null;
    let l = g.Z.get(r);
    return (0, i.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: R.platformIcon
    });
}
class H extends (r = o.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== M.IIU.PLAYING && (null == e ? void 0 : e.type) !== M.IIU.WATCHING && (null == e ? void 0 : e.type) !== M.IIU.LISTENING && (null == e ? void 0 : e.type) !== M.IIU.HANG_STATUS
            ? {
                  type: M.IIU.PLAYING,
                  name: U.NW.string(U.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.l)(R, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: l, renderHeaderAccessory: o } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let { name: c } = a;
        switch (a.type) {
            case M.IIU.STREAMING:
                t = U.NW.formatToPlainString(U.t.Dzgz4u, {
                    platform: [M.ABu.TWITCH, M.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(M.ABu.TWITCH).name
                });
                break;
            case M.IIU.LISTENING:
                t = U.NW.formatToPlainString(U.t['5sYPnp'], { name: c });
                break;
            case M.IIU.WATCHING:
                t = U.NW.formatToPlainString(U.t.Ge29Z2, { name: c });
                break;
            case M.IIU.PLAYING:
                t = (0, C.Z)(a);
                break;
            case M.IIU.COMPETING:
                t = U.NW.formatToPlainString(U.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, x.yE)(null != (u = null == a ? void 0 : a.flags) ? u : 0, M.xjy.EMBEDDED) ? (a.type === M.IIU.WATCHING ? U.NW.formatToPlainString(U.t['M/L8oq'], { guildName: r.name }) : U.NW.formatToPlainString(U.t['4chKQk'], { guildName: r.name })) : U.NW.formatToPlainString(U.t.sddlGB, { server: r.name });
        }
        return (0, i.jsxs)('div', {
            className: R.headerContainer,
            children: [
                (0, i.jsx)(p.X6q, {
                    className: s()((0, w.l)(R, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: l ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, i.jsx)(y.Z, { children: t })
                }),
                null == o ? void 0 : o()
            ]
        });
    }
    renderXboxImage() {
        return (0, i.jsx)('div', {
            className: R.assets,
            children: (0, i.jsx)('img', {
                alt: '',
                src: g.Z.get(M.ABu.XBOX).icon.customPNG,
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
        (0, k.Z)(e) && (l = Y[c]);
        let f = (0, D.Z)(e),
            m =
                null != u.large_image
                    ? (0, i.jsx)('img', {
                          alt: null != (t = u.large_text) ? t : '',
                          src: (0, E.xF)(d, u.large_image, null != l ? l : [W.Si.LARGE, W.Si.LARGE]),
                          className: s()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? M.ABu.TWITCH : ''), {
                              [null != (n = this.getTypeClass('assetsLargeMask')) ? n : '']: null != u.small_image,
                              [R.assetsLargeImageSpotify]: f
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
                width: W.Si.SMALL,
                height: W.Si.SMALL,
                children: (0, i.jsx)('img', {
                    src:
                        null !=
                        (r = Z.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: u.small_image,
                            size: W.Si.SMALL
                        }))
                            ? r
                            : void 0,
                    className: R.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (m = (0, i.jsxs)('div', {
                className: R.twitchImageContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(p.H, {
                                className: R.streamName,
                                children: e.name
                            }),
                            (0, i.jsx)('div', {
                                className: R.streamGame,
                                children: U.NW.format(U.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, i.jsx)(p.eee, {
                        className: R.twitchBackgroundImage,
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
                        F(
                            {
                                alt: null != (t = u.small_text) ? t : '',
                                src: (0, E.xF)(d, u.small_image, [W.Si.SMALL, W.Si.SMALL]),
                                className: this.getTypeClass('assetsSmallImage', null == m ? 'WithoutLargeImage' : void 0)
                            },
                            e
                        )
                    );
                }
            })),
        null == m)
            ? (0, i.jsx)('div', {
                  className: R.assets,
                  children: a
              })
            : (0, i.jsxs)('div', {
                  className: R.assets,
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
        return null != e.assets || (0, T.Z)(e) || e.type !== M.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == r && null != l
              ? (0, i.jsx)('div', { className: s()(R.gameIcon, R.screenshareIcon) })
              : (0, i.jsx)(h.Z, {
                    className: R.gameIcon,
                    game: r
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: l, type: o } = e;
        if (o === M.IIU.CUSTOM_STATUS) return null;
        let a = (0, A.Z)(e),
            c = e.name,
            u = c;
        return (a && null != n
            ? (u = (0, i.jsx)('span', {
                  className: R.activityName,
                  children: u
              }))
            : !a &&
              ((c = l),
              (u = l),
              (0, D.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, i.jsx)(p.eee, {
                        className: R.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: l
                    }))
                  : (0, I.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(p.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: s()((0, w.l)(R, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            l = n,
            o = n;
        if (e.type === M.IIU.CUSTOM_STATUS) l = r;
        else if (!(0, A.Z)(e)) {
            if (((l = r), (o = r), (0, D.Z)(e) && null != r))
                l = U.NW.format(U.t.uU9le3, {
                    artists: o,
                    artistsHook: (t, n) =>
                        (0, i.jsx)(
                            N.Z,
                            {
                                artists: r,
                                linkClassName: R.bodyLink,
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
            : ((0, k.Z)(e) && (l = U.NW.formatToPlainString(U.t.gmCZRU, { game: l })), null != t)
              ? (0, i.jsx)(p.P3F, {
                    onClick: t,
                    title: null != o ? o : void 0,
                    className: R.clickableDetails,
                    children: l
                })
              : (0, i.jsx)('div', {
                    title: null != o ? o : void 0,
                    className: (0, k.Z)(e) || (0, D.Z)(e) ? R.detailsWrap : R.details,
                    children: l
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)('div', {
                      className: (0, k.Z)(e) || (0, D.Z)(e) ? R.detailsWrap : R.details,
                      children: U.NW.format(U.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, i.jsxs)('div', {
                      className: s()((0, k.Z)(e) || (0, D.Z)(e) ? R.detailsWrap : R.details, R.guildDetails),
                      children: [
                          (0, i.jsx)(S.Z, {
                              guild: t,
                              size: S.Z.Sizes.SMOL,
                              className: R.guildIcon
                          }),
                          (0, i.jsx)(p.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, i.jsxs)('div', {
                              className: R.voiceChannelInfo,
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
        if (!(0, A.Z)(e) || (0, D.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, T.Z)(e)
              ? (0, i.jsx)(G, { timestamps: n })
              : (0, i.jsx)(P.ZP, {
                    start: n.start,
                    location: P.ZP.Locations.USER_ACTIVITY,
                    className: R.playTime,
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
            : (0, i.jsx)(L.Z, {
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
        return (!(0, A.Z)(e) &&
            ((c = null == s ? void 0 : s.large_text),
            (u = null == s ? void 0 : s.large_text),
            (0, D.Z)(e) &&
                null != c &&
                (c = U.NW.format(U.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, i.jsx)(
                                  p.eee,
                                  {
                                      className: R.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== M.IIU.CUSTOM_STATUS) || (0, I.dS)(e))
            ? ((null == a ? void 0 : a.size) == null && [W.Zc].includes(null != (n = e.application_id) ? n : '')
                  ? (l = U.NW.formatToPlainString(U.t['u//9Bw'], {
                        count: '0',
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0
                    }))
                  : (0, I.dS)(e) && (null == a ? void 0 : a.size) != null
                    ? (l = U.NW.formatToPlainString(U.t['JC/3x8'], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0]
                      }))
                    : (null == a ? void 0 : a.size) != null &&
                      a.size.length >= 2 &&
                      (l =
                          0 === a.size[1]
                              ? U.NW.formatToPlainString(U.t.IM4J4e, { count: a.size[0] })
                              : U.NW.formatToPlainString(U.t['u//9Bw'], {
                                    count: a.size[0],
                                    max: a.size[1]
                                })),
              (0, i.jsxs)('div', {
                  className: R.state,
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
        if (null == c || c.type === M.IIU.CUSTOM_STATUS) return null;
        let u = 'ActivityFeed' === t,
            d = 'StreamPreview' === t,
            f = !1;
        (0, _.Z)(c) ? ((e = this.renderXboxImage()), (f = !0)) : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
        let m = this.renderName(c),
            g = this.renderDetails(c),
            O = this.renderState(c, l),
            y = this.renderTimePlayed(c),
            h = this.renderChannelDetails(c),
            v = null != n ? n() : null,
            j = this.renderTimeBar(c),
            S = ![e, m, g, O, y, j, v].some((e) => null != e);
        return (0, i.jsxs)('div', {
            className: s()(this.getTypeClass('activity'), r),
            children: [
                this.renderHeader(S),
                (0, i.jsx)('div', {
                    className: s()(f ? R.bodyAlignCenter : R.bodyNormal),
                    children: (0, i.jsxs)('div', {
                        className: R.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(b.Z.Child, {
                                      className: s()((0, w.l)(R, 'content', f ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, i.jsxs)(p.P3F, {
                                              className: s()(null != a && R.openGameProfile),
                                              onClick:
                                                  null != a
                                                      ? (e) => {
                                                            a(e), null == o || o();
                                                        }
                                                      : void 0,
                                              children: [m, g, O, y]
                                          }),
                                          h,
                                          d ? null : j,
                                          u ? v : null
                                      ]
                                  })
                        ]
                    })
                }),
                d ? v : null,
                (0, i.jsx)(z, { activity: c })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            V(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            V(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                u()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e);
            }),
            V(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
V(H, 'Types', B);
let J = (e) => {
    var t, n, r, l, o;
    let a = (0, j.Z)({
        location: 'UserActivity',
        applicationId: null != (r = null == (t = e.application) ? void 0 : t.id) ? r : null == (n = e.activity) ? void 0 : n.application_id,
        source: v.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, i.jsx)(
        H,
        ((l = F({}, e)),
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
let K = J;
