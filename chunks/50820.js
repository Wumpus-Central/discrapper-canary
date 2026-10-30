(l.d(t, { A: () => ec, O: () => et }), l(938796));
var n,
    i = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    c = l(284009),
    o = l.n(c),
    u = l(570138),
    d = l(350835),
    m = l(665260),
    A = l(3026),
    h = l(462887),
    p = l(297264),
    x = l(28863),
    g = l(707554),
    y = l(834730),
    f = l(866665),
    j = l(939249),
    v = l(320448),
    N = l(983851),
    T = l(492684),
    I = l(736653),
    S = l(573648),
    C = l(47167),
    P = l(235986),
    L = l(573435),
    _ = l(769015),
    E = l(409626),
    b = l(692969),
    O = l(548118),
    G = l(804630),
    k = l(529433),
    z = l(763758),
    M = l(82149),
    W = l(190915),
    U = l(287743),
    w = l(994500),
    D = l(287809),
    R = l(970928),
    $ = l(486020),
    V = l(821589),
    Y = l(682261),
    H = l(672979),
    B = l(90644),
    F = l(61330),
    K = l(960076),
    X = l(855511),
    Q = l(105292),
    J = l(432166),
    q = l(818023),
    Z = l(652215),
    ee = l(408313),
    et =
        (((n = {}).ACTIVITY_FEED = "ActivityFeed"),
        (n.STREAM_PREVIEW = "StreamPreview"),
        (n.VOICE_CHANNEL = "VoiceChannel"),
        n);
let el = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    en = (0, T.A)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: ee.timestamp, children: this.props.message });
            }
        },
    );
