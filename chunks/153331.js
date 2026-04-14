n.d(t, { A: () => $, O: () => W }), n(938796);
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(665260),
    u = n(3026),
    h = n(582754),
    m = n(397927),
    A = n(492684),
    g = n(736653),
    p = n(573648),
    _ = n(47167),
    f = n(235986),
    E = n(573435),
    C = n(769015),
    x = n(409626),
    S = n(692969),
    I = n(263063),
    T = n(804630),
    v = n(290987),
    N = n(763758),
    y = n(82149),
    b = n(994500),
    j = n(287809),
    R = n(139675),
    M = n(486020),
    L = n(821589),
    O = n(682261),
    D = n(672979),
    P = n(90644),
    k = n(61330),
    w = n(960076),
    U = n(139902),
    G = n(432166),
    F = n(360469),
    H = n(652215),
    B = n(985018),
    V = n(161042),
    W =
        (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
        (i.STREAM_PREVIEW = "StreamPreview"),
        (i.VOICE_CHANNEL = "VoiceChannel"),
        i);
let K = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    z = (0, A.A)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: V.timestamp, children: this.props.message });
            }
        },
    );
function Y(e) {
    let { activity: t } = e,
        n = (0, g.Ay)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (
                (0, P.A)(t) && (n = H.fg2.SPOTIFY),
                null != t.platform && [H.yTV.PS4, H.yTV.PS5].includes(t.platform) && (n = H.fg2.PLAYSTATION),
                n
            );
        })({ activity: t });
    if (null == i) return null;
    let a = p.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: V.platformIcon,
    });
}
class J extends a.PureComponent {
    static Types = W;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== H.$pd.PLAYING &&
            e?.type !== H.$pd.WATCHING &&
            e?.type !== H.$pd.LISTENING &&
            e?.type !== H.$pd.HANG_STATUS
            ? { type: H.$pd.PLAYING, name: B.intl.string(B.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, L.t)(V, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, w.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: i, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            r = this.activity;
        if (n || null == r) return null;
        let { name: o } = r;
        switch (r.type) {
            case H.$pd.STREAMING:
                t = B.intl.formatToPlainString(B.t.Dzgz4u, {
                    platform: [H.fg2.TWITCH, H.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : p.A.get(H.fg2.TWITCH).name,
                });
                break;
            case H.$pd.LISTENING:
                t = B.intl.formatToPlainString(B.t["5sYPnr"], { name: o });
                break;
            case H.$pd.WATCHING:
                t = B.intl.formatToPlainString(B.t.Ge29Zy, { name: o });
                break;
            case H.$pd.PLAYING:
                t = (0, U.A)(r);
                break;
            case H.$pd.COMPETING:
                t = B.intl.formatToPlainString(B.t.SQCo6D, { name: o });
        }
        return (
            null != i &&
                (t = (0, d.Lt)(r?.flags ?? 0, H.jUm.EMBEDDED)
                    ? r.type === H.$pd.WATCHING
                        ? B.intl.formatToPlainString(B.t["M/L8ot"], { guildName: i.name })
                        : B.intl.formatToPlainString(B.t["4chKQu"], { guildName: i.name })
                    : B.intl.formatToPlainString(B.t.sddlGK, { server: i.name })),
            (0, l.jsxs)("div", {
                className: V.headerContainer,
                children: [
                    (0, l.jsx)(m.Heading, {
                        className: e ? V.headerTextEmptyBody : V.headerTextNormal,
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: (0, l.jsx)(u.A, { children: t }),
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: V.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: p.A.get(H.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            n,
            { type: i } = this.props,
            { assets: s, application_id: o } = e;
        if (null == s || (null == s.large_image && null == s.small_image)) return null;
        (0, w.A)(e) && (t = K[i]);
        let c = (0, P.A)(e),
            d =
                null != s.large_image
                    ? (0, l.jsx)("img", {
                          alt: s.large_text ?? "",
                          src: (0, R.uD)(o, s.large_image, t ?? [F.iu.LARGE, F.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? H.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != s.small_image,
                                  [V.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) d = (0, l.jsx)(m.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: d });
        else if ((0, y.Cy)(e)) {
            let t = (0, y.UW)(e);
            if (null == t) return null;
            d = (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: F.iu.SMALL,
                height: F.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: M.Ay.getGuildIconURL({ id: t.guildId, icon: s.small_image, size: F.iu.SMALL }) ?? void 0,
                    className: V.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (d = (0, l.jsxs)("div", {
                className: V.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: V.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(m.H, { className: V.streamName, children: e.name }),
                            (0, l.jsx)("div", {
                                className: V.streamGame,
                                children: B.intl.format(B.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(m.MzZ, { className: V.twitchBackgroundImage, href: e.url, children: d }),
                ],
            })),
        (0, y.Cy)(e) ||
            null == s.small_image ||
            (n = (0, l.jsx)(m.STz, {
                text: "" !== s.small_text ? s.small_text : null,
                position: "top",
                children: (e) =>
                    (0, l.jsx)("img", {
                        alt: s.small_text ?? "",
                        src: (0, R.uD)(o, s.small_image, [F.iu.SMALL, F.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == d ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == d)
            ? (0, l.jsx)("div", { className: V.assets, children: n })
            : (0, l.jsxs)("div", {
                  className: V.assets,
                  children: [
                      (0, l.jsx)(m.STz, {
                          text: null != s.large_text ? s.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != d ? a.cloneElement(d, { onMouseEnter: t, onMouseLeave: n }) : null;
                          },
                      }),
                      n,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: i, activityGuild: a } = this.props;
        return null != e.assets || (0, O.A)(e) || e.type !== H.$pd.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == i && null != a
              ? (0, l.jsx)("div", { className: r()(V.gameIcon, V.screenshareIcon) })
              : (0, l.jsx)(C.A, { className: V.gameIcon, game: i });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: a, type: s } = e;
        if (s === H.$pd.CUSTOM_STATUS) return null;
        let o = (0, D.A)(e),
            c = e.name,
            d = c;
        return (o && null != n
            ? (d = (0, l.jsx)("span", { className: V.activityName, children: d }))
            : !o &&
              ((c = a),
              (d = a),
              (0, P.A)(e) && null != e.sync_id && null != a
                  ? (d = (0, l.jsx)(m.MzZ, {
                        className: V.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, y.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, l.jsx)(m.Text, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: r()((0, L.t)(V, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: i } = e,
            a = n,
            s = n;
        if (e.type === H.$pd.CUSTOM_STATUS) a = i;
        else if (!(0, D.A)(e))
            if (((a = i), (s = i), (0, P.A)(e) && null != i)) {
                let t = (t, n) =>
                    (0, l.jsx)(
                        N.A,
                        {
                            artists: i,
                            linkClassName: V.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = B.intl.format(B.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, y.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, w.A)(e) && (a = B.intl.formatToPlainString(B.t.gmCZRY, { game: a })), null != t)
              ? (0, l.jsx)(m.DUT, { onClick: t, title: s ?? void 0, className: V.clickableDetails, children: a })
              : (0, l.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, w.A)(e) || (0, P.A)(e) ? V.detailsWrap : V.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, l.jsx)("div", {
                      className: (0, w.A)(e) || (0, P.A)(e) ? V.detailsWrap : V.details,
                      children: B.intl.format(B.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: r()((0, w.A)(e) || (0, P.A)(e) ? V.detailsWrap : V.details, V.guildDetails),
                      children: [
                          (0, l.jsx)(I.Ay, { guild: t, size: I.Ay.Sizes.SMOL, className: V.guildIcon }),
                          (0, l.jsx)(m._BQ, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: V.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(m.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(m.Text, {
                                      variant: "text-xs/normal",
                                      children: (0, _.m1)(i, j.default, b.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, D.A)(e) || (0, P.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, O.A)(e)
              ? (0, l.jsx)(z, { timestamps: n })
              : (0, l.jsx)(v.Ay, {
                    start: n.start,
                    location: v.Ay.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, P.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, l.jsx)(G.A, {
                  start: n,
                  end: i,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let n,
            { state: i, party: a, assets: s } = e,
            r = i,
            o = i;
        if (!(0, D.A)(e) && ((r = s?.large_text), (o = s?.large_text), (0, P.A)(e) && null != r)) {
            let t = (t, n) =>
                null != e.sync_id && null != o
                    ? (0, l.jsx)(m.MzZ, { className: V.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, n)
                    : o;
            r = B.intl.format(B.t.vOLBEy, { album: o, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== H.$pd.CUSTOM_STATUS) || (0, y.Cy)(e)
            ? (a?.size == null && [F.I4].includes(e.application_id ?? "")
                  ? (n = B.intl.formatToPlainString(B.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, y.Cy)(e) && a?.size != null
                    ? (n = B.intl.formatToPlainString(B.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (n =
                          0 === a.size[1]
                              ? B.intl.formatToPlainString(B.t.IM4J4e, { count: a.size[0] })
                              : B.intl.formatToPlainString(B.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, l.jsxs)("div", {
                  className: V.state,
                  children: [
                      (0, l.jsx)("span", { title: o, children: r }),
                      null != n ? (0, l.jsxs)("span", { children: [" ", n] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: n,
                className: i,
                application: a,
                onClose: s,
                onOpenGameProfileModal: o,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === H.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            h = !1;
        if ((0, k.A)(c)) (e = this.renderXboxImage()), (h = !0);
        else {
            let t = (0, T.Gf)(this.props.user.id, c ?? void 0);
            t.isSpotify || (e = (0, l.jsx)(T.Tf, { resolvedActivity: t })),
                null == e && (h = null != (e = this.renderGameImage(c)));
        }
        let A = this.renderName(c),
            g = this.renderDetails(c),
            p = this.renderState(c, a),
            _ = this.renderTimePlayed(c),
            E = this.renderChannelDetails(c),
            C = null != n ? n() : null,
            x = this.renderTimeBar(c),
            S = ![e, A, g, p, _, x, C].some((e) => null != e);
        return (0, l.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), i),
            children: [
                this.renderHeader(S),
                (0, l.jsx)("div", {
                    className: h ? V.bodyAlignCenter : V.bodyNormal,
                    children: (0, l.jsxs)("div", {
                        className: V.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(f.A.Child, {
                                      className: r()(
                                          (0, L.t)(
                                              V,
                                              "content",
                                              h ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(m.DUT, {
                                              className: r()(null != o && V.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), s?.();
                                                        }
                                                      : void 0,
                                              children: [A, g, p, _],
                                          }),
                                          E,
                                          u ? null : x,
                                          d ? C : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                u ? C : null,
                (0, l.jsx)(Y, { activity: c }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: e, onOpenSpotifyTrack: t } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e);
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
        c()(null != t, "Spotify activity was null"), n?.(t, i.id, e);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e, n.id);
    };
}
let q = (e) => {
    let t = (0, S.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: x.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(J, { ...e, onOpenGameProfileModal: t });
};
q.Types = W;
let $ = q;
