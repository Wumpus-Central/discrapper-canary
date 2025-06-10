n.d(t, { Z: () => ei }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
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
    I = n(74433),
    y = n(906732),
    v = n(812206),
    C = n(933557),
    S = n(194082),
    N = n(264165),
    T = n(548816),
    P = n(925329),
    j = n(102172),
    A = n(871118),
    x = n(707409),
    Z = n(359110),
    w = n(769654),
    L = n(849171),
    R = n(314897),
    D = n(592125),
    k = n(594174),
    M = n(395361),
    U = n(639351),
    G = n(81063),
    V = n(823379),
    B = n(51144),
    H = n(599706),
    F = n(981631),
    z = n(388032),
    W = n(147049);
let Y = {
        SMALL: 64,
        LARGE: 160
    },
    K = [14, 14, 12, 12, 10, 8, 6],
    q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: o()(W.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    Q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: o()(W.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    X = (0, p.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)('div', {
            className: W.__invalid_timestamp,
            children: t
        });
    }),
    J = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('section', {
            className: W.section,
            children: t
        });
    };
class $ extends l.Component {
    renderTimePlayed() {
        let e,
            { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, _.Z)(t) || (0, E.Z)(t)
            ? null
            : Q(
                  (0, b.Z)(t)
                      ? (0, i.jsx)(X, { timestamps: n })
                      : (0, i.jsx)(x.ZP, {
                            start: n.start,
                            end: n.end,
                            location: x.ZP.Locations.USER_ACTIVITY,
                            className: W.__invalid_playTime
                        })
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: r, details: l, state: a, application_id: s },
            getAssetImage: c
        } = this.props;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: W.activitySection,
                children: [
                    null != r && 0 !== Object.keys(r).length
                        ? (0, i.jsxs)('div', {
                              className: W.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null != (e = r.large_text) ? e : '',
                                      src: c(s, r.large_image, [Y.LARGE, Y.LARGE]),
                                      className: o()(W.largeImage, { [W.largeImageMask]: null != r.small_image })
                                  }),
                                  null != r.small_image
                                      ? (0, i.jsx)('img', {
                                            alt: null != (t = r.small_text) ? t : '',
                                            src: c(s, r.small_image, [Y.SMALL, Y.SMALL]),
                                            className: W.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: W.activitySectionAssets,
                              children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: W.largeImage
                              })
                          }),
                    (0, i.jsxs)('div', {
                        children: [q(null != l && '' !== l ? l : z.intl.string(z.t['2TbM/P'])), null != a ? Q(a) : null, this.renderTimePlayed()]
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
                className: W.headerIcon,
                color: c.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, i.jsx)(M.Z, {
                className: W.headerIcon,
                color: c.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, i.jsx)('div', {
                className: W.multipleIconWrapper,
                children: (0, i.jsx)(u.iWm, {
                    size: 'md',
                    className: o()(W.headerIcon, W.multipleIcon),
                    color: c.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, i.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: W.headerIcon
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(u.P3F, {
              onClick: r,
              className: o()(null != r ? W.clickable : ''),
              onContextMenu: l,
              children: t
          })
        : t;
};
et.Src = ee;
let en = (e) => {
    let { priorityUser: t, title: n, subtitle: r, icon: l, onSubtitleClick: a, onIconClick: o, onContextMenu: s, guildId: c } = e,
        d = (0, i.jsx)(u.Text, {
            color: 'header-secondary',
            className: W.textContent,
            variant: 'text-sm/normal',
            children: r
        });
    return (0, i.jsxs)('header', {
        className: null != l ? W.headerFull : W.headerSimple,
        children: [
            (0, i.jsx)(u.qEK, {
                src: t.user.getAvatarURL(c, 32),
                'aria-label': t.user.username,
                size: u.EFr.SIZE_32,
                className: W.headerAvatar,
                status: t.status,
                onContextMenu: s
            }),
            (0, i.jsxs)('div', {
                className: W.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(u.Text, {
                        className: W.textContent,
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, i.jsx)(u.P3F, {
                              className: W.clickable,
                              onClick: a,
                              children: d
                          })
                        : d
                ]
            }),
            null != l && null != o
                ? (0, i.jsx)(u.P3F, {
                      className: W.clickable,
                      onClick: o,
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
                    className: o()(l, W.wrapper),
                    padded: !0
                },
                a
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
            className: W.body,
            children: t
        });
    }),
    (er.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)('div', { className: o()(W.separator, { [W.inset]: t }, n) });
    }),
    (er.VoiceSection = (e) => {
        var t, n;
        let { guild: r, channel: a, partySize: s, members: c, onChannelContextMenu: p } = e,
            h = l.useRef(null),
            f = (0, C.ZP)(a, !0);
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: W.voiceSection,
                ref: h,
                onContextMenu: (e) => p(e, a),
                children: [
                    (0, i.jsx)(u.P3F, {
                        onClick: () => (0, w.X)(r.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)('div', {
                            className: W.voiceSectionAssets,
                            children: [
                                null != r.getIconURL(32)
                                    ? (0, i.jsx)('img', {
                                          alt: '',
                                          src: null != (t = r.getIconURL(32)) ? t : void 0,
                                          className: o()(W.voiceSectionGuildImage, W.largeImageMask)
                                      })
                                    : (0, i.jsx)('div', {
                                          className: W.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)('div', {
                                              className: W.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (n = K[r.acronym.length]) ? n : K[K.length - 1] },
                                              children: r.acronym
                                          })
                                      }),
                                (0, i.jsx)('div', {
                                    className: W.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(u.gj8, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: W.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(u.P3F, {
                        onClick: () => {
                            d.default.selectVoiceChannel(a.id), (0, Z.Kh)(a.id);
                        },
                        focusProps: { ringTarget: h },
                        children: (0, i.jsxs)('div', {
                            className: W.voiceSectionDetails,
                            children: [q(r.toString(), W.voiceSectionText), Q(f, W.voiceSectionText)]
                        })
                    }),
                    (0, i.jsx)(H.Z, {
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
                className: W.gameSection,
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              src: t,
                              className: W.gameSectionIcon
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        children: [q(n), Q(z.intl.formatToPlainString(z.t.C4WXvb, { memberCount: r.totalSize }))]
                    }),
                    (0, i.jsx)(H.Z, {
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
                className: W.xboxSection,
                children: [
                    (0, i.jsx)(U.Z, { className: W.xboxSectionIcon }),
                    (0, i.jsxs)('div', {
                        className: W.__invalid_xboxSectionDetails,
                        children: [q(t), Q(z.intl.string(z.t['JG9r+/']))]
                    })
                ]
            })
        });
    }),
    (er.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: s,
            members: u,
            isSolo: d,
            getAssetImage: p
        } = e;
        return (0, i.jsx)(J, {
            children: (0, i.jsxs)('div', {
                className: W.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)('div', {
                              className: W.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null != (t = n.large_text) ? t : '',
                                      src: p(a, n.large_image, [Y.LARGE, Y.LARGE]),
                                      className: o()(W.largeImage, W.borderRadius0, { [W.largeImageMask]: null != n.small_image })
                                  }),
                                  d
                                      ? null
                                      : (0, i.jsx)(M.Z, {
                                            className: W.smallImage,
                                            color: c.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, i.jsx)('div', {}),
                    (0, i.jsxs)('div', {
                        children: [null != r ? q(r) : null, null != l ? Q(l) : null]
                    }),
                    (0, i.jsx)(H.Z, {
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
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: d, assets: p, application_id: h } = r;
        if (null != p && (0, O.Z)(r)) {
            var g;
            t = (0, i.jsx)(N.Z, {
                className: W.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(u.P3F, {
                    href: (0, m.Z)(r),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, i.jsx)('img', {
                            alt: null != (g = p.large_text) ? g : '',
                            src: a(h, p.large_image, [900, 500]),
                            className: W.twitchSectionPreview
                        }),
                        (0, i.jsx)('img', {
                            src: n(497726),
                            className: W.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: o()({
                        [W.twitchSectionSimple]: null == l,
                        [W.twitchSectionFull]: null != l
                    }),
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f.Z.get(F.ABu.TWITCH).icon.lightSVG,
                            className: W.twitchSectionIcon
                        }),
                        (0, i.jsxs)('div', {
                            children: [q(c), null != d ? Q(d) : null]
                        }),
                        null != l
                            ? (0, i.jsx)(u.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  'aria-label': l.username,
                                  className: W.twitchSectionAvatar,
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
        let { activity: r, user: l, applicationStream: a, onPreviewClick: o, guildId: c } = e,
            d = (0, s.e7)([D.Z], () => D.Z.getChannel(a.channelId)),
            [p, h] = (0, j.wq)(d),
            f = (0, i.jsxs)(u.P3F, {
                onClick: p ? o : void 0,
                className: W.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(A.Z, {
                        stream: a,
                        className: W.applicationStreamingPreviewSize
                    }),
                    (0, i.jsx)(u.Text, {
                        className: W.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, j.P9)(h)
                    })
                ]
            }),
            g = null != (n = null == (t = (0, I.Z)(r, a)) ? void 0 : t.activityText) ? n : z.intl.string(z.t.eXan7O);
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: W.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(u.qEK, {
                            size: u.EFr.SIZE_32,
                            src: l.getAvatarURL(c, 32),
                            'aria-label': l.username,
                            className: W.applicationStreamingAvatar
                        }),
                        (0, i.jsxs)('div', {
                            children: [q(B.ZP.getName(l)), Q(g)]
                        }),
                        (0, i.jsx)(S.ZP, { size: S.ZP.Sizes.SMALL })
                    ]
                }),
                f
            ]
        });
    }),
    (er.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [o, c] = l.useState(null),
            d = t.application_id;
        l.useEffect(() => {
            null != d &&
                (0, G.hR)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [d]);
        let p = (0, s.Wu)([k.default, R.default], () =>
                Array.from(a)
                    .map((e) => (R.default.getId() === e ? null : k.default.getUser(e)))
                    .filter(V.lm)
            ),
            f = (0, h.O)(),
            { analyticsLocations: m } = (0, y.ZP)();
        if (null == d) return null;
        let b = v.Z.getApplication(d);
        if (null == b) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            E = (0, G.xF)(b.id, o, 300);
        return (0, i.jsxs)(J, {
            children: [
                (0, i.jsxs)('div', {
                    className: W.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(P.Z, {
                            game: b,
                            size: P.Z.Sizes.XSMALL,
                            className: W.embeddedActivityIcon
                        }),
                        (0, i.jsx)('div', {
                            className: W.embeddedActivityName,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: b.name
                            })
                        }),
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: W.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, i.jsx)(X, { timestamps: _ })
                                  })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: W.embeddedActivityPlayerContainer,
                    children: [
                        null != E
                            ? (0, i.jsx)('img', {
                                  src: E,
                                  alt: b.name,
                                  className: W.embeddedActivityImage
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: W.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(L.OV, {
                                    users: p,
                                    guildId: r,
                                    channelId: n.id
                                }),
                                (0, i.jsx)('div', {
                                    className: W.embeddedActivityJoinWrapper,
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
                                        children: z.intl.string(z.t.VJlc0d)
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
