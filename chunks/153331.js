n.d(e, { A: () => Q, O: () => J }), n(938796);
var i,
    l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    u = n.n(o),
    d = n(665260),
    c = n(3026),
    h = n(582754),
    A = n(397927),
    m = n(492684),
    p = n(736653),
    g = n(573648),
    f = n(47167),
    T = n(235986),
    E = n(573435),
    C = n(769015),
    S = n(409626),
    _ = n(692969),
    y = n(263063),
    I = n(804630),
    N = n(886019),
    v = n(559405),
    x = n(290987),
    j = n(345942),
    P = n(763758),
    L = n(82149),
    O = n(994500),
    R = n(287809),
    D = n(139675),
    M = n(486020),
    U = n(821589),
    b = n(682261),
    G = n(672979),
    V = n(90644),
    F = n(61330),
    w = n(960076),
    B = n(139902),
    H = n(432166),
    W = n(360469),
    Y = n(652215),
    k = n(985018),
    z = n(962877),
    J =
        (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
        (i.STREAM_PREVIEW = "StreamPreview"),
        (i.VOICE_CHANNEL = "VoiceChannel"),
        i);
let K = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    $ = (0, m.A)(
        class extends r.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: z.timestamp, children: this.props.message });
            }
        },
    );
function Z(t) {
    let { activity: e } = t,
        n = (0, p.Ay)(),
        i = (function (t) {
            let { activity: e } = t,
                n = null;
            return (
                (0, V.A)(e) && (n = Y.fg2.SPOTIFY),
                null != e.platform && [Y.yTV.PS4, Y.yTV.PS5].includes(e.platform) && (n = Y.fg2.PLAYSTATION),
                n
            );
        })({ activity: e });
    if (null == i) return null;
    let r = g.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? r.icon.lightSVG : r.icon.darkSVG,
        className: z.platformIcon,
    });
}
class q extends r.PureComponent {
    static Types = J;
    get activity() {
        let { activity: t, activityGuild: e } = this.props;
        return null != e &&
            t?.type !== Y.$pd.PLAYING &&
            t?.type !== Y.$pd.WATCHING &&
            t?.type !== Y.$pd.LISTENING &&
            t?.type !== Y.$pd.HANG_STATUS
            ? { type: Y.$pd.PLAYING, name: k.intl.string(k.t.eXan7B) }
            : t;
    }
    getTypeClass(t, e) {
        return (0, U.t)(z, t, this.props.type, e);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, w.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(t) {
        let e,
            { hideHeader: n, activityGuild: i, showChannelDetails: r, renderHeaderAccessory: s } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let { name: o } = a;
        switch (a.type) {
            case Y.$pd.STREAMING:
                e = k.intl.formatToPlainString(k.t.Dzgz4u, {
                    platform: [Y.fg2.TWITCH, Y.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : g.A.get(Y.fg2.TWITCH).name,
                });
                break;
            case Y.$pd.LISTENING:
                e = k.intl.formatToPlainString(k.t["5sYPnr"], { name: o });
                break;
            case Y.$pd.WATCHING:
                e = k.intl.formatToPlainString(k.t.Ge29Zy, { name: o });
                break;
            case Y.$pd.PLAYING:
                e = (0, B.A)(a);
                break;
            case Y.$pd.COMPETING:
                e = k.intl.formatToPlainString(k.t.SQCo6D, { name: o });
        }
        return (
            null != i &&
                (e = (0, d.Lt)(a?.flags ?? 0, Y.jUm.EMBEDDED)
                    ? a.type === Y.$pd.WATCHING
                        ? k.intl.formatToPlainString(k.t["M/L8ot"], { guildName: i.name })
                        : k.intl.formatToPlainString(k.t["4chKQu"], { guildName: i.name })
                    : k.intl.formatToPlainString(k.t.sddlGK, { server: i.name })),
            a?.type === Y.$pd.HANG_STATUS && (e = k.intl.string(k.t["74vS/x"])),
            (0, l.jsxs)("div", {
                className: z.headerContainer,
                children: [
                    (0, l.jsx)(A.Heading, {
                        className: t ? z.headerTextEmptyBody : z.headerTextNormal,
                        variant: r ? "text-xs/semibold" : "eyebrow",
                        children: (0, l.jsx)(c.A, { children: e }),
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: z.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(Y.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(t) {
        let e,
            n,
            { user: i } = this.props;
        if (t.type === Y.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: z.assets,
                children: (0, l.jsx)(v.A, {
                    userId: i.id,
                    hangStatusActivity: t,
                    size: 40,
                    className: a()(z.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: s } = this.props,
            { assets: o, application_id: u } = t;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, w.A)(t) && (e = K[s]);
        let d = (0, V.A)(t),
            c =
                null != o.large_image
                    ? (0, l.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, D.uD)(u, o.large_image, e ?? [W.iu.LARGE, W.iu.LARGE]),
                          className: a()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? Y.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [z.assetsLargeImageSpotify]: d,
                              },
                          ),
                      })
                    : null;
        if (d) c = (0, l.jsx)(A.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: c });
        else if ((0, L.Cy)(t)) {
            let e = (0, L.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: W.iu.SMALL,
                height: W.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: M.Ay.getGuildIconURL({ id: e.guildId, icon: o.small_image, size: W.iu.SMALL }) ?? void 0,
                    className: z.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != t.url &&
            "" !== t.url &&
            (c = (0, l.jsxs)("div", {
                className: z.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: z.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(A.H, { className: z.streamName, children: t.name }),
                            (0, l.jsx)("div", {
                                className: z.streamGame,
                                children: k.intl.format(k.t.gmCZRY, { game: t.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(A.MzZ, { className: z.twitchBackgroundImage, href: t.url, children: c }),
                ],
            })),
        (0, L.Cy)(t) ||
            null == o.small_image ||
            (n = (0, l.jsx)(A.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (t) =>
                    (0, l.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, D.uD)(u, o.small_image, [W.iu.SMALL, W.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                        ...t,
                    }),
            })),
        null == c)
            ? (0, l.jsx)("div", { className: z.assets, children: n })
            : (0, l.jsxs)("div", {
                  className: z.assets,
                  children: [
                      (0, l.jsx)(A.STz, {
                          text: null != o.large_text ? o.large_text : null,
                          position: "top",
                          children: (t) => {
                              let { onMouseEnter: e, onMouseLeave: n } = t;
                              return null != c ? r.cloneElement(c, { onMouseEnter: e, onMouseLeave: n }) : null;
                          },
                      }),
                      n,
                  ],
              });
    }
    renderGameImage(t) {
        let { user: e, type: n, application: i, activityGuild: r } = this.props;
        return null != t.assets || (0, b.A)(t) || t.type !== Y.$pd.PLAYING || "ActivityFeed" === n || e.bot
            ? null
            : null == i && null != r
              ? (0, l.jsx)("div", { className: a()(z.gameIcon, z.screenshareIcon) })
              : (0, l.jsx)(C.A, { className: z.gameIcon, game: i });
    }
    renderName(t) {
        let { user: e, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: r, type: s } = t;
        if (s === Y.$pd.CUSTOM_STATUS) return null;
        let o = (0, G.A)(t),
            u = t.name,
            d = u;
        return (s === Y.$pd.HANG_STATUS
            ? (d = (0, N.Au)(e.id, t))
            : o && null != n
              ? (d = (0, l.jsx)("span", { className: z.activityName, children: d }))
              : !o &&
                ((u = r),
                (d = r),
                (0, V.A)(t) && null != t.sync_id && null != r
                    ? (d = (0, l.jsx)(A.MzZ, {
                          className: z.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: r,
                      }))
                    : (0, L.Cy)(t) && (d = t.name)),
        null == d)
            ? null
            : (0, l.jsx)(A.Text, {
                  title: u,
                  variant: "text-sm/semibold",
                  className: a()((0, U.t)(z, "name", e.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(t) {
        let e,
            { details: n, state: i } = t,
            { activityGuild: r } = this.props,
            s = n,
            a = n;
        if (t.type === Y.$pd.CUSTOM_STATUS) s = i;
        else if (t.type === Y.$pd.HANG_STATUS && null != r)
            (s = k.intl.formatToPlainString(k.t.IAZiW2, { guildName: r.name })),
                (e = () => {
                    (0, j.u)(r.id);
                });
        else if (!(0, G.A)(t))
            if (((s = i), (a = i), (0, V.A)(t) && null != i)) {
                let e = (e, n) =>
                    (0, l.jsx)(
                        P.A,
                        {
                            artists: i,
                            linkClassName: z.bodyLink,
                            canOpen: null != t.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                s = k.intl.format(k.t.uU9le8, { artists: a, artistsHook: e });
            } else (0, L.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, w.A)(t) && (s = k.intl.formatToPlainString(k.t.gmCZRY, { game: s })), null != e)
              ? (0, l.jsx)(A.DUT, { onClick: e, title: a ?? void 0, className: z.clickableDetails, children: s })
              : (0, l.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details,
                    children: s,
                });
    }
    renderChannelDetails(t) {
        let { activityGuild: e, showChannelDetails: n, channel: i } = this.props;
        return n && null != e
            ? null == i
                ? (0, l.jsx)("div", {
                      className: (0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details,
                      children: k.intl.format(k.t["hq/Qze"], { guildName: e.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: a()((0, w.A)(t) || (0, V.A)(t) ? z.detailsWrap : z.details, z.guildDetails),
                      children: [
                          (0, l.jsx)(y.Ay, { guild: e, size: y.Ay.Sizes.SMOL, className: z.guildIcon }),
                          (0, l.jsx)(A._BQ, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: z.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(A.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(A.Text, {
                                      variant: "text-xs/normal",
                                      children: (0, f.m1)(i, R.default, O.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(t) {
        let { activityGuild: e } = this.props;
        if (!(0, G.A)(t) || (0, V.A)(t)) return null;
        let { timestamps: n } = t;
        return null == n
            ? null
            : (0, b.A)(t)
              ? (0, l.jsx)($, { timestamps: n })
              : (0, l.jsx)(x.Ay, {
                    start: n.start,
                    location: x.Ay.Locations.USER_ACTIVITY,
                    className: z.playTime,
                    isApplicationStreaming: null != e,
                });
    }
    renderTimeBar(t) {
        if (!(0, V.A)(t)) return null;
        let { timestamps: e } = t;
        if (null == e) return null;
        let { start: n, end: i } = e;
        return null == n || null == i
            ? null
            : (0, l.jsx)(H.A, {
                  start: n,
                  end: i,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(t, e) {
        let n,
            { state: i, party: r, assets: s } = t,
            a = i,
            o = i;
        if (!(0, G.A)(t) && ((a = s?.large_text), (o = s?.large_text), (0, V.A)(t) && null != a)) {
            let e = (e, n) =>
                null != t.sync_id && null != o
                    ? (0, l.jsx)(A.MzZ, { className: z.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, n)
                    : o;
            a = k.intl.format(k.t.vOLBEy, { album: o, albumHook: e });
        }
        return (null != a && "" !== a && t.type !== Y.$pd.CUSTOM_STATUS) || (0, L.Cy)(t)
            ? (r?.size == null && [W.I4].includes(t.application_id ?? "")
                  ? (n = k.intl.formatToPlainString(k.t["u//9By"], { count: "0", max: e?.getMaxParticipants() ?? 0 }))
                  : (0, L.Cy)(t) && r?.size != null
                    ? (n = k.intl.formatToPlainString(k.t["JC/3xw"], {
                          numSpeakers: r.size[0],
                          numListeners: r.size[1] - r.size[0],
                      }))
                    : r?.size != null &&
                      r.size.length >= 2 &&
                      (n =
                          0 === r.size[1]
                              ? k.intl.formatToPlainString(k.t.IM4J4e, { count: r.size[0] })
                              : k.intl.formatToPlainString(k.t["u//9By"], { count: r.size[0], max: r.size[1] })),
              (0, l.jsxs)("div", {
                  className: z.state,
                  children: [
                      (0, l.jsx)("span", { title: o, children: a }),
                      null != n ? (0, l.jsxs)("span", { children: [" ", n] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let t,
            {
                type: e,
                renderActions: n,
                className: i,
                application: r,
                onClose: s,
                onOpenGameProfileModal: o,
            } = this.props,
            u = this.activity;
        if (null == u || u.type === Y.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            h = !1;
        if ((0, F.A)(u)) (t = this.renderXboxImage()), (h = !0);
        else {
            let e = (0, I.Gf)(this.props.user.id, u ?? void 0);
            e.isSpotify || (t = (0, l.jsx)(I.Tf, { resolvedActivity: e })),
                null == t && (h = null != (t = this.renderGameImage(u)));
        }
        let m = this.renderName(u),
            p = this.renderDetails(u),
            g = this.renderState(u, r),
            f = this.renderTimePlayed(u),
            E = this.renderChannelDetails(u),
            C = null != n ? n() : null,
            S = this.renderTimeBar(u),
            _ = ![t, m, p, g, f, S, C].some((t) => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), i),
            children: [
                this.renderHeader(_),
                (0, l.jsx)("div", {
                    className: h ? z.bodyAlignCenter : z.bodyNormal,
                    children: (0, l.jsxs)("div", {
                        className: z.activityDetails,
                        children: [
                            t,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(T.A.Child, {
                                      className: a()(
                                          (0, U.t)(
                                              z,
                                              "content",
                                              h ? "GameImage" : null != t ? "Images" : "NoImages",
                                              e,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(A.DUT, {
                                              className: a()(null != o && z.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (t) => {
                                                            o(t), s?.();
                                                        }
                                                      : void 0,
                                              children: [m, p, g, f],
                                          }),
                                          E,
                                          c ? null : S,
                                          d ? C : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                c ? C : null,
                (0, l.jsx)(Z, { activity: u }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: t, onOpenSpotifyTrack: e } = this.props;
        u()(null != t, "Spotify activity was null"), e?.(t);
    };
    handleOpenSpotifyArtist = (t) => {
        let { activity: e, onOpenSpotifyArtist: n, user: i } = this.props;
        u()(null != e, "Spotify activity was null"), n?.(e, i.id, t);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: t, onOpenSpotifyAlbum: e, user: n } = this.props;
        u()(null != t, "Spotify activity was null"), e?.(t, n.id);
    };
}
let X = (t) => {
    let e = (0, _.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: S.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(q, { ...t, onOpenGameProfileModal: e });
};
X.Types = J;
let Q = X;
