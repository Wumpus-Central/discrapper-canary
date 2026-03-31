i.d(t, { A: () => q, O: () => B }), i(938796);
var n,
    a = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    o = i(284009),
    c = i.n(o),
    d = i(665260),
    u = i(3026),
    m = i(582754),
    _ = i(397927),
    p = i(492684),
    h = i(736653),
    A = i(573648),
    g = i(235986),
    f = i(573435),
    v = i(769015),
    S = i(409626),
    I = i(692969),
    T = i(263063),
    C = i(804630),
    E = i(886019),
    y = i(559405),
    x = i(290987),
    N = i(345942),
    b = i(763758),
    L = i(82149),
    P = i(139675),
    j = i(486020),
    D = i(821589),
    U = i(682261),
    O = i(672979),
    R = i(90644),
    M = i(61330),
    w = i(960076),
    V = i(139902),
    G = i(432166),
    H = i(360469),
    F = i(652215),
    k = i(985018),
    W = i(962877),
    B =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let Y = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    z = (0, p.A)(
        class extends l.PureComponent {
            render() {
                return (0, a.jsx)("div", { className: W.timestamp, children: this.props.message });
            }
        },
    );
function $(e) {
    let { activity: t } = e,
        i = (0, h.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                i = null;
            return (
                (0, R.A)(t) && (i = F.fg2.SPOTIFY),
                null != t.platform && [F.yTV.PS4, F.yTV.PS5].includes(t.platform) && (i = F.fg2.PLAYSTATION),
                i
            );
        })({ activity: t });
    if (null == n) return null;
    let l = A.A.get(n);
    return (0, a.jsx)("img", {
        alt: "",
        src: (0, m.qB)(i) ? l.icon.lightSVG : l.icon.darkSVG,
        className: W.platformIcon,
    });
}
class J extends l.PureComponent {
    static Types = B;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== F.$pd.PLAYING &&
            e?.type !== F.$pd.WATCHING &&
            e?.type !== F.$pd.LISTENING &&
            e?.type !== F.$pd.HANG_STATUS
            ? { type: F.$pd.PLAYING, name: k.intl.string(k.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, D.t)(W, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, w.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: i, activityGuild: n, showChannelDetails: l, renderHeaderAccessory: s } = this.props,
            o = this.activity;
        if (i || null == o) return null;
        let { name: c } = o;
        switch (o.type) {
            case F.$pd.STREAMING:
                t = k.intl.formatToPlainString(k.t.Dzgz4u, {
                    platform: [F.fg2.TWITCH, F.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : A.A.get(F.fg2.TWITCH).name,
                });
                break;
            case F.$pd.LISTENING:
                t = k.intl.formatToPlainString(k.t["5sYPnr"], { name: c });
                break;
            case F.$pd.WATCHING:
                t = k.intl.formatToPlainString(k.t.Ge29Zy, { name: c });
                break;
            case F.$pd.PLAYING:
                t = (0, V.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case F.$pd.COMPETING:
                t = k.intl.formatToPlainString(k.t.SQCo6D, { name: c });
        }
        null == n ||
            this.props.enableUserHoverActivities ||
            (t = (0, d.Lt)(o?.flags ?? 0, F.jUm.EMBEDDED)
                ? o.type === F.$pd.WATCHING
                    ? k.intl.formatToPlainString(k.t["M/L8ot"], { guildName: n.name })
                    : k.intl.formatToPlainString(k.t["4chKQu"], { guildName: n.name })
                : k.intl.formatToPlainString(k.t.sddlGK, { server: n.name })),
            o?.type === F.$pd.HANG_STATUS && (t = k.intl.string(k.t["74vS/x"]));
        let m = this.isUserActivityHoverExperiment(),
            p = l ? "text-xs/semibold" : "eyebrow";
        return (
            m && (p = "text-xs/medium"),
            (0, a.jsxs)("div", {
                className: W.headerContainer,
                children: [
                    (0, a.jsx)(_.Heading, {
                        className: r()(!m && (e ? W.headerTextEmptyBody : W.headerTextNormal)),
                        color: m ? "text-muted" : void 0,
                        variant: p,
                        children: (0, a.jsx)(u.A, { children: t }),
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, a.jsx)("div", {
            className: W.assets,
            children: (0, a.jsx)("img", {
                alt: "",
                src: A.A.get(F.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            i,
            { user: n } = this.props;
        if (e.type === F.$pd.HANG_STATUS)
            return (0, a.jsx)("div", {
                className: W.assets,
                children: (0, a.jsx)(y.A, {
                    userId: n.id,
                    hangStatusActivity: e,
                    size: 40,
                    className: r()(W.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: s } = this.props,
            { assets: o, application_id: c } = e;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, w.A)(e) && (t = Y[s]);
        let d = (0, R.A)(e),
            u =
                null != o.large_image
                    ? (0, a.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, P.uD)(c, o.large_image, t ?? [H.iu.LARGE, H.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? F.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [W.assetsLargeImageSpotify]: d,
                              },
                          ),
                      })
                    : null;
        if (d) u = (0, a.jsx)(_.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: u });
        else if ((0, L.Cy)(e)) {
            let t = (0, L.UW)(e);
            if (null == t) return null;
            u = (0, a.jsx)(f.Ay, {
                mask: f.Ay.Masks.SQUIRCLE,
                width: H.iu.SMALL,
                height: H.iu.SMALL,
                children: (0, a.jsx)("img", {
                    src: j.Ay.getGuildIconURL({ id: t.guildId, icon: o.small_image, size: H.iu.SMALL }) ?? void 0,
                    className: W.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (u = (0, a.jsxs)("div", {
                className: W.twitchImageContainer,
                children: [
                    (0, a.jsxs)("div", {
                        className: W.twitchImageOverlay,
                        children: [
                            (0, a.jsx)(_.H, { className: W.streamName, children: e.name }),
                            (0, a.jsx)("div", {
                                className: W.streamGame,
                                children: k.intl.format(k.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(_.MzZ, { className: W.twitchBackgroundImage, href: e.url, children: u }),
                ],
            })),
        (0, L.Cy)(e) ||
            null == o.small_image ||
            (i = (0, a.jsx)(_.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (e) =>
                    (0, a.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, P.uD)(c, o.small_image, [H.iu.SMALL, H.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == u ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == u)
            ? (0, a.jsx)("div", { className: W.assets, children: i })
            : (0, a.jsxs)("div", {
                  className: r()(this.props.enableUserHoverActivities && W.assetsUserActivityHover, W.assets),
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
        return null != e.assets || (0, U.A)(e) || e.type !== F.$pd.PLAYING || "ActivityFeed" === i || t.bot
            ? null
            : null == n && null != l
              ? (0, a.jsx)("div", { className: r()(W.gameIcon, W.screenshareIcon) })
              : (0, a.jsx)(v.A, { className: W.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: i, hideName: n } = this.props;
        if (n) return null;
        let { details: l, type: s } = e;
        if (s === F.$pd.CUSTOM_STATUS) return null;
        let o = (0, O.A)(e),
            c = e.name,
            d = c;
        return (s === F.$pd.HANG_STATUS
            ? (d = (0, E.Au)(t.id, e))
            : o && null != i
              ? (d = (0, a.jsx)("span", {
                    className: this.props.enableUserHoverActivities ? W.activityNameUserActivityHover : W.activityName,
                    children: d,
                }))
              : !o &&
                ((c = l),
                (d = l),
                (0, R.A)(e) && null != e.sync_id && null != l
                    ? (d = (0, a.jsx)(_.MzZ, {
                          className: W.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: l,
                      }))
                    : (0, L.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, a.jsx)(_.Text, {
                  title: c,
                  variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
                  className: r()((0, D.t)(W, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: i, state: n } = e,
            { activityGuild: l } = this.props,
            s = i,
            r = i;
        if (e.type === F.$pd.CUSTOM_STATUS) s = n;
        else if (e.type === F.$pd.HANG_STATUS && null != l)
            (s = k.intl.formatToPlainString(k.t.IAZiW2, { guildName: l.name })),
                (t = () => {
                    (0, N.u)(l.id);
                });
        else if (!(0, O.A)(e))
            if (((s = n), (r = n), (0, R.A)(e) && null != n)) {
                let t = (t, i) =>
                    (0, a.jsx)(
                        b.A,
                        {
                            artists: n,
                            linkClassName: W.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        i,
                    );
                s = k.intl.format(k.t.uU9le8, { artists: r, artistsHook: t });
            } else (0, L.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, w.A)(e) && (s = k.intl.formatToPlainString(k.t.gmCZRY, { game: s })), null != t)
              ? (0, a.jsx)(_.DUT, { onClick: t, title: r ?? void 0, className: W.clickableDetails, children: s })
              : (0, a.jsx)("div", {
                    title: r ?? void 0,
                    className: (0, w.A)(e) || (0, R.A)(e) ? W.detailsWrap : W.details,
                    children: s,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: i, channel: n } = this.props;
        return i && null != t
            ? null == n
                ? (0, a.jsx)("div", {
                      className: (0, w.A)(e) || (0, R.A)(e) ? W.detailsWrap : W.details,
                      children: k.intl.format(k.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, a.jsxs)("div", {
                      className: r()((0, w.A)(e) || (0, R.A)(e) ? W.detailsWrap : W.details, W.guildDetails),
                      children: [
                          (0, a.jsx)(T.Ay, { guild: t, size: T.Ay.Sizes.SMOL, className: W.guildIcon }),
                          (0, a.jsx)(_._BQ, { size: "xxs", color: "currentColor" }),
                          (0, a.jsxs)("div", {
                              className: W.voiceChannelInfo,
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
        if (!(0, O.A)(e) || (0, R.A)(e)) return null;
        let { timestamps: i } = e;
        return null == i
            ? null
            : (0, U.A)(e)
              ? (0, a.jsx)(z, { timestamps: i })
              : (0, a.jsx)(x.Ay, {
                    start: i.start,
                    location: this.props.enableUserHoverActivities
                        ? x.Ay.Locations.USER_ACTIVITY_VOICE_USER
                        : x.Ay.Locations.USER_ACTIVITY,
                    className: W.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, R.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: i, end: n } = t;
        return null == i || null == n
            ? null
            : (0, a.jsx)(G.A, {
                  start: i,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let i,
            { state: n, party: l, assets: s } = e,
            r = n,
            o = n;
        if (!(0, O.A)(e) && ((r = s?.large_text), (o = s?.large_text), (0, R.A)(e) && null != r)) {
            let t = (t, i) =>
                null != e.sync_id && null != o
                    ? (0, a.jsx)(_.MzZ, { className: W.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, i)
                    : o;
            r = k.intl.format(k.t.vOLBEy, { album: o, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== F.$pd.CUSTOM_STATUS) || (0, L.Cy)(e)
            ? (l?.size == null && [H.I4].includes(e.application_id ?? "")
                  ? (i = k.intl.formatToPlainString(k.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, L.Cy)(e) && l?.size != null
                    ? (i = k.intl.formatToPlainString(k.t["JC/3xw"], {
                          numSpeakers: l.size[0],
                          numListeners: l.size[1] - l.size[0],
                      }))
                    : l?.size != null &&
                      l.size.length >= 2 &&
                      (i =
                          0 === l.size[1]
                              ? k.intl.formatToPlainString(k.t.IM4J4e, { count: l.size[0] })
                              : k.intl.formatToPlainString(k.t["u//9By"], { count: l.size[0], max: l.size[1] })),
              (0, a.jsxs)("div", {
                  className: W.state,
                  children: [
                      (0, a.jsx)("span", { title: o, children: r }),
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
                onClose: s,
                onOpenGameProfileModal: o,
            } = this.props,
            c = this.activity;
        if (null == c || c.type === F.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            m = !1;
        if ((0, M.A)(c)) (e = this.renderXboxImage()), (m = !0);
        else {
            let t = (0, C.Gf)(this.props.user.id, c ?? void 0);
            t.isSpotify || (e = (0, a.jsx)(C.Tf, { resolvedActivity: t })),
                null == e && (m = null != (e = this.renderGameImage(c)));
        }
        let p = this.renderName(c),
            h = this.renderDetails(c),
            A = this.renderState(c, l),
            f = this.renderTimePlayed(c),
            v = this.renderChannelDetails(c),
            S = null != i ? i() : null,
            I = this.renderTimeBar(c),
            T = ![e, p, h, A, f, I, S].some((e) => null != e);
        return (0, a.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(T),
                (0, a.jsx)("div", {
                    className: r()(
                        m ? W.bodyAlignCenter : W.bodyNormal,
                        this.props.enableUserHoverActivities && W.activityVoiceChannelUserHover,
                    ),
                    children: (0, a.jsxs)("div", {
                        className: W.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, a.jsxs)(g.A.Child, {
                                      className: r()(
                                          (0, D.t)(
                                              W,
                                              "content",
                                              m ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, a.jsxs)(_.DUT, {
                                              className: r()(null != o && W.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), s?.();
                                                        }
                                                      : void 0,
                                              children: [p, h, A, f],
                                          }),
                                          v,
                                          u ? null : I,
                                          d ? S : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                u ? S : null,
                (0, a.jsx)($, { activity: c }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: e, onOpenSpotifyTrack: t } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e);
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: i, user: n } = this.props;
        c()(null != t, "Spotify activity was null"), i?.(t, n.id, e);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: i } = this.props;
        c()(null != e, "Spotify activity was null"), t?.(e, i.id);
    };
}
let K = (e) => {
    let t = (0, I.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: S.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, a.jsx)(J, { ...e, onOpenGameProfileModal: t });
};
K.Types = B;
let q = K;
