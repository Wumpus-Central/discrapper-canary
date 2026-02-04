n.d(t, {
    A: () => $,
    O: () => K,
}),
    n(938796),
    n(896048);
var r,
    i,
    l = n(627968),
    a = n(64700),
    o = n(503698),
    s = n.n(o),
    c = n(284009),
    u = n.n(c),
    d = n(665260),
    f = n(3026),
    p = n(582754),
    m = n(397927),
    g = n(492684),
    y = n(736653),
    b = n(573648),
    h = n(235986),
    A = n(573435),
    _ = n(769015),
    v = n(409626),
    O = n(692969),
    S = n(263063),
    j = n(886019),
    I = n(559405),
    x = n(290987),
    E = n(345942),
    P = n(763758),
    C = n(82149),
    T = n(139675),
    N = n(486020),
    w = n(821589),
    L = n(474447),
    D = n(682261),
    R = n(672979),
    k = n(90644),
    U = n(61330),
    M = n(960076),
    V = n(432166),
    G = n(360469),
    F = n(652215),
    H = n(985018),
    W = n(609535);

function B(e, t, n) {
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

function z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
var K =
    (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
    (i.STREAM_PREVIEW = "StreamPreview"),
    (i.VOICE_CHANNEL = "VoiceChannel"),
    i);
let Y = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500],
    },
    J = (0, g.A)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)("div", {
                    className: W.timestamp,
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
                (0, k.A)(t) && (n = F.fg2.SPOTIFY),
                null != t.platform && [F.yTV.PS4, F.yTV.PS5].includes(t.platform) && (n = F.fg2.PLAYSTATION),
                n
            );
        })({
            activity: t,
        });
    if (null == r) return null;
    let i = b.A.get(r);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, p.qB)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: W.platformIcon,
    });
}
class q extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            (null == e ? void 0 : e.type) !== F.$pd.PLAYING &&
            (null == e ? void 0 : e.type) !== F.$pd.WATCHING &&
            (null == e ? void 0 : e.type) !== F.$pd.LISTENING &&
            (null == e ? void 0 : e.type) !== F.$pd.HANG_STATUS
            ? {
                  type: F.$pd.PLAYING,
                  name: H.intl.string(H.t.eXan7B),
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.t)(W, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, M.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: c } = o;
        switch (o.type) {
            case F.$pd.STREAMING:
                t = H.intl.formatToPlainString(H.t.Dzgz4u, {
                    platform: [F.fg2.TWITCH, F.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : b.A.get(F.fg2.TWITCH).name,
                });
                break;
            case F.$pd.LISTENING:
                t = H.intl.formatToPlainString(H.t["5sYPnr"], {
                    name: c,
                });
                break;
            case F.$pd.WATCHING:
                t = H.intl.formatToPlainString(H.t.Ge29Zy, {
                    name: c,
                });
                break;
            case F.$pd.PLAYING:
                t = (0, L.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case F.$pd.COMPETING:
                t = H.intl.formatToPlainString(H.t.SQCo6D, {
                    name: c,
                });
        }
        if (null != r) {
            var u;
            t = (0, d.Lt)(null != (u = null == o ? void 0 : o.flags) ? u : 0, F.jUm.EMBEDDED)
                ? o.type === F.$pd.WATCHING
                    ? H.intl.formatToPlainString(H.t["M/L8ot"], {
                          guildName: r.name,
                      })
                    : H.intl.formatToPlainString(H.t["4chKQu"], {
                          guildName: r.name,
                      })
                : H.intl.formatToPlainString(H.t.sddlGK, {
                      server: r.name,
                  });
        }
        (null == o ? void 0 : o.type) === F.$pd.HANG_STATUS && (t = H.intl.string(H.t["74vS/x"]));
        let p = this.isUserActivityHoverExperiment(),
            g = i ? "text-xs/semibold" : "eyebrow";
        return (
            p && (g = "text-xs/medium"),
            (0, l.jsxs)("div", {
                className: W.headerContainer,
                children: [
                    (0, l.jsx)(m.Heading, {
                        className: s()(!p && (e ? W.headerTextEmptyBody : W.headerTextNormal)),
                        color: p ? "text-muted" : void 0,
                        variant: g,
                        children: (0, l.jsx)(f.A, {
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
            className: W.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: b.A.get(F.fg2.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        var t, n, r;
        let i,
            o,
            { user: c } = this.props;
        if (e.type === F.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: W.assets,
                children: (0, l.jsx)(I.A, {
                    userId: c.id,
                    hangStatusActivity: e,
                    size: 40,
                    className: s()(W.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: u } = this.props,
            { assets: d, application_id: f } = e;
        if (null == d || (null == d.large_image && null == d.small_image)) return null;
        (0, M.A)(e) && (i = Y[u]);
        let p = (0, k.A)(e),
            g =
                null != d.large_image
                    ? (0, l.jsx)("img", {
                          alt: null != (t = d.large_text) ? t : "",
                          src: (0, T.uD)(f, d.large_image, null != i ? i : [G.iu.LARGE, G.iu.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? F.fg2.TWITCH : "",
                              ),
                              {
                                  [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
                                  [W.assetsLargeImageSpotify]: p,
                              },
                          ),
                      })
                    : null;
        if (p)
            g = (0, l.jsx)(m.MzZ, {
                onClick: this.handleOpenSpotifyAlbum,
                children: g,
            });
        else if ((0, C.Cy)(e)) {
            let t = (0, C.UW)(e);
            if (null == t) return null;
            g = (0, l.jsx)(A.Ay, {
                mask: A.Ay.Masks.SQUIRCLE,
                width: G.iu.SMALL,
                height: G.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src:
                        null !=
                        (r = N.Ay.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: G.iu.SMALL,
                        }))
                            ? r
                            : void 0,
                    className: W.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (g = (0, l.jsxs)("div", {
                className: W.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: W.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(m.H, {
                                className: W.streamName,
                                children: e.name,
                            }),
                            (0, l.jsx)("div", {
                                className: W.streamGame,
                                children: H.intl.format(H.t.gmCZRY, {
                                    game: e.details,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(m.MzZ, {
                        className: W.twitchBackgroundImage,
                        href: e.url,
                        children: g,
                    }),
                ],
            })),
        (0, C.Cy)(e) ||
            null == d.small_image ||
            (o = (0, l.jsx)(m.STz, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: (e) => {
                    var t;
                    return (0, l.jsx)(
                        "img",
                        z(
                            {
                                alt: null != (t = d.small_text) ? t : "",
                                src: (0, T.uD)(f, d.small_image, [G.iu.SMALL, G.iu.SMALL]),
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
                  className: W.assets,
                  children: o,
              })
            : (0, l.jsxs)("div", {
                  className: W.assets,
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
                      o,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: r, activityGuild: i } = this.props;
        return null != e.assets || (0, D.A)(e) || e.type !== F.$pd.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == r && null != i
              ? (0, l.jsx)("div", {
                    className: s()(W.gameIcon, W.screenshareIcon),
                })
              : (0, l.jsx)(_.A, {
                    className: W.gameIcon,
                    game: r,
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: i, type: a } = e;
        if (a === F.$pd.CUSTOM_STATUS) return null;
        let o = (0, R.A)(e),
            c = e.name,
            u = c;
        return (a === F.$pd.HANG_STATUS
            ? (u = (0, j.Au)(t.id, e))
            : o && null != n
              ? (u = (0, l.jsx)("span", {
                    className: this.props.enableUserHoverActivities ? W.activityNameUserActivityHover : W.activityName,
                    children: u,
                }))
              : !o &&
                ((c = i),
                (u = i),
                (0, k.A)(e) && null != e.sync_id && null != i
                    ? (u = (0, l.jsx)(m.MzZ, {
                          className: W.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: i,
                      }))
                    : (0, C.Cy)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, l.jsx)(m.Text, {
                  title: c,
                  variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
                  className: s()((0, w.t)(W, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: i } = this.props,
            a = n,
            o = n;
        if (e.type === F.$pd.CUSTOM_STATUS) a = r;
        else if (e.type === F.$pd.HANG_STATUS && null != i)
            (a = H.intl.formatToPlainString(H.t.IAZiW2, {
                guildName: i.name,
            })),
                (t = () => {
                    (0, E.u)(i.id);
                });
        else if (!(0, R.A)(e)) {
            if (((a = r), (o = r), (0, k.A)(e) && null != r)) {
                let t = (t, n) =>
                    (0, l.jsx)(
                        P.A,
                        {
                            artists: r,
                            linkClassName: W.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = H.intl.format(H.t.uU9le8, {
                    artists: o,
                    artistsHook: t,
                });
            } else if ((0, C.Cy)(e)) {
                var s;
                a = null == (s = e.assets) ? void 0 : s.small_text;
            }
        }
        return null == a || "" === a
            ? null
            : ((0, M.A)(e) &&
                    (a = H.intl.formatToPlainString(H.t.gmCZRY, {
                        game: a,
                    })),
                null != t)
              ? (0, l.jsx)(m.DUT, {
                    onClick: t,
                    title: null != o ? o : void 0,
                    className: W.clickableDetails,
                    children: a,
                })
              : (0, l.jsx)("div", {
                    title: null != o ? o : void 0,
                    className: (0, M.A)(e) || (0, k.A)(e) ? W.detailsWrap : W.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, l.jsx)("div", {
                      className: (0, M.A)(e) || (0, k.A)(e) ? W.detailsWrap : W.details,
                      children: H.intl.format(H.t["hq/Qze"], {
                          guildName: t.name,
                      }),
                  })
                : (0, l.jsxs)("div", {
                      className: s()((0, M.A)(e) || (0, k.A)(e) ? W.detailsWrap : W.details, W.guildDetails),
                      children: [
                          (0, l.jsx)(S.A, {
                              guild: t,
                              size: S.A.Sizes.SMOL,
                              className: W.guildIcon,
                          }),
                          (0, l.jsx)(m._BQ, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, l.jsxs)("div", {
                              className: W.voiceChannelInfo,
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
        if (!(0, R.A)(e) || (0, k.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, D.A)(e)
              ? (0, l.jsx)(J, {
                    timestamps: n,
                })
              : (0, l.jsx)(x.Ay, {
                    start: n.start,
                    location: x.Ay.Locations.USER_ACTIVITY,
                    className: W.playTime,
                    isApplicationStreaming: null != t,
                    enableUserHoverActivities: this.props.enableUserHoverActivities,
                });
    }
    renderTimeBar(e) {
        if (!(0, k.A)(e)) return null;
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
            { state: a, party: o, assets: s } = e,
            c = a,
            u = a;
        if (
            !(0, R.A)(e) &&
            ((c = null == s ? void 0 : s.large_text), (u = null == s ? void 0 : s.large_text), (0, k.A)(e) && null != c)
        ) {
            let t = (t, n) =>
                null != e.sync_id && null != u
                    ? (0, l.jsx)(
                          m.MzZ,
                          {
                              className: W.bodyLink,
                              onClick: this.handleOpenSpotifyAlbum,
                              children: u,
                          },
                          n,
                      )
                    : u;
            c = H.intl.format(H.t.vOLBEy, {
                album: u,
                albumHook: t,
            });
        }
        return (null != c && "" !== c && e.type !== F.$pd.CUSTOM_STATUS) || (0, C.Cy)(e)
            ? ((null == o ? void 0 : o.size) == null && [G.I4].includes(null != (n = e.application_id) ? n : "")
                  ? (i = H.intl.formatToPlainString(H.t["u//9By"], {
                        count: "0",
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0,
                    }))
                  : (0, C.Cy)(e) && (null == o ? void 0 : o.size) != null
                    ? (i = H.intl.formatToPlainString(H.t["JC/3xw"], {
                          numSpeakers: o.size[0],
                          numListeners: o.size[1] - o.size[0],
                      }))
                    : (null == o ? void 0 : o.size) != null &&
                      o.size.length >= 2 &&
                      (i =
                          0 === o.size[1]
                              ? H.intl.formatToPlainString(H.t.IM4J4e, {
                                    count: o.size[0],
                                })
                              : H.intl.formatToPlainString(H.t["u//9By"], {
                                    count: o.size[0],
                                    max: o.size[1],
                                })),
              (0, l.jsxs)("div", {
                  className: W.state,
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
                onOpenGameProfileModal: o,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === F.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            d = "StreamPreview" === t,
            f = !1;
        (0, U.A)(c)
            ? ((e = this.renderXboxImage()), (f = !0))
            : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
        let p = this.renderName(c),
            g = this.renderDetails(c),
            y = this.renderState(c, i),
            b = this.renderTimePlayed(c),
            A = this.renderChannelDetails(c),
            _ = null != n ? n() : null,
            v = this.renderTimeBar(c),
            O = ![e, p, g, y, b, v, _].some((e) => null != e);
        return (0, l.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), r),
            children: [
                this.renderHeader(O),
                (0, l.jsx)("div", {
                    className: s()(f ? W.bodyAlignCenter : W.bodyNormal),
                    children: (0, l.jsxs)("div", {
                        className: W.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(h.A.Child, {
                                      className: s()(
                                          (0, w.t)(
                                              W,
                                              "content",
                                              f ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(m.DUT, {
                                              className: s()(
                                                  null != o && W.openGameProfile,
                                                  this.props.enableUserHoverActivities &&
                                                      W.activityVoiceChannelUserHover,
                                              ),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), null == a || a();
                                                        }
                                                      : void 0,
                                              children: [p, g, y, b],
                                          }),
                                          A,
                                          d ? null : v,
                                          u ? _ : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                d ? _ : null,
                (0, l.jsx)(Z, {
                    activity: c,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            B(this, "handleOpenSpotifyTrack", () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            B(this, "handleOpenSpotifyArtist", (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e);
            }),
            B(this, "handleOpenSpotifyAlbum", () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, "Spotify activity was null"), null == t || t(e, n.id);
            });
    }
}
B(q, "Types", K);
let X = (e) => {
    var t, n, r, i, a;
    let o = (0, O.A)({
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
        q,
        ((i = z({}, e)),
        (a = a =
            {
                onOpenGameProfileModal: o,
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
X.Types = K;
let $ = X;
