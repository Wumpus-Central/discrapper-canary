l.d(t, { A: () => en, O: () => K }), l(938796);
var n,
    i = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
    c = l(284009),
    o = l.n(c),
    d = l(665260),
    u = l(780645),
    m = l(462887),
    A = l(534514),
    h = l(349288),
    p = l(707554),
    x = l(781696),
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
    O = l(290987),
    k = l(763758),
    G = l(82149),
    z = l(994500),
    M = l(287809),
    U = l(970928),
    W = l(486020),
    D = l(821589),
    R = l(682261),
    V = l(672979),
    w = l(90644),
    $ = l(61330),
    H = l(960076),
    F = l(855511),
    Y = l(652215),
    B = l(985018),
    X = l(432166),
    J = l(360469),
    q = l(514146),
    K =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let Q = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    Z = (0, j.A)(
        class extends s.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: q.timestamp, children: this.props.message });
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
                (0, w.A)(t) && (l = Y.fg2.SPOTIFY),
                null != t.platform && [Y.yTV.PS4, Y.yTV.PS5].includes(t.platform) && (l = Y.fg2.PLAYSTATION),
                l
            );
        })({ activity: t });
    if (null == n) return null;
    let s = T.A.get(n);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, m.q)(l) ? s.icon.lightSVG : s.icon.darkSVG,
        className: q.platformIcon,
    });
}
class et extends s.PureComponent {
    static Types = K;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== Y.$pd.PLAYING &&
            e?.type !== Y.$pd.WATCHING &&
            e?.type !== Y.$pd.LISTENING &&
            e?.type !== Y.$pd.HANG_STATUS
            ? { type: Y.$pd.PLAYING, name: B.intl.string(B.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, D.t)(q, e, this.props.type, t);
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
            case Y.$pd.STREAMING:
                t = B.intl.formatToPlainString(B.t.Dzgz4u, {
                    platform: [Y.fg2.TWITCH, Y.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : T.A.get(Y.fg2.TWITCH).name,
                });
                break;
            case Y.$pd.LISTENING:
                t = B.intl.formatToPlainString(B.t["5sYPnr"], { name: c });
                break;
            case Y.$pd.WATCHING:
                t = B.intl.formatToPlainString(B.t.Ge29Zy, { name: c });
                break;
            case Y.$pd.PLAYING:
                t = (function (e) {
                    let t = (0, F.A)(e) ?? "";
                    switch (t) {
                        case Y.yTV.PS4:
                        case Y.yTV.PS5:
                            return B.intl.formatToPlainString(B.t.A17aM8, { platform: t.toUpperCase() });
                        case Y.yTV.XBOX:
                        case Y.yTV.SAMSUNG:
                            return B.intl.formatToPlainString(B.t.A17aM8, { platform: T.A.get(t).name });
                        default:
                            return B.intl.string(B.t["2TbM/G"]);
                    }
                })(r);
                break;
            case Y.$pd.COMPETING:
                t = B.intl.formatToPlainString(B.t.SQCo6D, { name: c });
        }
        return (
            null != n &&
                (t = (0, d.Lt)(r?.flags ?? 0, Y.jUm.EMBEDDED)
                    ? r.type === Y.$pd.WATCHING
                        ? B.intl.formatToPlainString(B.t["M/L8ot"], { guildName: n.name })
                        : B.intl.formatToPlainString(B.t["4chKQu"], { guildName: n.name })
                    : B.intl.formatToPlainString(B.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: q.headerContainer,
                children: [
                    (0, i.jsx)(A.D, {
                        className: e ? q.headerTextEmptyBody : q.headerTextNormal,
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
            className: q.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: T.A.get(Y.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: a, application_id: c } = e;
        if (null == a || (null == a.large_image && null == a.small_image)) return null;
        (0, H.A)(e) && (t = Q[n]);
        let o = (0, w.A)(e),
            d =
                null != a.large_image
                    ? (0, i.jsx)("img", {
                          alt: a.large_text ?? "",
                          src: (0, U.uD)(c, a.large_image, t ?? [J.iu.LARGE, J.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? Y.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != a.small_image,
                                  [q.assetsLargeImageSpotify]: o,
                              },
                          ),
                      })
                    : null;
        if (o) d = (0, i.jsx)(h.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: d });
        else if ((0, G.Cy)(e)) {
            let t = (0, G.UW)(e);
            if (null == t) return null;
            d = (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: J.iu.SMALL,
                height: J.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: W.Ay.getGuildIconURL({ id: t.guildId, icon: a.small_image, size: J.iu.SMALL }) ?? void 0,
                    className: q.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (d = (0, i.jsxs)("div", {
                className: q.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: q.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(p.H, { className: q.streamName, children: e.name }),
                            (0, i.jsx)("div", {
                                className: q.streamGame,
                                children: B.intl.format(B.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(h.Anchor, { className: q.twitchBackgroundImage, href: e.url, children: d }),
                ],
            })),
        (0, G.Cy)(e) ||
            null == a.small_image ||
            (l = (0, i.jsx)(x.ST, {
                text: "" !== a.small_text ? a.small_text : null,
                position: "top",
                children: (e) =>
                    (0, i.jsx)("img", {
                        alt: a.small_text ?? "",
                        src: (0, U.uD)(c, a.small_image, [J.iu.SMALL, J.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == d ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == d)
            ? (0, i.jsx)("div", { className: q.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: q.assets,
                  children: [
                      (0, i.jsx)(x.ST, {
                          text: null != a.large_text ? a.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: l } = e;
                              return null != d ? s.cloneElement(d, { onMouseEnter: t, onMouseLeave: l }) : null;
                          },
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: s } = this.props;
        return null != e.assets || (0, R.A)(e) || e.type !== Y.$pd.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != s
              ? (0, i.jsx)("div", { className: r()(q.gameIcon, q.screenshareIcon) })
              : (0, i.jsx)(P.A, { className: q.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: s, type: a } = e;
        if (a === Y.$pd.CUSTOM_STATUS) return null;
        let c = (0, V.A)(e),
            o = e.name,
            d = o;
        return (c && null != l
            ? (d = (0, i.jsx)("span", { className: q.activityName, children: d }))
            : !c &&
              ((o = s),
              (d = s),
              (0, w.A)(e) && null != e.sync_id && null != s
                  ? (d = (0, i.jsx)(h.Anchor, {
                        className: q.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: s,
                    }))
                  : (0, G.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, i.jsx)(g.E, {
                  title: o,
                  variant: "text-sm/semibold",
                  className: r()((0, D.t)(q, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: l, state: n } = e,
            s = l,
            a = l;
        if (e.type === Y.$pd.CUSTOM_STATUS) s = n;
        else if (!(0, V.A)(e))
            if (((s = n), (a = n), (0, w.A)(e) && null != n)) {
                let t = (t, l) =>
                    (0, i.jsx)(
                        k.A,
                        {
                            artists: n,
                            linkClassName: q.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        l,
                    );
                s = B.intl.format(B.t.uU9le8, { artists: a, artistsHook: t });
            } else (0, G.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, H.A)(e) && (s = B.intl.formatToPlainString(B.t.gmCZRY, { game: s })), null != t)
              ? (0, i.jsx)(y.D, { onClick: t, title: a ?? void 0, className: q.clickableDetails, children: s })
              : (0, i.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, H.A)(e) || (0, w.A)(e) ? q.detailsWrap : q.details,
                    children: s,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, H.A)(e) || (0, w.A)(e) ? q.detailsWrap : q.details,
                      children: B.intl.format(B.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, H.A)(e) || (0, w.A)(e) ? q.detailsWrap : q.details, q.guildDetails),
                      children: [
                          (0, i.jsx)(b.Ay, { guild: t, size: b.Ay.Sizes.SMOL, className: q.guildIcon }),
                          (0, i.jsx)(f._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: q.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(v.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(g.E, {
                                      variant: "text-xs/normal",
                                      children: (0, S.m1)(n, M.default, z.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, V.A)(e) || (0, w.A)(e)) return null;
        let { timestamps: l } = e;
        return null == l
            ? null
            : (0, R.A)(e)
              ? (0, i.jsx)(Z, { timestamps: l })
              : (0, i.jsx)(O.Ay, {
                    start: l.start,
                    location: O.Ay.Locations.USER_ACTIVITY,
                    className: q.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, w.A)(e)) return null;
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
        if (!(0, V.A)(e) && ((r = a?.large_text), (c = a?.large_text), (0, w.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          h.Anchor,
                          { className: q.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = B.intl.format(B.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== Y.$pd.CUSTOM_STATUS) || (0, G.Cy)(e)
            ? (s?.size == null && [J.I4].includes(e.application_id ?? "")
                  ? (l = B.intl.formatToPlainString(B.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, G.Cy)(e) && s?.size != null
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
                application: s,
                onClose: a,
                onOpenGameProfileModal: c,
            } = this.props,
            o = this.activity;
        if (null == o || o.type === Y.$pd.CUSTOM_STATUS) return null;
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
                    className: m ? q.bodyAlignCenter : q.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: q.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(I.A.Child, {
                                      className: r()(
                                          (0, D.t)(
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
    let t = (0, _.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(et, { ...e, onOpenGameProfileModal: t });
};
el.Types = K;
let en = el;
