n.d(t, {
    Y: () => K,
    Z: () => ee,
}),
    n(997841),
    n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    c = n.n(l),
    u = n(780384),
    d = n(481060),
    f = n(438139),
    _ = n(410030),
    p = n(726542),
    h = n(600164),
    m = n(686546),
    g = n(111028),
    E = n(925329),
    b = n(810568),
    y = n(168524),
    O = n(565138),
    v = n(833858),
    I = n(223135),
    T = n(707409),
    S = n(769654),
    A = n(424678),
    C = n(750154),
    N = n(81063),
    R = n(768581),
    P = n(630388),
    w = n(153066),
    D = n(740265),
    x = n(122810),
    L = n(833664),
    j = n(503438),
    M = n(802856),
    k = n(420660),
    U = n(39628),
    G = n(701488),
    B = n(981631),
    Z = n(388032),
    V = n(206733);
function F(e, t, n) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var K = (function (e) {
    return (
        (e.ACTIVITY_FEED = "ActivityFeed"), (e.STREAM_PREVIEW = "StreamPreview"), (e.VOICE_CHANNEL = "VoiceChannel"), e
    );
})({});
let z = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500],
    },
    q = (0, f.Z)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", {
                    className: V.timestamp,
                    children: this.props.message,
                });
            }
        },
    );
