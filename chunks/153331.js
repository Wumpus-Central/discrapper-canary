n.d(e, { A: () => Z, O: () => k }), n(938796);
var i,
    l = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    d = n.n(o),
    u = n(665260),
    c = n(3026),
    A = n(582754),
    p = n(397927),
    m = n(492684),
    h = n(736653),
    g = n(573648),
    f = n(235986),
    E = n(573435),
    C = n(769015),
    S = n(409626),
    T = n(692969),
    v = n(263063),
    y = n(886019),
    x = n(559405),
    N = n(290987),
    _ = n(345942),
    I = n(763758),
    j = n(82149),
    P = n(139675),
    U = n(486020),
    L = n(821589),
    R = n(474447),
    D = n(682261),
    O = n(672979),
    M = n(90644),
    b = n(61330),
    H = n(960076),
    G = n(432166),
    F = n(360469),
    w = n(652215),
    W = n(985018),
    V = n(332621),
    k =
        (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
        (i.STREAM_PREVIEW = "StreamPreview"),
        (i.VOICE_CHANNEL = "VoiceChannel"),
        i);
let B = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    Y = (0, m.A)(
        class extends r.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: V.timestamp, children: this.props.message });
            }
        },
    );
function z(t) {
    let { activity: e } = t,
        n = (0, h.Ay)(),
        i = (function (t) {
            let { activity: e } = t,
                n = null;
            return (
                (0, M.A)(e) && (n = w.fg2.SPOTIFY),
                null != e.platform && [w.yTV.PS4, w.yTV.PS5].includes(e.platform) && (n = w.fg2.PLAYSTATION),
                n
            );
        })({ activity: e });
    if (null == i) return null;
    let r = g.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, A.qB)(n) ? r.icon.lightSVG : r.icon.darkSVG,
        className: V.platformIcon,
    });
}
class J extends r.PureComponent {
    static Types = k;
    get activity() {
        let { activity: t, activityGuild: e } = this.props;
        return null != e &&
            t?.type !== w.$pd.PLAYING &&
            t?.type !== w.$pd.WATCHING &&
            t?.type !== w.$pd.LISTENING &&
            t?.type !== w.$pd.HANG_STATUS
            ? { type: w.$pd.PLAYING, name: W.intl.string(W.t.eXan7B) }
            : t;
    }
    getTypeClass(t, e) {
        return (0, L.t)(V, t, this.props.type, e);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, H.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    isUserActivityHoverExperiment() {
        return this.props.enableUserHoverActivities && "VoiceChannel" === this.props.type;
    }
    renderHeader(t) {
        let e,
            { hideHeader: n, activityGuild: i, showChannelDetails: r, renderHeaderAccessory: a } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: d } = o;
        switch (o.type) {
            case w.$pd.STREAMING:
                e = W.intl.formatToPlainString(W.t.Dzgz4u, {
                    platform: [w.fg2.TWITCH, w.fg2.YOUTUBE].includes(d.toLowerCase()) ? d : g.A.get(w.fg2.TWITCH).name,
                });
                break;
            case w.$pd.LISTENING:
                e = W.intl.formatToPlainString(W.t["5sYPnr"], { name: d });
                break;
            case w.$pd.WATCHING:
                e = W.intl.formatToPlainString(W.t.Ge29Zy, { name: d });
                break;
            case w.$pd.PLAYING:
                e = (0, R.A)(o, this.props.type, this.props.enableUserHoverActivities);
                break;
            case w.$pd.COMPETING:
                e = W.intl.formatToPlainString(W.t.SQCo6D, { name: d });
        }
        null == i ||
            this.props.enableUserHoverActivities ||
            (e = (0, u.Lt)(o?.flags ?? 0, w.jUm.EMBEDDED)
                ? o.type === w.$pd.WATCHING
                    ? W.intl.formatToPlainString(W.t["M/L8ot"], { guildName: i.name })
                    : W.intl.formatToPlainString(W.t["4chKQu"], { guildName: i.name })
                : W.intl.formatToPlainString(W.t.sddlGK, { server: i.name })),
            o?.type === w.$pd.HANG_STATUS && (e = W.intl.string(W.t["74vS/x"]));
        let A = this.isUserActivityHoverExperiment(),
            m = r ? "text-xs/semibold" : "eyebrow";
        return (
            A && (m = "text-xs/medium"),
            (0, l.jsxs)("div", {
                className: V.headerContainer,
                children: [
                    (0, l.jsx)(p.Heading, {
                        className: s()(!A && (t ? V.headerTextEmptyBody : V.headerTextNormal)),
                        color: A ? "text-muted" : void 0,
                        variant: m,
                        children: (0, l.jsx)(c.A, { children: e }),
                    }),
                    a?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)("div", {
            className: V.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: g.A.get(w.fg2.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(t) {
        let e,
            n,
            { user: i } = this.props;
        if (t.type === w.$pd.HANG_STATUS)
            return (0, l.jsx)("div", {
                className: V.assets,
                children: (0, l.jsx)(x.A, {
                    userId: i.id,
                    hangStatusActivity: t,
                    size: 40,
                    className: s()(V.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage")),
                }),
            });
        let { type: a } = this.props,
            { assets: o, application_id: d } = t;
        if (null == o || (null == o.large_image && null == o.small_image)) return null;
        (0, H.A)(t) && (e = B[a]);
        let u = (0, M.A)(t),
            c =
                null != o.large_image
                    ? (0, l.jsx)("img", {
                          alt: o.large_text ?? "",
                          src: (0, P.uD)(d, o.large_image, e ?? [F.iu.LARGE, F.iu.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? w.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != o.small_image,
                                  [V.assetsLargeImageSpotify]: u,
                              },
                          ),
                      })
                    : null;
        if (u) c = (0, l.jsx)(p.MzZ, { onClick: this.handleOpenSpotifyAlbum, children: c });
        else if ((0, j.Cy)(t)) {
            let e = (0, j.UW)(t);
            if (null == e) return null;
            c = (0, l.jsx)(E.Ay, {
                mask: E.Ay.Masks.SQUIRCLE,
                width: F.iu.SMALL,
                height: F.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: U.Ay.getGuildIconURL({ id: e.guildId, icon: o.small_image, size: F.iu.SMALL }) ?? void 0,
                    className: V.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != t.url &&
            "" !== t.url &&
            (c = (0, l.jsxs)("div", {
                className: V.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: V.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(p.H, { className: V.streamName, children: t.name }),
                            (0, l.jsx)("div", {
                                className: V.streamGame,
                                children: W.intl.format(W.t.gmCZRY, { game: t.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(p.MzZ, { className: V.twitchBackgroundImage, href: t.url, children: c }),
                ],
            })),
        (0, j.Cy)(t) ||
            null == o.small_image ||
            (n = (0, l.jsx)(p.STz, {
                text: "" !== o.small_text ? o.small_text : null,
                position: "top",
                children: (t) =>
                    (0, l.jsx)("img", {
                        alt: o.small_text ?? "",
                        src: (0, P.uD)(d, o.small_image, [F.iu.SMALL, F.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == c ? "WithoutLargeImage" : void 0),
                        ...t,
                    }),
            })),
        null == c)
            ? (0, l.jsx)("div", { className: V.assets, children: n })
            : (0, l.jsxs)("div", {
                  className: s()(this.props.enableUserHoverActivities && V.assetsUserActivityHover, V.assets),
                  children: [
                      (0, l.jsx)(p.STz, {
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
        return null != t.assets || (0, D.A)(t) || t.type !== w.$pd.PLAYING || "ActivityFeed" === n || e.bot
            ? null
            : null == i && null != r
              ? (0, l.jsx)("div", { className: s()(V.gameIcon, V.screenshareIcon) })
              : (0, l.jsx)(C.A, { className: V.gameIcon, game: i });
    }
    renderName(t) {
        let { user: e, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: r, type: a } = t;
        if (a === w.$pd.CUSTOM_STATUS) return null;
        let o = (0, O.A)(t),
            d = t.name,
            u = d;
        return (a === w.$pd.HANG_STATUS
            ? (u = (0, y.Au)(e.id, t))
            : o && null != n
              ? (u = (0, l.jsx)("span", {
                    className: this.props.enableUserHoverActivities ? V.activityNameUserActivityHover : V.activityName,
                    children: u,
                }))
              : !o &&
                ((d = r),
                (u = r),
                (0, M.A)(t) && null != t.sync_id && null != r
                    ? (u = (0, l.jsx)(p.MzZ, {
                          className: V.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: r,
                      }))
                    : (0, j.Cy)(t) && (u = t.name)),
        null == u)
            ? null
            : (0, l.jsx)(p.Text, {
                  title: d,
                  variant: this.props.enableUserHoverActivities ? "text-sm/normal" : "text-sm/semibold",
                  className: s()((0, L.t)(V, "name", e.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(t) {
        let e,
            { details: n, state: i } = t,
            { activityGuild: r } = this.props,
            a = n,
            s = n;
        if (t.type === w.$pd.CUSTOM_STATUS) a = i;
        else if (t.type === w.$pd.HANG_STATUS && null != r)
            (a = W.intl.formatToPlainString(W.t.IAZiW2, { guildName: r.name })),
                (e = () => {
                    (0, _.u)(r.id);
                });
        else if (!(0, O.A)(t))
            if (((a = i), (s = i), (0, M.A)(t) && null != i)) {
                let e = (e, n) =>
                    (0, l.jsx)(
                        I.A,
                        {
                            artists: i,
                            linkClassName: V.bodyLink,
                            canOpen: null != t.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = W.intl.format(W.t.uU9le8, { artists: s, artistsHook: e });
            } else (0, j.Cy)(t) && (a = t.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, H.A)(t) && (a = W.intl.formatToPlainString(W.t.gmCZRY, { game: a })), null != e)
              ? (0, l.jsx)(p.DUT, { onClick: e, title: s ?? void 0, className: V.clickableDetails, children: a })
              : (0, l.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, H.A)(t) || (0, M.A)(t) ? V.detailsWrap : V.details,
                    children: a,
                });
    }
    renderChannelDetails(t) {
        let { activityGuild: e, showChannelDetails: n, channel: i } = this.props;
        return n && null != e
            ? null == i
                ? (0, l.jsx)("div", {
                      className: (0, H.A)(t) || (0, M.A)(t) ? V.detailsWrap : V.details,
                      children: W.intl.format(W.t["hq/Qze"], { guildName: e.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: s()((0, H.A)(t) || (0, M.A)(t) ? V.detailsWrap : V.details, V.guildDetails),
                      children: [
                          (0, l.jsx)(v.Ay, { guild: e, size: v.Ay.Sizes.SMOL, className: V.guildIcon }),
                          (0, l.jsx)(p._BQ, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: V.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(p.HKD, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(p.Text, { variant: "text-xs/normal", children: i?.name }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(t) {
        let { activityGuild: e } = this.props;
        if (!(0, O.A)(t) || (0, M.A)(t)) return null;
        let { timestamps: n } = t;
        return null == n
            ? null
            : (0, D.A)(t)
              ? (0, l.jsx)(Y, { timestamps: n })
              : (0, l.jsx)(N.Ay, {
                    start: n.start,
                    location: N.Ay.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != e,
                    enableUserHoverActivities: this.props.enableUserHoverActivities,
                });
    }
    renderTimeBar(t) {
        if (!(0, M.A)(t)) return null;
        let { timestamps: e } = t;
        if (null == e) return null;
        let { start: n, end: i } = e;
        return null == n || null == i
            ? null
            : (0, l.jsx)(G.A, {
                  start: n,
                  end: i,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(t, e) {
        let n,
            { state: i, party: r, assets: a } = t,
            s = i,
            o = i;
        if (!(0, O.A)(t) && ((s = a?.large_text), (o = a?.large_text), (0, M.A)(t) && null != s)) {
            let e = (e, n) =>
                null != t.sync_id && null != o
                    ? (0, l.jsx)(p.MzZ, { className: V.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o }, n)
                    : o;
            s = W.intl.format(W.t.vOLBEy, { album: o, albumHook: e });
        }
        return (null != s && "" !== s && t.type !== w.$pd.CUSTOM_STATUS) || (0, j.Cy)(t)
            ? (r?.size == null && [F.I4].includes(t.application_id ?? "")
                  ? (n = W.intl.formatToPlainString(W.t["u//9By"], { count: "0", max: e?.getMaxParticipants() ?? 0 }))
                  : (0, j.Cy)(t) && r?.size != null
                    ? (n = W.intl.formatToPlainString(W.t["JC/3xw"], {
                          numSpeakers: r.size[0],
                          numListeners: r.size[1] - r.size[0],
                      }))
                    : r?.size != null &&
                      r.size.length >= 2 &&
                      (n =
                          0 === r.size[1]
                              ? W.intl.formatToPlainString(W.t.IM4J4e, { count: r.size[0] })
                              : W.intl.formatToPlainString(W.t["u//9By"], { count: r.size[0], max: r.size[1] })),
              (0, l.jsxs)("div", {
                  className: V.state,
                  children: [
                      (0, l.jsx)("span", { title: o, children: s }),
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
                onClose: a,
                onOpenGameProfileModal: o,
            } = this.props,
            d = this.activity;
        if (null == d || d.type === w.$pd.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === e,
            c = "StreamPreview" === e,
            A = !1;
        (0, b.A)(d)
            ? ((t = this.renderXboxImage()), (A = !0))
            : null == (t = this.renderImage(d)) && (A = null != (t = this.renderGameImage(d)));
        let m = this.renderName(d),
            h = this.renderDetails(d),
            g = this.renderState(d, r),
            E = this.renderTimePlayed(d),
            C = this.renderChannelDetails(d),
            S = null != n ? n() : null,
            T = this.renderTimeBar(d),
            v = ![t, m, h, g, E, T, S].some((t) => null != t);
        return (0, l.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), i),
            children: [
                this.renderHeader(v),
                (0, l.jsx)("div", {
                    className: s()(
                        A ? V.bodyAlignCenter : V.bodyNormal,
                        this.props.enableUserHoverActivities && V.activityVoiceChannelUserHover,
                    ),
                    children: (0, l.jsxs)("div", {
                        className: V.activityDetails,
                        children: [
                            t,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(f.A.Child, {
                                      className: s()(
                                          (0, L.t)(
                                              V,
                                              "content",
                                              A ? "GameImage" : null != t ? "Images" : "NoImages",
                                              e,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(p.DUT, {
                                              className: s()(null != o && V.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (t) => {
                                                            o(t), a?.();
                                                        }
                                                      : void 0,
                                              children: [m, h, g, E],
                                          }),
                                          C,
                                          c ? null : T,
                                          u ? S : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                c ? S : null,
                (0, l.jsx)(z, { activity: d }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: t, onOpenSpotifyTrack: e } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t);
    };
    handleOpenSpotifyArtist = (t) => {
        let { activity: e, onOpenSpotifyArtist: n, user: i } = this.props;
        d()(null != e, "Spotify activity was null"), n?.(e, i.id, t);
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: t, onOpenSpotifyAlbum: e, user: n } = this.props;
        d()(null != t, "Spotify activity was null"), e?.(t, n.id);
    };
}
let $ = (t) => {
    let e = (0, T.A)({
        location: "UserActivity",
        applicationId: t.application?.id ?? t.activity?.application_id,
        source: S.Ob.UserProfile,
        sourceUserId: t.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(J, { ...t, onOpenGameProfileModal: e });
};
$.Types = k;
let Z = $;
