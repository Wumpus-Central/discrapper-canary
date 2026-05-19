l.d(t, { A: () => es, O: () => Z }), l(938796);
var n,
    i = l(627968),
    a = l(64700),
    s = l(503698),
    r = l.n(s),
    c = l(284009),
    o = l.n(c),
    d = l(665260),
    u = l(780645),
    m = l(990078),
    A = l(462887),
    p = l(534514),
    h = l(349288),
    x = l(707554),
    g = l(834730),
    y = l(939249),
    f = l(320448),
    v = l(983851),
    j = l(492684),
    N = l(736653),
    T = l(573648),
    S = l(47167),
    I = l(235986),
    C = l(573435),
    P = l(137177),
    E = l(409626),
    _ = l(692969),
    b = l(548118),
    L = l(804630),
    O = l(529433),
    G = l(763758),
    k = l(82149),
    z = l(190915),
    M = l(287743),
    D = l(994500),
    V = l(287809),
    W = l(970928),
    w = l(486020),
    U = l(821589),
    R = l(682261),
    $ = l(672979),
    H = l(90644),
    Y = l(61330),
    F = l(960076),
    B = l(855511),
    X = l(652215),
    J = l(375708),
    K = l(432166),
    Q = l(360469),
    q = l(514146),
    Z =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let ee = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    et = (0, j.A)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: q.timestamp, children: this.props.message });
            }
        },
    );
