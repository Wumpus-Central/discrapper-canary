n.d(t, { Z: () => eE }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(990547),
    c = n(442837),
    u = n(704215),
    d = n(692547),
    p = n(481060),
    f = n(287734),
    h = n(438139),
    g = n(2052),
    m = n(726542),
    b = n(638880),
    _ = n(655922),
    O = n(122810),
    E = n(833664),
    y = n(503438),
    v = n(420660),
    I = n(74433),
    C = n(206074),
    S = n(100527),
    N = n(906732),
    T = n(213609),
    P = n(728345),
    j = n(812206),
    x = n(933557),
    A = n(194082),
    Z = n(377171),
    w = n(264165),
    L = n(548816),
    R = n(266454),
    D = n(925329),
    k = n(102172),
    M = n(871118),
    U = n(707409),
    G = n(584057),
    B = n(103450),
    V = n(359110),
    H = n(769654),
    F = n(849171),
    z = n(601964),
    W = n(314897),
    Y = n(592125),
    K = n(594174),
    q = n(395361),
    Q = n(639351),
    X = n(81063),
    J = n(823379),
    $ = n(51144),
    ee = n(599706),
    et = n(981631),
    en = n(388032),
    er = n(84822);
function ei(e) {
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
}
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = [14, 14, 12, 12, 10, 8, 6],
    eo = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(p.Text, {
            className: o()(er.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    es = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(p.Text, {
            className: o()(er.textContent, t),
            variant: "text-xs/normal",
            children: e,
        });
    },
    ec = (0, h.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: er.__invalid_timestamp,
            children: t,
        });
    }),
    eu = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: er.section,
            children: t,
        });
    },
    ed = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: o()(er.separator, { [er.inset]: t }, n) });
    },
    ep = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, T.Z)({
                name: s.ImpressionNames.CLOUD_PLAY_CTA,
                type: s.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, i.jsx)(p.ua7, {
                text: en.intl.string(en.t.JVwWvb),
                children: (e) =>
                    (0, i.jsx)(
                        p.zxk,
                        el(ei({}, e), {
                            size: "sm",
                            variant: "secondary",
                            icon: p.v3n,
                            text: en.intl.string(en.t.YsIsPT),
                            onClick: t,
                        }),
                    ),
            })
        );
    },
    ef = (e) => {
        let { activity: t, user: n, analyticsLocations: r } = e,
            { application_id: i } = t,
            { data: l } = (0, P.IX)(i),
            a = (0, G.L)(t),
            o = (0, C.Z)({
                application: l,
                analyticsLocations: r,
            }),
            s = !a && null != o,
            c = (0, B.e)({
                activity: t,
                user: n,
                supportsAskToJoin: !1,
            }),
            u = !s && null != c;
        return {
            isCloudPlayButtonShown: s,
            onCloudPlayClick: o,
            isJoinActivityButtonShown: u,
            joinActivityButtonAction: c,
            hasButton: s || u,
        };
    },
    eh = (e) => {
        let { activity: t, user: n, analyticsLocations: r } = e,
            {
                isCloudPlayButtonShown: l,
                onCloudPlayClick: a,
                isJoinActivityButtonShown: o,
                joinActivityButtonAction: s,
            } = ef({
                activity: t,
                user: n,
                analyticsLocations: r,
            });
        if (l && null != a)
            return (0, i.jsx)(ep, {
                onCloudPlayClick: a,
                analyticsLocations: r,
            });
        if (o && null != s) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: r, isEnabled: l } = s;
            return (0, i.jsx)(p.ua7, {
                text: r,
                children: (r) =>
                    (0, i.jsx)(
                        p.zxk,
                        el(ei({}, r), {
                            size: "sm",
                            variant: "secondary",
                            icon: p.iWm,
                            text: n,
                            disabled: !l,
                            loading: e,
                            onClick: (e) => {
                                e.stopPropagation(), t();
                            },
                        }),
                    ),
            });
        }
        return null;
    },
    eg = (e) => {
        let { isCloudPlayButtonShown: t } = e,
            n = (0, R.Nj)(u.z.CLOUD_PLAY_NEW_BADGE);
        return !t || n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(ed, { className: er.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: er.cloudPlaySection,
                          children: [
                              (0, i.jsx)(p.Text, {
                                  variant: "text-xs/medium",
                                  children: en.intl.string(en.t.IQjdmZ),
                              }),
                              (0, i.jsx)(p.IGR, {
                                  text: en.intl.string(en.t.y2b7CA),
                                  color: Z.Z.BG_BRAND,
                              }),
                          ],
                      }),
                  ],
              });
    };
