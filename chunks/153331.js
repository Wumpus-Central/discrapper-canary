i.d(t, { A: () => Z, O: () => W }), i(938796);
var n,
    a = i(627968),
    l = i(64700),
    r = i(503698),
    s = i.n(r),
    o = i(284009),
    d = i.n(o),
    c = i(665260),
    u = i(3026),
    m = i(582754),
    _ = i(397927),
    A = i(492684),
    g = i(736653),
    h = i(573648),
    f = i(235986),
    p = i(573435),
    S = i(769015),
    I = i(409626),
    x = i(692969),
    v = i(263063),
    C = i(886019),
    E = i(559405),
    y = i(290987),
    T = i(345942),
    N = i(763758),
    b = i(82149),
    j = i(139675),
    L = i(486020),
    P = i(821589),
    O = i(474447),
    R = i(682261),
    D = i(672979),
    U = i(90644),
    M = i(61330),
    w = i(960076),
    V = i(432166),
    G = i(360469),
    k = i(652215),
    F = i(985018),
    H = i(609535),
    W =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let B = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    z = (0, A.A)(
        class extends l.PureComponent {
            render() {
                return (0, a.jsx)("div", { className: H.timestamp, children: this.props.message });
            }
        },
    );
function Y(e) {
    let { activity: t } = e,
        i = (0, g.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                i = null;
            return (
                (0, U.A)(t) && (i = k.fg2.SPOTIFY),
                null != t.platform && [k.yTV.PS4, k.yTV.PS5].includes(t.platform) && (i = k.fg2.PLAYSTATION),
                i
            );
        })({ activity: t });
    if (null == n) return null;
    let l = h.A.get(n);
    return (0, a.jsx)("img", {
        alt: "",
        src: (0, m.qB)(i) ? l.icon.lightSVG : l.icon.darkSVG,
        className: H.platformIcon,
    });
}
class K extends l.PureComponent {
    static Types = W;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== k.$pd.PLAYING &&
            e?.type !== k.$pd.WATCHING &&
            e?.type !== k.$pd.LISTENING &&
            e?.type !== k.$pd.HANG_STATUS
            ? { type: k.$pd.PLAYING, name: F.intl.string(F.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, P.t)(H, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, w.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: i, activityGuild: n, showChannelDetails: l, renderHeaderAccessory: r } = this.props,
            o = this.activity;
        if (i || null == o) return null;
        let { name: d } = o;
        switch (o.type) {
            case k.$pd.STREAMING:
                t = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [k.fg2.TWITCH, k.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : h.A.get(k.fg2.TWITCH).name,
                });
                break;
            case k.$pd.LISTENING:
                t = F.intl.formatToPlainString(F.t["5sYPnr"], { name: d });
                break;
            case k.$pd.WATCHING:
                t = F.intl.formatToPlainString(F.t.Ge29Zy, { name: d });
                break;
            case k.$pd.PLAYING:
                t = (0, O.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case k.$pd.COMPETING:
                t = F.intl.formatToPlainString(F.t.SQCo6D, { name: d });
        }
        null != n &&
            (t = (0, c.Lt)(o?.flags ?? 0, k.jUm.EMBEDDED)
                ? o.type === k.$pd.WATCHING
                    ? F.intl.formatToPlainString(F.t["M/L8ot"], { guildName: n.name })
                    : F.intl.formatToPlainString(F.t["4chKQu"], { guildName: n.name })
                : F.intl.formatToPlainString(F.t.sddlGK, { server: n.name })),
            o?.type === k.$pd.HANG_STATUS && (t = F.intl.string(F.t["74vS/x"]));
        let m = this.isUserActivityHoverExperiment(),
            A = l ? "text-xs/semibold" : "eyebrow";
        return (
            m && (A = "text-xs/medium"),
            (0, a.jsxs)("div", {
                className: H.headerContainer,
                children: [
                    (0, a.jsx)(_.Heading, {
                        className: s()(!m && (e ? H.headerTextEmptyBody : H.headerTextNormal)),
                        color: m ? "text-muted" : void 0,
                        variant: A,
                        children: (0, a.jsx)(u.A, { children: t }),
                    }),
                    r?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, a.jsx)("div", {
            className: H.assets,
            children: (0, a.jsx)("img", {
                alt: "",
                src: h.A.get(k.fg2.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            i,
            { user: n } = this.props;
        if (e.type === k.$pd.HANG_STATUS)
            return (0, a.jsx)("div", {
                className: H.assets,
                children: (0, a.jsx)(E.A, {
                    userId: n.id,
                    hangStatusActivity: e,
                    size: 40,
                    className: s()(H.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: r } = this.props,
            { assets: o, application_id: d } = e;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, w.A)(e) && (t = B[r]);
        let c = (0, U.A)(e),
            u =
                null != o.large_image
                    ? (0, a.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, j.uD)(d, o.large_image, t ?? [G.iu.LARGE, G.iu.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? k.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [H.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) u = (0, a.jsx)(_.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: u });
        else if ((0, b.Cy)(e)) {
            let t = (0, b.UW)(e);
            if (null == t) return null;
            u = (0, a.jsx)(p.Ay, {
                mask: p.Ay.Masks.SQUIRCLE,
                width: G.iu.SMALL,
                height: G.iu.SMALL,
                children: (0, a.jsx)("img", {
                    src: L.Ay.getGuildIconURL({ id: t.guildId, icon: o.small_image, size: G.iu.SMALL }) ?? void 0,
                    className: H.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (u = (0, a.jsxs)("div", {
                className: H.twitchImageContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: H.twitchImageOverlay,
                        children: [
                            (0, a.jsx)(_.H, { className: H.streamName, children: e.name }),
                            (0, a.jsx)("div", {
                                className: H.streamGame,
                                children: F.intl.format(F.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(_.MzZ, { className: H.twitchBackgroundImage, href: e.url, children: u }),
                ],
            })),
        (0, b.Cy)(e) ||
            null == o.small_image ||
            (i = (0, a.jsx)(_.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (e) =>
                    (0, a.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, j.uD)(d, o.small_image, [G.iu.SMALL, G.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == u ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == u)
            ? (0, a.jsx)("div", { className: H.assets, children: i })
            : (0, a.jsxs)("div", {
                  className: H.assets,
                  children: [
                      (0, a.jsx)(_.STz, {
                          text: null != o.large_text ? o.large_text : null,
                          position: "top",
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: i } = e;
                              return null != u ? l.cloneElement(u, { onMouseEnter: t, onMouseLeave: i }) : null;
                          },
                      }),
                      i,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: i, application: n, activityGuild: l } = this.props;
        return null != e.assets || (0, R.A)(e) || e.type !== k.$pd.PLAYING || "ActivityFeed" === i || t.bot
            ? null
            : null == n && null != l
              ? (0, a.jsx)("div", { className: s()(H.gameIcon, H.screenshareIcon) })
              : (0, a.jsx)(S.A, { className: H.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: i, hideName: n } = this.props;
        if (n) return null;
        let { details: l, type: r } = e;
        if (r === k.$pd.CUSTOM_STATUS) return null;
        let o = (0, D.A)(e),
            d = e.name,
            c = d;
        return (r === k.$pd.HANG_STATUS
            ? (c = (0, C.Au)(t.id, e))
            : o && null != i
              ? (c = (0, a.jsx)("span", {
                    className: this.props.enableUserHoverActivities ? H.activityNameUserActivityHover : H.activityName,
                    children: c,
                }))
              : !o &&
                ((d = l),
                (c = l),
                (0, U.A)(e) && null != e.sync_id && null != l
                    ? (c = (0, a.jsx)(_.MzZ, {
                          className: H.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: l,
                      }))
                    : (0, b.Cy)(e) && (c = e.name)),
        null == c)
            ? null
            : (0, a.jsx)(_.Text, {
                  title: d,
                  variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
                  className: s()((0, P.t)(H, "name", t.bot ? "wrap" : "normal")),
                  children: c,
              });
    }
    renderDetails(e) {
        let t,
            { details: i, state: n } = e,
            { activityGuild: l } = this.props,
            r = i,
            s = i;
        if (e.type === k.$pd.CUSTOM_STATUS) r = n;
        else if (e.type === k.$pd.HANG_STATUS && null != l)
            (r = F.intl.formatToPlainString(F.t.IAZiW2, { guildName: l.name })),
                (t = () => {
                    (0, T.u)(l.id);
                });
        else if (!(0, D.A)(e))
            if (((r = n), (s = n), (0, U.A)(e) && null != n)) {
                let t = (t, i) =>
                    (0, a.jsx)(
                        N.A,
                        {
                            artists: n,
                            linkClassName: H.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        i,
                    );
                r = F.intl.format(F.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, b.Cy)(e) && (r = e.assets?.small_text);
        return null == r || "" === r
            ? null
            : ((0, w.A)(e) && (r = F.intl.formatToPlainString(F.t.gmCZRY, { game: r })), null != t)
              ? (0, a.jsx)(_.DUT, { onClick: t, title: s ?? void 0, className: H.clickableDetails, children: r })
              : (0, a.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, w.A)(e) || (0, U.A)(e) ? H.detailsWrap : H.details,
                    children: r,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: i, channel: n } = this.props;
        return i && null != t
            ? null == n
                ? (0, a.jsx)("div", {
                      className: (0, w.A)(e) || (0, U.A)(e) ? H.detailsWrap : H.details,
                      children: F.intl.format(F.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, a.jsxs)("div", {
                      className: s()((0, w.A)(e) || (0, U.A)(e) ? H.detailsWrap : H.details, H.guildDetails),
                      children: [
                          (0, a.jsx)(v.A, { guild: t, size: v.A.Sizes.SMOL, className: H.guildIcon }),
                          (0, a.jsx)(_._BQ, { size: "xxs", color: "currentColor" }),
                          (0, a.jsxs)("div", {
                              className: H.voiceChannelInfo,
                              children: [
                                  (0, a.jsx)(_.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, a.jsx)(_.Text, { variant: "text-xs/normal", children: n?.name }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, D.A)(e) || (0, U.A)(e)) return null;
        let { timestamps: i } = e;
        return null == i
            ? null
            : (0, R.A)(e)
              ? (0, a.jsx)(z, { timestamps: i })
              : (0, a.jsx)(y.Ay, {
                    start: i.start,
                    location: y.Ay.Locations.USER_ACTIVITY,
                    className: H.playTime,
                    isApplicationStreaming: null != t,
                    enableUserHoverActivities: this.props.enableUserHoverActivities,
                });
    }
    renderTimeBar(e) {
        if (!(0, U.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: i, end: n } = t;
        return null == i || null == n
            ? null
            : (0, a.jsx)(V.A, {
                  start: i,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let i,
            { state: n, party: l, assets: r } = e,
            s = n,
            o = n;
        if (!(0, D.A)(e) && ((s = r?.large_text), (o = r?.large_text), (0, U.A)(e) && null != s)) {
            let t = (t, i) =>
                null != e.sync_id && null != o
                    ? (0, a.jsx)(_.MzZ, { className: H.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, i)
                    : o;
            s = F.intl.format(F.t.vOLBEy, { album: o, albumHook: t });
        }
        return (null != s && "" !== s && e.type !== k.$pd.CUSTOM_STATUS) || (0, b.Cy)(e)
            ? (l?.size == null && [G.I4].includes(e.application_id ?? "")
                  ? (i = F.intl.formatToPlainString(F.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, b.Cy)(e) && l?.size != null
                    ? (i = F.intl.formatToPlainString(F.t["JC/3xw"], {
                          numSpeakers: l.size[0],
                          numListeners: l.size[1] - l.size[0],
                      }))
                    : l?.size != null &&
                      l.size.length >= 2 &&
                      (i =
                          0 === l.size[1]
                              ? F.intl.formatToPlainString(F.t.IM4J4e, { count: l.size[0] })
                              : F.intl.formatToPlainString(F.t["u//9By"], { count: l.size[0], max: l.size[1] })),
              (0, a.jsxs)("div", {
                  className: H.state,
                  children: [
                      (0, a.jsx)("span", { title: o, children: s }),
                      null != i ? (0, a.jsxs)("span", { children: [" ", i] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: i,
                className: n,
                application: l,
                onClose: r,
                onOpenGameProfileModal: o,
            } = this.props,
            d = this.activity;
        if (null == d || d.type === k.$pd.CUSTOM_STATUS) return null;
        let c = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            m = !1;
        (0, M.A)(d)
            ? ((e = this.renderXboxImage()), (m = !0))
            : null == (e = this.renderImage(d)) && (m = null != (e = this.renderGameImage(d)));
        let A = this.renderName(d),
            g = this.renderDetails(d),
            h = this.renderState(d, l),
            p = this.renderTimePlayed(d),
            S = this.renderChannelDetails(d),
            I = null != i ? i() : null,
            x = this.renderTimeBar(d),
            v = ![e, A, g, h, p, x, I].some((e) => null != e);
        return (0, a.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(v),
                (0, a.jsx)("div", {
                    className: s()(m ? H.bodyAlignCenter : H.bodyNormal),
                    children: (0, a.jsxs)("div", {
                        className: H.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, a.jsxs)(f.A.Child, {
                                      className: s()(
                                          (0, P.t)(
                                              H,
                                              "content",
                                              m ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, a.jsxs)(_.DUT, {
                                              className: s()(
                                                  null != o && H.openGameProfile,
                                                  this.props.enableUserHoverActivities &&
                                                      H.activityVoiceChannelUserHover,
                                              ),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), r?.();
                                                        }
                                                      : void 0,
                                              children: [A, g, h, p],
                                          }),
                                          S,
                                          u ? null : x,
                                          c ? I : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                u ? I : null,
                (0, a.jsx)(Y, { activity: d }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: e, onOpenSpotifyTrack: t } = this.props;
        d()(null != e, "Spotify activity was null"), t?.(e);
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: i, user: n } = this.props;
        d()(null != t, "Spotify activity was null"), i?.(t, n.id, e);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: i } = this.props;
        d()(null != e, "Spotify activity was null"), t?.(e, i.id);
    };
}
let J = (e) => {
    let t = (0, x.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: I.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, a.jsx)(K, { ...e, onOpenGameProfileModal: t });
};
J.Types = W;
let Z = J;