function el(e) {
    let { activity: t } = e,
        l = (0, N.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                l = null;
            return (
                (0, H.A)(t) && (l = X.fg2.SPOTIFY),
                null != t.platform && [X.yTV.PS4, X.yTV.PS5].includes(t.platform) && (l = X.fg2.PLAYSTATION),
                l
            );
        })({ activity: t });
    if (null == n) return null;
    let a = T.A.get(n);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, A.q)(l) ? a.icon.lightSVG : a.icon.darkSVG,
        className: q.platformIcon,
    });
}
function en(e) {
    let { provider: t } = e,
        l = (0, N.Ay)();
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, A.q)(l) ? t.icon.lightSVG : t.icon.darkSVG,
        className: q.headerPlatformIcon,
    });
}
class ei extends a.PureComponent {
    static Types = Z;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== X.$pd.PLAYING &&
            e?.type !== X.$pd.WATCHING &&
            e?.type !== X.$pd.LISTENING &&
            e?.type !== X.$pd.HANG_STATUS
            ? { type: X.$pd.PLAYING, name: J.intl.string(J.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, U.t)(q, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, F.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: l, activityGuild: n, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            r = this.activity;
        if (l || null == r) return null;
        let { name: c } = r;
        switch (r.type) {
            case X.$pd.STREAMING:
                t = J.intl.formatToPlainString(J.t.Dzgz4u, {
                    platform: [X.fg2.TWITCH, X.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : T.A.get(X.fg2.TWITCH).name,
                });
                break;
            case X.$pd.LISTENING:
                t = J.intl.formatToPlainString(J.t["5sYPnr"], { name: c });
                break;
            case X.$pd.WATCHING:
                t = J.intl.formatToPlainString(J.t.Ge29Zy, { name: c });
                break;
            case X.$pd.PLAYING:
                t = (function (e) {
                    let t = (0, B.A)(e) ?? "";
                    switch (t) {
                        case X.yTV.PS4:
                        case X.yTV.PS5:
                            return J.intl.formatToPlainString(J.t.A17aM8, { platform: t.toUpperCase() });
                        case X.yTV.XBOX:
                        case X.yTV.SAMSUNG:
                            return J.intl.formatToPlainString(J.t.A17aM8, { platform: T.A.get(t).name });
                        default:
                            return J.intl.string(J.t["2TbM/G"]);
                    }
                })(r);
                break;
            case X.$pd.COMPETING:
                t = J.intl.formatToPlainString(J.t.SQCo6D, { name: c });
        }
        let o = (0, M.A)(r.session_id);
        if (null != o) {
            let e = (0, z.A)(o, r);
            switch (r.type) {
                case X.$pd.PLAYING:
                    t = J.intl.formatToPlainString(J.t.A17aM8, { platform: e });
                    break;
                case X.$pd.WATCHING:
                    t = J.intl.formatToPlainString(J.t.ENbTKQ, { platform: e });
                    break;
                case X.$pd.LISTENING:
                    t = J.intl.formatToPlainString(J.t.EcHzWI, { platform: e });
                    break;
                case X.$pd.COMPETING:
                    t = J.intl.formatToPlainString(J.t.ikpHeS, { platform: e });
                    break;
                case X.$pd.STREAMING:
                    t = J.intl.formatToPlainString(J.t.Dzgz4u, { platform: e });
            }
        }
        return (
            null != n &&
                (t = (0, d.Lt)(r?.flags ?? 0, X.jUm.EMBEDDED)
                    ? r.type === X.$pd.WATCHING
                        ? J.intl.formatToPlainString(J.t["M/L8ot"], { guildName: n.name })
                        : J.intl.formatToPlainString(J.t["4chKQu"], { guildName: n.name })
                    : J.intl.formatToPlainString(J.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: q.headerContainer,
                children: [
                    (0, i.jsxs)(p.D, {
                        className: e ? q.headerTextEmptyBody : q.headerTextNormal,
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: [
                            (0, i.jsx)(u.A, { children: t }),
                            null != o && null == n && (0, i.jsx)(en, { provider: o }),
                        ],
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: q.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: T.A.get(X.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: a, application_id: s } = e;
        if (null == a || (null == a.large_image && null == a.small_image)) return null;
        (0, F.A)(e) && (t = ee[n]);
        let c = (0, H.A)(e),
            o =
                null != a.large_image
                    ? (0, i.jsx)("img", {
                          alt: a.large_text ?? "",
                          src: (0, W.uD)(s, a.large_image, t ?? [Q.iu.LARGE, Q.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? X.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != a.small_image,
                                  [q.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) o = (0, i.jsx)(h.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: o });
        else if ((0, k.Cy)(e)) {
            let t = (0, k.UW)(e);
            if (null == t) return null;
            o = (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: Q.iu.SMALL,
                height: Q.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: w.Ay.getGuildIconURL({ id: t.guildId, icon: a.small_image, size: Q.iu.SMALL }) ?? void 0,
                    className: q.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (o = (0, i.jsxs)("div", {
                className: q.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: q.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(x.H, { className: q.streamName, children: e.name }),
                            (0, i.jsx)("div", {
                                className: q.streamGame,
                                children: J.intl.format(J.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(h.Anchor, { className: q.twitchBackgroundImage, href: e.url, children: o }),
                ],
            })),
        (0, k.Cy)(e) ||
            null == a.small_image ||
            (l = (0, i.jsx)(m.m, {
                text: "" !== a.small_text ? a.small_text : null,
                position: "top",
                children: (0, i.jsx)("img", {
                    alt: a.small_text ?? "",
                    src: (0, W.uD)(s, a.small_image, [Q.iu.SMALL, Q.iu.SMALL]),
                    className: this.getTypeClass("assetsSmallImage", null == o ? "WithoutLargeImage" : void 0),
                }),
            })),
        null == o)
            ? (0, i.jsx)("div", { className: q.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: q.assets,
                  children: [
                      (0, i.jsx)(m.m, {
                          text: null != a.large_text ? a.large_text : null,
                          position: "top",
                          children: o,
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: a } = this.props;
        return null != e.assets || (0, R.A)(e) || e.type !== X.$pd.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != a
              ? (0, i.jsx)("div", { className: r()(q.gameIcon, q.screenshareIcon) })
              : (0, i.jsx)(P.A, { className: q.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: a, type: s } = e;
        if (s === X.$pd.CUSTOM_STATUS) return null;
        let c = (0, $.A)(e),
            o = e.name,
            d = o;
        return (c && null != l
            ? (d = (0, i.jsx)("span", { className: q.activityName, children: d }))
            : !c &&
              ((o = a),
              (d = a),
              (0, H.A)(e) && null != e.sync_id && null != a
                  ? (d = (0, i.jsx)(h.Anchor, {
                        className: q.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, k.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, i.jsx)(g.E, {
                  title: o,
                  variant: "text-sm/semibold",
                  className: r()((0, U.t)(q, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: l, state: n } = e,
            a = l,
            s = l;
        if (e.type === X.$pd.CUSTOM_STATUS) a = n;
        else if (!(0, $.A)(e))
            if (((a = n), (s = n), (0, H.A)(e) && null != n)) {
                let t = (t, l) =>
                    (0, i.jsx)(
                        G.A,
                        {
                            artists: n,
                            linkClassName: q.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        l,
                    );
                a = J.intl.format(J.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, k.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, F.A)(e) && (a = J.intl.formatToPlainString(J.t.gmCZRY, { game: a })), null != t)
              ? (0, i.jsx)(y.D, { onClick: t, title: s ?? void 0, className: q.clickableDetails, children: a })
              : (0, i.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details,
                      children: J.intl.format(J.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details, q.guildDetails),
                      children: [
                          (0, i.jsx)(b.Ay, { guild: t, size: b.Ay.Sizes.SMOL, className: q.guildIcon }),
                          (0, i.jsx)(f._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: q.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(v.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(g.E, {
                                      variant: "text-xs/normal",
                                      children: (0, S.m1)(n, V.default, D.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, $.A)(e) || (0, H.A)(e)) return null;
        let { timestamps: l } = e;
        return null == l
            ? null
            : (0, R.A)(e)
              ? (0, i.jsx)(et, { timestamps: l })
              : (0, i.jsx)(O.Ay, {
                    start: l.start,
                    location: O.Ay.Locations.USER_ACTIVITY,
                    className: q.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, H.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: l, end: n } = t;
        return null == l || null == n
            ? null
            : (0, i.jsx)(K.A, {
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
        if (!(0, $.A)(e) && ((r = s?.large_text), (c = s?.large_text), (0, H.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          h.Anchor,
                          { className: q.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = J.intl.format(J.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== X.$pd.CUSTOM_STATUS) || (0, k.Cy)(e)
            ? (a?.size == null && [Q.I4].includes(e.application_id ?? "")
                  ? (l = J.intl.formatToPlainString(J.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, k.Cy)(e) && a?.size != null
                    ? (l = J.intl.formatToPlainString(J.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (l =
                          0 === a.size[1]
                              ? J.intl.formatToPlainString(J.t.IM4J4e, { count: a.size[0] })
                              : J.intl.formatToPlainString(J.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, i.jsxs)("div", {
                  className: q.state,
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
        if (null == o || o.type === X.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            m = !1;
        if ((0, Y.A)(o)) (e = this.renderXboxImage()), (m = !0);
        else {
            let t = (0, L.Gf)(this.props.user.id, o ?? void 0);
            t.isSpotify || (e = (0, i.jsx)(L.Tf, { resolvedActivity: t })),
                null == e && (m = null != (e = this.renderGameImage(o)));
        }
        let A = this.renderName(o),
            p = this.renderDetails(o),
            h = this.renderState(o, a),
            x = this.renderTimePlayed(o),
            g = this.renderChannelDetails(o),
            f = null != l ? l() : null,
            v = this.renderTimeBar(o),
            j = ![e, A, p, h, x, v, f].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(j),
                (0, i.jsx)("div", {
                    className: m ? q.bodyAlignCenter : q.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: q.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(I.A.Child, {
                                      className: r()(
                                          (0, U.t)(
                                              q,
                                              "content",
                                              m ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(y.D, {
                                              className: r()(null != c && q.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), s?.();
                                                        }
                                                      : void 0,
                                              children: [A, p, h, x],
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
                (0, i.jsx)(el, { activity: o }),
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
let ea = (e) => {
    let t = (0, _.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(ei, { ...e, onOpenGameProfileModal: t });
};
ea.Types = Z;
let es = ea;
