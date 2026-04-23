n.d(t, { A: () => ei, O: () => Z }), n(938796);
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(284009),
    c = n.n(o),
    d = n(665260),
    u = n(3026),
    h = n(462887),
    m = n(534514),
    A = n(349288),
    g = n(707554),
    _ = n(781696),
    p = n(834730),
    f = n(939249),
    E = n(320448),
    C = n(983851),
    x = n(492684),
    S = n(736653),
    I = n(573648),
    v = n(47167),
    N = n(235986),
    T = n(573435),
    y = n(769015),
    b = n(409626),
    j = n(692969),
    R = n(263063),
    M = n(804630),
    L = n(290987),
    D = n(763758),
    P = n(82149),
    O = n(994500),
    w = n(287809),
    U = n(139675),
    k = n(486020),
    G = n(821589),
    F = n(682261),
    H = n(672979),
    B = n(90644),
    V = n(61330),
    W = n(960076),
    z = n(139902),
    K = n(432166),
    Y = n(360469),
    q = n(652215),
    J = n(985018),
    $ = n(514146),
    Z =
        (((i = {}).ACTIVITY_FEED = "ActivityFeed"),
        (i.STREAM_PREVIEW = "StreamPreview"),
        (i.VOICE_CHANNEL = "VoiceChannel"),
        i);
let X = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    Q = (0, x.A)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)("div", { className: $.timestamp, children: this.props.message });
            }
        },
    );
