(l.d(t, { A: () => ea, O: () => Z }), l(938796));
var n,
    i = l(477900),
    s = l(582128),
    a = l(503698),
    r = l.n(a),
    c = l(284009),
    o = l.n(c),
    d = l(665260),
    u = l(3026),
    m = l(462887),
    A = l(297264),
    p = l(28863),
    h = l(707554),
    x = l(834730),
    g = l(866665),
    y = l(939249),
    f = l(320448),
    j = l(983851),
    v = l(492684),
    N = l(736653),
    T = l(573648),
    S = l(47167),
    I = l(235986),
    C = l(573435),
    P = l(769015),
    E = l(409626),
    b = l(692969),
    _ = l(548118),
    L = l(804630),
    O = l(529433),
    G = l(763758),
    k = l(82149),
    z = l(190915),
    M = l(287743),
    V = l(994500),
    W = l(287809),
    U = l(970928),
    w = l(486020),
    D = l(821589),
    R = l(682261),
    $ = l(672979),
    H = l(90644),
    Y = l(61330),
    F = l(960076),
    B = l(855511),
    K = l(652215),
    X = l(660183),
    Q = l(432166),
    J = l(818023),
    q = l(408313),
    Z =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let ee = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    et = (0, v.A)(
        class extends s.PureComponent {
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
                (0, H.A)(t) && (l = K.fg2.SPOTIFY),
                null != t.platform && [K.yTV.PS4, K.yTV.PS5].includes(t.platform) && (l = K.fg2.PLAYSTATION),
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
function en(e) {
    let { provider: t } = e,
        l = (0, N.Ay)();
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, m.q)(l) ? t.icon.lightSVG : t.icon.darkSVG,
        className: q.headerPlatformIcon,
    });
}
class ei extends s.PureComponent {
    static Types = Z;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== K.$pd.PLAYING &&
            e?.type !== K.$pd.WATCHING &&
            e?.type !== K.$pd.LISTENING &&
            e?.type !== K.$pd.HANG_STATUS
            ? { type: K.$pd.PLAYING, name: X.intl.string(X.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, D.t)(q, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, F.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: l, activityGuild: n, showChannelDetails: s, renderHeaderAccessory: a } = this.props,
            r = this.activity;
        if (l || null == r) return null;
        let { name: c } = r;
        switch (r.type) {
            case K.$pd.STREAMING:
                t = X.intl.formatToPlainString(X.t.Dzgz4u, {
                    platform: [K.fg2.TWITCH, K.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : T.A.get(K.fg2.TWITCH).name,
                });
                break;
            case K.$pd.LISTENING:
                t = X.intl.formatToPlainString(X.t["5sYPnr"], { name: c });
                break;
            case K.$pd.WATCHING:
                t = X.intl.formatToPlainString(X.t.Ge29Zy, { name: c });
                break;
            case K.$pd.PLAYING:
                t = (function (e) {
                    let t = (0, B.A)(e) ?? "";
                    switch (t) {
                        case K.yTV.PS4:
                        case K.yTV.PS5:
                            return X.intl.formatToPlainString(X.t.A17aM8, { platform: t.toUpperCase() });
                        case K.yTV.XBOX:
                        case K.yTV.SAMSUNG:
                            return X.intl.formatToPlainString(X.t.A17aM8, { platform: T.A.get(t).name });
                        default:
                            return X.intl.string(X.t["2TbM/G"]);
                    }
                })(r);
                break;
            case K.$pd.COMPETING:
                t = X.intl.formatToPlainString(X.t.SQCo6D, { name: c });
        }
        let o = (0, M.A)(r.session_id);
        if (null != o) {
            let e = (0, z.A)(o, r);
            switch (r.type) {
                case K.$pd.PLAYING:
                    t = X.intl.formatToPlainString(X.t.A17aM8, { platform: e });
                    break;
                case K.$pd.WATCHING:
                    t = X.intl.formatToPlainString(X.t.ENbTKQ, { platform: e });
                    break;
                case K.$pd.LISTENING:
                    t = X.intl.formatToPlainString(X.t.EcHzWI, { platform: e });
                    break;
                case K.$pd.COMPETING:
                    t = X.intl.formatToPlainString(X.t.ikpHeS, { platform: e });
                    break;
                case K.$pd.STREAMING:
                    t = X.intl.formatToPlainString(X.t.Dzgz4u, { platform: e });
            }
        }
        return (
            null != n &&
                (t = (0, d.Lt)(r?.flags ?? 0, K.jUm.EMBEDDED)
                    ? r.type === K.$pd.WATCHING
                        ? X.intl.formatToPlainString(X.t["M/L8ot"], { guildName: n.name })
                        : X.intl.formatToPlainString(X.t["4chKQu"], { guildName: n.name })
                    : X.intl.formatToPlainString(X.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: q.headerContainer,
                children: [
                    (0, i.jsxs)(A.D, {
                        className: e ? q.headerTextEmptyBody : q.headerTextNormal,
                        variant: s ? "text-xs/semibold" : "eyebrow",
                        children: [
                            (0, i.jsx)(u.A, { children: t }),
                            null != o && null == n && (0, i.jsx)(en, { provider: o }),
                        ],
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
                src: T.A.get(K.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: s, application_id: a } = e;
        if (null == s || (null == s.large_image && null == s.small_image)) return null;
        (0, F.A)(e) && (t = ee[n]);
        let c = (0, H.A)(e),
            o =
                null != s.large_image
                    ? (0, i.jsx)("img", {
                          alt: s.large_text ?? "",
                          src: (0, U.uD)(a, s.large_image, t ?? [J.iu.LARGE, J.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? K.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != s.small_image,
                                  [q.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) o = (0, i.jsx)(p.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: o });
        else if ((0, k.Cy)(e)) {
            let t = (0, k.UW)(e);
            if (null == t) return null;
            o = (0, i.jsx)(C.Ay, {
                mask: C.Ay.Masks.SQUIRCLE,
                width: J.iu.SMALL,
                height: J.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: w.Ay.getGuildIconURL({ id: t.guildId, icon: s.small_image, size: J.iu.SMALL }) ?? void 0,
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
                            (0, i.jsx)(h.H, { className: q.streamName, children: e.name }),
                            (0, i.jsx)(x.E, {
                                variant: "text-xs/semibold",
                                color: "none",
                                className: q.streamGame,
                                children: X.intl.format(X.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(p.Anchor, { className: q.twitchBackgroundImage, href: e.url, children: o }),
                ],
            })),
        (0, k.Cy)(e) ||
            null == s.small_image ||
            (l = (0, i.jsx)(g.m, {
                text: "" !== s.small_text ? s.small_text : null,
                position: "top",
                children: (0, i.jsx)("img", {
                    alt: s.small_text ?? "",
                    src: (0, U.uD)(a, s.small_image, [J.iu.SMALL, J.iu.SMALL]),
                    className: this.getTypeClass("assetsSmallImage", null == o ? "WithoutLargeImage" : void 0),
                }),
            })),
        null == o)
            ? (0, i.jsx)("div", { className: q.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: q.assets,
                  children: [
                      (0, i.jsx)(g.m, {
                          text: null != s.large_text ? s.large_text : null,
                          position: "top",
                          children: o,
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: s } = this.props;
        return null != e.assets || (0, R.A)(e) || e.type !== K.$pd.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != s
              ? (0, i.jsx)("div", { className: r()(q.gameIcon, q.screenshareIcon) })
              : (0, i.jsx)(P.A, { className: q.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: s, type: a } = e;
        if (a === K.$pd.CUSTOM_STATUS) return null;
        let c = (0, $.A)(e),
            o = e.name,
            d = o;
        return (c && null != l
            ? (d = (0, i.jsx)("span", { className: q.activityName, children: d }))
            : !c &&
              ((o = s),
              (d = s),
              (0, H.A)(e) && null != e.sync_id && null != s
                  ? (d = (0, i.jsx)(p.Anchor, {
                        className: q.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: s,
                    }))
                  : (0, k.Cy)(e) && (d = e.name)),
        null == d)
            ? null
            : (0, i.jsx)(x.E, {
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
        if (e.type === K.$pd.CUSTOM_STATUS) s = n;
        else if (!(0, $.A)(e))
            if (((s = n), (a = n), (0, H.A)(e) && null != n)) {
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
                s = X.intl.format(X.t.uU9le8, { artists: a, artistsHook: t });
            } else (0, k.Cy)(e) && (s = e.assets?.small_text);
        return null == s || "" === s
            ? null
            : ((0, F.A)(e) && (s = X.intl.formatToPlainString(X.t.gmCZRY, { game: s })), null != t)
              ? (0, i.jsx)(y.D, { onClick: t, title: a ?? void 0, className: q.clickableDetails, children: s })
              : (0, i.jsx)("div", {
                    title: a ?? void 0,
                    className: (0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details,
                    children: s,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details,
                      children: X.intl.format(X.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, F.A)(e) || (0, H.A)(e) ? q.detailsWrap : q.details, q.guildDetails),
                      children: [
                          (0, i.jsx)(_.Ay, { guild: t, size: _.Ay.Sizes.SMOL, className: q.guildIcon }),
                          (0, i.jsx)(f._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: q.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(j.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(x.E, {
                                      variant: "text-xs/normal",
                                      children: (0, S.m1)(n, W.default, V.A),
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
            : (0, i.jsx)(Q.A, {
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
        if (!(0, $.A)(e) && ((r = a?.large_text), (c = a?.large_text), (0, H.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          p.Anchor,
                          { className: q.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = X.intl.format(X.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== K.$pd.CUSTOM_STATUS) || (0, k.Cy)(e)
            ? (s?.size == null && [J.I4].includes(e.application_id ?? "")
                  ? (l = X.intl.formatToPlainString(X.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, k.Cy)(e) && s?.size != null
                    ? (l = X.intl.formatToPlainString(X.t["JC/3xw"], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0],
                      }))
                    : s?.size != null &&
                      s.size.length >= 2 &&
                      (l =
                          0 === s.size[1]
                              ? X.intl.formatToPlainString(X.t.IM4J4e, { count: s.size[0] })
                              : X.intl.formatToPlainString(X.t["u//9By"], { count: s.size[0], max: s.size[1] })),
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
        if (null == o || o.type === K.$pd.CUSTOM_STATUS) return null;
        let d = "ActivityFeed" === t,
            u = "StreamPreview" === t,
            m = !1;
        if ((0, Y.A)(o)) ((e = this.renderXboxImage()), (m = !0));
        else {
            let t = (0, L.Gf)(this.props.user.id, o ?? void 0);
            (t.isSpotify || (e = (0, i.jsx)(L.Tf, { resolvedActivity: t })),
                null == e && (m = null != (e = this.renderGameImage(o))));
        }
        let A = this.renderName(o),
            p = this.renderDetails(o),
            h = this.renderState(o, s),
            x = this.renderTimePlayed(o),
            g = this.renderChannelDetails(o),
            f = null != l ? l() : null,
            j = this.renderTimeBar(o),
            v = ![e, A, p, h, x, j, f].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(v),
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
                                                            (c(e), a?.());
                                                        }
                                                      : void 0,
                                              children: [A, p, h, x],
                                          }),
                                          g,
                                          u ? null : j,
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
        (o()(null != e, "Spotify activity was null"), t?.(e));
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: l, user: n } = this.props;
        (o()(null != t, "Spotify activity was null"), l?.(t, n.id, e));
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: l } = this.props;
        (o()(null != e, "Spotify activity was null"), t?.(e, l.id));
    };
}
function es(e) {
    let t = (0, b.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.GameProfileSources.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(ei, { ...e, onOpenGameProfileModal: t });
}
es.Types = Z;
let ea = es;
