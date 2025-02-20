n.d(t, { Z: () => ei }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(287734),
    p = n(438139),
    h = n(2052),
    f = n(726542),
    g = n(638880),
    m = n(655922),
    b = n(122810),
    _ = n(833664),
    E = n(503438),
    O = n(420660),
    N = n(74433),
    v = n(906732),
    y = n(812206),
    I = n(933557),
    C = n(194082),
    S = n(264165),
    T = n(548816),
    P = n(925329),
    j = n(102172),
    A = n(871118),
    Z = n(707409),
    x = n(359110),
    L = n(769654),
    w = n(849171),
    R = n(314897),
    D = n(592125),
    k = n(594174),
    M = n(395361),
    U = n(639351),
    G = n(81063),
    W = n(823379),
    V = n(51144),
    B = n(599706),
    H = n(981631),
    F = n(388032),
    z = n(180851);
let Y = {
        SMALL: 64,
        LARGE: 160
    },
    K = [14, 14, 12, 12, 10, 8, 6],
    q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: a()(z.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    X = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: a()(z.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    Q = (0, p.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)('div', {
            className: z.__invalid_timestamp,
            children: t
        });
    }),
    J = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('section', {
            className: z.section,
            children: t
        });
    };
class $ extends l.Component {
    renderTimePlayed() {
        let e;
        let { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, _.Z)(t) || (0, E.Z)(t)
            ? null
            : X(
                  (0, b.Z)(t)
                      ? (0, i.jsx)(Q, { timestamps: n })
                      : (0, i.jsx)(Z.ZP, {
                            start: n.start,
                            end: n.end,
                            location: Z.ZP.Locations.USER_ACTIVITY,
                            className: z.__invalid_playTime
                        })
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: r, details: l, state: o, application_id: s },
            getAssetImage: c
        } = this.props;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: z.activitySection,
                children: [
                    null != r && 0 !== Object.keys(r).length
                        ? (0, i.jsxs)('div', {
                              className: z.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null !== (e = r.large_text) && void 0 !== e ? e : '',
                                      src: c(s, r.large_image, [Y.LARGE, Y.LARGE]),
                                      className: a()(z.largeImage, { [z.largeImageMask]: null != r.small_image })
                                  }),
                                  null != r.small_image
                                      ? (0, i.jsx)('img', {
                                            alt: null !== (t = r.small_text) && void 0 !== t ? t : '',
                                            src: c(s, r.small_image, [Y.SMALL, Y.SMALL]),
                                            className: z.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: z.activitySectionAssets,
                              children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: z.largeImage
                              })
                          }),
                    (0, i.jsxs)('div', {
                        children: [q(null != l && '' !== l ? l : F.NW.string(F.t['2TbM/P'])), null != o ? X(o) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
var ee = (((r = ee || {}).XBOX = 'XBOX'), (r.SPOTIFY = 'SPOTIFY'), (r.MULTIPLE = 'MULTIPLE'), r);
let et = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case 'XBOX':
            t = (0, i.jsx)(U.Z, {
                className: z.headerIcon,
                color: c.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, i.jsx)(M.Z, {
                className: z.headerIcon,
                color: c.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, i.jsx)('div', {
                className: z.multipleIconWrapper,
                children: (0, i.jsx)(u.iWm, {
                    size: 'md',
                    className: a()(z.headerIcon, z.multipleIcon),
                    color: c.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, i.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: z.headerIcon
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(u.P3F, {
              onClick: r,
              className: a()(null != r ? z.clickable : ''),
              onContextMenu: l,
              children: t
          })
        : t;
};
et.Src = ee;
let en = (e) => {
    let { priorityUser: t, title: n, subtitle: r, icon: l, onSubtitleClick: o, onIconClick: s, onContextMenu: c, guildId: d } = e,
        p = (0, i.jsx)(u.Text, {
            color: 'header-secondary',
            className: z.textContent,
            variant: 'text-sm/normal',
            children: r
        });
    return (0, i.jsxs)('header', {
        className: null != l ? z.headerFull : z.headerSimple,
        children: [
            (0, i.jsx)(u.qEK, {
                src: t.user.getAvatarURL(d, 32),
                'aria-label': t.user.username,
                size: u.EFr.SIZE_32,
                className: z.headerAvatar,
                status: t.status,
                onContextMenu: c
            }),
            (0, i.jsxs)('div', {
                className: z.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(u.Text, {
                        className: a()(z.textContent),
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != o
                        ? (0, i.jsx)(u.P3F, {
                              className: z.clickable,
                              onClick: o,
                              children: p
                          })
                        : p
                ]
            }),
            null != l && null != s
                ? (0, i.jsx)(u.P3F, {
                      className: z.clickable,
                      onClick: s,
                      children: l
                  })
                : l
        ]
    });
};
en.Icon = et;
let er = (e) => {
    var t,
        n,
        { children: r, className: l } = e,
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['children', 'className']);
    return (0, i.jsx)(u.tEY, {
        children: (0, i.jsx)(
            T.Z,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    className: a()(l, z.wrapper),
                    padded: !0
                },
                o
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
            t)
        )
    });
};
(er.Header = en),
    (er.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(T.Z, {
            inset: !0,
            padded: !1,
            className: z.body,
            children: t
        });
    }),
    (er.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)('div', { className: a()(z.separator, { [z.inset]: t }, n) });
    }),
    (er.VoiceSection = (e) => {
        var t, n;
        let { guild: r, channel: o, partySize: s, members: c, onChannelContextMenu: p } = e,
            h = l.useRef(null),
            f = (0, I.ZP)(o, !0);
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: z.voiceSection,
                ref: h,
                onContextMenu: (e) => p(e, o),
                children: [
                    (0, i.jsx)(u.P3F, {
                        onClick: () => (0, L.X)(r.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)('div', {
                            className: z.voiceSectionAssets,
                            children: [
                                null != r.getIconURL(32)
                                    ? (0, i.jsx)('img', {
                                          alt: '',
                                          src: null !== (t = r.getIconURL(32)) && void 0 !== t ? t : void 0,
                                          className: a()(z.voiceSectionGuildImage, z.largeImageMask)
                                      })
                                    : (0, i.jsx)('div', {
                                          className: z.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)('div', {
                                              className: z.voiceSectionNoGuildImage,
                                              style: { fontSize: null !== (n = K[r.acronym.length]) && void 0 !== n ? n : K[K.length - 1] },
                                              children: r.acronym
                                          })
                                      }),
                                (0, i.jsx)('div', {
                                    className: z.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(u.gj8, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: z.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(u.P3F, {
                        onClick: () => {
                            d.default.selectVoiceChannel(o.id), (0, x.Kh)(o.id);
                        },
                        focusProps: { ringTarget: h },
                        children: (0, i.jsxs)('div', {
                            className: z.voiceSectionDetails,
                            children: [q(r.toString(), z.voiceSectionText), X(f, z.voiceSectionText)]
                        })
                    }),
                    (0, i.jsx)(B.Z, {
                        partySize: s,
                        members: c,
                        guildId: r.id
                    })
                ]
            })
        });
    }),
    (er.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l } = e;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: z.gameSection,
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              src: t,
                              className: z.gameSectionIcon
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        children: [q(n), X(F.NW.formatToPlainString(F.t.C4WXvb, { memberCount: r.totalSize }))]
                    }),
                    (0, i.jsx)(B.Z, {
                        partySize: r,
                        members: l
                    })
                ]
            })
        });
    }),
    (er.RichPresenceSection = $),
    (er.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: z.xboxSection,
                children: [
                    (0, i.jsx)(U.Z, { className: z.xboxSectionIcon }),
                    (0, i.jsxs)('div', {
                        className: z.__invalid_xboxSectionDetails,
                        children: [q(t), X(F.NW.string(F.t['JG9r+/']))]
                    })
                ]
            })
        });
    }),
    (er.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: o },
            partySize: s,
            members: u,
            isSolo: d,
            getAssetImage: p
        } = e;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: z.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)('div', {
                              className: z.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
                                      src: p(o, n.large_image, [Y.LARGE, Y.LARGE]),
                                      className: a()(z.largeImage, z.borderRadius0, { [z.largeImageMask]: null != n.small_image })
                                  }),
                                  d
                                      ? null
                                      : (0, i.jsx)(M.Z, {
                                            className: z.smallImage,
                                            color: c.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, i.jsx)('div', {}),
                    (0, i.jsxs)('div', {
                        children: [null != r ? q(r) : null, null != l ? X(l) : null]
                    }),
                    (0, i.jsx)(B.Z, {
                        minAvatarsShown: d ? 2 : 1,
                        partySize: s,
                        members: u
                    })
                ]
            })
        });
    }),
    (er.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: o, guildId: s } = e,
            { name: c, details: d, assets: p, application_id: h } = r;
        if (null != p && (0, O.Z)(r)) {
            var g;
            t = (0, i.jsx)(S.Z, {
                className: z.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(u.P3F, {
                    href: (0, m.Z)(r),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, i.jsx)('img', {
                            alt: null !== (g = p.large_text) && void 0 !== g ? g : '',
                            src: o(h, p.large_image, [900, 500]),
                            className: z.twitchSectionPreview
                        }),
                        (0, i.jsx)('img', {
                            src: n(497726),
                            className: z.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: a()({
                        [z.twitchSectionSimple]: null == l,
                        [z.twitchSectionFull]: null != l
                    }),
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f.Z.get(H.ABu.TWITCH).icon.lightSVG,
                            className: z.twitchSectionIcon
                        }),
                        (0, i.jsxs)('div', {
                            children: [q(c), null != d ? X(d) : null]
                        }),
                        null != l
                            ? (0, i.jsx)(u.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  'aria-label': l.username,
                                  className: z.twitchSectionAvatar,
                                  size: u.EFr.SIZE_24
                              })
                            : null
                    ]
                }),
                t
            ]
        });
    }),
    (er.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: o, onPreviewClick: a, guildId: c } = e,
            d = (0, s.e7)([D.Z], () => D.Z.getChannel(o.channelId)),
            [p, h] = (0, j.wq)(d),
            f = (0, i.jsxs)(u.P3F, {
                onClick: p ? a : void 0,
                className: z.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(A.Z, {
                        stream: o,
                        className: z.applicationStreamingPreviewSize
                    }),
                    (0, i.jsx)(u.Text, {
                        className: z.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, j.P9)(h)
                    })
                ]
            }),
            g = null !== (n = null === (t = (0, N.Z)(r, o)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : F.NW.string(F.t.eXan7O);
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: z.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(u.qEK, {
                            size: u.EFr.SIZE_32,
                            src: l.getAvatarURL(c, 32),
                            'aria-label': l.username,
                            className: z.applicationStreamingAvatar
                        }),
                        (0, i.jsxs)('div', {
                            children: [q(V.ZP.getName(l)), X(g)]
                        }),
                        (0, i.jsx)(C.ZP, { size: C.ZP.Sizes.SMALL })
                    ]
                }),
                f
            ]
        });
    }),
    (er.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: o } = e,
            [a, c] = l.useState(null),
            d = t.application_id;
        l.useEffect(() => {
            null != d &&
                (0, G.fetchAssetIds)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [d]);
        let p = (0, s.Wu)([k.default, R.default], () =>
                Array.from(o)
                    .map((e) => (R.default.getId() === e ? null : k.default.getUser(e)))
                    .filter(W.lm)
            ),
            f = (0, h.O)(),
            { analyticsLocations: m } = (0, v.ZP)();
        if (null == d) return null;
        let b = y.Z.getApplication(d);
        if (null == b) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            E = (0, G.getAssetImage)(b.id, a, 300);
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: z.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(P.Z, {
                            game: b,
                            size: P.Z.Sizes.XSMALL,
                            className: z.embeddedActivityIcon
                        }),
                        (0, i.jsx)('div', {
                            className: z.embeddedActivityName,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: b.name
                            })
                        }),
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: z.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, i.jsx)(Q, { timestamps: _ })
                                  })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: z.embeddedActivityPlayerContainer,
                    children: [
                        null != E
                            ? (0, i.jsx)('img', {
                                  src: E,
                                  alt: b.name,
                                  className: z.embeddedActivityImage
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: z.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(w.OV, {
                                    users: p,
                                    guildId: r,
                                    channelId: n.id
                                }),
                                (0, i.jsx)('div', {
                                    className: z.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(u.zxk, {
                                        size: u.zxk.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, g.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: f.location,
                                                    analyticsLocations: m
                                                });
                                        },
                                        children: F.NW.string(F.t.VJlc0d)
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
let ei = er;
