l.d(t, { A: () => en, O: () => Z }), l(938796);
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    r = l.n(s),
    c = l(284009),
    o = l.n(c),
    u = l(665260),
    d = l(3026),
    m = l(462887),
    A = l(534514),
    p = l(349288),
    h = l(707554),
    g = l(781696),
    x = l(834730),
    y = l(939249),
    f = l(320448),
    v = l(983851),
    S = l(492684),
    j = l(736653),
    T = l(573648),
    N = l(47167),
    I = l(235986),
    C = l(573435),
    b = l(137177),
    E = l(409626),
    _ = l(692969),
    P = l(548118),
    O = l(804630),
    L = l(290987),
    R = l(763758),
    G = l(82149),
    k = l(994500),
    M = l(287809),
    V = l(970928),
    w = l(486020),
    U = l(821589),
    z = l(682261),
    D = l(672979),
    W = l(90644),
    $ = l(61330),
    q = l(960076),
    F = l(855511),
    B = l(652215),
    H = l(985018),
    Y = l(432166),
    X = l(360469),
    J = l(514146),
    Z =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let Q = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    K = (0, S.A)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: J.timestamp, children: this.props.message });
            }
        },
    );
function ee(e) {
    let { activity: t } = e,
        l = (0, j.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                l = null;
            return (
                (0, W.A)(t) && (l = B.fg2.SPOTIFY),
                null != t.platform && [B.yTV.PS4, B.yTV.PS5].includes(t.platform) && (l = B.fg2.PLAYSTATION),
                l
            );
        })({ activity: t });
    if (null == n) return null;
    let a = T.A.get(n);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, m.q)(l) ? a.icon.lightSVG : a.icon.darkSVG,
        className: J.platformIcon,
    });
}
class et extends a.PureComponent {
    static Types = Z;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== B.$pd.PLAYING &&
            e?.type !== B.$pd.WATCHING &&
            e?.type !== B.$pd.LISTENING &&
            e?.type !== B.$pd.HANG_STATUS
            ? { type: B.$pd.PLAYING, name: H.intl.string(H.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, U.t)(J, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, q.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: l, activityGuild: n, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            r = this.activity;
        if (l || null == r) return null;
        let { name: c } = r;
        switch (r.type) {
            case B.$pd.STREAMING:
                t = H.intl.formatToPlainString(H.t.Dzgz4u, {
                    platform: [B.fg2.TWITCH, B.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : T.A.get(B.fg2.TWITCH).name,
                });
                break;
            case B.$pd.LISTENING:
                t = H.intl.formatToPlainString(H.t["5sYPnr"], { name: c });
                break;
            case B.$pd.WATCHING:
                t = H.intl.formatToPlainString(H.t.Ge29Zy, { name: c });
                break;
            case B.$pd.PLAYING:
                t = (function (e) {
                    let t = (0, F.A)(e) ?? "";
                    switch (t) {
                        case B.yTV.PS4:
                        case B.yTV.PS5:
                            return H.intl.formatToPlainString(H.t.A17aM8, { platform: t.toUpperCase() });
                        case B.yTV.XBOX:
                        case B.yTV.SAMSUNG:
                            return H.intl.formatToPlainString(H.t.A17aM8, { platform: T.A.get(t).name });
                        default:
                            return H.intl.string(H.t["2TbM/G"]);
                    }
                })(r);
                break;
            case B.$pd.COMPETING:
                t = H.intl.formatToPlainString(H.t.SQCo6D, { name: c });
        }
        return (
            null != n &&
                (t = (0, u.Lt)(r?.flags ?? 0, B.jUm.EMBEDDED)
                    ? r.type === B.$pd.WATCHING
                        ? H.intl.formatToPlainString(H.t["M/L8ot"], { guildName: n.name })
                        : H.intl.formatToPlainString(H.t["4chKQu"], { guildName: n.name })
                    : H.intl.formatToPlainString(H.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: J.headerContainer,
                children: [
                    (0, i.jsx)(A.D, {
                        className: e ? J.headerTextEmptyBody : J.headerTextNormal,
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: (0, i.jsx)(d.A, { children: t }),
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: J.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: T.A.get(B.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: s, application_id: c } = e;
        if (null == s || (null == s.large_image && null == s.small_image)) return null;
        (0, q.A)(e) && (t = Q[n]);
        let o = (0, W.A)(e),
            u =
                null != s.large_image
                    ? (0, i.jsx)("img", {
                          alt: s.large_text ?? "",
                          src: (0, V.uD)(c, s.large_image, t ?? [X.iu.LARGE, X.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? B.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != s.small_image,
                                  [J.assetsLargeImageSpotify]: o,
                              },
                          ),
                      })
                    : null;
        if (o) u = (0, i.jsx)(p.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: u });
        else if ((0, G.Cy)(e)) {
            let t = (0, G.UW)(e);
            if (null == t) return null;
            u = (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: X.iu.SMALL,
                height: X.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: w.Ay.getGuildIconURL({ id: t.guildId, icon: s.small_image, size: X.iu.SMALL }) ?? void 0,
                    className: J.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (u = (0, i.jsxs)("div", {
                className: J.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: J.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(h.H, { className: J.streamName, children: e.name }),
                            (0, i.jsx)("div", {
                                className: J.streamGame,
                                children: H.intl.format(H.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.Anchor, { className: J.twitchBackgroundImage, href: e.url, children: u }),
                ],
            })),
        (0, G.Cy)(e) ||
            null == s.small_image ||
            (l = (0, i.jsx)(g.ST, {
                text: "" !== s.small_text ? s.small_text : null,
                position: "top",
                children: (e) =>
                    (0, i.jsx)("img", {
                        alt: s.small_text ?? "",
                        src: (0, V.uD)(c, s.small_image, [X.iu.SMALL, X.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == u ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == u)
            ? (0, i.jsx)("div", { className: J.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: J.assets,
                  children: [
                      (0, i.jsx)(g.ST, {
                          text: null != s.large_text ? s.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: l } = e;
                              return null != u ? a.cloneElement(u, { onMouseEnter: t, onMouseLeave: l }) : null;
                          },
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: a } = this.props;
        return null != e.assets || (0, z.A)(e) || e.type !== B.$pd.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != a
              ? (0, i.jsx)("div", { className: r()(J.gameIcon, J.screenshareIcon) })
              : (0, i.jsx)(b.A, { className: J.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: a, type: s } = e;
        if (s === B.$pd.CUSTOM_STATUS) return null;
        let c = (0, D.A)(e),
            o = e.name,
            u = o;
        return (c && null != l
            ? (u = (0, i.jsx)("span", { className: J.activityName, children: u }))
            : !c &&
              ((o = a),
              (u = a),
              (0, W.A)(e) && null != e.sync_id && null != a
                  ? (u = (0, i.jsx)(p.Anchor, {
                        className: J.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, G.Cy)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(x.E, {
                  title: o,
                  variant: "text-sm/semibold",
                  className: r()((0, U.t)(J, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: l, state: n } = e,
            a = l,
            s = l;
        if (e.type === B.$pd.CUSTOM_STATUS) a = n;
        else if (!(0, D.A)(e))
            if (((a = n), (s = n), (0, W.A)(e) && null != n)) {
                let t = (t, l) =>
                    (0, i.jsx)(
                        R.A,
                        {
                            artists: n,
                            linkClassName: J.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        l,
                    );
                a = H.intl.format(H.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, G.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, q.A)(e) && (a = H.intl.formatToPlainString(H.t.gmCZRY, { game: a })), null != t)
              ? (0, i.jsx)(y.D, { onClick: t, title: s ?? void 0, className: J.clickableDetails, children: a })
              : (0, i.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, q.A)(e) || (0, W.A)(e) ? J.detailsWrap : J.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, q.A)(e) || (0, W.A)(e) ? J.detailsWrap : J.details,
                      children: H.intl.format(H.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, q.A)(e) || (0, W.A)(e) ? J.detailsWrap : J.details, J.guildDetails),
                      children: [
                          (0, i.jsx)(P.Ay, { guild: t, size: P.Ay.Sizes.SMOL, className: J.guildIcon }),
                          (0, i.jsx)(f._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: J.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(v.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-xs/normal",
                                      children: (0, N.m1)(n, M.default, k.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, D.A)(e) || (0, W.A)(e)) return null;
        let { timestamps: l } = e;
        return null == l
            ? null
            : (0, z.A)(e)
              ? (0, i.jsx)(K, { timestamps: l })
              : (0, i.jsx)(L.Ay, {
                    start: l.start,
                    location: L.Ay.Locations.USER_ACTIVITY,
                    className: J.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, W.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: l, end: n } = t;
        return null == l || null == n
            ? null
            : (0, i.jsx)(Y.A, {
                  start: l,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let l,
            { state: n, party: a, assets: s } = e,
            r = n,
            c = n;
        if (!(0, D.A)(e) && ((r = s?.large_text), (c = s?.large_text), (0, W.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          p.Anchor,
                          { className: J.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = H.intl.format(H.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== B.$pd.CUSTOM_STATUS) || (0, G.Cy)(e)
            ? (a?.size == null && [X.I4].includes(e.application_id ?? "")
                  ? (l = H.intl.formatToPlainString(H.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, G.Cy)(e) && a?.size != null
                    ? (l = H.intl.formatToPlainString(H.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (l =
                          0 === a.size[1]
                              ? H.intl.formatToPlainString(H.t.IM4J4e, { count: a.size[0] })
                              : H.intl.formatToPlainString(H.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, i.jsxs)("div", {
                  className: J.state,
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
                application: a,
                onClose: s,
                onOpenGameProfileModal: c,
            } = this.props,
            o = this.activity;
        if (null == o || o.type === B.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            d = "StreamPreview" === t,
            m = !1;
        if ((0, $.A)(o)) (e = this.renderXboxImage()), (m = !0);
        else {
            let t = (0, O.Gf)(this.props.user.id, o ?? void 0);
            t.isSpotify || (e = (0, i.jsx)(O.Tf, { resolvedActivity: t })),
                null == e && (m = null != (e = this.renderGameImage(o)));
        }
        let A = this.renderName(o),
            p = this.renderDetails(o),
            h = this.renderState(o, a),
            g = this.renderTimePlayed(o),
            x = this.renderChannelDetails(o),
            f = null != l ? l() : null,
            v = this.renderTimeBar(o),
            S = ![e, A, p, h, g, v, f].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(S),
                (0, i.jsx)("div", {
                    className: m ? J.bodyAlignCenter : J.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: J.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(I.A.Child, {
                                      className: r()(
                                          (0, U.t)(
                                              J,
                                              "content",
                                              m ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(y.D, {
                                              className: r()(null != c && J.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), s?.();
                                                        }
                                                      : void 0,
                                              children: [A, p, h, g],
                                          }),
                                          x,
                                          d ? null : v,
                                          u ? f : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                d ? f : null,
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
    let t = (0, _.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(et, { ...e, onOpenGameProfileModal: t });
};
el.Types = Z;
let en = el;
