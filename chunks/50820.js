l.d(t, { A: () => en, O: () => Q }), l(938796);
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    c = l(284009),
    o = l.n(c),
    d = l(665260),
    u = l(780645),
    m = l(990078),
    A = l(462887),
    h = l(534514),
    p = l(349288),
    x = l(707554),
    g = l(834730),
    y = l(939249),
    f = l(320448),
    v = l(983851),
    j = l(492684),
    N = l(736653),
    T = l(573648),
    I = l(47167),
    S = l(235986),
    C = l(573435),
    _ = l(137177),
    E = l(409626),
    P = l(692969),
    b = l(548118),
    L = l(804630),
    O = l(529433),
    G = l(763758),
    k = l(82149),
    z = l(994500),
    D = l(287809),
    M = l(970928),
    V = l(486020),
    U = l(821589),
    W = l(682261),
    w = l(672979),
    R = l(90644),
    $ = l(61330),
    H = l(960076),
    Y = l(855511),
    F = l(652215),
    B = l(375708),
    X = l(432166),
    J = l(360469),
    K = l(514146),
    Q =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let q = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    Z = (0, j.A)(
        class extends s.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: K.timestamp, children: this.props.message });
            }
        },
    );
function ee(e) {
    let { activity: t } = e,
        l = (0, N.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                l = null;
            return (
                (0, R.A)(t) && (l = F.fg2.SPOTIFY),
                null != t.platform && [F.yTV.PS4, F.yTV.PS5].includes(t.platform) && (l = F.fg2.PLAYSTATION),
                l
            );
        })({ activity: t });
    if (null == n) return null;
    let s = T.A.get(n);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, A.q)(l) ? s.icon.lightSVG : s.icon.darkSVG,
        className: K.platformIcon,
    });
}
class et extends s.PureComponent {
    static Types = Q;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== F.$pd.PLAYING &&
            e?.type !== F.$pd.WATCHING &&
            e?.type !== F.$pd.LISTENING &&
            e?.type !== F.$pd.HANG_STATUS
            ? { type: F.$pd.PLAYING, name: B.intl.string(B.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, U.t)(K, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, H.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: l, activityGuild: n, showChannelDetails: s, renderHeaderAccessory: a } = this.props,
            r = this.activity;
        if (l || null == r) return null;
        let { name: c } = r;
        switch (r.type) {
            case F.$pd.STREAMING:
                t = B.intl.formatToPlainString(B.t.Dzgz4u, {
                    platform: [F.fg2.TWITCH, F.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : T.A.get(F.fg2.TWITCH).name,
                });
                break;
            case F.$pd.LISTENING:
                t = B.intl.formatToPlainString(B.t["5sYPnr"], { name: c });
                break;
            case F.$pd.WATCHING:
                t = B.intl.formatToPlainString(B.t.Ge29Zy, { name: c });
                break;
            case F.$pd.PLAYING:
                t = (function (e) {
                    let t = (0, Y.A)(e) ?? "";
                    switch (t) {
                        case F.yTV.PS4:
                        case F.yTV.PS5:
                            return B.intl.formatToPlainString(B.t.A17aM8, { platform: t.toUpperCase() });
                        case F.yTV.XBOX:
                        case F.yTV.SAMSUNG:
                            return B.intl.formatToPlainString(B.t.A17aM8, { platform: T.A.get(t).name });
                        default:
                            return B.intl.string(B.t["2TbM/G"]);
                    }
                })(r);
                break;
            case F.$pd.COMPETING:
                t = B.intl.formatToPlainString(B.t.SQCo6D, { name: c });
        }
        return (
            null != n &&
                (t = (0, d.Lt)(r?.flags ?? 0, F.jUm.EMBEDDED)
                    ? r.type === F.$pd.WATCHING
                        ? B.intl.formatToPlainString(B.t["M/L8ot"], { guildName: n.name })
                        : B.intl.formatToPlainString(B.t["4chKQu"], { guildName: n.name })
                    : B.intl.formatToPlainString(B.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: K.headerContainer,
                children: [
                    (0, i.jsx)(h.D, {
                        className: e ? K.headerTextEmptyBody : K.headerTextNormal,
                        variant: s ? "text-xs/semibold" : "eyebrow",
                        children: (0, i.jsx)(u.A, { children: t }),
                    }),
                    a?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: K.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: T.A.get(F.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: s, application_id: a } = e;
        if (null == s || (null == s.large_image && null == s.small_image)) return null;
        (0, H.A)(e) && (t = q[n]);
        let c = (0, R.A)(e),
            o =
                null != s.large_image
                    ? (0, i.jsx)("img", {
                          alt: s.large_text ?? "",
                          src: (0, M.uD)(a, s.large_image, t ?? [J.iu.LARGE, J.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? F.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != s.small_image,
                                  [K.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) o = (0, i.jsx)(p.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: o });
        else if ((0, k.Cy)(e)) {
            let t = (0, k.UW)(e);
            if (null == t) return null;
            o = (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: J.iu.SMALL,
                height: J.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: V.Ay.getGuildIconURL({ id: t.guildId, icon: s.small_image, size: J.iu.SMALL }) ?? void 0,
                    className: K.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (o = (0, i.jsxs)("div", {
                className: K.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: K.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(x.H, { className: K.streamName, children: e.name }),
                            (0, i.jsx)("div", {
                                className: K.streamGame,
                                children: B.intl.format(B.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.Anchor, { className: K.twitchBackgroundImage, href: e.url, children: o }),
                ],
            })),
        (0, k.Cy)(e) ||
            null == s.small_image ||
            (l = (0, i.jsx)(m.m, {
                text: "" !== s.small_text ? s.small_text : null,
                position: "top",
                children: (0, i.jsx)("img", {
                    alt: s.small_text ?? "",
                    src: (0, M.uD)(a, s.small_image, [J.iu.SMALL, J.iu.SMALL]),
                    className: this.getTypeClass("assetsSmallImage", null == o ? "WithoutLargeImage" : void 0),
                }),
            })),
        null == o)
            ? (0, i.jsx)("div", { className: K.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: K.assets,
                  children: [
                      (0, i.jsx)(m.m, {
                          text: null != s.large_text ? s.large_text : null,
                          position: "top",
                          children: o,
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: s } = this.props;
        return null != e.assets || (0, W.A)(e) || e.type !== F.$pd.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != s
              ? (0, i.jsx)("div", { className: r()(K.gameIcon, K.screenshareIcon) })
              : (0, i.jsx)(_.A, { className: K.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: s, type: a } = e;
        if (a === F.$pd.CUSTOM_STATUS) return null;
        let c = (0, w.A)(e),
            o = e.name,
            d = o;
        return (c && null != l
            ? (d = (0, i.jsx)("span", { className: K.activityName, children: d }))
            : !c &&
              ((o = s),
              (d = s),
              (0, R.A)(e) && null != e.sync_id && null != s
                  ? (d = (0, i.jsx)(p.Anchor, {
                        className: K.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: s,
                    }))
                  : (0, k.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, i.jsx)(g.E, {
                  title: o,
                  variant: "text-sm/semibold",
                  className: r()((0, U.t)(K, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: l, state: n } = e,
            s = l,
            a = l;
        if (e.type === F.$pd.CUSTOM_STATUS) s = n;
        else if (!(0, w.A)(e))
            if (((s = n), (a = n), (0, R.A)(e) && null != n)) {
                let t = (t, l) =>
                    (0, i.jsx)(
                        G.A,
                        {
                            artists: n,
                            linkClassName: K.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        l,
                    );
                s = B.intl.format(B.t.uU9le8, { artists: a, artistsHook: t });
            } else (0, k.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, H.A)(e) && (s = B.intl.formatToPlainString(B.t.gmCZRY, { game: s })), null != t)
              ? (0, i.jsx)(y.D, { onClick: t, title: a ?? void 0, className: K.clickableDetails, children: s })
              : (0, i.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, H.A)(e) || (0, R.A)(e) ? K.detailsWrap : K.details,
                    children: s,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, H.A)(e) || (0, R.A)(e) ? K.detailsWrap : K.details,
                      children: B.intl.format(B.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, H.A)(e) || (0, R.A)(e) ? K.detailsWrap : K.details, K.guildDetails),
                      children: [
                          (0, i.jsx)(b.Ay, { guild: t, size: b.Ay.Sizes.SMOL, className: K.guildIcon }),
                          (0, i.jsx)(f._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: K.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(v.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(g.E, {
                                      variant: "text-xs/normal",
                                      children: (0, I.m1)(n, D.default, z.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, w.A)(e) || (0, R.A)(e)) return null;
        let { timestamps: l } = e;
        return null == l
            ? null
            : (0, W.A)(e)
              ? (0, i.jsx)(Z, { timestamps: l })
              : (0, i.jsx)(O.Ay, {
                    start: l.start,
                    location: O.Ay.Locations.USER_ACTIVITY,
                    className: K.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, R.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: l, end: n } = t;
        return null == l || null == n
            ? null
            : (0, i.jsx)(X.A, {
                  start: l,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let l,
            { state: n, party: s, assets: a } = e,
            r = n,
            c = n;
        if (!(0, w.A)(e) && ((r = a?.large_text), (c = a?.large_text), (0, R.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          p.Anchor,
                          { className: K.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = B.intl.format(B.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== F.$pd.CUSTOM_STATUS) || (0, k.Cy)(e)
            ? (s?.size == null && [J.I4].includes(e.application_id ?? "")
                  ? (l = B.intl.formatToPlainString(B.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, k.Cy)(e) && s?.size != null
                    ? (l = B.intl.formatToPlainString(B.t["JC/3xw"], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0],
                      }))
                    : s?.size != null &&
                      s.size.length >= 2 &&
                      (l =
                          0 === s.size[1]
                              ? B.intl.formatToPlainString(B.t.IM4J4e, { count: s.size[0] })
                              : B.intl.formatToPlainString(B.t["u//9By"], { count: s.size[0], max: s.size[1] })),
              (0, i.jsxs)("div", {
                  className: K.state,
                  children: [
                      (0, i.jsx)("span", { title: c, children: r }),
                      null != l ? (0, i.jsxs)("span", { children: [" ", l] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: l,
                className: n,
                application: s,
                onClose: a,
                onOpenGameProfileModal: c,
            } = this.props,
            o = this.activity;
        if (null == o || o.type === F.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            m = !1;
        if ((0, $.A)(o)) (e = this.renderXboxImage()), (m = !0);
        else {
            let t = (0, L.Gf)(this.props.user.id, o ?? void 0);
            t.isSpotify || (e = (0, i.jsx)(L.Tf, { resolvedActivity: t })),
                null == e && (m = null != (e = this.renderGameImage(o)));
        }
        let A = this.renderName(o),
            h = this.renderDetails(o),
            p = this.renderState(o, s),
            x = this.renderTimePlayed(o),
            g = this.renderChannelDetails(o),
            f = null != l ? l() : null,
            v = this.renderTimeBar(o),
            j = ![e, A, h, p, x, v, f].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(j),
                (0, i.jsx)("div", {
                    className: m ? K.bodyAlignCenter : K.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: K.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(S.A.Child, {
                                      className: r()(
                                          (0, U.t)(
                                              K,
                                              "content",
                                              m ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(y.D, {
                                              className: r()(null != c && K.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), a?.();
                                                        }
                                                      : void 0,
                                              children: [A, h, p, x],
                                          }),
                                          g,
                                          u ? null : v,
                                          d ? f : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                u ? f : null,
                (0, i.jsx)(ee, { activity: o }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: e, onOpenSpotifyTrack: t } = this.props;
        o()(null != e, "Spotify activity was null"), t?.(e);
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: l, user: n } = this.props;
        o()(null != t, "Spotify activity was null"), l?.(t, n.id, e);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: l } = this.props;
        o()(null != e, "Spotify activity was null"), t?.(e, l.id);
    };
}
let el = (e) => {
    let t = (0, P.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(et, { ...e, onOpenGameProfileModal: t });
};
el.Types = Q;
let en = el;
