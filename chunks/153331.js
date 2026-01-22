n.d(t, {
    A: () => et,
    O: () => q,
}),
    n(938796),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(284009),
    c = n.n(l),
    u = n(665260),
    d = n(3026),
    f = n(582754),
    p = n(397927),
    _ = n(492684),
    h = n(736653),
    m = n(573648),
    g = n(235986),
    E = n(573435),
    b = n(769015),
    y = n(409626),
    O = n(692969),
    A = n(263063),
    v = n(886019),
    S = n(559405),
    I = n(290987),
    T = n(345942),
    C = n(763758),
    N = n(82149),
    R = n(139675),
    w = n(486020),
    P = n(821589),
    D = n(474447),
    x = n(682261),
    L = n(672979),
    j = n(90644),
    M = n(61330),
    k = n(960076),
    U = n(432166),
    G = n(360469),
    V = n(652215),
    F = n(985018),
    B = n(609535);

function H(e, t, n) {
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

function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}

function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = 40;
var q = (function (e) {
    return (
        (e.ACTIVITY_FEED = "ActivityFeed"), (e.STREAM_PREVIEW = "StreamPreview"), (e.VOICE_CHANNEL = "VoiceChannel"), e
    );
})({});
let X = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500],
    },
    Z = (0, _.A)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", {
                    className: B.timestamp,
                    children: this.props.message,
                });
            }
        },
    );

function Q(e) {
    let { activity: t } = e,
        n = null;
    return (
        (0, j.A)(t) && (n = V.fg2.SPOTIFY),
        null != t.platform && [V.yTV.PS4, V.yTV.PS5].includes(t.platform) && (n = V.fg2.PLAYSTATION),
        n
    );
}

