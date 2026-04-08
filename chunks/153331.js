n.d(e, { A: () => Z, O: () => Y }), n(938796);
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
    f = n(235986),
    T = n(573435),
    E = n(769015),
    C = n(409626),
    S = n(692969),
    _ = n(263063),
    y = n(804630),
    I = n(886019),
    N = n(559405),
    v = n(290987),
    x = n(345942),
    j = n(763758),
    P = n(82149),
    L = n(139675),
    O = n(486020),
    R = n(821589),
    D = n(682261),
    M = n(672979),
    U = n(90644),
    b = n(61330),
    G = n(960076),
    V = n(139902),
    F = n(432166),
    w = n(360469),
    B = n(652215),
    H = n(985018),
    W = n(962877),
    Y =
        (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
        (i.STREAM_PREVIEW = "StreamPreview"),
        (i.VOICE_CHANNEL = "VoiceChannel"),
        i);
let k = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    z = (0, m.A)(
        class extends r.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: W.timestamp, children: this.props.message });
            }
        },
    );
function J(t) {
    let { activity: e } = t,
        n = (0, p.Ay)(),
        i = (function (t) {
            let { activity: e } = t,
                n = null;
            return (
                (0, U.A)(e) && (n = B.fg2.SPOTIFY),
                null != e.platform && [B.yTV.PS4, B.yTV.PS5].includes(e.platform) && (n = B.fg2.PLAYSTATION),
                n
            );
        })({ activity: e });
    if (null == i) return null;
    let r = g.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.qB)(n) ? r.icon.lightSVG : r.icon.darkSVG,
        className: W.platformIcon,
    });
}
class K extends r.PureComponent {
    static Types = Y;
    get activity() {
        let { activity: t, activityGuild: e } = this.props;
        return null != e &&
            t?.type !== B.$pd.PLAYING &&
            t?.type !== B.$pd.WATCHING &&
            t?.type !== B.$pd.LISTENING &&
            t?.type !== B.$pd.HANG_STATUS
            ? { type: B.$pd.PLAYING, name: H.intl.string(H.t.eXan7B) }
            : t;
    }
    getTypeClass(t, e) {
        return (0, R.t)(W, t, this.props.type, e);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, G.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(t) {
        let e,
            { hideHeader: n, activityGuild: i, showChannelDetails: r, renderHeaderAccessory: s } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let { name: o } = a;
        switch (a.type) {
            case B.$pd.STREAMING:
                e = H.intl.formatToPlainString(H.t.Dzgz4u, {
                    platform: [B.fg2.TWITCH, B.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : g.A.get(B.fg2.TWITCH).name,
                });
                break;
            case B.$pd.LISTENING:
                e = H.intl.formatToPlainString(H.t["5sYPnr"], { name: o });
                break;
            case B.$pd.WATCHING:
                e = H.intl.formatToPlainString(H.t.Ge29Zy, { name: o });
                break;
            case B.$pd.PLAYING:
                e = (0, V.A)(a);
                break;
            case B.$pd.COMPETING:
                e = H.intl.formatToPlainString(H.t.SQCo6D, { name: o });
        }
        return (
            null != i &&
                (e = (0, d.Lt)(a?.flags ?? 0, B.jUm.EMBEDDED)
                    ? a.type === B.$pd.WATCHING
                        ? H.intl.formatToPlainString(H.t["M/L8ot"], { guildName: i.name })
                        : H.intl.formatToPlainString(H.t["4chKQu"], { guildName: i.name })
                    : H.intl.formatToPlainString(H.t.sddlGK, { server: i.name })),
            a?.type === B.$pd.HANG_STATUS && (e = H.intl.string(H.t["74vS/x"])),
            (0, l.jsxs)("div", {
                className: W.headerContainer,
                children: [
                    (0, l.jsx)(A.Heading, {
                        className: t ? W.headerTextEmptyBody : W.headerTextNormal,
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
            className: W.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(B.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(t) {
        let e,
            n,
            { user: i } = this.props;
        if (t.type === B.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: W.assets,
                children: (0, l.jsx)(N.A, {
                    userId: i.id,
                    hangStatusActivity: t,
                    size: 40,
                    className: a()(W.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: s } = this.props,
            { assets: o, application_id: u } = t;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, G.A)(t) && (e = k[s]);
        let d = (0, U.A)(t),
            c =
                null != o.large_image
                    ? (0, l.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, L.uD)(u, o.large_image, e ?? [w.iu.LARGE, w.iu.LARGE]),
                          className: a()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? B.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [W.assetsLargeImageSpotify]: d,
                              },
                          ),
                      })
                    : null;
        if (d) c = (0, l.jsx)(A.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: c });
        else if ((0, P.Cy)(t)) {
            let e = (0, P.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: w.iu.SMALL,
                height: w.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: O.Ay.getGuildIconURL({ id: e.guildId, icon: o.small_image, size: w.iu.SMALL }) ?? void 0,
                    className: W.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != t.url &&
            "" !== t.url &&
            (c = (0, l.jsxs)("div", {
                className: W.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: W.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(A.H, { className: W.streamName, children: t.name }),
                            (0, l.jsx)("div", {
                                className: W.streamGame,
                                children: H.intl.format(H.t.gmCZRY, { game: t.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(A.MzZ, { className: W.twitchBackgroundImage, href: t.url, children: c }),
                ],
            })),
        (0, P.Cy)(t) ||
            null == o.small_image ||
            (n = (0, l.jsx)(A.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (t) =>
                    (0, l.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, L.uD)(u, o.small_image, [w.iu.SMALL, w.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                        ...t,
                    }),
            })),
        null == c)
            ? (0, l.jsx)("div", { className: W.assets, children: n })
            : (0, l.jsxs)("div", {
                  className: W.assets,
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
        return null != t.assets || (0, D.A)(t) || t.type !== B.$pd.PLAYING || "ActivityFeed" === n || e.bot
            ? null
            : null == i && null != r
              ? (0, l.jsx)("div", { className: a()(W.gameIcon, W.screenshareIcon) })
              : (0, l.jsx)(E.A, { className: W.gameIcon, game: i });
    }
    renderName(t) {
        let { user: e, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: r, type: s } = t;
        if (s === B.$pd.CUSTOM_STATUS) return null;
        let o = (0, M.A)(t),
            u = t.name,
            d = u;
        return (s === B.$pd.HANG_STATUS
            ? (d = (0, I.Au)(e.id, t))
            : o && null != n
              ? (d = (0, l.jsx)("span", { className: W.activityName, children: d }))
              : !o &&
                ((u = r),
                (d = r),
                (0, U.A)(t) && null != t.sync_id && null != r
                    ? (d = (0, l.jsx)(A.MzZ, {
                          className: W.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: r,
                      }))
                    : (0, P.Cy)(t) && (d = t.name)),
        null == d)
            ? null
            : (0, l.jsx)(A.Text, {
                  title: u,
                  variant: "text-sm/semibold",
                  className: a()((0, R.t)(W, "name", e.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(t) {
        let e,
            { details: n, state: i } = t,
            { activityGuild: r } = this.props,
            s = n,
            a = n;
        if (t.type === B.$pd.CUSTOM_STATUS) s = i;
        else if (t.type === B.$pd.HANG_STATUS && null != r)
            (s = H.intl.formatToPlainString(H.t.IAZiW2, { guildName: r.name })),
                (e = () => {
                    (0, x.u)(r.id);
                });
        else if (!(0, M.A)(t))
            if (((s = i), (a = i), (0, U.A)(t) && null != i)) {
                let e = (e, n) =>
                    (0, l.jsx)(
                        j.A,
                        {
                            artists: i,
                            linkClassName: W.bodyLink,
                            canOpen: null != t.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                s = H.intl.format(H.t.uU9le8, { artists: a, artistsHook: e });
            } else (0, P.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, G.A)(t) && (s = H.intl.formatToPlainString(H.t.gmCZRY, { game: s })), null != e)
              ? (0, l.jsx)(A.DUT, { onClick: e, title: a ?? void 0, className: W.clickableDetails, children: s })
              : (0, l.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, G.A)(t) || (0, U.A)(t) ? W.detailsWrap : W.details,
                    children: s,
                });
    }
    renderChannelDetails(t) {
        let { activityGuild: e, showChannelDetails: n, channel: i } = this.props;
        return n && null != e
            ? null == i
                ? (0, l.jsx)("div", {
                      className: (0, G.A)(t) || (0, U.A)(t) ? W.detailsWrap : W.details,
                      children: H.intl.format(H.t["hq/Qze"], { guildName: e.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: a()((0, G.A)(t) || (0, U.A)(t) ? W.detailsWrap : W.details, W.guildDetails),
                      children: [
                          (0, l.jsx)(_.Ay, { guild: e, size: _.Ay.Sizes.SMOL, className: W.guildIcon }),
                          (0, l.jsx)(A._BQ, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: W.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(A.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(A.Text, { variant: "text-xs/normal", children: i?.name }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(t) {
        let { activityGuild: e } = this.props;
        if (!(0, M.A)(t) || (0, U.A)(t)) return null;
        let { timestamps: n } = t;
        return null == n
            ? null
            : (0, D.A)(t)
              ? (0, l.jsx)(z, { timestamps: n })
              : (0, l.jsx)(v.Ay, {
                    start: n.start,
                    location: v.Ay.Locations.USER_ACTIVITY,
                    className: W.playTime,
                    isApplicationStreaming: null != e,
                });
    }
    renderTimeBar(t) {
        if (!(0, U.A)(t)) return null;
        let { timestamps: e } = t;
        if (null == e) return null;
        let { start: n, end: i } = e;
        return null == n || null == i
            ? null
            : (0, l.jsx)(F.A, {
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
        if (!(0, M.A)(t) && ((a = s?.large_text), (o = s?.large_text), (0, U.A)(t) && null != a)) {
            let e = (e, n) =>
                null != t.sync_id && null != o
                    ? (0, l.jsx)(A.MzZ, { className: W.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, n)
                    : o;
            a = H.intl.format(H.t.vOLBEy, { album: o, albumHook: e });
        }
        return (null != a && "" !== a && t.type !== B.$pd.CUSTOM_STATUS) || (0, P.Cy)(t)
            ? (r?.size == null && [w.I4].includes(t.application_id ?? "")
                  ? (n = H.intl.formatToPlainString(H.t["u//9By"], { count: "0", max: e?.getMaxParticipants() ?? 0 }))
                  : (0, P.Cy)(t) && r?.size != null
                    ? (n = H.intl.formatToPlainString(H.t["JC/3xw"], {
                          numSpeakers: r.size[0],
                          numListeners: r.size[1] - r.size[0],
                      }))
                    : r?.size != null &&
                      r.size.length >= 2 &&
                      (n =
                          0 === r.size[1]
                              ? H.intl.formatToPlainString(H.t.IM4J4e, { count: r.size[0] })
                              : H.intl.formatToPlainString(H.t["u//9By"], { count: r.size[0], max: r.size[1] })),
              (0, l.jsxs)("div", {
                  className: W.state,
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
        if (null == u || u.type === B.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            h = !1;
        if ((0, b.A)(u)) (t = this.renderXboxImage()), (h = !0);
        else {
            let e = (0, y.Gf)(this.props.user.id, u ?? void 0);
            e.isSpotify || (t = (0, l.jsx)(y.Tf, { resolvedActivity: e })),
                null == t && (h = null != (t = this.renderGameImage(u)));
        }
        let m = this.renderName(u),
            p = this.renderDetails(u),
            g = this.renderState(u, r),
            T = this.renderTimePlayed(u),
            E = this.renderChannelDetails(u),
            C = null != n ? n() : null,
            S = this.renderTimeBar(u),
            _ = ![t, m, p, g, T, S, C].some((t) => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), i),
            children: [
                this.renderHeader(_),
                (0, l.jsx)("div", {
                    className: h ? W.bodyAlignCenter : W.bodyNormal,
                    children: (0, l.jsxs)("div", {
                        className: W.activityDetails,
                        children: [
                            t,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(f.A.Child, {
                                      className: a()(
                                          (0, R.t)(
                                              W,
                                              "content",
                                              h ? "GameImage" : null != t ? "Images" : "NoImages",
                                              e,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(A.DUT, {
                                              className: a()(null != o && W.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (t) => {
                                                            o(t), s?.();
                                                        }
                                                      : void 0,
                                              children: [m, p, g, T],
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
                (0, l.jsx)(J, { activity: u }),
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
let $ = (t) => {
    let e = (0, S.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: C.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(K, { ...t, onOpenGameProfileModal: e });
};
$.Types = Y;
let Z = $;
