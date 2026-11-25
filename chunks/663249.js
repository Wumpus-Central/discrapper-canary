(n.d(t, { O: () => et, A: () => eo }), n(938796));
var l,
    i = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(284009),
    u = n.n(o),
    c = n(570138),
    d = n(350835),
    m = n(665260),
    A = n(3026),
    p = n(462887),
    h = n(534514),
    f = n(28863),
    g = n(707554),
    x = n(834730),
    I = n(866665),
    v = n(939249),
    T = n(320448),
    S = n(983851),
    y = n(492684),
    N = n(736653),
    E = n(573648),
    C = n(47167),
    j = n(235986),
    _ = n(573435),
    b = n(769015),
    P = n(409626),
    R = n(692969),
    O = n(682163),
    D = n(804630),
    U = n(764359),
    L = n(763758),
    M = n(82149),
    G = n(190915),
    w = n(287743),
    Y = n(994500),
    k = n(287809),
    V = n(913659),
    $ = n(486020),
    F = n(821589),
    H = n(682261),
    B = n(672979),
    J = n(90644),
    W = n(61330),
    z = n(960076),
    Z = n(855511),
    X = n(792996),
    Q = n(432166),
    q = n(487887),
    K = n(652215),
    ee = n(408313),
    et =
        (((l = {}).ACTIVITY_FEED = "ActivityFeed"),
        (l.STREAM_PREVIEW = "StreamPreview"),
        (l.VOICE_CHANNEL = "VoiceChannel"),
        l);
let en = { StreamPreview: [108, 60], VoiceChannel: [108, 60], ActivityFeed: [900, 500] },
    el = (0, y.A)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)("div", { className: ee.timestamp, children: this.props.message });
            }
        },
    );