function ei(e) {
    let { activity: t } = e,
        l = (0, I.Ay)(),
        n = (function (e) {
            let { activity: t } = e,
                l = null;
            return (
                (0, B.A)(t) && (l = Z.fg2.SPOTIFY),
                null != t.platform &&
                    [u.y.PLAYSTATION_4, u.y.PLAYSTATION_5].includes(t.platform) &&
                    (l = Z.fg2.PLAYSTATION),
                l
            );
        })({ activity: t });
    if (null == n) return null;
    let a = S.A.get(n);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, h.q)(l) ? a.icon.lightSVG : a.icon.darkSVG,
        className: ee.platformIcon,
    });
}
function ea(e) {
    let { provider: t } = e,
        l = (0, I.Ay)();
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, h.q)(l) ? t.icon.lightSVG : t.icon.darkSVG,
        className: ee.headerPlatformIcon,
    });
}
class es extends a.PureComponent {
    static Types = et;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== d.$.PLAYING &&
            e?.type !== d.$.WATCHING &&
            e?.type !== d.$.LISTENING &&
            e?.type !== d.$.HANG_STATUS
            ? { type: d.$.PLAYING, name: Q.intl.string(Q.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, V.t)(ee, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, K.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: l, activityGuild: n, showChannelDetails: a, renderHeaderAccessory: s } = this.props,
            r = this.activity;
        if (l || null == r) return null;
        let { name: c } = r;
        switch (r.type) {
            case d.$.STREAMING:
                t = Q.intl.formatToPlainString(Q.t.Dzgz4u, {
                    platform: [Z.fg2.TWITCH, Z.fg2.YOUTUBE].includes(c.toLowerCase()) ? c : S.A.get(Z.fg2.TWITCH).name,
                });
                break;
            case d.$.LISTENING:
                t = Q.intl.formatToPlainString(Q.t["5sYPnr"], { name: c });
                break;
            case d.$.WATCHING:
                t = Q.intl.formatToPlainString(Q.t.Ge29Zy, { name: c });
                break;
            case d.$.PLAYING:
                t = (function (e) {
                    let t = (0, X.A)(e) ?? "";
                    switch (t) {
                        case u.y.PLAYSTATION_4:
                        case u.y.PLAYSTATION_5:
                            return Q.intl.formatToPlainString(Q.t.A17aM8, { platform: t.toUpperCase() });
                        case u.y.XBOX:
                        case u.y.SAMSUNG:
                            return Q.intl.formatToPlainString(Q.t.A17aM8, { platform: S.A.get(t).name });
                        default:
                            return Q.intl.string(Q.t["2TbM/G"]);
                    }
                })(r);
                break;
            case d.$.COMPETING:
                t = Q.intl.formatToPlainString(Q.t.SQCo6D, { name: c });
        }
        let o = (0, U.A)(r.session_id);
        if (null != o) {
            let e = (0, W.A)(o, r);
            switch (r.type) {
                case d.$.PLAYING:
                    t = Q.intl.formatToPlainString(Q.t.A17aM8, { platform: e });
                    break;
                case d.$.WATCHING:
                    t = Q.intl.formatToPlainString(Q.t.ENbTKQ, { platform: e });
                    break;
                case d.$.LISTENING:
                    t = Q.intl.formatToPlainString(Q.t.EcHzWI, { platform: e });
                    break;
                case d.$.COMPETING:
                    t = Q.intl.formatToPlainString(Q.t.ikpHeS, { platform: e });
                    break;
                case d.$.STREAMING:
                    t = Q.intl.formatToPlainString(Q.t.Dzgz4u, { platform: e });
            }
        }
        return (
            null != n &&
                (t = (0, m.Lt)(r?.flags ?? 0, Z.jUm.EMBEDDED)
                    ? r.type === d.$.WATCHING
                        ? Q.intl.formatToPlainString(Q.t["M/L8ot"], { guildName: n.name })
                        : Q.intl.formatToPlainString(Q.t["4chKQu"], { guildName: n.name })
                    : Q.intl.formatToPlainString(Q.t.sddlGK, { server: n.name })),
            (0, i.jsxs)("div", {
                className: ee.headerContainer,
                children: [
                    (0, i.jsxs)(p.D, {
                        className: e ? ee.headerTextEmptyBody : ee.headerTextNormal,
                        variant: a ? "text-xs/semibold" : "eyebrow",
                        children: [
                            (0, i.jsx)(A.A, { children: t }),
                            null != o && null == n && (0, i.jsx)(ea, { provider: o }),
                        ],
                    }),
                    s?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: ee.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: S.A.get(Z.fg2.XBOX).icon.customPNG,
                className: r()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            l,
            { type: n } = this.props,
            { assets: a, application_id: s } = e;
        if (null == a || (null == a.large_image && null == a.small_image)) return null;
        (0, K.A)(e) && (t = el[n]);
        let c = (0, B.A)(e),
            o =
                null != a.large_image
                    ? (0, i.jsx)("img", {
                          alt: a.large_text ?? "",
                          src: (0, R.uD)(s, a.large_image, t ?? [q.iu.LARGE, q.iu.LARGE]),
                          className: r()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? Z.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != a.small_image,
                                  [ee.assetsLargeImageSpotify]: c,
                              },
                          ),
                      })
                    : null;
        if (c) o = (0, i.jsx)(x.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: o });
        else if ((0, M.Cy)(e)) {
            let t = (0, M.UW)(e);
            if (null == t) return null;
            o = (0, i.jsx)(L.Ay, {
                mask: L.Ay.Masks.SQUIRCLE,
                width: q.iu.SMALL,
                height: q.iu.SMALL,
                children: (0, i.jsx)("img", {
                    src: $.Ay.getGuildIconURL({ id: t.guildId, icon: a.small_image, size: q.iu.SMALL }) ?? void 0,
                    className: ee.assetsLargeImageVoiceChannel,
                    alt: "",
                }),
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            "" !== e.url &&
            (o = (0, i.jsxs)("div", {
                className: ee.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: ee.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(g.H, { className: ee.streamName, children: e.name }),
                            (0, i.jsx)(y.E, {
                                variant: "text-xs/semibold",
                                color: "none",
                                className: ee.streamGame,
                                children: Q.intl.format(Q.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(x.Anchor, { className: ee.twitchBackgroundImage, href: e.url, children: o }),
                ],
            })),
        (0, M.Cy)(e) ||
            null == a.small_image ||
            (l = (0, i.jsx)(f.m, {
                text: "" !== a.small_text ? a.small_text : null,
                position: "top",
                children: (0, i.jsx)("img", {
                    alt: a.small_text ?? "",
                    src: (0, R.uD)(s, a.small_image, [q.iu.SMALL, q.iu.SMALL]),
                    className: this.getTypeClass("assetsSmallImage", null == o ? "WithoutLargeImage" : void 0),
                }),
            })),
        null == o)
            ? (0, i.jsx)("div", { className: ee.assets, children: l })
            : (0, i.jsxs)("div", {
                  className: ee.assets,
                  children: [
                      (0, i.jsx)(f.m, {
                          text: null != a.large_text ? a.large_text : null,
                          position: "top",
                          children: o,
                      }),
                      l,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: l, application: n, activityGuild: a } = this.props;
        return null != e.assets || (0, Y.A)(e) || e.type !== d.$.PLAYING || "ActivityFeed" === l || t.bot
            ? null
            : null == n && null != a
              ? (0, i.jsx)("div", { className: r()(ee.gameIcon, ee.screenshareIcon) })
              : (0, i.jsx)(_.A, { className: ee.gameIcon, game: n });
    }
    renderName(e) {
        let { user: t, application: l, hideName: n } = this.props;
        if (n) return null;
        let { details: a, type: s } = e;
        if (s === d.$.CUSTOM_STATUS) return null;
        let c = (0, H.A)(e),
            o = e.name,
            u = o;
        return (c && null != l
            ? (u = (0, i.jsx)("span", { className: ee.activityName, children: u }))
            : !c &&
              ((o = a),
              (u = a),
              (0, B.A)(e) && null != e.sync_id && null != a
                  ? (u = (0, i.jsx)(x.Anchor, {
                        className: ee.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, M.Cy)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(y.E, {
                  title: o,
                  variant: "text-sm/semibold",
                  className: r()((0, V.t)(ee, "name", t.bot ? "wrap" : "normal")),
                  children: u,
              });
    }
    renderDetails(e) {
        let t,
            { details: l, state: n } = e,
            a = l,
            s = l;
        if (e.type === d.$.CUSTOM_STATUS) a = n;
        else if (!(0, H.A)(e))
            if (((a = n), (s = n), (0, B.A)(e) && null != n)) {
                let t = (t, l) =>
                    (0, i.jsx)(
                        z.A,
                        {
                            artists: n,
                            linkClassName: ee.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        l,
                    );
                a = Q.intl.format(Q.t.uU9le8, { artists: s, artistsHook: t });
            } else (0, M.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, K.A)(e) && (a = Q.intl.formatToPlainString(Q.t.gmCZRY, { game: a })), null != t)
              ? (0, i.jsx)(j.D, { onClick: t, title: s ?? void 0, className: ee.clickableDetails, children: a })
              : (0, i.jsx)("div", {
                    title: s ?? void 0,
                    className: (0, K.A)(e) || (0, B.A)(e) ? ee.detailsWrap : ee.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: l, channel: n } = this.props;
        return l && null != t
            ? null == n
                ? (0, i.jsx)("div", {
                      className: (0, K.A)(e) || (0, B.A)(e) ? ee.detailsWrap : ee.details,
                      children: Q.intl.format(Q.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: r()((0, K.A)(e) || (0, B.A)(e) ? ee.detailsWrap : ee.details, ee.guildDetails),
                      children: [
                          (0, i.jsx)(O.Ay, { guild: t, size: O.Ay.Sizes.SMOL, className: ee.guildIcon }),
                          (0, i.jsx)(v._, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: ee.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(N.H, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(y.E, {
                                      variant: "text-xs/normal",
                                      children: (0, C.m1)(n, D.default, w.A),
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
        let { timestamps: l } = e;
        return null == l
            ? null
            : (0, Y.A)(e)
              ? (0, i.jsx)(en, { timestamps: l })
              : (0, i.jsx)(k.Ay, {
                    start: l.start,
                    location: k.Ay.Locations.USER_ACTIVITY,
                    className: ee.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, B.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: l, end: n } = t;
        return null == l || null == n
            ? null
            : (0, i.jsx)(J.A, {
                  start: l,
                  end: n,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let l,
            { state: n, party: a, assets: s } = e,
            r = n,
            c = n;
        if (!(0, H.A)(e) && ((r = s?.large_text), (c = s?.large_text), (0, B.A)(e) && null != r)) {
            let t = (t, l) =>
                null != e.sync_id && null != c
                    ? (0, i.jsx)(
                          x.Anchor,
                          { className: ee.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: c },
                          l,
                      )
                    : c;
            r = Q.intl.format(Q.t.vOLBEy, { album: c, albumHook: t });
        }
        return (null != r && "" !== r && e.type !== d.$.CUSTOM_STATUS) || (0, M.Cy)(e)
            ? (a?.size == null && [q.I4].includes(e.application_id ?? "")
                  ? (l = Q.intl.formatToPlainString(Q.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, M.Cy)(e) && a?.size != null
                    ? (l = Q.intl.formatToPlainString(Q.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (l =
                          0 === a.size[1]
                              ? Q.intl.formatToPlainString(Q.t.IM4J4e, { count: a.size[0] })
                              : Q.intl.formatToPlainString(Q.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, i.jsxs)("div", {
                  className: ee.state,
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
                application: a,
                onClose: s,
                onOpenGameProfileModal: c,
            } = this.props,
            o = this.activity;
        if (null == o || o.type === d.$.CUSTOM_STATUS) return null;
        let u = "ActivityFeed" === t,
            m = "StreamPreview" === t,
            A = !1;
        if ((0, F.A)(o)) ((e = this.renderXboxImage()), (A = !0));
        else {
            let t = (0, G.Gf)(this.props.user.id, o ?? void 0);
            (t.isSpotify || (e = (0, i.jsx)(G.Tf, { resolvedActivity: t })),
                null == e && (A = null != (e = this.renderGameImage(o))));
        }
        let h = this.renderName(o),
            p = this.renderDetails(o),
            x = this.renderState(o, a),
            g = this.renderTimePlayed(o),
            y = this.renderChannelDetails(o),
            f = null != l ? l() : null,
            v = this.renderTimeBar(o),
            N = ![e, h, p, x, g, v, f].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: r()(this.getTypeClass("activity"), n),
            children: [
                this.renderHeader(N),
                (0, i.jsx)("div", {
                    className: A ? ee.bodyAlignCenter : ee.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: ee.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(P.A.Child, {
                                      className: r()(
                                          (0, V.t)(
                                              ee,
                                              "content",
                                              A ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(j.D, {
                                              className: r()(null != c && ee.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            (c(e), s?.());
                                                        }
                                                      : void 0,
                                              children: [h, p, x, g],
                                          }),
                                          y,
                                          m ? null : v,
                                          u ? f : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                m ? f : null,
                (0, i.jsx)(ei, { activity: o }),
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
function er(e) {
    let t = (0, b.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: E.GameProfileSources.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(es, { ...e, onOpenGameProfileModal: t });
}
er.Types = et;
let ec = er;