function X(e) {
    let { activity: t } = e,
        n = null;
    return (
        (0, j.Z)(t) && (n = B.ABu.SPOTIFY),
        null != t.platform && [B.M7m.PS4, B.M7m.PS5].includes(t.platform) && (n = B.ABu.PLAYSTATION),
        n
    );
}
function Q(e) {
    let { activity: t } = e,
        n = (0, _.ZP)(),
        r = X({ activity: t });
    if (null == r) return null;
    let a = p.Z.get(r);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, u.ap)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: V.platformIcon,
    });
}
class J extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            (null == e ? void 0 : e.type) !== B.IIU.PLAYING &&
            (null == e ? void 0 : e.type) !== B.IIU.WATCHING &&
            (null == e ? void 0 : e.type) !== B.IIU.LISTENING &&
            (null == e ? void 0 : e.type) !== B.IIU.HANG_STATUS
            ? {
                  type: B.IIU.PLAYING,
                  name: Z.intl.string(Z.t.eXan7O),
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.l)(V, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.Z)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: a, renderHeaderAccessory: o } = this.props,
            l = this.activity;
        if (n || null == l) return null;
        let { name: c } = l;
        switch (l.type) {
            case B.IIU.STREAMING:
                t = Z.intl.formatToPlainString(Z.t.Dzgz4u, {
                    platform: [B.ABu.TWITCH, B.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : p.Z.get(B.ABu.TWITCH).name,
                });
                break;
            case B.IIU.LISTENING:
                t = Z.intl.formatToPlainString(Z.t["5sYPnp"], { name: c });
                break;
            case B.IIU.WATCHING:
                t = Z.intl.formatToPlainString(Z.t.Ge29Z2, { name: c });
                break;
            case B.IIU.PLAYING:
                t = (0, D.Z)(l);
                break;
            case B.IIU.COMPETING:
                t = Z.intl.formatToPlainString(Z.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, P.yE)(null != (u = null == l ? void 0 : l.flags) ? u : 0, B.xjy.EMBEDDED)
                ? l.type === B.IIU.WATCHING
                    ? Z.intl.formatToPlainString(Z.t["M/L8oq"], { guildName: r.name })
                    : Z.intl.formatToPlainString(Z.t["4chKQk"], { guildName: r.name })
                : Z.intl.formatToPlainString(Z.t.sddlGB, { server: r.name });
        }
        return (
            (null == l ? void 0 : l.type) === B.IIU.HANG_STATUS && (t = Z.intl.string(Z.t["74vS//"])),
            (0, i.jsxs)("div", {
                className: V.headerContainer,
                children: [
                    (0, i.jsx)(d.X6q, {
                        className: s()((0, w.l)(V, "headerText", e ? "EmptyBody" : "Normal")),
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: (0, i.jsx)(g.Z, { children: t }),
                    }),
                    null == o ? void 0 : o(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: V.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: p.Z.get(B.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        var t, n, r;
        let o, l;
        if (e.type === B.IIU.HANG_STATUS)
            return (0, i.jsx)("div", {
                className: V.assets,
                children: (0, i.jsx)(I.Z, {
                    hangStatusActivity: e,
                    className: s()(V.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: c } = this.props,
            { assets: u, application_id: f } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, k.Z)(e) && (o = z[c]);
        let _ = (0, j.Z)(e),
            p =
                null != u.large_image
                    ? (0, i.jsx)("img", {
                          alt: null != (t = u.large_text) ? t : "",
                          src: (0, N.xF)(f, u.large_image, null != o ? o : [G.Si.LARGE, G.Si.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? B.ABu.TWITCH : "",
                              ),
                              {
                                  [null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != u.small_image,
                                  [V.assetsLargeImageSpotify]: _,
                              },
                          ),
                      })
                    : null;
        if (_)
            p = (0, i.jsx)(d.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p,
            });
        else if ((0, C.dS)(e)) {
            let t = (0, C.rq)(e);
            if (null == t) return null;
            p = (0, i.jsx)(m.ZP, {
                mask: m.ZP.Masks.SQUIRCLE,
                width: G.Si.SMALL,
                height: G.Si.SMALL,
                children: (0, i.jsx)("img", {
                    src:
                        null !=
                        (r = R.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: u.small_image,
                            size: G.Si.SMALL,
                        }))
                            ? r
                            : void 0,
                    className: V.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (p = (0, i.jsxs)("div", {
                className: V.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: V.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(d.H, {
                                className: V.streamName,
                                children: e.name,
                            }),
                            (0, i.jsx)("div", {
                                className: V.streamGame,
                                children: Z.intl.format(Z.t.gmCZRU, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(d.eee, {
                        className: V.twitchBackgroundImage,
                        href: e.url,
                        children: p,
                    }),
                ],
            })),
        (0, C.dS)(e) ||
            null == u.small_image ||
            (l = (0, i.jsx)(d.ua7, {
                text: "" !== u.small_text ? u.small_text : null,
                position: "top",
                children: (e) => {
                    var t;
                    return (0, i.jsx)(
                        "img",
                        H(
                            {
                                alt: null != (t = u.small_text) ? t : "",
                                src: (0, N.xF)(f, u.small_image, [G.Si.SMALL, G.Si.SMALL]),
                                className: this.getTypeClass(
                                    "assetsSmallImage",
                                    null == p ? "WithoutLargeImage" : void 0,
                                ),
                            },
                            e,
                        ),
                    );
                },
            })),
        null == p)
            ? (0, i.jsx)("div", {
                  className: V.assets,
                  children: l,
              })
            : (0, i.jsxs)("div", {
                  className: V.assets,
                  children: [
                      (0, i.jsx)(d.ua7, {
                          text: null != u.large_text ? u.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != p
                                  ? a.cloneElement(p, {
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
        return null != e.assets || (0, x.Z)(e) || e.type !== B.IIU.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == r && null != a
              ? (0, i.jsx)("div", { className: s()(V.gameIcon, V.screenshareIcon) })
              : (0, i.jsx)(E.Z, {
                    className: V.gameIcon,
                    game: r,
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: a, type: o } = e;
        if (o === B.IIU.CUSTOM_STATUS) return null;
        let l = (0, L.Z)(e),
            c = e.name,
            u = c;
        return (o === B.IIU.HANG_STATUS
            ? (u = (0, v.O8)(e))
            : l && null != n
              ? (u = (0, i.jsx)("span", {
                    className: V.activityName,
                    children: u,
                }))
              : !l &&
                ((c = a),
                (u = a),
                (0, j.Z)(e) && null != e.sync_id && null != a
                    ? (u = (0, i.jsx)(d.eee, {
                          className: V.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: a,
                      }))
                    : (0, C.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(d.Text, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: s()((0, w.l)(V, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            { activityGuild: a } = this.props,
            o = n,
            s = n;
        if (e.type === B.IIU.CUSTOM_STATUS) o = r;
        else if (e.type === B.IIU.HANG_STATUS && null != a)
            (o = Z.intl.formatToPlainString(Z.t.IAZiW1, { guildName: a.name })),
                (t = () => {
                    (0, S.X)(a.id);
                });
        else if (!(0, L.Z)(e)) {
            if (((o = r), (s = r), (0, j.Z)(e) && null != r)) {
                let t = (t, n) =>
                    (0, i.jsx)(
                        A.Z,
                        {
                            artists: r,
                            linkClassName: V.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                o = Z.intl.format(Z.t.uU9le3, {
                    artists: s,
                    artistsHook: t,
                });
            } else if ((0, C.dS)(e)) {
                var l;
                o = null == (l = e.assets) ? void 0 : l.small_text;
            }
        }
        return null == o || "" === o
            ? null
            : ((0, k.Z)(e) && (o = Z.intl.formatToPlainString(Z.t.gmCZRU, { game: o })), null != t)
              ? (0, i.jsx)(d.P3F, {
                    onClick: t,
                    title: null != s ? s : void 0,
                    className: V.clickableDetails,
                    children: o,
                })
              : (0, i.jsx)("div", {
                    title: null != s ? s : void 0,
                    className: (0, k.Z)(e) || (0, j.Z)(e) ? V.detailsWrap : V.details,
                    children: o,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)("div", {
                      className: (0, k.Z)(e) || (0, j.Z)(e) ? V.detailsWrap : V.details,
                      children: Z.intl.format(Z.t["hq/Qzc"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: s()((0, k.Z)(e) || (0, j.Z)(e) ? V.detailsWrap : V.details, V.guildDetails),
                      children: [
                          (0, i.jsx)(O.Z, {
                              guild: t,
                              size: O.Z.Sizes.SMOL,
                              className: V.guildIcon,
                          }),
                          (0, i.jsx)(d.Fbu, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, i.jsxs)("div", {
                              className: V.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(d.gj8, {
                                      size: "xxs",
                                      color: "currentColor",
                                  }),
                                  (0, i.jsx)(d.Text, {
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
        if (!(0, L.Z)(e) || (0, j.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, x.Z)(e)
              ? (0, i.jsx)(q, { timestamps: n })
              : (0, i.jsx)(T.ZP, {
                    start: n.start,
                    location: T.ZP.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, j.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, i.jsx)(U.Z, {
                  start: n,
                  end: r,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        var n, r;
        let a,
            { state: o, party: s, assets: l } = e,
            c = o,
            u = o;
        if (
            !(0, L.Z)(e) &&
            ((c = null == l ? void 0 : l.large_text), (u = null == l ? void 0 : l.large_text), (0, j.Z)(e) && null != c)
        ) {
            let t = (t, n) =>
                null != e.sync_id && null != u
                    ? (0, i.jsx)(
                          d.eee,
                          {
                              className: V.bodyLink,
                              onClick: this.handleOpenSpotifyAlbum,
                              children: u,
                          },
                          n,
                      )
                    : u;
            c = Z.intl.format(Z.t.vOLBEx, {
                album: u,
                albumHook: t,
            });
        }
        return (null != c && "" !== c && e.type !== B.IIU.CUSTOM_STATUS) || (0, C.dS)(e)
            ? ((null == s ? void 0 : s.size) == null && [G.Zc].includes(null != (n = e.application_id) ? n : "")
                  ? (a = Z.intl.formatToPlainString(Z.t["u//9Bw"], {
                        count: "0",
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0,
                    }))
                  : (0, C.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (a = Z.intl.formatToPlainString(Z.t["JC/3x8"], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0],
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (a =
                          0 === s.size[1]
                              ? Z.intl.formatToPlainString(Z.t.IM4J4e, { count: s.size[0] })
                              : Z.intl.formatToPlainString(Z.t["u//9Bw"], {
                                    count: s.size[0],
                                    max: s.size[1],
                                })),
              (0, i.jsxs)("div", {
                  className: V.state,
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
                onClose: o,
                onOpenGameProfileModal: l,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === B.IIU.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            f = "StreamPreview" === t,
            _ = !1;
        (0, M.Z)(c)
            ? ((e = this.renderXboxImage()), (_ = !0))
            : null == (e = this.renderImage(c)) && (_ = null != (e = this.renderGameImage(c)));
        let p = this.renderName(c),
            m = this.renderDetails(c),
            g = this.renderState(c, a),
            E = this.renderTimePlayed(c),
            b = this.renderChannelDetails(c),
            y = null != n ? n() : null,
            O = this.renderTimeBar(c),
            v = ![e, p, m, g, E, O, y].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), r),
            children: [
                this.renderHeader(v),
                (0, i.jsx)("div", {
                    className: s()(_ ? V.bodyAlignCenter : V.bodyNormal),
                    children: (0, i.jsxs)("div", {
                        className: V.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(h.Z.Child, {
                                      className: s()(
                                          (0, w.l)(
                                              V,
                                              "content",
                                              _ ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(d.P3F, {
                                              className: s()(null != l && V.openGameProfile),
                                              onClick:
                                                  null != l
                                                      ? (e) => {
                                                            l(e), null == o || o();
                                                        }
                                                      : void 0,
                                              children: [p, m, g, E],
                                          }),
                                          b,
                                          f ? null : O,
                                          u ? y : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                f ? y : null,
                (0, i.jsx)(Q, { activity: c }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            F(this, "handleOpenSpotifyTrack", () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e);
            }),
            F(this, "handleOpenSpotifyArtist", (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                c()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e);
            }),
            F(this, "handleOpenSpotifyAlbum", () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                c()(null != e, "Spotify activity was null"), null == t || t(e, n.id);
            });
    }
}
F(J, "Types", K);
let $ = (e) => {
    var t, n, r;
    let a = (0, y.Z)({
        location: "UserActivity",
        applicationId:
            null != (r = null == (t = e.application) ? void 0 : t.id)
                ? r
                : null == (n = e.activity)
                  ? void 0
                  : n.application_id,
        source: b.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(J, W(H({}, e), { onOpenGameProfileModal: a }));
};
$.Types = K;
let ee = $;