function $(e) {
    let { activity: t } = e,
        n = (0, h.Ay)(),
        r = Q({
            activity: t,
        });
    if (null == r) return null;
    let a = m.A.get(r);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, f.qB)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: B.platformIcon,
    });
}
class J extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            (null == e ? void 0 : e.type) !== V.$pd.PLAYING &&
            (null == e ? void 0 : e.type) !== V.$pd.WATCHING &&
            (null == e ? void 0 : e.type) !== V.$pd.LISTENING &&
            (null == e ? void 0 : e.type) !== V.$pd.HANG_STATUS
            ? {
                  type: V.$pd.PLAYING,
                  name: F.intl.string(F.t.eXan7B),
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, P.t)(B, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            l = this.activity;
        if (n || null == l) return null;
        let { name: c } = l;
        switch (l.type) {
            case V.$pd.STREAMING:
                t = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [V.fg2.TWITCH, V.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : m.A.get(V.fg2.TWITCH).name,
                });
                break;
            case V.$pd.LISTENING:
                t = F.intl.formatToPlainString(F.t["5sYPnr"], {
                    name: c,
                });
                break;
            case V.$pd.WATCHING:
                t = F.intl.formatToPlainString(F.t.Ge29Zy, {
                    name: c,
                });
                break;
            case V.$pd.PLAYING:
                t = (0, D.A)(l);
                break;
            case V.$pd.COMPETING:
                t = F.intl.formatToPlainString(F.t.SQCo6D, {
                    name: c,
                });
        }
        if (null != r) {
            var f;
            t = (0, u.Lt)(null != (f = null == l ? void 0 : l.flags) ? f : 0, V.jUm.EMBEDDED)
                ? l.type === V.$pd.WATCHING
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
            (null == l ? void 0 : l.type) === V.$pd.HANG_STATUS && (t = F.intl.string(F.t["74vS/x"])),
            (0, i.jsxs)("div", {
                className: B.headerContainer,
                children: [
                    (0, i.jsx)(p.Heading, {
                        className: o()((0, P.t)(B, "headerText", e ? "EmptyBody" : "Normal")),
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: (0, i.jsx)(d.A, {
                            children: t,
                        }),
                    }),
                    null == s ? void 0 : s(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: B.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: m.A.get(V.fg2.XBOX).icon.customPNG,
                className: o()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        var t, n, r;
        let s,
            l,
            { user: c } = this.props;
        if (e.type === V.$pd.HANG_STATUS)
            return (0, i.jsx)("div", {
                className: B.assets,
                children: (0, i.jsx)(S.A, {
                    userId: c.id,
                    hangStatusActivity: e,
                    size: z,
                    className: o()(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: u } = this.props,
            { assets: d, application_id: f } = e;
        if (null == d || (null == d.large_image && null == d.small_image)) return null;
        (0, k.A)(e) && (s = X[u]);
        let _ = (0, j.A)(e),
            h =
                null != d.large_image
                    ? (0, i.jsx)("img", {
                          alt: null != (t = d.large_text) ? t : "",
                          src: (0, R.uD)(f, d.large_image, null != s ? s : [G.iu.LARGE, G.iu.LARGE]),
                          className: o()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? V.fg2.TWITCH : "",
                              ),
                              {
                                  [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != d.small_image,
                                  [B.assetsLargeImageSpotify]: _,
                              },
                          ),
                      })
                    : null;
        if (_)
            h = (0, i.jsx)(p.MzZ, {
                onClick: this.handleOpenSpotifyAlbum,
                children: h,
            });
        else if ((0, N.Cy)(e)) {
            let t = (0, N.UW)(e);
            if (null == t) return null;
            h = (0, i.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: G.iu.SMALL,
                height: G.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src:
                        null !=
                        (r = w.Ay.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: G.iu.SMALL,
                        }))
                            ? r
                            : void 0,
                    className: B.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (h = (0, i.jsxs)("div", {
                className: B.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(p.H, {
                                className: B.streamName,
                                children: e.name,
                            }),
                            (0, i.jsx)("div", {
                                className: B.streamGame,
                                children: F.intl.format(F.t.gmCZRY, {
                                    game: e.details,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.MzZ, {
                        className: B.twitchBackgroundImage,
                        href: e.url,
                        children: h,
                    }),
                ],
            })),
        (0, N.Cy)(e) ||
            null == d.small_image ||
            (l = (0, i.jsx)(p.STz, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: (e) => {
                    var t;
                    return (0, i.jsx)(
                        "img",
                        Y(
                            {
                                alt: null != (t = d.small_text) ? t : "",
                                src: (0, R.uD)(f, d.small_image, [G.iu.SMALL, G.iu.SMALL]),
                                className: this.getTypeClass(
                                    "assetsSmallImage",
                                    null == h ? "WithoutLargeImage" : void 0,
                                ),
                            },
                            e,
                        ),
                    );
                },
            })),
        null == h)
            ? (0, i.jsx)("div", {
                  className: B.assets,
                  children: l,
              })
            : (0, i.jsxs)("div", {
                  className: B.assets,
                  children: [
                      (0, i.jsx)(p.STz, {
                          text: null != d.large_text ? d.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != h
                                  ? a.cloneElement(h, {
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                    })
                                  : null;
                          },
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: r, activityGuild: a } = this.props;
        return null != e.assets || (0, x.A)(e) || e.type !== V.$pd.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == r && null != a
              ? (0, i.jsx)("div", {
                    className: o()(B.gameIcon, B.screenshareIcon),
                })
              : (0, i.jsx)(b.A, {
                    className: B.gameIcon,
                    game: r,
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: a, type: s } = e;
        if (s === V.$pd.CUSTOM_STATUS) return null;
        let l = (0, L.A)(e),
            c = e.name,
            u = c;
        return (s === V.$pd.HANG_STATUS
            ? (u = (0, v.Au)(t.id, e))
            : l && null != n
              ? (u = (0, i.jsx)("span", {
                    className: B.activityName,
                    children: u,
                }))
              : !l &&
                ((c = a),
                (u = a),
                (0, j.A)(e) && null != e.sync_id && null != a
                    ? (u = (0, i.jsx)(p.MzZ, {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: a,
                      }))
                    : (0, N.Cy)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(p.Text, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: o()((0, P.t)(B, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: a } = this.props,
            s = n,
            o = n;
        if (e.type === V.$pd.CUSTOM_STATUS) s = r;
        else if (e.type === V.$pd.HANG_STATUS && null != a)
            (s = F.intl.formatToPlainString(F.t.IAZiW2, {
                guildName: a.name,
            })),
                (t = () => {
                    (0, T.u)(a.id);
                });
        else if (!(0, L.A)(e)) {
            if (((s = r), (o = r), (0, j.A)(e) && null != r)) {
                let t = (t, n) =>
                    (0, i.jsx)(
                        C.A,
                        {
                            artists: r,
                            linkClassName: B.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                s = F.intl.format(F.t.uU9le8, {
                    artists: o,
                    artistsHook: t,
                });
            } else if ((0, N.Cy)(e)) {
                var l;
                s = null == (l = e.assets) ? void 0 : l.small_text;
            }
        }
        return null == s || "" === s
            ? null
            : ((0, k.A)(e) &&
                    (s = F.intl.formatToPlainString(F.t.gmCZRY, {
                        game: s,
                    })),
                null != t)
              ? (0, i.jsx)(p.DUT, {
                    onClick: t,
                    title: null != o ? o : void 0,
                    className: B.clickableDetails,
                    children: s,
                })
              : (0, i.jsx)("div", {
                    title: null != o ? o : void 0,
                    className: (0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details,
                    children: s,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)("div", {
                      className: (0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details,
                      children: F.intl.format(F.t["hq/Qze"], {
                          guildName: t.name,
                      }),
                  })
                : (0, i.jsxs)("div", {
                      className: o()((0, k.A)(e) || (0, j.A)(e) ? B.detailsWrap : B.details, B.guildDetails),
                      children: [
                          (0, i.jsx)(A.A, {
                              guild: t,
                              size: A.A.Sizes.SMOL,
                              className: B.guildIcon,
                          }),
                          (0, i.jsx)(p._BQ, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, i.jsxs)("div", {
                              className: B.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(p.HKD, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  (0, i.jsx)(p.Text, {
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
        if (!(0, L.A)(e) || (0, j.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, x.A)(e)
              ? (0, i.jsx)(Z, {
                    timestamps: n,
                })
              : (0, i.jsx)(I.Ay, {
                    start: n.start,
                    location: I.Ay.Locations.USER_ACTIVITY,
                    className: B.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, j.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, i.jsx)(U.A, {
                  start: n,
                  end: r,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        var n, r;
        let a,
            { state: s, party: o, assets: l } = e,
            c = s,
            u = s;
        if (
            !(0, L.A)(e) &&
            ((c = null == l ? void 0 : l.large_text), (u = null == l ? void 0 : l.large_text), (0, j.A)(e) && null != c)
        ) {
            let t = (t, n) =>
                null != e.sync_id && null != u
                    ? (0, i.jsx)(
                          p.MzZ,
                          {
                              className: B.bodyLink,
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
        return (null != c && "" !== c && e.type !== V.$pd.CUSTOM_STATUS) || (0, N.Cy)(e)
            ? ((null == o ? void 0 : o.size) == null && [G.I4].includes(null != (n = e.application_id) ? n : "")
                  ? (a = F.intl.formatToPlainString(F.t["u//9By"], {
                        count: "0",
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0,
                    }))
                  : (0, N.Cy)(e) && (null == o ? void 0 : o.size) != null
                    ? (a = F.intl.formatToPlainString(F.t["JC/3xw"], {
                          numSpeakers: o.size[0],
                          numListeners: o.size[1] - o.size[0],
                      }))
                    : (null == o ? void 0 : o.size) != null &&
                      o.size.length >= 2 &&
                      (a =
                          0 === o.size[1]
                              ? F.intl.formatToPlainString(F.t.IM4J4e, {
                                    count: o.size[0],
                                })
                              : F.intl.formatToPlainString(F.t["u//9By"], {
                                    count: o.size[0],
                                    max: o.size[1],
                                })),
              (0, i.jsxs)("div", {
                  className: B.state,
                  children: [
                      (0, i.jsx)("span", {
                          title: u,
                          children: c,
                      }),
                      null != a
                          ? (0, i.jsxs)("span", {
                                children: [" ", a],
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
                application: a,
                onClose: s,
                onOpenGameProfileModal: l,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === V.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            d = "StreamPreview" === t,
            f = !1;
        (0, M.A)(c)
            ? ((e = this.renderXboxImage()), (f = !0))
            : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
        let _ = this.renderName(c),
            h = this.renderDetails(c),
            m = this.renderState(c, a),
            E = this.renderTimePlayed(c),
            b = this.renderChannelDetails(c),
            y = null != n ? n() : null,
            O = this.renderTimeBar(c),
            A = ![e, _, h, m, E, O, y].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: o()(this.getTypeClass("activity"), r),
            children: [
                this.renderHeader(A),
                (0, i.jsx)("div", {
                    className: o()(f ? B.bodyAlignCenter : B.bodyNormal),
                    children: (0, i.jsxs)("div", {
                        className: B.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(g.A.Child, {
                                      className: o()(
                                          (0, P.t)(
                                              B,
                                              "content",
                                              f ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(p.DUT, {
                                              className: o()(null != l && B.openGameProfile),
                                              onClick:
                                                  null != l
                                                      ? (e) => {
                                                            l(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [_, h, m, E],
                                          }),
                                          b,
                                          d ? null : O,
                                          u ? y : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                d ? y : null,
                (0, i.jsx)($, {
                    activity: c,
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            H(this, "handleOpenSpotifyTrack", () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            H(this, "handleOpenSpotifyArtist", (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                c()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e);
            }),
            H(this, "handleOpenSpotifyAlbum", () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e, n.id);
            });
    }
}
H(J, "Types", q);
let ee = (e) => {
    var t, n, r;
    let a = (0, O.A)({
        location: "UserActivity",
        applicationId:
            null != (t = null == (n = e.application) ? void 0 : n.id)
                ? t
                : null == (r = e.activity)
                  ? void 0
                  : r.application_id,
        source: y.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(
        J,
        K(Y({}, e), {
            onOpenGameProfileModal: a,
        }),
    );
};
ee.Types = q;
let et = ee;