var em = (((r = em || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let eb = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)(Q.Z, {
                className: er.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(q.Z, {
                className: er.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: er.multipleIconWrapper,
                children: (0, i.jsx)(p.iWm, {
                    size: "md",
                    className: o()(er.headerIcon, er.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: er.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(p.P3F, {
              onClick: r,
              className: o()(null != r ? er.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
eb.Src = em;
let e_ = (e) => {
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
        u = (0, i.jsx)(p.Text, {
            color: "header-secondary",
            className: er.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? er.headerFull : er.headerSimple,
        children: [
            (0, i.jsx)(p.qEK, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: p.EFr.SIZE_32,
                className: er.headerAvatar,
                status: t.status,
                onContextMenu: s,
            }),
            (0, i.jsxs)("div", {
                className: er.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(p.Text, {
                        className: er.textContent,
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(p.P3F, {
                              className: er.clickable,
                              onClick: a,
                              children: u,
                          })
                        : u,
                ],
            }),
            null != l && null != o
                ? (0, i.jsx)(p.P3F, {
                      className: er.clickable,
                      onClick: o,
                      children: l,
                  })
                : l,
        ],
    });
};
e_.Icon = eb;
let eO = (e) => {
    var { children: t, className: n } = e,
        r = (function (e, t) {
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
    return (0, i.jsx)(p.tEY, {
        children: (0, i.jsx)(
            L.Z,
            el(
                ei(
                    {
                        className: o()(n, er.wrapper),
                        padded: !0,
                    },
                    r,
                ),
                { children: t },
            ),
        ),
    });
};
(eO.Header = e_),
    (eO.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(L.Z, {
            inset: !0,
            padded: !1,
            className: er.body,
            children: t,
        });
    }),
    (eO.Separator = ed),
    (eO.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: s, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            d = (0, x.ZP)(r, !0),
            h = (0, z.EB)(n, 32),
            g = (0, z.gM)(n);
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: er.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(p.P3F, {
                        onClick: () => (0, H.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: er.voiceSectionAssets,
                            children: [
                                null != h
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: h,
                                          className: o()(er.voiceSectionGuildImage, er.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: er.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: er.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = ea[g.length]) ? t : ea[ea.length - 1] },
                                              children: g,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: er.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(p.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: er.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(p.P3F, {
                        onClick: () => {
                            f.default.selectVoiceChannel(r.id), (0, V.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: er.voiceSectionDetails,
                            children: [eo(n.name, er.voiceSectionText), es(d, er.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(ee.Z, {
                        partySize: a,
                        members: s,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (eO.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l } = e;
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: er.gameSection,
                children: [
                    null != t
                        ? (0, i.jsx)("img", {
                              alt: "",
                              src: t,
                              className: er.gameSectionIcon,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        children: [eo(n), es(en.intl.formatToPlainString(en.t.C4WXvb, { memberCount: r.totalSize }))],
                    }),
                    (0, i.jsx)(ee.Z, {
                        partySize: r,
                        members: l,
                    }),
                ],
            }),
        });
    }),
    (eO.RichPresenceSection = (e) => {
        var t, r;
        let { activity: l, getAssetImage: a, user: s } = e,
            { analyticsLocations: c } = (0, N.ZP)(S.Z.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { assets: u, details: d, state: p, application_id: f } = l,
            { hasButton: h, isCloudPlayButtonShown: g } = ef({
                activity: l,
                user: s,
                analyticsLocations: c,
            });
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()(er.activitySection, { [er.activitySectionWithButtons]: h }),
                    children: [
                        null != u && 0 !== Object.keys(u).length
                            ? (0, i.jsxs)("div", {
                                  className: er.activitySectionAssets,
                                  children: [
                                      (0, i.jsx)("img", {
                                          alt: null != (t = u.large_text) ? t : "",
                                          src: a(f, u.large_image, [160, 160]),
                                          className: o()(er.largeImage, { [er.largeImageMask]: null != u.small_image }),
                                      }),
                                      null != u.small_image
                                          ? (0, i.jsx)("img", {
                                                alt: null != (r = u.small_text) ? r : "",
                                                src: a(f, u.small_image, [64, 64]),
                                                className: er.smallImage,
                                            })
                                          : null,
                                  ],
                              })
                            : (0, i.jsx)("div", {
                                  className: er.activitySectionAssets,
                                  children: (0, i.jsx)("img", {
                                      alt: "",
                                      src: n(211827),
                                      className: er.largeImage,
                                  }),
                              }),
                        (0, i.jsxs)("div", {
                            children: [
                                eo(null != d && "" !== d ? d : en.intl.string(en.t["2TbM/P"])),
                                null != p ? es(p) : null,
                                (() => {
                                    let { timestamps: e } = l;
                                    return null == e || !(0, E.Z)(l) || (0, y.Z)(l)
                                        ? null
                                        : es(
                                              (0, O.Z)(l)
                                                  ? (0, i.jsx)(ec, { timestamps: e })
                                                  : (0, i.jsx)(U.ZP, {
                                                        start: e.start,
                                                        end: e.end,
                                                        location: U.ZP.Locations.USER_ACTIVITY,
                                                        className: er.__invalid_playTime,
                                                    }),
                                          );
                                })(),
                            ],
                        }),
                        h
                            ? (0, i.jsx)(eh, {
                                  activity: l,
                                  user: s,
                                  analyticsLocations: c,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)(eg, { isCloudPlayButtonShown: g }),
            ],
        });
    }),
    (eO.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: er.xboxSection,
                children: [
                    (0, i.jsx)(Q.Z, { className: er.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: er.__invalid_xboxSectionDetails,
                        children: [eo(t), es(en.intl.string(en.t["JG9r+/"]))],
                    }),
                ],
            }),
        });
    }),
    (eO.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: s,
            members: c,
            isSolo: u,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(eu, {
            children: (0, i.jsxs)("div", {
                className: er.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: er.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: o()(er.largeImage, er.borderRadius0, {
                                          [er.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  u
                                      ? null
                                      : (0, i.jsx)(q.Z, {
                                            className: er.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? eo(r) : null, null != l ? es(l) : null],
                    }),
                    (0, i.jsx)(ee.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: s,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (eO.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: u, assets: d, application_id: f } = r;
        if (null != d && (0, v.Z)(r)) {
            var h;
            t = (0, i.jsx)(w.Z, {
                className: er.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(p.P3F, {
                    href: (0, _.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = d.large_text) ? h : "",
                            src: a(f, d.large_image, [900, 500]),
                            className: er.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: er.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()({
                        [er.twitchSectionSimple]: null == l,
                        [er.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: m.Z.get(et.ABu.TWITCH).icon.lightSVG,
                            className: er.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo(c), null != u ? es(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(p.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  "aria-label": l.username,
                                  className: er.twitchSectionAvatar,
                                  size: p.EFr.SIZE_24,
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
        let { activity: r, user: l, applicationStream: a, onPreviewClick: o, guildId: s } = e,
            u = (0, c.e7)([Y.Z], () => Y.Z.getChannel(a.channelId)),
            [d, f] = (0, k.wq)(u),
            h = (0, i.jsxs)(p.P3F, {
                onClick: d ? o : void 0,
                className: er.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(M.Z, {
                        stream: a,
                        className: er.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(p.Text, {
                        className: er.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, k.P9)(f),
                    }),
                ],
            }),
            g = null != (n = null == (t = (0, I.Z)(r, a)) ? void 0 : t.activityText) ? n : en.intl.string(en.t.eXan7O);
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: er.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(p.qEK, {
                            size: p.EFr.SIZE_32,
                            src: l.getAvatarURL(s, 32),
                            "aria-label": l.username,
                            className: er.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [eo($.ZP.getName(l)), es(g)],
                        }),
                        (0, i.jsx)(A.ZP, { size: A.ZP.Sizes.SMALL }),
                    ],
                }),
                h,
            ],
        });
    }),
    (eO.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [o, s] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, X.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return s(t);
                });
        }, [u]);
        let d = (0, c.Wu)([K.default, W.default], () =>
                Array.from(a)
                    .map((e) => (W.default.getId() === e ? null : K.default.getUser(e)))
                    .filter(J.lm),
            ),
            f = (0, g.O)(),
            { analyticsLocations: h } = (0, N.ZP)();
        if (null == u) return null;
        let m = j.Z.getApplication(u);
        if (null == m) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            O = (0, X.xF)(m.id, o, 300);
        return (0, i.jsxs)(eu, {
            children: [
                (0, i.jsxs)("div", {
                    className: er.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(D.Z, {
                            game: m,
                            size: D.Z.Sizes.XSMALL,
                            className: er.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: er.embeddedActivityName,
                            children: (0, i.jsx)(p.Text, {
                                variant: "text-sm/semibold",
                                children: m.name,
                            }),
                        }),
                        null != _
                            ? (0, i.jsx)("div", {
                                  className: er.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(p.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(ec, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: er.embeddedActivityPlayerContainer,
                    children: [
                        null != O
                            ? (0, i.jsx)("img", {
                                  src: O,
                                  alt: m.name,
                                  className: er.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: er.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(F.OV, {
                                    users: d,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: er.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        size: "sm",
                                        text: en.intl.string(en.t.VJlc0d),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, b.Z)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: f.location,
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
let eE = eO;
