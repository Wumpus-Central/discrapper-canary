n.d(t, { Z: () => eO }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    c = n(442837),
    u = n(704215),
    d = n(692547),
    p = n(28664),
    f = n(481060),
    h = n(287734),
    g = n(438139),
    m = n(2052),
    b = n(726542),
    _ = n(638880),
    O = n(655922),
    E = n(122810),
    v = n(833664),
    y = n(503438),
    I = n(420660),
    S = n(74433),
    C = n(206074),
    T = n(100527),
    N = n(906732),
    j = n(213609),
    P = n(728345),
    x = n(812206),
    A = n(933557),
    Z = n(194082),
    w = n(377171),
    L = n(264165),
    R = n(548816),
    D = n(266454),
    k = n(925329),
    M = n(102172),
    U = n(871118),
    G = n(707409),
    B = n(171516),
    H = n(103450),
    V = n(359110),
    F = n(769654),
    z = n(849171),
    W = n(601964),
    q = n(314897),
    Y = n(592125),
    K = n(594174),
    Q = n(395361),
    X = n(639351),
    J = n(81063),
    $ = n(823379),
    ee = n(51144),
    et = n(599706),
    en = n(981631),
    er = n(388032),
    ei = n(84822);
let el = [14, 14, 12, 12, 10, 8, 6],
    ea = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: o()(ei.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(f.Text, {
            className: o()(ei.textContent, t),
            variant: "text-xs/normal",
            children: e,
        });
    },
    es = (0, g.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: ei.__invalid_timestamp,
            children: t,
        });
    }),
    ec = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: ei.section,
            children: t,
        });
    },
    eu = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: o()(ei.separator, { [ei.inset]: t }, n) });
    },
    ed = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, j.Z)({
                name: s.ImpressionNames.CLOUD_PLAY_CTA,
                type: s.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, i.jsx)(p.u, {
                text: er.intl.string(er.t.JVwWvb),
                children: (0, i.jsx)(f.zxk, {
                    size: "sm",
                    variant: "secondary",
                    icon: f.v3n,
                    text: er.intl.string(er.t.YsIsPT),
                    onClick: t,
                }),
            })
        );
    },
    ep = (e) => {
        let { activity: t, user: n } = e,
            r = (0, H.e)({
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
    ef = (e) => {
        let { activity: t, user: n } = e,
            { joinActivityButtonAction: r, isJoinActivityButtonShown: l } = ep({
                activity: t,
                user: n,
            });
        if (l && null != r) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: l, isEnabled: a } = r;
            return (0, i.jsx)(p.u, {
                text: l,
                children: (0, i.jsx)(f.zxk, {
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
    eh = (e) => {
        let { activity: t, analyticsLocations: n, hidden: r } = e,
            { application_id: l, name: a } = t,
            { data: o } = (0, P.IX)(l),
            s = (0, C.Z)({
                application: o,
                analyticsLocations: n,
            }),
            c = (0, D.Nj)(u.z.CLOUD_PLAY_NEW_BADGE),
            d = (0, B.F)(l);
        return null == s || d || r
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(eu, { className: ei.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: ei.cloudPlaySection,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: ei.cloudPlaySectionTextContainer,
                                  children: [
                                      c
                                          ? null
                                          : (0, i.jsx)(f.IGR, {
                                                text: er.intl.string(er.t.y2b7CA),
                                                color: w.Z.BG_BRAND,
                                            }),
                                      (0, i.jsx)(f.Text, {
                                          variant: "text-xs/medium",
                                          children: er.intl.formatToPlainString(er.t.RmiYFx, { gameName: a }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(ed, {
                                  onCloudPlayClick: s,
                                  analyticsLocations: n,
                              }),
                          ],
                      }),
                  ],
              });
    };
var eg = (((r = eg || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let em = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)(X.Z, {
                className: ei.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(Q.Z, {
                className: ei.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: ei.multipleIconWrapper,
                children: (0, i.jsx)(f.iWm, {
                    size: "md",
                    className: o()(ei.headerIcon, ei.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: ei.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(f.P3F, {
              onClick: r,
              className: o()(null != r ? ei.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
em.Src = eg;
let eb = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: r,
            icon: l,
            onSubtitleClick: a,
            onIconClick: o,
            onContextMenu: s,
            guildId: c,
        } = e,
        u = (0, i.jsx)(f.Text, {
            color: "header-secondary",
            className: ei.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? ei.headerFull : ei.headerSimple,
        children: [
            (0, i.jsx)(f.qEK, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: f.EFr.SIZE_32,
                className: ei.headerAvatar,
                status: t.status,
                onContextMenu: s,
            }),
            (0, i.jsxs)("div", {
                className: ei.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(f.Text, {
                        className: ei.textContent,
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(f.P3F, {
                              className: ei.clickable,
                              onClick: a,
                              children: u,
                          })
                        : u,
                ],
            }),
            null != l && null != o
                ? (0, i.jsx)(f.P3F, {
                      className: ei.clickable,
                      onClick: o,
                      children: l,
                  })
                : l,
        ],
    });
};
eb.Icon = em;
let e_ = (e) => {
    var t,
        n,
        { children: r, className: l } = e,
        a = (function (e, t) {
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
        })(e, ["children", "className"]);
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
                    className: o()(l, ei.wrapper),
                    padded: !0,
                },
                a,
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
(e_.Header = eb),
    (e_.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(R.Z, {
            inset: !0,
            padded: !1,
            className: ei.body,
            children: t,
        });
    }),
    (e_.Separator = eu),
    (e_.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: s, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, A.ZP)(r, !0),
            p = (0, W.EB)(n, 32),
            g = (0, W.gM)(n);
        return (0, i.jsx)(ec, {
            children: (0, i.jsxs)("div", {
                className: ei.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(f.P3F, {
                        onClick: () => (0, F.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: ei.voiceSectionAssets,
                            children: [
                                null != p
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: p,
                                          className: o()(ei.voiceSectionGuildImage, ei.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: ei.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: ei.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = el[g.length]) ? t : el[el.length - 1] },
                                              children: g,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: ei.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(f.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ei.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(f.P3F, {
                        onClick: () => {
                            h.default.selectVoiceChannel(r.id), (0, V.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: ei.voiceSectionDetails,
                            children: [ea(n.name, ei.voiceSectionText), eo(d, ei.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(et.Z, {
                        partySize: a,
                        members: s,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (e_.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l, activity: a } = e,
            { analyticsLocations: o } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, i.jsxs)(ec, {
            children: [
                (0, i.jsxs)("div", {
                    className: ei.gameSection,
                    children: [
                        null != t
                            ? (0, i.jsx)("img", {
                                  alt: "",
                                  src: t,
                                  className: ei.gameSectionIcon,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            children: [
                                ea(n),
                                eo(er.intl.formatToPlainString(er.t.C4WXvb, { memberCount: r.totalSize })),
                            ],
                        }),
                        (0, i.jsx)(et.Z, {
                            partySize: r,
                            members: l,
                        }),
                    ],
                }),
                (0, i.jsx)(eh, {
                    activity: a,
                    analyticsLocations: o,
                }),
            ],
        });
    }),
    (e_.RichPresenceSection = (e) => {
        var t, r;
        let { activity: l, getAssetImage: a, user: s } = e,
            { analyticsLocations: c } = (0, N.ZP)(T.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { assets: u, details: d, state: p, application_id: f } = l,
            { hasButton: h, isJoinActivityButtonShown: g } = ep({
                activity: l,
                user: s,
            });
        return (0, i.jsxs)(ec, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()(ei.activitySection, { [ei.activitySectionWithButtons]: h }),
                    children: [
                        null != u && 0 !== Object.keys(u).length
                            ? (0, i.jsxs)("div", {
                                  className: ei.activitySectionAssets,
                                  children: [
                                      (0, i.jsx)("img", {
                                          alt: null != (t = u.large_text) ? t : "",
                                          src: a(f, u.large_image, [160, 160]),
                                          className: o()(ei.largeImage, { [ei.largeImageMask]: null != u.small_image }),
                                      }),
                                      null != u.small_image
                                          ? (0, i.jsx)("img", {
                                                alt: null != (r = u.small_text) ? r : "",
                                                src: a(f, u.small_image, [64, 64]),
                                                className: ei.smallImage,
                                            })
                                          : null,
                                  ],
                              })
                            : (0, i.jsx)("div", {
                                  className: ei.activitySectionAssets,
                                  children: (0, i.jsx)("img", {
                                      alt: "",
                                      src: n(211827),
                                      className: ei.largeImage,
                                  }),
                              }),
                        (0, i.jsxs)("div", {
                            children: [
                                ea(null != d && "" !== d ? d : er.intl.string(er.t["2TbM/P"])),
                                null != p ? eo(p) : null,
                                (() => {
                                    let { timestamps: e } = l;
                                    return null == e || !(0, v.Z)(l) || (0, y.Z)(l)
                                        ? null
                                        : eo(
                                              (0, E.Z)(l)
                                                  ? (0, i.jsx)(es, { timestamps: e })
                                                  : (0, i.jsx)(G.ZP, {
                                                        start: e.start,
                                                        end: e.end,
                                                        location: G.ZP.Locations.USER_ACTIVITY,
                                                        className: ei.__invalid_playTime,
                                                    }),
                                          );
                                })(),
                            ],
                        }),
                        (0, i.jsx)(ef, {
                            activity: l,
                            user: s,
                        }),
                    ],
                }),
                (0, i.jsx)(eh, {
                    activity: l,
                    analyticsLocations: c,
                    hidden: g,
                }),
            ],
        });
    }),
    (e_.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(ec, {
            children: (0, i.jsxs)("div", {
                className: ei.xboxSection,
                children: [
                    (0, i.jsx)(X.Z, { className: ei.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: ei.__invalid_xboxSectionDetails,
                        children: [ea(t), eo(er.intl.string(er.t["JG9r+/"]))],
                    }),
                ],
            }),
        });
    }),
    (e_.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: s,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(ec, {
            children: (0, i.jsxs)("div", {
                className: ei.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: ei.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: o()(ei.largeImage, ei.borderRadius0, {
                                          [ei.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)(Q.Z, {
                                            className: ei.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? ea(r) : null, null != l ? eo(l) : null],
                    }),
                    (0, i.jsx)(et.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: s,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (e_.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: u, assets: d, application_id: p } = r;
        if (null != d && (0, I.Z)(r)) {
            var h;
            t = (0, i.jsx)(L.Z, {
                className: ei.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(f.P3F, {
                    href: (0, O.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = d.large_text) ? h : "",
                            src: a(p, d.large_image, [900, 500]),
                            className: ei.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: ei.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(ec, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()({
                        [ei.twitchSectionSimple]: null == l,
                        [ei.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: b.Z.get(en.ABu.TWITCH).icon.lightSVG,
                            className: ei.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ea(c), null != u ? eo(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(f.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  "aria-label": l.username,
                                  className: ei.twitchSectionAvatar,
                                  size: f.EFr.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (e_.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: o, guildId: s } = e,
            u = (0, c.e7)([Y.Z], () => Y.Z.getChannel(a.channelId)),
            [d, p] = (0, M.wq)(u),
            h = (0, i.jsxs)(f.P3F, {
                onClick: d ? o : void 0,
                className: ei.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(U.Z, {
                        stream: a,
                        className: ei.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(f.Text, {
                        className: ei.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, M.P9)(p),
                    }),
                ],
            }),
            g = null != (n = null == (t = (0, S.Z)(r, a)) ? void 0 : t.activityText) ? n : er.intl.string(er.t.eXan7O);
        return (0, i.jsxs)(ec, {
            children: [
                (0, i.jsxs)("div", {
                    className: ei.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(f.qEK, {
                            size: f.EFr.SIZE_32,
                            src: l.getAvatarURL(s, 32),
                            "aria-label": l.username,
                            className: ei.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ea(ee.ZP.getName(l)), eo(g)],
                        }),
                        (0, i.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL }),
                    ],
                }),
                h,
            ],
        });
    }),
    (e_.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [o, s] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, J.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return s(t);
                });
        }, [u]);
        let d = (0, c.Wu)([K.default, q.default], () =>
                Array.from(a)
                    .map((e) => (q.default.getId() === e ? null : K.default.getUser(e)))
                    .filter($.lm),
            ),
            p = (0, m.O)(),
            { analyticsLocations: h } = (0, N.ZP)();
        if (null == u) return null;
        let g = x.Z.getApplication(u);
        if (null == g) return null;
        let b = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            O = (0, J.xF)(g.id, o, 300);
        return (0, i.jsxs)(ec, {
            children: [
                (0, i.jsxs)("div", {
                    className: ei.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(k.Z, {
                            game: g,
                            size: k.A.XSMALL,
                            className: ei.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: ei.embeddedActivityName,
                            children: (0, i.jsx)(f.Text, {
                                variant: "text-sm/semibold",
                                children: g.name,
                            }),
                        }),
                        null != b
                            ? (0, i.jsx)("div", {
                                  className: ei.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(f.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(es, { timestamps: b }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ei.embeddedActivityPlayerContainer,
                    children: [
                        null != O
                            ? (0, i.jsx)("img", {
                                  src: O,
                                  alt: g.name,
                                  className: ei.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: ei.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(z.OV, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: ei.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(f.zxk, {
                                        variant: "primary",
                                        size: "sm",
                                        text: er.intl.string(er.t.VJlc0d),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, _.Z)({
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
let eO = e_;
