n.d(t, { Z: () => ey }), n(388685), n(472816), n(794429);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    c = n(442837),
    u = n(704215),
    d = n(692547),
    p = n(28664),
    f = n(481060),
    h = n(287734),
    g = n(438139),
    m = n(2052),
    _ = n(726542),
    b = n(638880),
    E = n(655922),
    O = n(122810),
    y = n(833664),
    v = n(503438),
    I = n(420660),
    C = n(74433),
    S = n(206074),
    T = n(100527),
    N = n(906732),
    j = n(213609),
    P = n(728345),
    x = n(812206),
    A = n(933557),
    Z = n(194082),
    w = n(377171),
    L = n(379357),
    R = n(264165),
    D = n(548816),
    M = n(266454),
    k = n(925329),
    U = n(102172),
    G = n(871118),
    B = n(707409),
    H = n(365113),
    V = n(171516),
    F = n(103450),
    z = n(359110),
    Y = n(769654),
    W = n(849171),
    q = n(601964),
    K = n(314897),
    Q = n(592125),
    J = n(594174),
    X = n(395361),
    $ = n(639351),
    ee = n(81063),
    et = n(823379),
    en = n(51144),
    er = n(599706),
    ei = n(981631),
    el = n(388032),
    ea = n(84822);
let es = [14, 14, 12, 12, 10, 8, 6],
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: s()(ea.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    ec = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = H.o.getConfig({ location: "nowplaying" }).demureActivityCards;
        return (0, i.jsx)(f.Text, {
            className: s()(ea.textContent, t),
            variant: "text-xs/normal",
            color: n ? "text-muted" : void 0,
            children: e,
        });
    },
    eu = (0, g.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: ea.__invalid_timestamp,
            children: t,
        });
    }),
    ed = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: ea.section,
            children: t,
        });
    },
    ep = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: s()(ea.separator, { [ea.inset]: t }, n) });
    },
    ef = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, j.Z)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, i.jsx)(p.u, {
                text: el.intl.string(el.t.JVwWva),
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: f.v3n,
                    text: el.intl.string(el.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    eh = (e) => {
        let { activity: t, user: n } = e,
            r = (0, F.e)({
                activity: t,
                user: n,
                supportsAskToJoin: !1,
            }),
            i = null != r;
        return {
            isJoinActivityButtonShown: i,
            joinActivityButtonAction: r,
            hasButton: i,
        };
    },
    eg = (e) => {
        let { activity: t, user: n } = e,
            { joinActivityButtonAction: r, isJoinActivityButtonShown: l } = eh({
                activity: t,
                user: n,
            });
        if (l && null != r) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: l, isEnabled: a } = r;
            return (0, i.jsx)(p.u, {
                text: l,
                asContainer: !a,
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "secondary",
                    icon: f.iWm,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return null;
    },
    em = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: r, name: l } = t,
            { data: a } = (0, P.IX)(r),
            s = (0, S.Z)({
                application: a,
                analyticsLocations: n,
            }),
            o = (0, M.Nj)(u.z.CLOUD_PLAY_NEW_BADGE),
            c = (0, V.F)(r);
        return null == s || c
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ep, { className: ea.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: ea.cloudPlaySection,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ea.cloudPlaySectionTextContainer,
                                  children: [
                                      o
                                          ? null
                                          : (0, i.jsx)(f.IGR, {
                                                text: el.intl.string(el.t.y2b7CA),
                                                color: w.Z.BG_BRAND,
                                            }),
                                      (0, i.jsx)(f.Text, {
                                          variant: "text-xs/medium",
                                          children: el.intl.formatToPlainString(el.t.RmiYF3, { gameName: l }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(ef, {
                                  onCloudPlayClick: s,
                                  analyticsLocations: n,
                              }),
                          ],
                      }),
                  ],
              });
    };
var e_ = (((r = e_ || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let eb = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)($.Z, {
                className: ea.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(X.Z, {
                className: ea.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: ea.multipleIconWrapper,
                children: (0, i.jsx)(f.iWm, {
                    size: "md",
                    className: s()(ea.headerIcon, ea.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: ea.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(f.P3F, {
              onClick: r,
              className: s()(null != r ? ea.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
eb.Src = e_;
let eE = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: r,
            icon: l,
            onSubtitleClick: a,
            onIconClick: s,
            onContextMenu: o,
            guildId: c,
        } = e,
        u = H.o.useConfig({ location: "nowplaying" }).demureActivityCards,
        d = (0, i.jsx)(f.Text, {
            color: u ? "text-muted" : "header-secondary",
            className: ea.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? ea.headerFull : ea.headerSimple,
        children: [
            (0, i.jsx)(f.qEK, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: f.EFr.SIZE_32,
                className: ea.headerAvatar,
                status: t.status,
                onContextMenu: o,
            }),
            (0, i.jsxs)("div", {
                className: ea.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(f.Text, {
                        className: ea.textContent,
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(f.P3F, {
                              className: ea.clickable,
                              onClick: a,
                              children: d,
                          })
                        : d,
                ],
            }),
            null != l && null != s
                ? (0, i.jsx)(f.P3F, {
                      className: ea.clickable,
                      onClick: s,
                      children: l,
                  })
                : l,
        ],
    });
};
eE.Icon = eb;
let eO = (e) => {
    var t,
        n,
        { children: r, className: l, flat: a } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["children", "className", "flat"]);
    return (0, i.jsx)(f.tEY, {
        children: (0, i.jsx)(
            D.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    noBackground: a,
                    className: s()(l, ea.wrapper),
                    padded: !a,
                },
                o,
            )),
            (n = n = { children: r }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
};
(eO.Header = eE),
    (eO.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(D.Z, {
            inset: !0,
            padded: !1,
            className: ea.body,
            children: t,
        });
    }),
    (eO.Separator = ep),
    (eO.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: o, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, A.ZP)(r, !0),
            p = (0, q.EB)(n, 32),
            g = (0, q.gM)(n);
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(f.P3F, {
                        onClick: () => (0, Y.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: ea.voiceSectionAssets,
                            children: [
                                null != p
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: p,
                                          className: s()(ea.voiceSectionGuildImage, ea.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: ea.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: ea.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = es[g.length]) ? t : es[es.length - 1] },
                                              children: g,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: ea.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(f.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ea.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.P3F, {
                        onClick: () => {
                            h.default.selectVoiceChannel(r.id), (0, z.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: ea.voiceSectionDetails,
                            children: [eo(n.name, ea.voiceSectionText), ec(d, ea.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(er.Z, {
                        partySize: a,
                        members: o,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (eO.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l, activity: a } = e,
            { analyticsLocations: s } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.gameSection,
                    children: [
                        null != t
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: ea.gameSectionIcon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                eo(n),
                                ec(el.intl.formatToPlainString(el.t.C4WXvc, { memberCount: r.totalSize })),
                            ],
                        }),
                        (0, i.jsx)(er.Z, {
                            partySize: r,
                            members: l,
                        }),
                    ],
                }),
                (0, i.jsx)(em, {
                    activity: a,
                    analyticsLocations: s,
                }),
            ],
        });
    }),
    (eO.RichPresenceSection = (e) => {
        var t, r, l, a;
        let { activity: o, getAssetImage: c, user: u } = e,
            { analyticsLocations: d } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: p } = (0, P.IX)(o.application_id),
            { assets: f, details: h, state: g, application_id: m } = o,
            { hasButton: _ } = eh({
                activity: o,
                user: u,
            }),
            b = null != (r = null == (t = (0, L.T7)(p)) ? void 0 : t.src) ? r : n(211827),
            E = (0, S.Z)({
                application: p,
                analyticsLocations: d,
            });
        return null != o.assets || (0, O.Z)(o) || null != E
            ? (0, i.jsxs)(ed, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: s()(ea.activitySection, { [ea.activitySectionWithButtons]: _ }),
                          children: [
                              null != f && 0 !== Object.keys(f).length
                                  ? (0, i.jsxs)("div", {
                                        className: ea.activitySectionAssets,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: null != (l = f.large_text) ? l : "",
                                                src: c(m, f.large_image, [160, 160]),
                                                className: s()(ea.largeImage, {
                                                    [ea.largeImageMask]: null != f.small_image,
                                                }),
                                            }),
                                            null != f.small_image
                                                ? (0, i.jsx)("img", {
                                                      alt: null != (a = f.small_text) ? a : "",
                                                      src: c(m, f.small_image, [64, 64]),
                                                      className: ea.smallImage,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, i.jsx)("div", {
                                        className: ea.activitySectionAssets,
                                        children: (0, i.jsx)("img", {
                                            alt: "",
                                            src: b,
                                            className: ea.largeImage,
                                        }),
                                    }),
                              (0, i.jsxs)("div", {
                                  className: ea.activitySectionDetails,
                                  children: [
                                      eo(null != h && "" !== h ? h : o.name),
                                      null != g ? ec(g) : null,
                                      (() => {
                                          let { timestamps: e } = o;
                                          return null == e || !(0, y.Z)(o) || (0, v.Z)(o)
                                              ? null
                                              : ec(
                                                    (0, O.Z)(o)
                                                        ? (0, i.jsx)(eu, { timestamps: e })
                                                        : (0, i.jsx)(B.ZP, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: B.ZP.Locations.USER_ACTIVITY,
                                                              className: ea.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, i.jsx)(eg, {
                                  activity: o,
                                  user: u,
                              }),
                          ],
                      }),
                      (0, i.jsx)(em, {
                          activity: o,
                          analyticsLocations: d,
                      }),
                  ],
              })
            : null;
    }),
    (eO.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.xboxSection,
                children: [
                    (0, i.jsx)($.Z, { className: ea.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: ea.__invalid_xboxSectionDetails,
                        children: [eo(t), ec(el.intl.string(el.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eO.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: o,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(ed, {
            children: (0, i.jsxs)("div", {
                className: ea.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: ea.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: s()(ea.largeImage, ea.borderRadius0, {
                                          [ea.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)(X.Z, {
                                            className: ea.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? eo(r) : null, null != l ? ec(l) : null],
                    }),
                    (0, i.jsx)(er.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: o,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (eO.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: o } = e,
            { name: c, details: u, assets: d, application_id: p } = r;
        if (null != d && (0, I.Z)(r)) {
            var h;
            t = (0, i.jsx)(R.Z, {
                className: ea.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(f.P3F, {
                    href: (0, E.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = d.large_text) ? h : "",
                            src: a(p, d.large_image, [900, 500]),
                            className: ea.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: ea.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()({
                        [ea.twitchSectionSimple]: null == l,
                        [ea.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: _.Z.get(ei.ABu.TWITCH).icon.lightSVG,
                            className: ea.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo(c), null != u ? ec(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(f.qEK, {
                                  src: l.getAvatarURL(o, 24),
                                  "aria-label": l.username,
                                  className: ea.twitchSectionAvatar,
                                  size: f.EFr.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (eO.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            u = (0, c.e7)([Q.Z], () => Q.Z.getChannel(a.channelId)),
            [d, p] = (0, U.wq)(u),
            h = (0, i.jsxs)(f.P3F, {
                onClick: d ? s : void 0,
                className: ea.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(G.Z, {
                        stream: a,
                        className: ea.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(f.Text, {
                        className: ea.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, U.P9)(p),
                    }),
                ],
            }),
            g = null != (n = null == (t = (0, C.Z)(r, a)) ? void 0 : t.activityText) ? n : el.intl.string(el.t.eXan7B);
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(f.qEK, {
                            size: f.EFr.SIZE_32,
                            src: l.getAvatarURL(o, 32),
                            "aria-label": l.username,
                            className: ea.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo(en.ZP.getName(l)), ec(g)],
                        }),
                        (0, i.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
                    ],
                }),
                h,
            ],
        });
    }),
    (eO.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [s, o] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, ee.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [u]);
        let d = (0, c.Wu)([J.default, K.default], () =>
                Array.from(a)
                    .map((e) => (K.default.getId() === e ? null : J.default.getUser(e)))
                    .filter(et.lm),
            ),
            p = (0, m.O)(),
            { analyticsLocations: h } = (0, N.ZP)();
        if (null == u) return null;
        let g = x.Z.getApplication(u);
        if (null == g) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            E = (0, ee.xF)(g.id, s, 300);
        return (0, i.jsxs)(ed, {
            children: [
                (0, i.jsxs)("div", {
                    className: ea.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(k.Z, {
                            game: g,
                            size: k.A.XSMALL,
                            className: ea.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: ea.embeddedActivityName,
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: g.name,
                            }),
                        }),
                        null != _
                            ? (0, i.jsx)("div", {
                                  className: ea.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(f.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(eu, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ea.embeddedActivityPlayerContainer,
                    children: [
                        null != E
                            ? (0, i.jsx)("img", {
                                  src: E,
                                  alt: g.name,
                                  className: ea.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: ea.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(W.OV, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: ea.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: el.intl.string(el.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, b.Z)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: p.location,
                                                    analyticsLocations: h,
                                                });
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
let ey = eO;
