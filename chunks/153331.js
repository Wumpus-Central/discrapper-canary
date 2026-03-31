i.d(e, { A: () => K, O: () => W }), i(938796);
var n,
    l = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    o = i(284009),
    d = i.n(o),
    u = i(665260),
    c = i(3026),
    m = i(582754),
    A = i(397927),
    h = i(492684),
    p = i(736653),
    g = i(573648),
    f = i(235986),
    T = i(573435),
    S = i(769015),
    E = i(409626),
    C = i(692969),
    v = i(263063),
    I = i(886019),
    _ = i(559405),
    x = i(290987),
    N = i(345942),
    y = i(763758),
    j = i(82149),
    D = i(139675),
    O = i(486020),
    P = i(821589),
    U = i(682261),
    L = i(672979),
    R = i(90644),
    M = i(61330),
    b = i(960076),
    G = i(139902),
    V = i(432166),
    H = i(360469),
    w = i(652215),
    F = i(985018),
    B = i(962877),
    W =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let k = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    Y = (0, h.A)(
        class extends r.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: B.timestamp, children: this.props.message });
            }
        },
    );
function z(t) {
    let { activity: e } = t,
        i = (0, p.Ay)(),
        n = (function (t) {
            let { activity: e } = t,
                i = null;
            return (
                (0, R.A)(e) && (i = w.fg2.SPOTIFY),
                null != e.platform && [w.yTV.PS4, w.yTV.PS5].includes(e.platform) && (i = w.fg2.PLAYSTATION),
                i
            );
        })({ activity: e });
    if (null == n) return null;
    let r = g.A.get(n);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, m.qB)(i) ? r.icon.lightSVG : r.icon.darkSVG,
        className: B.platformIcon,
    });
}
class $ extends r.PureComponent {
    static Types = W;
    get activity() {
        let { activity: t, activityGuild: e } = this.props;
        return null != e &&
            t?.type !== w.$pd.PLAYING &&
            t?.type !== w.$pd.WATCHING &&
            t?.type !== w.$pd.LISTENING &&
            t?.type !== w.$pd.HANG_STATUS
            ? { type: w.$pd.PLAYING, name: F.intl.string(F.t.eXan7B) }
            : t;
    }
    getTypeClass(t, e) {
        return (0, P.t)(B, t, this.props.type, e);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, b.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type;
    }
    renderHeader(t) {
        let e,
            { hideHeader: i, activityGuild: n, showChannelDetails: r, renderHeaderAccessory: s } = this.props,
            o = this.activity;
        if (i || null == o) return null;
        let { name: d } = o;
        switch (o.type) {
            case w.$pd.STREAMING:
                e = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [w.fg2.TWITCH, w.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : g.A.get(w.fg2.TWITCH).name,
                });
                break;
            case w.$pd.LISTENING:
                e = F.intl.formatToPlainString(F.t["5sYPnr"], { name: d });
                break;
            case w.$pd.WATCHING:
                e = F.intl.formatToPlainString(F.t.Ge29Zy, { name: d });
                break;
            case w.$pd.PLAYING:
                e = (0, G.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case w.$pd.COMPETING:
                e = F.intl.formatToPlainString(F.t.SQCo6D, { name: d });
        }
        null == n ||
            this.props.enableUserHoverActivities ||
            (e = (0, u.Lt)(o?.flags ?? 0, w.jUm.EMBEDDED)
                ? o.type === w.$pd.WATCHING
                    ? F.intl.formatToPlainString(F.t["M/L8ot"], { guildName: n.name })
                    : F.intl.formatToPlainString(F.t["4chKQu"], { guildName: n.name })
                : F.intl.formatToPlainString(F.t.sddlGK, { server: n.name })),
            o?.type === w.$pd.HANG_STATUS && (e = F.intl.string(F.t["74vS/x"]));
        let m = this.isUserActivityHoverExperiment(),
            h = r ? "text-xs/semibold" : "eyebrow";
        return (
            m && (h = "text-xs/medium"),
            (0, l.jsxs)("div", {
                className: B.headerContainer,
                children: [
                    (0, l.jsx)(A.Heading, {
                        className: a()(!m && (t ? B.headerTextEmptyBody : B.headerTextNormal)),
                        color: m ? "text-muted" : void 0,
                        variant: h,
                        children: (0, l.jsx)(c.A, { children: e }),
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: B.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(w.fg2.XBOX).icon.customPNG,
                className: a()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(t) {
        let e,
            i,
            { user: n } = this.props;
        if (t.type === w.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: B.assets,
                children: (0, l.jsx)(_.A, {
                    userId: n.id,
                    hangStatusActivity: t,
                    size: 40,
                    className: a()(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: s } = this.props,
            { assets: o, application_id: d } = t;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, b.A)(t) && (e = k[s]);
        let u = (0, R.A)(t),
            c =
                null != o.large_image
                    ? (0, l.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, D.uD)(d, o.large_image, e ?? [H.iu.LARGE, H.iu.LARGE]),
                          className: a()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? w.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [B.assetsLargeImageSpotify]: u,
                              },
                          ),
                      })
                    : null;
        if (u) c = (0, l.jsx)(A.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: c });
        else if ((0, j.Cy)(t)) {
            let e = (0, j.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: H.iu.SMALL,
                height: H.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: O.Ay.getGuildIconURL({ id: e.guildId, icon: o.small_image, size: H.iu.SMALL }) ?? void 0,
                    className: B.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != t.url &&
            "" !== t.url &&
            (c = (0, l.jsxs)("div", {
                className: B.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: B.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(A.H, { className: B.streamName, children: t.name }),
                            (0, l.jsx)("div", {
                                className: B.streamGame,
                                children: F.intl.format(F.t.gmCZRY, { game: t.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(A.MzZ, { className: B.twitchBackgroundImage, href: t.url, children: c }),
                ],
            })),
        (0, j.Cy)(t) ||
            null == o.small_image ||
            (i = (0, l.jsx)(A.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (t) =>
                    (0, l.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, D.uD)(d, o.small_image, [H.iu.SMALL, H.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                        ...t,
                    }),
            })),
        null == c)
            ? (0, l.jsx)("div", { className: B.assets, children: i })
            : (0, l.jsxs)("div", {
                  className: a()(this.props.enableUserHoverActivities && B.assetsUserActivityHover, B.assets),
                  children: [
                      (0, l.jsx)(A.STz, {
                          text: null != o.large_text ? o.large_text : null,
                          position: "top",
                          children: (t) => {
                              let { onMouseEnter: e, onMouseLeave: i } = t;
                              return null != c ? r.cloneElement(c, { onMouseEnter: e, onMouseLeave: i }) : null;
                          },
                      }),
                      i,
                  ],
              });
    }
    renderGameImage(t) {
        let { user: e, type: i, application: n, activityGuild: r } = this.props;
        return null != t.assets || (0, U.A)(t) || t.type !== w.$pd.PLAYING || "ActivityFeed" === i || e.bot
            ? null
            : null == n && null != r
              ? (0, l.jsx)("div", { className: a()(B.gameIcon, B.screenshareIcon) })
              : (0, l.jsx)(S.A, { className: B.gameIcon, game: n });
    }
    renderName(t) {
        let { user: e, application: i, hideName: n } = this.props;
        if (n) return null;
        let { details: r, type: s } = t;
        if (s === w.$pd.CUSTOM_STATUS) return null;
        let o = (0, L.A)(t),
            d = t.name,
            u = d;
        return (s === w.$pd.HANG_STATUS
            ? (u = (0, I.Au)(e.id, t))
            : o && null != i
              ? (u = (0, l.jsx)("span", {
                    className: this.props.enableUserHoverActivities ? B.activityNameUserActivityHover : B.activityName,
                    children: u,
                }))
              : !o &&
                ((d = r),
                (u = r),
                (0, R.A)(t) && null != t.sync_id && null != r
                    ? (u = (0, l.jsx)(A.MzZ, {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: r,
                      }))
                    : (0, j.Cy)(t) && (u = t.name)),
        null == u)
            ? null
            : (0, l.jsx)(A.Text, {
                  title: d,
                  variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
                  className: a()((0, P.t)(B, "name", e.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(t) {
        let e,
            { details: i, state: n } = t,
            { activityGuild: r } = this.props,
            s = i,
            a = i;
        if (t.type === w.$pd.CUSTOM_STATUS) s = n;
        else if (t.type === w.$pd.HANG_STATUS && null != r)
            (s = F.intl.formatToPlainString(F.t.IAZiW2, { guildName: r.name })),
                (e = () => {
                    (0, N.u)(r.id);
                });
        else if (!(0, L.A)(t))
            if (((s = n), (a = n), (0, R.A)(t) && null != n)) {
                let e = (e, i) =>
                    (0, l.jsx)(
                        y.A,
                        {
                            artists: n,
                            linkClassName: B.bodyLink,
                            canOpen: null != t.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        i,
                    );
                s = F.intl.format(F.t.uU9le8, { artists: a, artistsHook: e });
            } else (0, j.Cy)(t) && (s = t.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, b.A)(t) && (s = F.intl.formatToPlainString(F.t.gmCZRY, { game: s })), null != e)
              ? (0, l.jsx)(A.DUT, { onClick: e, title: a ?? void 0, className: B.clickableDetails, children: s })
              : (0, l.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, b.A)(t) || (0, R.A)(t) ? B.detailsWrap : B.details,
                    children: s,
                });
    }
    renderChannelDetails(t) {
        let { activityGuild: e, showChannelDetails: i, channel: n } = this.props;
        return i && null != e
            ? null == n
                ? (0, l.jsx)("div", {
                      className: (0, b.A)(t) || (0, R.A)(t) ? B.detailsWrap : B.details,
                      children: F.intl.format(F.t["hq/Qze"], { guildName: e.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: a()((0, b.A)(t) || (0, R.A)(t) ? B.detailsWrap : B.details, B.guildDetails),
                      children: [
                          (0, l.jsx)(v.Ay, { guild: e, size: v.Ay.Sizes.SMOL, className: B.guildIcon }),
                          (0, l.jsx)(A._BQ, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: B.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(A.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(A.Text, { variant: "text-xs/normal", children: n?.name }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(t) {
        let { activityGuild: e } = this.props;
        if (!(0, L.A)(t) || (0, R.A)(t)) return null;
        let { timestamps: i } = t;
        return null == i
            ? null
            : (0, U.A)(t)
              ? (0, l.jsx)(Y, { timestamps: i })
              : (0, l.jsx)(x.Ay, {
                    start: i.start,
                    location: this.props.enableUserHoverActivities
                        ? x.Ay.Locations.USER_ACTIVITY_VOICE_USER
                        : x.Ay.Locations.USER_ACTIVITY,
                    className: B.playTime,
                    isApplicationStreaming: null != e,
                });
    }
    renderTimeBar(t) {
        if (!(0, R.A)(t)) return null;
        let { timestamps: e } = t;
        if (null == e) return null;
        let { start: i, end: n } = e;
        return null == i || null == n
            ? null
            : (0, l.jsx)(V.A, {
                  start: i,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(t, e) {
        let i,
            { state: n, party: r, assets: s } = t,
            a = n,
            o = n;
        if (!(0, L.A)(t) && ((a = s?.large_text), (o = s?.large_text), (0, R.A)(t) && null != a)) {
            let e = (e, i) =>
                null != t.sync_id && null != o
                    ? (0, l.jsx)(A.MzZ, { className: B.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, i)
                    : o;
            a = F.intl.format(F.t.vOLBEy, { album: o, albumHook: e });
        }
        return (null != a && "" !== a && t.type !== w.$pd.CUSTOM_STATUS) || (0, j.Cy)(t)
            ? (r?.size == null && [H.I4].includes(t.application_id ?? "")
                  ? (i = F.intl.formatToPlainString(F.t["u//9By"], { count: "0", max: e?.getMaxParticipants() ?? 0 }))
                  : (0, j.Cy)(t) && r?.size != null
                    ? (i = F.intl.formatToPlainString(F.t["JC/3xw"], {
                          numSpeakers: r.size[0],
                          numListeners: r.size[1] - r.size[0],
                      }))
                    : r?.size != null &&
                      r.size.length >= 2 &&
                      (i =
                          0 === r.size[1]
                              ? F.intl.formatToPlainString(F.t.IM4J4e, { count: r.size[0] })
                              : F.intl.formatToPlainString(F.t["u//9By"], { count: r.size[0], max: r.size[1] })),
              (0, l.jsxs)("div", {
                  className: B.state,
                  children: [
                      (0, l.jsx)("span", { title: o, children: a }),
                      null != i ? (0, l.jsxs)("span", { children: [" ", i] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let t,
            {
                type: e,
                renderActions: i,
                className: n,
                application: r,
                onClose: s,
                onOpenGameProfileModal: o,
            } = this.props,
            d = this.activity;
        if (null == d || d.type === w.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            m = !1;
        (0, M.A)(d)
            ? ((t = this.renderXboxImage()), (m = !0))
            : null == (t = this.renderImage(d)) && (m = null != (t = this.renderGameImage(d)));
        let h = this.renderName(d),
            p = this.renderDetails(d),
            g = this.renderState(d, r),
            T = this.renderTimePlayed(d),
            S = this.renderChannelDetails(d),
            E = null != i ? i() : null,
            C = this.renderTimeBar(d),
            v = ![t, h, p, g, T, C, E].some((t) => null != t);
        return (0, l.jsxs)("div", {
            className: a()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(v),
                (0, l.jsx)("div", {
                    className: a()(
                        m ? B.bodyAlignCenter : B.bodyNormal,
                        this.props.enableUserHoverActivities && B.activityVoiceChannelUserHover,
                    ),
                    children: (0, l.jsxs)("div", {
                        className: B.activityDetails,
                        children: [
                            t,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(f.A.Child, {
                                      className: a()(
                                          (0, P.t)(
                                              B,
                                              "content",
                                              m ? "GameImage" : null != t ? "Images" : "NoImages",
                                              e,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(A.DUT, {
                                              className: a()(null != o && B.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (t) => {
                                                            o(t), s?.();
                                                        }
                                                      : void 0,
                                              children: [h, p, g, T],
                                          }),
                                          S,
                                          c ? null : C,
                                          u ? E : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                c ? E : null,
                (0, l.jsx)(z, { activity: d }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: t, onOpenSpotifyTrack: e } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t);
    };
    handleOpenSpotifyArtist = (t) => {
        let { activity: e, onOpenSpotifyArtist: i, user: n } = this.props;
        d()(null != e, "Spotify activity was null"), i?.(e, n.id, t);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: t, onOpenSpotifyAlbum: e, user: i } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t, i.id);
    };
}
let J = (t) => {
    let e = (0, C.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: E.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)($, { ...t, onOpenGameProfileModal: e });
};
J.Types = W;
let K = J;
