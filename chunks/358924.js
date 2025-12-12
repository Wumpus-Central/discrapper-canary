n.d(t, { Z: () => ey }), n(704826), n(35282), n(388685), n(472816), n(794429);
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
    g = n(287734),
    h = n(438139),
    m = n(2052),
    b = n(726542),
    E = n(638880),
    _ = n(655922),
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
    M = n(386725),
    k = n(7284),
    U = n(925329),
    G = n(102172),
    B = n(871118),
    H = n(707409),
    V = n(365113),
    F = n(171516),
    z = n(103450),
    Y = n(359110),
    W = n(769654),
    q = n(849171),
    K = n(601964),
    Q = n(314897),
    J = n(592125),
    X = n(594174),
    $ = n(395361),
    ee = n(639351),
    et = n(81063),
    en = n(823379),
    er = n(51144),
    ei = n(599706),
    el = n(981631),
    ea = n(388032),
    es = n(649519);
let eo = [14, 14, 12, 12, 10, 8, 6],
    ec = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: s()(es.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    eu = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = V.o.getConfig({ location: "nowplaying" }).demureActivityCards;
        return (0, i.jsx)(f.Text, {
            className: s()(es.textContent, t),
            variant: "text-xs/normal",
            color: n ? "text-muted" : void 0,
            children: e,
        });
    },
    ed = (0, h.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: es.__invalid_timestamp,
            children: t,
        });
    }),
    ep = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: es.section,
            children: t,
        });
    },
    ef = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: s()(es.separator, { [es.inset]: t }, n) });
    },
    eg = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, j.Z)({
                name: o.ImpressionNames.CLOUD_PLAY_CTA,
                type: o.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, i.jsx)(p.u, {
                text: ea.intl.string(ea.t.JVwWva),
                children: (0, i.jsx)(f.Button, {
                    size: "sm",
                    variant: "primary",
                    icon: f.v3n,
                    text: ea.intl.string(ea.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    eh = (e) => {
        let { activity: t, user: n } = e,
            r = (0, z.e)({
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
    em = (e) => {
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
    eb = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: r, name: l } = t,
            { data: a } = (0, P.IX)(r),
            s = (0, S.Z)({
                application: a,
                analyticsLocations: n,
            }),
            o = (0, D.Nj)(u.z.CLOUD_PLAY_NEW_BADGE),
            c = (0, F.F)(r);
        return null == s || c
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ef, { className: es.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: es.cloudPlaySection,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: es.cloudPlaySectionTextContainer,
                                  children: [
                                      o
                                          ? null
                                          : (0, i.jsx)(f.IGR, {
                                                text: ea.intl.string(ea.t.y2b7CA),
                                                color: d.Z.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, i.jsx)(f.Text, {
                                          variant: "text-xs/medium",
                                          children: ea.intl.formatToPlainString(ea.t.RmiYF3, { gameName: l }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(eg, {
                                  onCloudPlayClick: s,
                                  analyticsLocations: n,
                              }),
                          ],
                      }),
                  ],
              });
    };
var eE = (((r = eE || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let e_ = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)(ee.Z, {
                className: es.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)($.Z, {
                className: es.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: es.multipleIconWrapper,
                children: (0, i.jsx)(f.iWm, {
                    size: "md",
                    className: s()(es.headerIcon, es.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: es.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(f.P3F, {
              onClick: r,
              className: s()(null != r ? es.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
e_.Src = eE;
let eO = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: r,
            icon: l,
            onSubtitleClick: a,
            onIconClick: o,
            onContextMenu: c,
            guildId: u,
            displayNameFont: d,
        } = e,
        p = V.o.useConfig({ location: "nowplaying" }).demureActivityCards,
        g = (0, i.jsx)(f.Text, {
            color: p ? "text-muted" : "text-default",
            className: es.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? es.headerFull : es.headerSimple,
        children: [
            (0, i.jsx)(f.qEK, {
                src: t.user.getAvatarURL(u, 32),
                "aria-label": t.user.username,
                size: f.EFr.SIZE_32,
                className: es.headerAvatar,
                status: t.status,
                onContextMenu: c,
            }),
            (0, i.jsxs)("div", {
                className: es.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(f.Text, {
                        className: s()(es.textContent, d),
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(f.P3F, {
                              className: es.clickable,
                              onClick: a,
                              children: g,
                          })
                        : g,
                ],
            }),
            null != l && null != o
                ? (0, i.jsx)(f.P3F, {
                      className: es.clickable,
                      onClick: o,
                      children: l,
                  })
                : l,
        ],
    });
};
eO.Icon = e_;
let ev = (e) => {
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
                    className: s()(l, es.wrapper),
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
(ev.Header = eO),
    (ev.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(R.Z, {
            inset: !0,
            padded: !1,
            className: es.body,
            children: t,
        });
    }),
    (ev.Separator = ef),
    (ev.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: o, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, A.ZP)(r, !0),
            p = (0, K.EB)(n, 32),
            h = (0, K.gM)(n);
        return (0, i.jsx)(ep, {
            children: (0, i.jsxs)("div", {
                className: es.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(f.P3F, {
                        onClick: () => (0, W.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: es.voiceSectionAssets,
                            children: [
                                null != p
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: p,
                                          className: s()(es.voiceSectionGuildImage, es.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: es.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: es.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = eo[h.length]) ? t : eo[eo.length - 1] },
                                              children: h,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: es.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(f.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: es.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.P3F, {
                        onClick: () => {
                            g.default.selectVoiceChannel(r.id), (0, Y.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: es.voiceSectionDetails,
                            children: [ec(n.name, es.voiceSectionText), eu(d, es.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(ei.Z, {
                        partySize: a,
                        members: o,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (ev.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l, activity: a } = e,
            { analyticsLocations: s } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, i.jsxs)(ep, {
            children: [
                (0, i.jsxs)("div", {
                    className: es.gameSection,
                    children: [
                        null != t
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: es.gameSectionIcon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                ec(n),
                                eu(ea.intl.formatToPlainString(ea.t.C4WXvc, { memberCount: r.totalSize })),
                            ],
                        }),
                        (0, i.jsx)(ei.Z, {
                            partySize: r,
                            members: l,
                        }),
                    ],
                }),
                (0, i.jsx)(eb, {
                    activity: a,
                    analyticsLocations: s,
                }),
            ],
        });
    }),
    (ev.RichPresenceSection = (e) => {
        var t, r, l, a, o;
        let { activity: c, getAssetImage: u, user: d } = e,
            { analyticsLocations: p } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: f } = (0, P.IX)(c.application_id),
            { assets: g, details: h, state: m, application_id: b } = c,
            { hasButton: E } = eh({
                activity: c,
                user: d,
            }),
            _ = null != (r = null == (t = (0, w.T7)(f)) ? void 0 : t.src) ? r : n(211827),
            I = (0, S.Z)({
                application: f,
                analyticsLocations: p,
            });
        return null != c.assets || (0, O.Z)(c) || null != I
            ? (0, i.jsxs)(ep, {
                  children: [
                      (0, i.jsxs)("div", {
                          className: s()(es.activitySection, { [es.activitySectionWithButtons]: E }),
                          children: [
                              null != g && 0 !== Object.keys(g).length
                                  ? (0, i.jsxs)("div", {
                                        className: es.activitySectionAssets,
                                        children: [
                                            (0, i.jsx)("img", {
                                                alt: null != (l = g.large_text) ? l : "",
                                                src: null != (a = u(b, g.large_image, [160, 160])) ? a : _,
                                                className: s()(es.largeImage, {
                                                    [es.largeImageMask]: null != g.small_image,
                                                }),
                                            }),
                                            null != g.small_image
                                                ? (0, i.jsx)("img", {
                                                      alt: null != (o = g.small_text) ? o : "",
                                                      src: u(b, g.small_image, [64, 64]),
                                                      className: es.smallImage,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, i.jsx)("div", {
                                        className: es.activitySectionAssets,
                                        children: (0, i.jsx)("img", {
                                            alt: "",
                                            src: _,
                                            className: es.largeImage,
                                        }),
                                    }),
                              (0, i.jsxs)("div", {
                                  className: es.activitySectionDetails,
                                  children: [
                                      ec(null != h && "" !== h ? h : c.name),
                                      null != m ? eu(m) : null,
                                      (() => {
                                          let { timestamps: e } = c;
                                          return null == e || !(0, v.Z)(c) || (0, y.Z)(c)
                                              ? null
                                              : eu(
                                                    (0, O.Z)(c)
                                                        ? (0, i.jsx)(ed, { timestamps: e })
                                                        : (0, i.jsx)(H.ZP, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: H.ZP.Locations.USER_ACTIVITY,
                                                              className: es.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, i.jsx)(em, {
                                  activity: c,
                                  user: d,
                              }),
                          ],
                      }),
                      (0, i.jsx)(eb, {
                          activity: c,
                          analyticsLocations: p,
                      }),
                  ],
              })
            : null;
    }),
    (ev.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(ep, {
            children: (0, i.jsxs)("div", {
                className: es.xboxSection,
                children: [
                    (0, i.jsx)(ee.Z, { className: es.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: es.__invalid_xboxSectionDetails,
                        children: [ec(t), eu(ea.intl.string(ea.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (ev.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: o,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(ep, {
            children: (0, i.jsxs)("div", {
                className: es.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: es.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: s()(es.largeImage, es.borderRadius0, {
                                          [es.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)($.Z, {
                                            className: es.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? ec(r) : null, null != l ? eu(l.replace(/; /g, ", ")) : null],
                    }),
                    (0, i.jsx)(ei.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: o,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (ev.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: o } = e,
            { name: c, details: u, assets: d, application_id: p } = r;
        if (null != d && (0, I.Z)(r)) {
            var g;
            t = (0, i.jsx)(L.Z, {
                className: es.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(f.P3F, {
                    href: (0, _.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (g = d.large_text) ? g : "",
                            src: a(p, d.large_image, [900, 500]),
                            className: es.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: es.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(ep, {
            children: [
                (0, i.jsxs)("div", {
                    className: s()({
                        [es.twitchSectionSimple]: null == l,
                        [es.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: b.Z.get(el.ABu.TWITCH).icon.lightSVG,
                            className: es.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ec(c), null != u ? eu(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(f.qEK, {
                                  src: l.getAvatarURL(o, 24),
                                  "aria-label": l.username,
                                  className: es.twitchSectionAvatar,
                                  size: f.EFr.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (ev.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            u = (0, c.e7)([J.Z], () => J.Z.getChannel(a.channelId)),
            [d, p] = (0, G.wq)(u),
            g = (0, i.jsxs)(f.P3F, {
                onClick: d ? s : void 0,
                className: es.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(B.Z, {
                        stream: a,
                        className: es.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(f.Text, {
                        className: es.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, G.P9)(p),
                    }),
                ],
            }),
            h = null != (n = null == (t = (0, C.Z)(r, a)) ? void 0 : t.activityText) ? n : ea.intl.string(ea.t.eXan7B),
            m = (0, M.Z)({
                userId: l.id,
                guildId: o,
            }),
            b = (0, k.j)({ displayNameStyles: m });
        return (0, i.jsxs)(ep, {
            children: [
                (0, i.jsxs)("div", {
                    className: es.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(f.qEK, {
                            size: f.EFr.SIZE_32,
                            src: l.getAvatarURL(o, 32),
                            "aria-label": l.username,
                            className: es.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ec(er.ZP.getName(l), b), eu(h)],
                        }),
                        (0, i.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
                    ],
                }),
                g,
            ],
        });
    }),
    (ev.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [s, o] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, et.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [u]);
        let d = (0, c.Wu)([X.default, Q.default], () =>
                Array.from(a)
                    .map((e) => (Q.default.getId() === e ? null : X.default.getUser(e)))
                    .filter(en.lm),
            ),
            p = (0, m.O)(),
            { analyticsLocations: g } = (0, N.ZP)();
        if (null == u) return null;
        let h = x.Z.getApplication(u);
        if (null == h) return null;
        let b = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            _ = (0, et.xF)(h.id, s, 300);
        return (0, i.jsxs)(ep, {
            children: [
                (0, i.jsxs)("div", {
                    className: es.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(U.Z, {
                            game: h,
                            size: U.A.XSMALL,
                            className: es.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: es.embeddedActivityName,
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: h.name,
                            }),
                        }),
                        null != b
                            ? (0, i.jsx)("div", {
                                  className: es.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(f.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(ed, { timestamps: b }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: es.embeddedActivityPlayerContainer,
                    children: [
                        null != _
                            ? (0, i.jsx)("img", {
                                  src: _,
                                  alt: h.name,
                                  className: es.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: es.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(q.OV, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: es.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(f.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ea.intl.string(ea.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, E.Z)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: p.location,
                                                    analyticsLocations: g,
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
let ey = ev;