function ei(e) {
    let { activity: t } = e,
        n = (0, N.Ay)(),
        l = (function (e) {
            let { activity: t } = e,
                n = null;
            return (
                (0, J.A)(t) && (n = K.fg2.SPOTIFY),
                null != t.platform &&
                    [c.y.PLAYSTATION_4, c.y.PLAYSTATION_5].includes(t.platform) &&
                    (n = K.fg2.PLAYSTATION),
                n
            );
        })({ activity: t });
    if (null == l) return null;
    let a = E.A.get(l);
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, p.q)(n) ? a.icon.lightSVG : a.icon.darkSVG,
        className: ee.platformIcon,
    });
}
function ea(e) {
    let { provider: t } = e,
        n = (0, N.Ay)();
    return (0, i.jsx)("img", {
        alt: "",
        src: (0, p.q)(n) ? t.icon.lightSVG : t.icon.darkSVG,
        className: ee.headerPlatformIcon,
    });
}
class er extends a.PureComponent {
    static Types = et;
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t &&
            e?.type !== d.$.PLAYING &&
            e?.type !== d.$.WATCHING &&
            e?.type !== d.$.LISTENING &&
            e?.type !== d.$.HANG_STATUS
            ? { type: d.$.PLAYING, name: X.intl.string(X.t.eXan7B) }
            : e;
    }
    getTypeClass(e, t) {
        return (0, F.t)(ee, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, z.A)(this.activity) && "ActivityFeed" === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: l, showChannelDetails: a, renderHeaderAccessory: r } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: o } = s;
        switch (s.type) {
            case d.$.STREAMING:
                t = X.intl.formatToPlainString(X.t.Dzgz4u, {
                    platform: [K.fg2.TWITCH, K.fg2.YOUTUBE].includes(o.toLowerCase()) ? o : E.A.get(K.fg2.TWITCH).name,
                });
                break;
            case d.$.LISTENING:
                t = X.intl.formatToPlainString(X.t["5sYPnr"], { name: o });
                break;
            case d.$.WATCHING:
                t = X.intl.formatToPlainString(X.t.Ge29Zy, { name: o });
                break;
            case d.$.PLAYING:
                t = (function (e) {
                    let t = (0, Z.A)(e) ?? "";
                    switch (t) {
                        case c.y.PLAYSTATION_4:
                        case c.y.PLAYSTATION_5:
                            return X.intl.formatToPlainString(X.t.A17aM8, { platform: t.toUpperCase() });
                        case c.y.XBOX:
                        case c.y.SAMSUNG:
                            return X.intl.formatToPlainString(X.t.A17aM8, { platform: E.A.get(t).name });
                        default:
                            return X.intl.string(X.t["2TbM/G"]);
                    }
                })(s);
                break;
            case d.$.COMPETING:
                t = X.intl.formatToPlainString(X.t.SQCo6D, { name: o });
        }
        let u = (0, w.A)(s.session_id);
        if (null != u) {
            let e = (0, G.A)(u, s);
            switch (s.type) {
                case d.$.PLAYING:
                    t = X.intl.formatToPlainString(X.t.A17aM8, { platform: e });
                    break;
                case d.$.WATCHING:
                    t = X.intl.formatToPlainString(X.t.ENbTKQ, { platform: e });
                    break;
                case d.$.LISTENING:
                    t = X.intl.formatToPlainString(X.t.EcHzWI, { platform: e });
                    break;
                case d.$.COMPETING:
                    t = X.intl.formatToPlainString(X.t.ikpHeS, { platform: e });
                    break;
                case d.$.STREAMING:
                    t = X.intl.formatToPlainString(X.t.Dzgz4u, { platform: e });
            }
        }
        return (
            null != l &&
                (t = (0, m.Lt)(s?.flags ?? 0, K.jUm.EMBEDDED)
                    ? s.type === d.$.WATCHING
                        ? X.intl.formatToPlainString(X.t["M/L8ot"], { guildName: l.name })
                        : X.intl.formatToPlainString(X.t["4chKQu"], { guildName: l.name })
                    : X.intl.formatToPlainString(X.t.sddlGK, { server: l.name })),
            (0, i.jsxs)("div", {
                className: ee.headerContainer,
                children: [
                    (0, i.jsxs)(h.D, {
                        className: e ? ee.headerTextEmptyBody : ee.headerTextNormal,
                        variant: a ? "body-xs/semibold" : "body-sm/medium",
                        children: [
                            (0, i.jsx)(A.A, { children: t }),
                            null != u && null == l && (0, i.jsx)(ea, { provider: u }),
                        ],
                    }),
                    r?.(),
                ],
            })
        );
    }
    renderXboxImage() {
        return (0, i.jsx)("div", {
            className: ee.assets,
            children: (0, i.jsx)("img", {
                alt: "",
                src: E.A.get(K.fg2.XBOX).icon.customPNG,
                className: s()(this.getTypeClass("assetsLargeImage", "Xbox")),
            }),
        });
    }
    renderImage(e) {
        let t,
            n,
            { type: l } = this.props,
            { assets: a, application_id: r } = e;
        if (null == a || (null == a.large_image && null == a.small_image)) return null;
        (0, z.A)(e) && (t = en[l]);
        let o = (0, J.A)(e),
            u =
                null != a.large_image
                    ? (0, i.jsx)("img", {
                          alt: a.large_text ?? "",
                          src: (0, V.uD)(r, a.large_image, t ?? [q.iu.LARGE, q.iu.LARGE]),
                          className: s()(
                              this.getTypeClass(
                                  "assetsLargeImage",
                                  this.isStreamerOnTypeActivityFeed() ? K.fg2.TWITCH : "",
                              ),
                              {
                                  [this.getTypeClass("assetsLargeMask") ?? ""]: null != a.small_image,
                                  [ee.assetsLargeImageSpotify]: o,
                              },
                          ),
                      })
                    : null;
        if (o) u = (0, i.jsx)(f.Anchor, { onClick: this.handleOpenSpotifyAlbum, children: u });
        else if ((0, M.Cy)(e)) {
            let t = (0, M.UW)(e);
            if (null == t) return null;
            u = (0, i.jsx)(_.Ay, {
                mask: _.Ay.Masks.SQUIRCLE,
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
            (u = (0, i.jsxs)("div", {
                className: ee.twitchImageContainer,
                children: [
                    (0, i.jsxs)("div", {
                        className: ee.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(g.H, { className: ee.streamName, children: e.name }),
                            (0, i.jsx)(x.E, {
                                variant: "body-xs/semibold",
                                color: "none",
                                className: ee.streamGame,
                                children: X.intl.format(X.t.gmCZRY, { game: e.details }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(f.Anchor, { className: ee.twitchBackgroundImage, href: e.url, children: u }),
                ],
            })),
        (0, M.Cy)(e) ||
            null == a.small_image ||
            (n = (0, i.jsx)(I.m, {
                text: "" !== a.small_text ? a.small_text : null,
                position: "top",
                children: (0, i.jsx)("img", {
                    alt: a.small_text ?? "",
                    src: (0, V.uD)(r, a.small_image, [q.iu.SMALL, q.iu.SMALL]),
                    className: this.getTypeClass("assetsSmallImage", null == u ? "WithoutLargeImage" : void 0),
                }),
            })),
        null == u)
            ? (0, i.jsx)("div", { className: ee.assets, children: n })
            : (0, i.jsxs)("div", {
                  className: ee.assets,
                  children: [
                      (0, i.jsx)(I.m, {
                          text: null != a.large_text ? a.large_text : null,
                          position: "top",
                          children: u,
                      }),
                      n,
                  ],
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: l, activityGuild: a } = this.props;
        return null != e.assets || (0, H.A)(e) || e.type !== d.$.PLAYING || "ActivityFeed" === n || t.bot
            ? null
            : null == l && null != a
              ? (0, i.jsx)("div", { className: s()(ee.gameIcon, ee.screenshareIcon) })
              : (0, i.jsx)(b.A, { className: ee.gameIcon, game: l });
    }
    renderName(e) {
        let { user: t, application: n, hideName: l } = this.props;
        if (l) return null;
        let { details: a, type: r } = e;
        if (r === d.$.CUSTOM_STATUS) return null;
        let o = (0, B.A)(e),
            u = e.name,
            c = u;
        return (o && null != n
            ? (c = (0, i.jsx)("span", { className: ee.activityName, children: c }))
            : !o &&
              ((u = a),
              (c = a),
              (0, J.A)(e) && null != e.sync_id && null != a
                  ? (c = (0, i.jsx)(f.Anchor, {
                        className: ee.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a,
                    }))
                  : (0, M.Cy)(e) && (c = e.name)),
        null == c)
            ? null
            : (0, i.jsx)(x.E, {
                  title: u,
                  variant: "body-sm/semibold",
                  className: s()((0, F.t)(ee, "name", t.bot ? "wrap" : "normal")),
                  children: c,
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: l } = e,
            a = n,
            r = n;
        if (e.type === d.$.CUSTOM_STATUS) a = l;
        else if (!(0, B.A)(e))
            if (((a = l), (r = l), (0, J.A)(e) && null != l)) {
                let t = (t, n) =>
                    (0, i.jsx)(
                        L.A,
                        {
                            artists: l,
                            linkClassName: ee.bodyLink,
                            canOpen: null != e.sync_id,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                        },
                        n,
                    );
                a = X.intl.format(X.t.uU9le8, { artists: r, artistsHook: t });
            } else (0, M.Cy)(e) && (a = e.assets?.small_text);
        return null == a || "" === a
            ? null
            : ((0, z.A)(e) && (a = X.intl.formatToPlainString(X.t.gmCZRY, { game: a })), null != t)
              ? (0, i.jsx)(v.D, { onClick: t, title: r ?? void 0, className: ee.clickableDetails, children: a })
              : (0, i.jsx)("div", {
                    title: r ?? void 0,
                    className: (0, z.A)(e) || (0, J.A)(e) ? ee.detailsWrap : ee.details,
                    children: a,
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: l } = this.props;
        return n && null != t
            ? null == l
                ? (0, i.jsx)("div", {
                      className: (0, z.A)(e) || (0, J.A)(e) ? ee.detailsWrap : ee.details,
                      children: X.intl.format(X.t["hq/Qze"], { guildName: t.name }),
                  })
                : (0, i.jsxs)("div", {
                      className: s()((0, z.A)(e) || (0, J.A)(e) ? ee.detailsWrap : ee.details, ee.guildDetails),
                      children: [
                          (0, i.jsx)(O.Ay, { guild: t, size: O.Ay.Sizes.SMOL, className: ee.guildIcon }),
                          (0, i.jsx)(T.ChevronSmallRightIcon, { size: "xxs", color: "currentColor" }),
                          (0, i.jsxs)("div", {
                              className: ee.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(S.VoiceNormalIcon, { size: "xxs", color: "currentColor" }),
                                  (0, i.jsx)(x.E, {
                                      variant: "body-xs/normal",
                                      children: (0, C.m1)(l, k.default, Y.A),
                                  }),
                              ],
                          }),
                      ],
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, B.A)(e) || (0, J.A)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, H.A)(e)
              ? (0, i.jsx)(el, { timestamps: n })
              : (0, i.jsx)(U.Ay, {
                    start: n.start,
                    location: U.Ay.Locations.USER_ACTIVITY,
                    className: ee.playTime,
                    isApplicationStreaming: null != t,
                });
    }
    renderTimeBar(e) {
        if (!(0, J.A)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: l } = t;
        return null == n || null == l
            ? null
            : (0, i.jsx)(Q.A, {
                  start: n,
                  end: l,
                  className: this.getTypeClass("timeBar"),
                  themed: "VoiceChannel" === this.props.type,
              });
    }
    renderState(e, t) {
        let n,
            { state: l, party: a, assets: r } = e,
            s = l,
            o = l;
        if (!(0, B.A)(e) && ((s = r?.large_text), (o = r?.large_text), (0, J.A)(e) && null != s)) {
            let t = (t, n) =>
                null != e.sync_id && null != o
                    ? (0, i.jsx)(
                          f.Anchor,
                          { className: ee.bodyLink, onClick: this.handleOpenSpotifyAlbum, children: o },
                          n,
                      )
                    : o;
            s = X.intl.format(X.t.vOLBEy, { album: o, albumHook: t });
        }
        return (null != s && "" !== s && e.type !== d.$.CUSTOM_STATUS) || (0, M.Cy)(e)
            ? (a?.size == null && [q.I4].includes(e.application_id ?? "")
                  ? (n = X.intl.formatToPlainString(X.t["u//9By"], { count: "0", max: t?.getMaxParticipants() ?? 0 }))
                  : (0, M.Cy)(e) && a?.size != null
                    ? (n = X.intl.formatToPlainString(X.t["JC/3xw"], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0],
                      }))
                    : a?.size != null &&
                      a.size.length >= 2 &&
                      (n =
                          0 === a.size[1]
                              ? X.intl.formatToPlainString(X.t.IM4J4e, { count: a.size[0] })
                              : X.intl.formatToPlainString(X.t["u//9By"], { count: a.size[0], max: a.size[1] })),
              (0, i.jsxs)("div", {
                  className: ee.state,
                  children: [
                      (0, i.jsx)("span", { title: o, children: s }),
                      null != n ? (0, i.jsxs)("span", { children: [" ", n] }) : null,
                  ],
              }))
            : null;
    }
    render() {
        let e,
            {
                type: t,
                renderActions: n,
                className: l,
                application: a,
                onClose: r,
                onOpenGameProfileModal: o,
            } = this.props,
            u = this.activity;
        if (null == u || u.type === d.$.CUSTOM_STATUS) return null;
        let c = "ActivityFeed" === t,
            m = "StreamPreview" === t,
            A = !1;
        if ((0, W.A)(u)) ((e = this.renderXboxImage()), (A = !0));
        else {
            let t = (0, D.Gf)(this.props.user.id, u ?? void 0);
            (t.isSpotify || (e = (0, i.jsx)(D.Tf, { resolvedActivity: t })),
                null == e && (A = null != (e = this.renderGameImage(u))));
        }
        let p = this.renderName(u),
            h = this.renderDetails(u),
            f = this.renderState(u, a),
            g = this.renderTimePlayed(u),
            x = this.renderChannelDetails(u),
            I = null != n ? n() : null,
            T = this.renderTimeBar(u),
            S = ![e, p, h, f, g, T, I].some((e) => null != e);
        return (0, i.jsxs)("div", {
            className: s()(this.getTypeClass("activity"), l),
            children: [
                this.renderHeader(S),
                (0, i.jsx)("div", {
                    className: A ? ee.bodyAlignCenter : ee.bodyNormal,
                    children: (0, i.jsxs)("div", {
                        className: ee.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(j.A.Child, {
                                      className: s()(
                                          (0, F.t)(
                                              ee,
                                              "content",
                                              A ? "GameImage" : null != e ? "Images" : "NoImages",
                                              t,
                                          ),
                                      ),
                                      children: [
                                          (0, i.jsxs)(v.D, {
                                              className: s()(null != o && ee.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            (o(e), r?.());
                                                        }
                                                      : void 0,
                                              children: [p, h, f, g],
                                          }),
                                          x,
                                          m ? null : T,
                                          c ? I : null,
                                      ],
                                  }),
                        ],
                    }),
                }),
                m ? I : null,
                (0, i.jsx)(ei, { activity: u }),
            ],
        });
    }
    handleOpenSpotifyTrack = () => {
        let { activity: e, onOpenSpotifyTrack: t } = this.props;
        (u()(null != e, "Spotify activity was null"), t?.(e));
    };
    handleOpenSpotifyArtist = (e) => {
        let { activity: t, onOpenSpotifyArtist: n, user: l } = this.props;
        (u()(null != t, "Spotify activity was null"), n?.(t, l.id, e));
    };
    handleOpenSpotifyAlbum = () => {
        let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
        (u()(null != e, "Spotify activity was null"), t?.(e, n.id));
    };
}
function es(e) {
    let t = (0, R.A)({
        location: "UserActivity",
        applicationId: e.application?.id ?? e.activity?.application_id,
        source: P.GameProfileSources.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0,
    });
    return (0, i.jsx)(er, { ...e, onOpenGameProfileModal: t });
}
es.Types = et;
let eo = es;
