n.d(t, {
    A: () => $,
    O: () => Y,
}),
    n(938796),
    n(896048);
var r,
    i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(284009),
    u = n.n(c),
    d = n(665260),
    p = n(3026),
    f = n(582754),
    m = n(397927),
    g = n(492684),
    y = n(736653),
    _ = n(573648),
    b = n(235986),
    A = n(573435),
    h = n(769015),
    v = n(409626),
    O = n(692969),
    j = n(263063),
    S = n(886019),
    I = n(559405),
    x = n(290987),
    E = n(345942),
    P = n(763758),
    T = n(82149),
    N = n(139675),
    w = n(486020),
    C = n(821589),
    D = n(474447),
    L = n(682261),
    k = n(672979),
    G = n(90644),
    R = n(61330),
    M = n(960076),
    V = n(432166),
    U = n(360469),
    W = n(652215),
    F = n(985018),
    K = n(609535);

function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
var Y =
    (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
    (i.STREAM_PREVIEW = "StreamPreview"),
    (i.VOICE_CHANNEL = "VoiceChannel"),
    i);
let B = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500],
    },
    J = (0, g.A)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)("div", {
                    className: K.timestamp,
                    children: this.props.message,
                });
            }
        },
    );

function Z(e) {
    let { activity: t } = e,
        n = (0, y.Ay)(),
        r = (function (e) {
            let { activity: t } = e,
                n = null;
            return (
                (0, G.A)(t) && (n = W.fg2.SPOTIFY),
                null != t.platform && [W.yTV.PS4, W.yTV.PS5].includes(t.platform) && (n = W.fg2.PLAYSTATION),
                n
            );
        })({
            activity: t,
        });
    if (null == r) return null;
    let i = _.A.get(r);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, f.qB)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: K.platformIcon,
    });
}
class X extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            (null == e ? void 0 : e.type) !== W.$pd.PLAYING &&
            (null == e ? void 0 : e.type) !== W.$pd.WATCHING &&
            (null == e ? void 0 : e.type) !== W.$pd.LISTENING &&
            (null == e ? void 0 : e.type) !== W.$pd.HANG_STATUS
            ? {
                  type: W.$pd.PLAYING,
                  name: F.intl.string(F.t.eXan7B),
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, C.t)(K, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, M.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: c } = s;
        switch (s.type) {
            case W.$pd.STREAMING:
                t = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [W.fg2.TWITCH, W.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : _.A.get(W.fg2.TWITCH).name,
                });
                break;
            case W.$pd.LISTENING:
                t = F.intl.formatToPlainString(F.t["5sYPnr"], {
                    name: c,
                });
                break;
            case W.$pd.WATCHING:
                t = F.intl.formatToPlainString(F.t.Ge29Zy, {
                    name: c,
                });
                break;
            case W.$pd.PLAYING:
                t = (0, D.A)(s);
                break;
            case W.$pd.COMPETING:
                t = F.intl.formatToPlainString(F.t.SQCo6D, {
                    name: c,
                });
        }
        if (null != r) {
            var u;
            t = (0, d.Lt)(null != (u = null == s ? void 0 : s.flags) ? u : 0, W.jUm.EMBEDDED)
                ? s.type === W.$pd.WATCHING
                    ? F.intl.formatToPlainString(F.t["M/L8ot"], {
                          guildName: r.name,
                      })
                    : F.intl.formatToPlainString(F.t["4chKQu"], {
                          guildName: r.name,
                      })
                : F.intl.formatToPlainString(F.t.sddlGK, {
                      server: r.name,
                  });
        }
        return (
            (null == s ? void 0 : s.type) === W.$pd.HANG_STATUS && (t = F.intl.string(F.t["74vS/x"])),
            (0, l.jsxs)("div", {
                className: K.headerContainer,
                children: [
                    (0, l.jsx)(m.Heading, {
                        className: o()((0, C.t)(K, "headerText", e ? "EmptyBody" : "Normal")),
                        variant: i ? "text-xs/semibold" : "eyebrow",
                        children: (0, l.jsx)(p.A, {
                            children: t,
                        }),
                    }),
                    null == a ? void 0 : a(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: K.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: _.A.get(W.fg2.XBOX).icon.customPNG,
                className: o()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        var t, n, r;
        let i,
            s,
            { user: c } = this.props;
        if (e.type === W.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: K.assets,
                children: (0, l.jsx)(I.A, {
                    userId: c.id,
                    hangStatusActivity: e,
                    size: 40,
                    className: o()(K.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: u } = this.props,
            { assets: d, application_id: p } = e;
        if (null == d || (null == d.large_image && null == d.small_image)) return null;
        (0, M.A)(e) && (i = B[u]);
        let f = (0, G.A)(e),
            g =
                null != d.large_image
                    ? (0, l.jsx)("img", {
                          alt: null != (t = d.large_text) ? t : "",
                          src: (0, N.uD)(p, d.large_image, null != i ? i : [U.iu.LARGE, U.iu.LARGE]),
                          className: o()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? W.fg2.TWITCH : "",
                              ),
                              {
                                  [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
                                  [K.assetsLargeImageSpotify]: f,
                              },
                          ),
                      })
                    : null;
        if (f)
            g = (0, l.jsx)(m.MzZ, {
                onClick: this.handleOpenSpotifyAlbum,
                children: g,
            });
        else if ((0, T.Cy)(e)) {
            let t = (0, T.UW)(e);
            if (null == t) return null;
            g = (0, l.jsx)(A.Ay, {
                mask: A.Ay.Masks.SQUIRCLE,
                width: U.iu.SMALL,
                height: U.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src:
                        null !=
                        (r = w.Ay.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: U.iu.SMALL,
                        }))
                            ? r
                            : void 0,
                    className: K.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (g = (0, l.jsxs)("div", {
                className: K.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: K.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(m.H, {
                                className: K.streamName,
                                children: e.name,
                            }),
                            (0, l.jsx)("div", {
                                className: K.streamGame,
                                children: F.intl.format(F.t.gmCZRY, {
                                    game: e.details,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(m.MzZ, {
                        className: K.twitchBackgroundImage,
                        href: e.url,
                        children: g,
                    }),
                ],
            })),
        (0, T.Cy)(e) ||
            null == d.small_image ||
            (s = (0, l.jsx)(m.STz, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: (e) => {
                    var t;
                    return (0, l.jsx)(
                        "img",
                        H(
                            {
                                alt: null != (t = d.small_text) ? t : "",
                                src: (0, N.uD)(p, d.small_image, [U.iu.SMALL, U.iu.SMALL]),
                                className: this.getTypeClass(
                                    "assetsSmallImage",
                                    null == g ? "WithoutLargeImage" : void 0,
                                ),
                            },
                            e,
                        ),
                    );
                },
            })),
        null == g)
            ? (0, l.jsx)("div", {
                  className: K.assets,
                  children: s,
              })
            : (0, l.jsxs)("div", {
                  className: K.assets,
                  children: [
                      (0, l.jsx)(m.STz, {
                          text: null != d.large_text ? d.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != g
                                  ? a.cloneElement(g, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                    })
                                  : null;
                          },
                      }),
                      s,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: r, activityGuild: i } = this.props;
        return null != e.assets || (0, L.A)(e) || e.type !== W.$pd.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == r && null != i
              ? (0, l.jsx)("div", {
                    className: o()(K.gameIcon, K.screenshareIcon),
                })
              : (0, l.jsx)(h.A, {
                    className: K.gameIcon,
                    game: r,
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: i, type: a } = e;
        if (a === W.$pd.CUSTOM_STATUS) return null;
        let s = (0, k.A)(e),
            c = e.name,
            u = c;
        return (a === W.$pd.HANG_STATUS
            ? (u = (0, S.Au)(t.id, e))
            : s && null != n
              ? (u = (0, l.jsx)("span", {
                    className: K.activityName,
                    children: u,
                }))
              : !s &&
                ((c = i),
                (u = i),
                (0, G.A)(e) && null != e.sync_id && null != i
                    ? (u = (0, l.jsx)(m.MzZ, {
                          className: K.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: i,
                      }))
                    : (0, T.Cy)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, l.jsx)(m.Text, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: o()((0, C.t)(K, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: i } = this.props,
            a = n,
            s = n;
        if (e.type === W.$pd.CUSTOM_STATUS) a = r;
        else if (e.type === W.$pd.HANG_STATUS && null != i)
            (a = F.intl.formatToPlainString(F.t.IAZiW2, {
                guildName: i.name,
            })),
                (t = () => {
                    (0, E.u)(i.id);
                });
        else if (!(0, k.A)(e)) {
            if (((a = r), (s = r), (0, G.A)(e) && null != r)) {
                let t = (t, n) =>
                    (0, l.jsx)(
                        P.A,
                        {
                            artists: r,
                            linkClassName: K.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = F.intl.format(F.t.uU9le8, {
                    artists: s,
                    artistsHook: t,
                });
            } else if ((0, T.Cy)(e)) {
                var o;
                a = null == (o = e.assets) ? void 0 : o.small_text;
            }
        }
        return null == a || "" === a
            ? null
            : ((0, M.A)(e) &&
                    (a = F.intl.formatToPlainString(F.t.gmCZRY, {
                        game: a,
                    })),
                null != t)
              ? (0, l.jsx)(m.DUT, {
                    onClick: t,
                    title: null != s ? s : void 0,
                    className: K.clickableDetails,
                    children: a,
                })
              : (0, l.jsx)("div", {
                    title: null != s ? s : void 0,
                    className: (0, M.A)(e) || (0, G.A)(e) ? K.detailsWrap : K.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, l.jsx)("div", {
                      className: (0, M.A)(e) || (0, G.A)(e) ? K.detailsWrap : K.details,
                      children: F.intl.format(F.t["hq/Qze"], {
                          guildName: t.name,
                      }),
                  })
                : (0, l.jsxs)("div", {
                      className: o()((0, M.A)(e) || (0, G.A)(e) ? K.detailsWrap : K.details, K.guildDetails),
                      children: [
                          (0, l.jsx)(j.A, {
                              guild: t,
                              size: j.A.Sizes.SMOL,
                              className: K.guildIcon,
                          }),
                          (0, l.jsx)(m._BQ, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, l.jsxs)("div", {
                              className: K.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(m.HKD, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  (0, l.jsx)(m.Text, {
                                      variant: "text-xs/normal",
                                      children: null == r ? void 0 : r.name,
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, k.A)(e) || (0, G.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, L.A)(e)
              ? (0, l.jsx)(J, {
                    timestamps: n,
                })
              : (0, l.jsx)(x.Ay, {
                    start: n.start,
                    location: x.Ay.Locations.USER_ACTIVITY,
                    className: K.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, G.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, l.jsx)(V.A, {
                  start: n,
                  end: r,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        var n, r;
        let i,
            { state: a, party: s, assets: o } = e,
            c = a,
            u = a;
        if (
            !(0, k.A)(e) &&
            ((c = null == o ? void 0 : o.large_text), (u = null == o ? void 0 : o.large_text), (0, G.A)(e) && null != c)
        ) {
            let t = (t, n) =>
                null != e.sync_id && null != u
                    ? (0, l.jsx)(
                          m.MzZ,
                          {
                              className: K.bodyLink,
                              onClick: this.handleOpenSpotifyAlbum,
                              children: u,
                          },
                          n,
                      )
                    : u;
            c = F.intl.format(F.t.vOLBEy, {
                album: u,
                albumHook: t,
            });
        }
        return (null != c && "" !== c && e.type !== W.$pd.CUSTOM_STATUS) || (0, T.Cy)(e)
            ? ((null == s ? void 0 : s.size) == null && [U.I4].includes(null != (n = e.application_id) ? n : "")
                  ? (i = F.intl.formatToPlainString(F.t["u//9By"], {
                        count: "0",
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0,
                    }))
                  : (0, T.Cy)(e) && (null == s ? void 0 : s.size) != null
                    ? (i = F.intl.formatToPlainString(F.t["JC/3xw"], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0],
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (i =
                          0 === s.size[1]
                              ? F.intl.formatToPlainString(F.t.IM4J4e, {
                                    count: s.size[0],
                                })
                              : F.intl.formatToPlainString(F.t["u//9By"], {
                                    count: s.size[0],
                                    max: s.size[1],
                                })),
              (0, l.jsxs)("div", {
                  className: K.state,
                  children: [
                      (0, l.jsx)("span", {
                          title: u,
                          children: c,
                      }),
                      null != i
                          ? (0, l.jsxs)("span", {
                                children: [" ", i],
                            })
                          : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: n,
                className: r,
                application: i,
                onClose: a,
                onOpenGameProfileModal: s,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === W.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            d = "StreamPreview" === t,
            p = !1;
        (0, R.A)(c)
            ? ((e = this.renderXboxImage()), (p = !0))
            : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
        let f = this.renderName(c),
            g = this.renderDetails(c),
            y = this.renderState(c, i),
            _ = this.renderTimePlayed(c),
            A = this.renderChannelDetails(c),
            h = null != n ? n() : null,
            v = this.renderTimeBar(c),
            O = ![e, f, g, y, _, v, h].some((e) => null != e);
        return (0, l.jsxs)("div", {
            className: o()(this.getTypeClass("activity"), r),
            children: [
                this.renderHeader(O),
                (0, l.jsx)("div", {
                    className: o()(p ? K.bodyAlignCenter : K.bodyNormal),
                    children: (0, l.jsxs)("div", {
                        className: K.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(b.A.Child, {
                                      className: o()(
                                          (0, C.t)(
                                              K,
                                              "content",
                                              p ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(m.DUT, {
                                              className: o()(null != s && K.openGameProfile),
                                              onClick:
                                                  null != s
                                                      ? (e) => {
                                                            s(e), null == a || a();
                                                        }
                                                      : void 0,
                                              children: [f, g, y, _],
                                          }),
                                          A,
                                          d ? null : v,
                                          u ? h : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                d ? h : null,
                (0, l.jsx)(Z, {
                    activity: c,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            z(this, "handleOpenSpotifyTrack", () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            z(this, "handleOpenSpotifyArtist", (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e);
            }),
            z(this, "handleOpenSpotifyAlbum", () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, "Spotify activity was null"), null == t || t(e, n.id);
            });
    }
}
z(X, "Types", Y);
let q = (e) => {
    var t, n, r, i, a;
    let s = (0, O.A)({
        location: "UserActivity",
        applicationId:
            null != (t = null == (n = e.application) ? void 0 : n.id)
                ? t
                : null == (r = e.activity)
                  ? void 0
                  : r.application_id,
        source: v.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(
        X,
        ((i = H({}, e)),
        (a = a =
            {
                onOpenGameProfileModal: s,
            }),
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
        i),
    );
};
q.Types = Y;
let $ = q;