function ee(e) {
    let { activity: t } = e,
        n = (0, S.Ay)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (
                (0, B.A)(t) && (n = q.fg2.SPOTIFY),
                null != t.platform && [q.yTV.PS4, q.yTV.PS5].includes(t.platform) && (n = q.fg2.PLAYSTATION),
                n
            );
        })({ activity: t });
    if (null == i) return null;
    let a = I.A.get(i);
    return (0, l.jsx)("img", {
        alt: "",
        src: (0, h.q)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: $.platformIcon,
    });
}
class et extends a.PureComponent {
    static Types = Z;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== q.$pd.PLAYING &&
            e?.type !== q.$pd.WATCHING &&
            e?.type !== q.$pd.LISTENING &&
            e?.type !== q.$pd.HANG_STATUS
            ? { type: q.$pd.PLAYING, name: J.intl.string(J.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, G.t)($, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, W.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: i, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            r = this.activity;
        if (n || null == r) return null;
        let { name: o } = r;
        switch (r.type) {
            case q.$pd.STREAMING:
                t = J.intl.formatToPlainString(J.t.Dzgz4u, {
                    platform: [q.fg2.TWITCH, q.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : I.A.get(q.fg2.TWITCH).name,
                });
                break;
            case q.$pd.LISTENING:
                t = J.intl.formatToPlainString(J.t["5sYPnr"], { name: o });
                break;
            case q.$pd.WATCHING:
                t = J.intl.formatToPlainString(J.t.Ge29Zy, { name: o });
                break;
            case q.$pd.PLAYING:
                t = (0, z.A)(r);
                break;
            case q.$pd.COMPETING:
                t = J.intl.formatToPlainString(J.t.SQCo6D, { name: o });
        }
        return (
            null != i &&
                (t = (0, d.Lt)(r?.flags ?? 0, q.jUm.EMBEDDED)
                    ? r.type === q.$pd.WATCHING
                        ? J.intl.formatToPlainString(J.t["M/L8ot"], { guildName: i.name })
                        : J.intl.formatToPlainString(J.t["4chKQu"], { guildName: i.name })
                    : J.intl.formatToPlainString(J.t.sddlGK, { server: i.name })),
            (0, l.jsxs)("div", {
                className: $.headerContainer,
                children: [
                    (0, l.jsx)(m.D, {
                        className: e ? $.headerTextEmptyBody : $.headerTextNormal,
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
            className: $.assets,
            children: (0, l.jsx)("img", {
                alt: "",
                src: I.A.get(q.fg2.XBOX).icon.customPNG,
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
        (0, W.A)(e) && (t = X[i]);
        let c = (0, B.A)(e),
            d =
                null != s.large_image
                    ? (0, l.jsx)("img", {
                          alt: s.large_text ?? "",
                          src: (0, U.uD)(o, s.large_image, t ?? [Y.iu.LARGE, Y.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? q.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != s.small_image,
                                  [$.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) d = (0, l.jsx)(A.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: d });
        else if ((0, P.Cy)(e)) {
            let t = (0, P.UW)(e);
            if (null == t) return null;
            d = (0, l.jsx)(T.Ay, {
                mask: T.Ay.Masks.SQUIRCLE,
                width: Y.iu.SMALL,
                height: Y.iu.SMALL,
                children: (0, l.jsx)("img", {
                    src: k.Ay.getGuildIconURL({ id: t.guildId, icon: s.small_image, size: Y.iu.SMALL }) ?? void 0,
                    className: $.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (d = (0, l.jsxs)("div", {
                className: $.twitchImageContainer,
                children: [
                    (0, l.jsxs)("div", {
                        className: $.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(g.H, { className: $.streamName, children: e.name }),
                            (0, l.jsx)("div", {
                                className: $.streamGame,
                                children: J.intl.format(J.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(A.Anchor, { className: $.twitchBackgroundImage, href: e.url, children: d }),
                ],
            })),
        (0, P.Cy)(e) ||
            null == s.small_image ||
            (n = (0, l.jsx)(_.ST, {
                text: "" !== s.small_text ? s.small_text : null,
                position: "top",
                children: (e) =>
                    (0, l.jsx)("img", {
                        alt: s.small_text ?? "",
                        src: (0, U.uD)(o, s.small_image, [Y.iu.SMALL, Y.iu.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == d ? "WithoutLargeImage" : void 0),
                        ...e,
                    }),
            })),
        null == d)
            ? (0, l.jsx)("div", { className: $.assets, children: n })
            : (0, l.jsxs)("div", {
                  className: $.assets,
                  children: [
                      (0, l.jsx)(_.ST, {
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
        return null != e.assets || (0, F.A)(e) || e.type !== q.$pd.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == i && null != a
              ? (0, l.jsx)("div", { className: r()($.gameIcon, $.screenshareIcon) })
              : (0, l.jsx)(y.A, { className: $.gameIcon, game: i });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: a, type: s } = e;
        if (s === q.$pd.CUSTOM_STATUS) return null;
        let o = (0, H.A)(e),
            c = e.name,
            d = c;
        return (o && null != n
            ? (d = (0, l.jsx)("span", { className: $.activityName, children: d }))
            : !o &&
              ((c = a),
              (d = a),
              (0, B.A)(e) && null != e.sync_id && null != a
                  ? (d = (0, l.jsx)(A.Anchor, {
                        className: $.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, P.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, l.jsx)(p.E, {
                  title: c,
                  variant: "text-sm/semibold",
                  className: r()((0, G.t)($, "name", t.bot ? "wrap" : "normal")),
                  children: d,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: i } = e,
            a = n,
            s = n;
        if (e.type === q.$pd.CUSTOM_STATUS) a = i;
        else if (!(0, H.A)(e))
            if (((a = i), (s = i), (0, B.A)(e) && null != i)) {
                let t = (t, n) =>
                    (0, l.jsx)(
                        D.A,
                        {
                            artists: i,
                            linkClassName: $.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = J.intl.format(J.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, P.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, W.A)(e) && (a = J.intl.formatToPlainString(J.t.gmCZRY, { game: a })), null != t)
              ? (0, l.jsx)(f.D, { onClick: t, title: s ?? void 0, className: $.clickableDetails, children: a })
              : (0, l.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, W.A)(e) || (0, B.A)(e) ? $.detailsWrap : $.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, l.jsx)("div", {
                      className: (0, W.A)(e) || (0, B.A)(e) ? $.detailsWrap : $.details,
                      children: J.intl.format(J.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, l.jsxs)("div", {
                      className: r()((0, W.A)(e) || (0, B.A)(e) ? $.detailsWrap : $.details, $.guildDetails),
                      children: [
                          (0, l.jsx)(R.Ay, { guild: t, size: R.Ay.Sizes.SMOL, className: $.guildIcon }),
                          (0, l.jsx)(E._, { size: "xxs", color: "currentColor" }),
                          (0, l.jsxs)("div", {
                              className: $.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(C.H, { size: "xxs", color: "currentColor" }),
                                  (0, l.jsx)(p.E, {
                                      variant: "text-xs/normal",
                                      children: (0, v.m1)(i, w.default, O.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, H.A)(e) || (0, B.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, F.A)(e)
              ? (0, l.jsx)(Q, { timestamps: n })
              : (0, l.jsx)(L.Ay, {
                    start: n.start,
                    location: L.Ay.Locations.USER_ACTIVITY,
                    className: $.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, B.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, l.jsx)(K.A, {
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
        if (!(0, H.A)(e) && ((r = s?.large_text), (o = s?.large_text), (0, B.A)(e) && null != r)) {
            let t = (t, n) =>
                null != e.sync_id && null != o
                    ? (0, l.jsx)(
                          A.Anchor,
                          { className: $.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o },
                          n,
                      )
                    : o;
            r = J.intl.format(J.t.vOLBEy, { album: o, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== q.$pd.CUSTOM_STATUS) || (0, P.Cy)(e)
            ? (a?.size == null && [Y.I4].includes(e.application_id ?? "")
                  ? (n = J.intl.formatToPlainString(J.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, P.Cy)(e) && a?.size != null
                    ? (n = J.intl.formatToPlainString(J.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (n =
                          0 === a.size[1]
                              ? J.intl.formatToPlainString(J.t.IM4J4e, { count: a.size[0] })
                              : J.intl.formatToPlainString(J.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, l.jsxs)("div", {
                  className: $.state,
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
        if (null == c || c.type === q.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            h = !1;
        if ((0, V.A)(c)) (e = this.renderXboxImage()), (h = !0);
        else {
            let t = (0, M.Gf)(this.props.user.id, c ?? void 0);
            t.isSpotify || (e = (0, l.jsx)(M.Tf, { resolvedActivity: t })),
                null == e && (h = null != (e = this.renderGameImage(c)));
        }
        let m = this.renderName(c),
            A = this.renderDetails(c),
            g = this.renderState(c, a),
            _ = this.renderTimePlayed(c),
            p = this.renderChannelDetails(c),
            E = null != n ? n() : null,
            C = this.renderTimeBar(c),
            x = ![e, m, A, g, _, C, E].some((e) => null != e);
        return (0, l.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), i),
            children: [
                this.renderHeader(x),
                (0, l.jsx)("div", {
                    className: h ? $.bodyAlignCenter : $.bodyNormal,
                    children: (0, l.jsxs)("div", {
                        className: $.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(N.A.Child, {
                                      className: r()(
                                          (0, G.t)(
                                              $,
                                              "content",
                                              h ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, l.jsxs)(f.D, {
                                              className: r()(null != o && $.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), s?.();
                                                        }
                                                      : void 0,
                                              children: [m, A, g, _],
                                          }),
                                          p,
                                          u ? null : C,
                                          d ? E : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                u ? E : null,
                (0, l.jsx)(ee, { activity: c }),
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
let en = (e) => {
    let t = (0, j.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: b.Ob.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, l.jsx)(et, { ...e, onOpenGameProfileModal: t });
};
en.Types = Z;
let ei = en;
