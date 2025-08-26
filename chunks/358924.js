n.d(t, { Z: () => em }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(704215),
    u = n(692547),
    d = n(481060),
    p = n(287734),
    f = n(438139),
    h = n(2052),
    g = n(726542),
    m = n(638880),
    b = n(655922),
    _ = n(122810),
    O = n(833664),
    E = n(503438),
    y = n(420660),
    v = n(74433),
    I = n(206074),
    C = n(906732),
    S = n(728345),
    N = n(812206),
    T = n(933557),
    P = n(194082),
    j = n(377171),
    x = n(264165),
    A = n(548816),
    Z = n(266454),
    w = n(925329),
    L = n(102172),
    R = n(871118),
    D = n(707409),
    k = n(584057),
    M = n(103450),
    U = n(359110),
    G = n(769654),
    B = n(849171),
    V = n(601964),
    H = n(314897),
    F = n(592125),
    z = n(594174),
    W = n(395361),
    Y = n(639351),
    K = n(81063),
    q = n(823379),
    Q = n(51144),
    X = n(599706),
    J = n(981631),
    $ = n(388032),
    ee = n(84822);
function et(e) {
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
function en(e, t) {
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
let er = [14, 14, 12, 12, 10, 8, 6],
    ei = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(d.Text, {
            className: o()(ee.textContent, t),
            variant: "text-sm/semibold",
            children: e,
        });
    },
    el = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(d.Text, {
            className: o()(ee.textContent, t),
            variant: "text-xs/normal",
            children: e,
        });
    },
    ea = (0, f.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)("div", {
            className: ee.__invalid_timestamp,
            children: t,
        });
    }),
    eo = (e) => {
        let { children: t } = e;
        return (0, i.jsx)("section", {
            className: ee.section,
            children: t,
        });
    },
    es = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)("div", { className: o()(ee.separator, { [ee.inset]: t }, n) });
    },
    ec = (e) => {
        let { activity: t, user: n } = e,
            { application_id: r } = t,
            { data: i } = (0, S.IX)(r),
            l = (0, k.L)(t),
            a = (0, I.Z)({
                application: i,
                location: "RichPresenceSection",
            }),
            o = !l && null != a,
            s = (0, M.e)({
                activity: t,
                user: n,
                supportsAskToJoin: !1,
            }),
            c = !o && null != s;
        return {
            isCloudPlayButtonShown: o,
            onCloudPlayClick: a,
            isJoinActivityButtonShown: c,
            joinActivityButtonAction: s,
            hasButton: o || c,
        };
    },
    eu = (e) => {
        let { activity: t, user: n } = e,
            {
                isCloudPlayButtonShown: r,
                onCloudPlayClick: l,
                isJoinActivityButtonShown: a,
                joinActivityButtonAction: o,
            } = ec({
                activity: t,
                user: n,
            });
        if (r && null != l)
            return (0, i.jsx)(d.ua7, {
                text: $.intl.string($.t.JVwWvb),
                children: (e) =>
                    (0, i.jsx)(
                        d.zxk,
                        en(et({}, e), {
                            size: "sm",
                            variant: "secondary",
                            icon: d.v3n,
                            text: $.intl.string($.t.YsIsPT),
                            onClick: l,
                        }),
                    ),
            });
        if (a && null != o) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: r, isEnabled: l } = o;
            return (0, i.jsx)(d.ua7, {
                text: r,
                children: (r) =>
                    (0, i.jsx)(
                        d.zxk,
                        en(et({}, r), {
                            size: "sm",
                            variant: "secondary",
                            icon: d.iWm,
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
    ed = (e) => {
        let { isCloudPlayButtonShown: t } = e,
            n = (0, Z.Nj)(c.z.CLOUD_PLAY_NEW_BADGE);
        return !t || n
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(es, { className: ee.cloudPlaySectionSeparator }),
                      (0, i.jsxs)("div", {
                          className: ee.cloudPlaySection,
                          children: [
                              (0, i.jsx)(d.Text, {
                                  variant: "text-xs/medium",
                                  children: $.intl.string($.t.IQjdmZ),
                              }),
                              (0, i.jsx)(d.IGR, {
                                  text: $.intl.string($.t.y2b7CA),
                                  color: j.Z.BG_BRAND,
                              }),
                          ],
                      }),
                  ],
              });
    };
var ep = (((r = ep || {}).XBOX = "XBOX"), (r.SPOTIFY = "SPOTIFY"), (r.MULTIPLE = "MULTIPLE"), r);
let ef = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case "XBOX":
            t = (0, i.jsx)(Y.Z, {
                className: ee.headerIcon,
                color: u.Z.unsafe_rawColors.PRIMARY_300.css,
            });
            break;
        case "SPOTIFY":
            t = (0, i.jsx)(W.Z, {
                className: ee.headerIcon,
                color: u.Z.unsafe_rawColors.SPOTIFY.css,
            });
            break;
        case "MULTIPLE":
            t = (0, i.jsx)("div", {
                className: ee.multipleIconWrapper,
                children: (0, i.jsx)(d.iWm, {
                    size: "md",
                    className: o()(ee.headerIcon, ee.multipleIcon),
                    color: u.Z.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, i.jsx)("img", {
                src: null != n ? n : void 0,
                alt: "",
                className: ee.headerIcon,
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(d.P3F, {
              onClick: r,
              className: o()(null != r ? ee.clickable : ""),
              onContextMenu: l,
              children: t,
          })
        : t;
};
ef.Src = ep;
let eh = (e) => {
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
        u = (0, i.jsx)(d.Text, {
            color: "header-secondary",
            className: ee.textContent,
            variant: "text-sm/normal",
            children: r,
        });
    return (0, i.jsxs)("header", {
        className: null != l ? ee.headerFull : ee.headerSimple,
        children: [
            (0, i.jsx)(d.qEK, {
                src: t.user.getAvatarURL(c, 32),
                "aria-label": t.user.username,
                size: d.EFr.SIZE_32,
                className: ee.headerAvatar,
                status: t.status,
                onContextMenu: s,
            }),
            (0, i.jsxs)("div", {
                className: ee.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(d.Text, {
                        className: ee.textContent,
                        variant: "text-md/semibold",
                        children: n,
                    }),
                    null != a
                        ? (0, i.jsx)(d.P3F, {
                              className: ee.clickable,
                              onClick: a,
                              children: u,
                          })
                        : u,
                ],
            }),
            null != l && null != o
                ? (0, i.jsx)(d.P3F, {
                      className: ee.clickable,
                      onClick: o,
                      children: l,
                  })
                : l,
        ],
    });
};
eh.Icon = ef;
let eg = (e) => {
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
    return (0, i.jsx)(d.tEY, {
        children: (0, i.jsx)(
            A.Z,
            en(
                et(
                    {
                        className: o()(n, ee.wrapper),
                        padded: !0,
                    },
                    r,
                ),
                { children: t },
            ),
        ),
    });
};
(eg.Header = eh),
    (eg.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(A.Z, {
            inset: !0,
            padded: !1,
            className: ee.body,
            children: t,
        });
    }),
    (eg.Separator = es),
    (eg.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: s, onChannelContextMenu: c } = e,
            u = l.useRef(null),
            f = (0, T.ZP)(r, !0),
            h = (0, V.EB)(n, 32),
            g = (0, V.gM)(n);
        return (0, i.jsx)(eo, {
            children: (0, i.jsxs)("div", {
                className: ee.voiceSection,
                ref: u,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(d.P3F, {
                        onClick: () => (0, G.X)(n.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)("div", {
                            className: ee.voiceSectionAssets,
                            children: [
                                null != h
                                    ? (0, i.jsx)("img", {
                                          alt: "",
                                          src: h,
                                          className: o()(ee.voiceSectionGuildImage, ee.largeImageMask),
                                      })
                                    : (0, i.jsx)("div", {
                                          className: ee.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)("div", {
                                              className: ee.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = er[g.length]) ? t : er[er.length - 1] },
                                              children: g,
                                          }),
                                      }),
                                (0, i.jsx)("div", {
                                    className: ee.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(d.gj8, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ee.voiceSectionIcon,
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(d.P3F, {
                        onClick: () => {
                            p.default.selectVoiceChannel(r.id), (0, U.Kh)(r.id);
                        },
                        focusProps: { ringTarget: u },
                        children: (0, i.jsxs)("div", {
                            className: ee.voiceSectionDetails,
                            children: [ei(n.name, ee.voiceSectionText), el(f, ee.voiceSectionText)],
                        }),
                    }),
                    (0, i.jsx)(X.Z, {
                        partySize: a,
                        members: s,
                        guildId: n.id,
                    }),
                ],
            }),
        });
    }),
    (eg.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l } = e;
        return (0, i.jsx)(eo, {
            children: (0, i.jsxs)("div", {
                className: ee.gameSection,
                children: [
                    null != t
                        ? (0, i.jsx)("img", {
                              alt: "",
                              src: t,
                              className: ee.gameSectionIcon,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        children: [ei(n), el($.intl.formatToPlainString($.t.C4WXvb, { memberCount: r.totalSize }))],
                    }),
                    (0, i.jsx)(X.Z, {
                        partySize: r,
                        members: l,
                    }),
                ],
            }),
        });
    }),
    (eg.RichPresenceSection = (e) => {
        var t, r;
        let { activity: l, getAssetImage: a, user: s } = e,
            { assets: c, details: u, state: d, application_id: p } = l,
            { hasButton: f, isCloudPlayButtonShown: h } = ec({
                activity: l,
                user: s,
            });
        return (0, i.jsxs)(eo, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()(ee.activitySection, { [ee.activitySectionWithButtons]: f }),
                    children: [
                        null != c && 0 !== Object.keys(c).length
                            ? (0, i.jsxs)("div", {
                                  className: ee.activitySectionAssets,
                                  children: [
                                      (0, i.jsx)("img", {
                                          alt: null != (t = c.large_text) ? t : "",
                                          src: a(p, c.large_image, [160, 160]),
                                          className: o()(ee.largeImage, { [ee.largeImageMask]: null != c.small_image }),
                                      }),
                                      null != c.small_image
                                          ? (0, i.jsx)("img", {
                                                alt: null != (r = c.small_text) ? r : "",
                                                src: a(p, c.small_image, [64, 64]),
                                                className: ee.smallImage,
                                            })
                                          : null,
                                  ],
                              })
                            : (0, i.jsx)("div", {
                                  className: ee.activitySectionAssets,
                                  children: (0, i.jsx)("img", {
                                      alt: "",
                                      src: n(211827),
                                      className: ee.largeImage,
                                  }),
                              }),
                        (0, i.jsxs)("div", {
                            children: [
                                ei(null != u && "" !== u ? u : $.intl.string($.t["2TbM/P"])),
                                null != d ? el(d) : null,
                                (() => {
                                    let { timestamps: e } = l;
                                    return null == e || !(0, O.Z)(l) || (0, E.Z)(l)
                                        ? null
                                        : el(
                                              (0, _.Z)(l)
                                                  ? (0, i.jsx)(ea, { timestamps: e })
                                                  : (0, i.jsx)(D.ZP, {
                                                        start: e.start,
                                                        end: e.end,
                                                        location: D.ZP.Locations.USER_ACTIVITY,
                                                        className: ee.__invalid_playTime,
                                                    }),
                                          );
                                })(),
                            ],
                        }),
                        f
                            ? (0, i.jsx)(eu, {
                                  activity: l,
                                  user: s,
                              })
                            : null,
                    ],
                }),
                (0, i.jsx)(ed, { isCloudPlayButtonShown: h }),
            ],
        });
    }),
    (eg.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(eo, {
            children: (0, i.jsxs)("div", {
                className: ee.xboxSection,
                children: [
                    (0, i.jsx)(Y.Z, { className: ee.xboxSectionIcon }),
                    (0, i.jsxs)("div", {
                        className: ee.__invalid_xboxSectionDetails,
                        children: [ei(t), el($.intl.string($.t["JG9r+/"]))],
                    }),
                ],
            }),
        });
    }),
    (eg.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: s,
            members: c,
            isSolo: d,
            getAssetImage: p,
        } = e;
        return (0, i.jsx)(eo, {
            children: (0, i.jsxs)("div", {
                className: ee.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)("div", {
                              className: ee.activitySectionAssets,
                              children: [
                                  (0, i.jsx)("img", {
                                      alt: null != (t = n.large_text) ? t : "",
                                      src: p(a, n.large_image, [160, 160]),
                                      className: o()(ee.largeImage, ee.borderRadius0, {
                                          [ee.largeImageMask]: null != n.small_image,
                                      }),
                                  }),
                                  d
                                      ? null
                                      : (0, i.jsx)(W.Z, {
                                            className: ee.smallImage,
                                            color: u.Z.unsafe_rawColors.SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, i.jsx)("div", {}),
                    (0, i.jsxs)("div", {
                        children: [null != r ? ei(r) : null, null != l ? el(l) : null],
                    }),
                    (0, i.jsx)(X.Z, {
                        minAvatarsShown: d ? 2 : 1,
                        partySize: s,
                        members: c,
                    }),
                ],
            }),
        });
    }),
    (eg.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: u, assets: p, application_id: f } = r;
        if (null != p && (0, y.Z)(r)) {
            var h;
            t = (0, i.jsx)(x.Z, {
                className: ee.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(d.P3F, {
                    href: (0, b.Z)(r),
                    tag: "a",
                    target: "_blank",
                    children: [
                        (0, i.jsx)("img", {
                            alt: null != (h = p.large_text) ? h : "",
                            src: a(f, p.large_image, [900, 500]),
                            className: ee.twitchSectionPreview,
                        }),
                        (0, i.jsx)("img", {
                            src: n(497726),
                            className: ee.twitchSectionPlayButton,
                            alt: "",
                        }),
                    ],
                }),
            });
        }
        return (0, i.jsxs)(eo, {
            children: [
                (0, i.jsxs)("div", {
                    className: o()({
                        [ee.twitchSectionSimple]: null == l,
                        [ee.twitchSectionFull]: null != l,
                    }),
                    children: [
                        (0, i.jsx)("img", {
                            alt: "",
                            src: g.Z.get(J.ABu.TWITCH).icon.lightSVG,
                            className: ee.twitchSectionIcon,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ei(c), null != u ? el(u) : null],
                        }),
                        null != l
                            ? (0, i.jsx)(d.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  "aria-label": l.username,
                                  className: ee.twitchSectionAvatar,
                                  size: d.EFr.SIZE_24,
                              })
                            : null,
                    ],
                }),
                t,
            ],
        });
    }),
    (eg.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: o, guildId: c } = e,
            u = (0, s.e7)([F.Z], () => F.Z.getChannel(a.channelId)),
            [p, f] = (0, L.wq)(u),
            h = (0, i.jsxs)(d.P3F, {
                onClick: p ? o : void 0,
                className: ee.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(R.Z, {
                        stream: a,
                        className: ee.applicationStreamingPreviewSize,
                    }),
                    (0, i.jsx)(d.Text, {
                        className: ee.applicationStreamingHoverText,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, L.P9)(f),
                    }),
                ],
            }),
            g = null != (n = null == (t = (0, v.Z)(r, a)) ? void 0 : t.activityText) ? n : $.intl.string($.t.eXan7O);
        return (0, i.jsxs)(eo, {
            children: [
                (0, i.jsxs)("div", {
                    className: ee.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(d.qEK, {
                            size: d.EFr.SIZE_32,
                            src: l.getAvatarURL(c, 32),
                            "aria-label": l.username,
                            className: ee.applicationStreamingAvatar,
                        }),
                        (0, i.jsxs)("div", {
                            children: [ei(Q.ZP.getName(l)), el(g)],
                        }),
                        (0, i.jsx)(P.ZP, { size: P.ZP.Sizes.SMALL }),
                    ],
                }),
                h,
            ],
        });
    }),
    (eg.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [o, c] = l.useState(null),
            u = t.application_id;
        l.useEffect(() => {
            null != u &&
                (0, K.hR)(u, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [u]);
        let p = (0, s.Wu)([z.default, H.default], () =>
                Array.from(a)
                    .map((e) => (H.default.getId() === e ? null : z.default.getUser(e)))
                    .filter(q.lm),
            ),
            f = (0, h.O)(),
            { analyticsLocations: g } = (0, C.ZP)();
        if (null == u) return null;
        let b = N.Z.getApplication(u);
        if (null == b) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            O = (0, K.xF)(b.id, o, 300);
        return (0, i.jsxs)(eo, {
            children: [
                (0, i.jsxs)("div", {
                    className: ee.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(w.Z, {
                            game: b,
                            size: w.Z.Sizes.XSMALL,
                            className: ee.embeddedActivityIcon,
                        }),
                        (0, i.jsx)("div", {
                            className: ee.embeddedActivityName,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-sm/semibold",
                                children: b.name,
                            }),
                        }),
                        null != _
                            ? (0, i.jsx)("div", {
                                  className: ee.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(d.Text, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, i.jsx)(ea, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: ee.embeddedActivityPlayerContainer,
                    children: [
                        null != O
                            ? (0, i.jsx)("img", {
                                  src: O,
                                  alt: b.name,
                                  className: ee.embeddedActivityImage,
                              })
                            : null,
                        (0, i.jsxs)("div", {
                            className: ee.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(B.OV, {
                                    users: p,
                                    guildId: r,
                                    channelId: n.id,
                                }),
                                (0, i.jsx)("div", {
                                    className: ee.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(d.zxk, {
                                        variant: "primary",
                                        size: "sm",
                                        text: $.intl.string($.t.VJlc0d),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, m.Z)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: f.location,
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
let em = eg;
