n.d(t, { Z: () => eO }), n(704826), n(35282), n(388685), n(472816), n(794429);
var r,
    i = n(54381),
    l = n(473749),
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
    v = n(833664),
    y = n(503438),
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
    w = n(379357),
    L = n(264165),
    R = n(548816),
    D = n(266454),
    M = n(925329),
    k = n(102172),
    U = n(871118),
    G = n(707409),
    B = n(365113),
    H = n(171516),
    V = n(103450),
    F = n(359110),
    z = n(769654),
    Y = n(849171),
    W = n(601964),
    q = n(314897),
    K = n(592125),
    Q = n(594174),
    J = n(395361),
    X = n(639351),
    $ = n(81063),
    ee = n(823379),
    et = n(51144),
    en = n(599706),
    er = n(981631),
    ei = n(388032),
    el = n(84822);
let ea = [14, 14, 12, 12, 10, 8, 6],
    es = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: s()(el.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = B.o.getConfig({ location: "nowplaying" }).demureActivityCards;
        return (0, i.jsx)(f.Text, {
            className: s()(el.textContent, t),
            variant: "text-xs/normal",
            color: n ? "text-muted" : void 0,
            children: e,
        });
    },
    ec = (0, g.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: el.__invalid_timestamp,
            children: t,
        });
    }),
    eu = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: el.section,
            children: t,
        });
    },
    ed = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: s()(el.separator, { [el.inset]: t }, n) });
    },
    ep = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, j.Z)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, i.jsx)(p.u, {
                text: ei.intl.string(ei.t.JVwWva),
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: f.v3n,
                    text: ei.intl.string(ei.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    ef = (e) => {
        let { activity: t, user: n } = e,
            r = (0, V.e)({
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
    eh = (e) => {
        let { activity: t, user: n } = e,
            { joinActivityButtonAction: r, isJoinActivityButtonShown: l } = ef({
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
    eg = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: r, name: l } = t,
            { data: a } = (0, P.IX)(r),
            s = (0, S.Z)({
                application: a,
                analyticsLocations: n,
            }),
            o = (0, D.Nj)(u.z.CLOUD_PLAY_NEW_BADGE),
            c = (0, H.F)(r);
        return null == s || c
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ed, { className: el.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: el.cloudPlaySection,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: el.cloudPlaySectionTextContainer,
                                  children: [
                                      o
                                          ? null
                                          : (0, i.jsx)(f.IGR, {
                                                text: ei.intl.string(ei.t.y2b7CA),
                                                color: d.Z.colors.BG_BRAND.css,
                                            }),
                                      (0, i.jsx)(f.Text, {
                                          variant: "text-xs/medium",
                                          children: ei.intl.formatToPlainString(ei.t.RmiYF3, { gameName: l }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(ep, {
                                  onCloudPlayClick: s,
                                  analyticsLocations: n,
                              }),
                          ],
                      }),
                  ],
              });
    };
var em = (((r = em || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let e_ = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)(X.Z, {
                className: el.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(J.Z, {
                className: el.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: el.multipleIconWrapper,
                children: (0, i.jsx)(f.iWm, {
                    size: "md",
                    className: s()(el.headerIcon, el.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: el.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(f.P3F, {
              onClick: r,
              className: s()(null != r ? el.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
e_.Src = em;
let eb = (e) => {
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
        u = B.o.useConfig({ location: "nowplaying" }).demureActivityCards,
        d = (0, i.jsx)(f.Text, {
            color: u ? "text-muted" : "header-secondary",
            className: el.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? el.headerFull : el.headerSimple,
        children: [
            (0, i.jsx)(f.qEK, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: f.EFr.SIZE_32,
                className: el.headerAvatar,
                status: t.status,
                onContextMenu: o,
            }),
            (0, i.jsxs)("div", {
                className: el.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(f.Text, {
                        className: el.textContent,
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(f.P3F, {
                              className: el.clickable,
                              onClick: a,
                              children: d,
                          })
                        : d,
                ],
            }),
            null != l && null != s
                ? (0, i.jsx)(f.P3F, {
                      className: el.clickable,
                      onClick: s,
                      children: l,
                  })
                : l,
        ],
    });
};
eb.Icon = e_;
let eE = (e) => {
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
            R.Z,
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
                    className: s()(l, el.wrapper),
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
(eE.Header = eb),
    (eE.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(R.Z, {
            inset: !0,
            padded: !1,
            className: el.body,
            children: t,
        });
    }),
    (eE.Separator = ed),
    (eE.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: o, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, A.ZP)(r, !0),
            p = (0, W.EB)(n, 32),
            g = (0, W.gM)(n);
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: el.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(f.P3F, {
                        onClick: () => (0, z.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: el.voiceSectionAssets,
                            children: [
                                null != p
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: p,
                                          className: s()(el.voiceSectionGuildImage, el.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: el.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: el.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = ea[g.length]) ? t : ea[ea.length - 1] },
                                              children: g,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: el.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(f.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: el.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.P3F, {
                        onClick: () => {
                            h.default.selectVoiceChannel(r.id), (0, F.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: el.voiceSectionDetails,
                            children: [es(n.name, el.voiceSectionText), eo(d, el.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(en.Z, {
                        partySize: a,
                        members: o,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (eE.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l, activity: a } = e,
            { analyticsLocations: s } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: el.gameSection,
                    children: [
                        null != t
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: el.gameSectionIcon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                es(n),
                                eo(ei.intl.formatToPlainString(ei.t.C4WXvc, { memberCount: r.totalSize })),
                            ],
                        }),
                        (0, i.jsx)(en.Z, {
                            partySize: r,
                            members: l,
                        }),
                    ],
                }),
                (0, i.jsx)(eg, {
                    activity: a,
                    analyticsLocations: s,
                }),
            ],
        });
    }),
    (eE.RichPresenceSection = (e) => {
        var t, r, l, a, o;
        let { activity: c, getAssetImage: u, user: d } = e,
            { analyticsLocations: p } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: f } = (0, P.IX)(c.application_id),
            { assets: h, details: g, state: m, application_id: _ } = c,
            { hasButton: b } = ef({
                activity: c,
                user: d,
            }),
            E = null != (r = null == (t = (0, w.T7)(f)) ? void 0 : t.src) ? r : n(211827),
            I = (0, S.Z)({
                application: f,
                analyticsLocations: p,
            });
        return null != c.assets || (0, O.Z)(c) || null != I
            ? (0, i.jsxs)(eu, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: s()(el.activitySection, { [el.activitySectionWithButtons]: b }),
                          children: [
                              null != h && 0 !== Object.keys(h).length
                                  ? (0, i.jsxs)("div", {
                                        className: el.activitySectionAssets,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: null != (l = h.large_text) ? l : "",
                                                src: null != (a = u(_, h.large_image, [160, 160])) ? a : E,
                                                className: s()(el.largeImage, {
                                                    [el.largeImageMask]: null != h.small_image,
                                                }),
                                            }),
                                            null != h.small_image
                                                ? (0, i.jsx)("img", {
                                                      alt: null != (o = h.small_text) ? o : "",
                                                      src: u(_, h.small_image, [64, 64]),
                                                      className: el.smallImage,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, i.jsx)("div", {
                                        className: el.activitySectionAssets,
                                        children: (0, i.jsx)("img", {
                                            alt: "",
                                            src: E,
                                            className: el.largeImage,
                                        }),
                                    }),
                              (0, i.jsxs)("div", {
                                  className: el.activitySectionDetails,
                                  children: [
                                      es(null != g && "" !== g ? g : c.name),
                                      null != m ? eo(m) : null,
                                      (() => {
                                          let { timestamps: e } = c;
                                          return null == e || !(0, v.Z)(c) || (0, y.Z)(c)
                                              ? null
                                              : eo(
                                                    (0, O.Z)(c)
                                                        ? (0, i.jsx)(ec, { timestamps: e })
                                                        : (0, i.jsx)(G.ZP, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: G.ZP.Locations.USER_ACTIVITY,
                                                              className: el.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, i.jsx)(eh, {
                                  activity: c,
                                  user: d,
                              }),
                          ],
                      }),
                      (0, i.jsx)(eg, {
                          activity: c,
                          analyticsLocations: p,
                      }),
                  ],
              })
            : null;
    }),
    (eE.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: el.xboxSection,
                children: [
                    (0, i.jsx)(X.Z, { className: el.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: el.__invalid_xboxSectionDetails,
                        children: [es(t), eo(ei.intl.string(ei.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (eE.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: o,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: el.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: el.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: s()(el.largeImage, el.borderRadius0, {
                                          [el.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)(J.Z, {
                                            className: el.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? es(r) : null, null != l ? eo(l.replace(/; /g, ", ")) : null],
                    }),
                    (0, i.jsx)(en.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: o,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (eE.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: o } = e,
            { name: c, details: u, assets: d, application_id: p } = r;
        if (null != d && (0, I.Z)(r)) {
            var h;
            t = (0, i.jsx)(L.Z, {
                className: el.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(f.P3F, {
                    href: (0, E.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = d.large_text) ? h : "",
                            src: a(p, d.large_image, [900, 500]),
                            className: el.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: el.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()({
                        [el.twitchSectionSimple]: null == l,
                        [el.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: _.Z.get(er.ABu.TWITCH).icon.lightSVG,
                            className: el.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [es(c), null != u ? eo(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(f.qEK, {
                                  src: l.getAvatarURL(o, 24),
                                  "aria-label": l.username,
                                  className: el.twitchSectionAvatar,
                                  size: f.EFr.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (eE.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            u = (0, c.e7)([K.Z], () => K.Z.getChannel(a.channelId)),
            [d, p] = (0, k.wq)(u),
            h = (0, i.jsxs)(f.P3F, {
                onClick: d ? s : void 0,
                className: el.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(U.Z, {
                        stream: a,
                        className: el.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(f.Text, {
                        className: el.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, k.P9)(p),
                    }),
                ],
            }),
            g = null != (n = null == (t = (0, C.Z)(r, a)) ? void 0 : t.activityText) ? n : ei.intl.string(ei.t.eXan7B);
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: el.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(f.qEK, {
                            size: f.EFr.SIZE_32,
                            src: l.getAvatarURL(o, 32),
                            "aria-label": l.username,
                            className: el.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [es(et.ZP.getName(l)), eo(g)],
                        }),
                        (0, i.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
                    ],
                }),
                h,
            ],
        });
    }),
    (eE.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [s, o] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, $.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [u]);
        let d = (0, c.Wu)([Q.default, q.default], () =>
                Array.from(a)
                    .map((e) => (q.default.getId() === e ? null : Q.default.getUser(e)))
                    .filter(ee.lm),
            ),
            p = (0, m.O)(),
            { analyticsLocations: h } = (0, N.ZP)();
        if (null == u) return null;
        let g = x.Z.getApplication(u);
        if (null == g) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            E = (0, $.xF)(g.id, s, 300);
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: el.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(M.Z, {
                            game: g,
                            size: M.A.XSMALL,
                            className: el.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: el.embeddedActivityName,
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: g.name,
                            }),
                        }),
                        null != _
                            ? (0, i.jsx)("div", {
                                  className: el.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(f.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(ec, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: el.embeddedActivityPlayerContainer,
                    children: [
                        null != E
                            ? (0, i.jsx)("img", {
                                  src: E,
                                  alt: g.name,
                                  className: el.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: el.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(Y.OV, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: el.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ei.intl.string(ei.t.VJlc0S),
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
let eO = eE;
