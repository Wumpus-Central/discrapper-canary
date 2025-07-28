(n.d(t, { Z: () => el }), n(388685));
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
    O = n(503438),
    E = n(420660),
    y = n(74433),
    v = n(906732),
    I = n(812206),
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
    R = n(601964),
    D = n(314897),
    k = n(592125),
    M = n(594174),
    U = n(395361),
    G = n(639351),
    V = n(81063),
    B = n(823379),
    H = n(51144),
    F = n(599706),
    z = n(981631),
    W = n(388032),
    Y = n(147049);
let K = {
        SMALL: 64,
        LARGE: 160
    },
    q = [14, 14, 12, 12, 10, 8, 6],
    X = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    Q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    J = (0, p.Z)((e) => {
        let { message: t } = e;
        return (0, i.jsx)('div', {
            className: Y.__invalid_timestamp,
            children: t
        });
    }),
    $ = (e) => {
        let { children: t } = e;
        return (0, i.jsx)('section', {
            className: Y.section,
            children: t
        });
    };
class ee extends l.Component {
    renderTimePlayed() {
        let e,
            { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, _.Z)(t) || (0, O.Z)(t)
            ? null
            : Q(
                  (0, b.Z)(t)
                      ? (0, i.jsx)(J, { timestamps: n })
                      : (0, i.jsx)(x.ZP, {
                            start: n.start,
                            end: n.end,
                            location: x.ZP.Locations.USER_ACTIVITY,
                            className: Y.__invalid_playTime
                        })
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: r, details: l, state: a, application_id: s },
            getAssetImage: c
        } = this.props;
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.activitySection,
                children: [
                    null != r && 0 !== Object.keys(r).length
                        ? (0, i.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null != (e = r.large_text) ? e : '',
                                      src: c(s, r.large_image, [K.LARGE, K.LARGE]),
                                      className: o()(Y.largeImage, { [Y.largeImageMask]: null != r.small_image })
                                  }),
                                  null != r.small_image
                                      ? (0, i.jsx)('img', {
                                            alt: null != (t = r.small_text) ? t : '',
                                            src: c(s, r.small_image, [K.SMALL, K.SMALL]),
                                            className: Y.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, i.jsx)('div', {
                              className: Y.activitySectionAssets,
                              children: (0, i.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: Y.largeImage
                              })
                          }),
                    (0, i.jsxs)('div', {
                        children: [X(null != l && '' !== l ? l : W.intl.string(W.t['2TbM/P'])), null != a ? Q(a) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
var et = (((r = et || {}).XBOX = 'XBOX'), (r.SPOTIFY = 'SPOTIFY'), (r.MULTIPLE = 'MULTIPLE'), r);
let en = (e) => {
    let t,
        { src: n, onClick: r, onContextMenu: l } = e;
    switch (n) {
        case 'XBOX':
            t = (0, i.jsx)(G.Z, {
                className: Y.headerIcon,
                color: c.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, i.jsx)(U.Z, {
                className: Y.headerIcon,
                color: c.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, i.jsx)('div', {
                className: Y.multipleIconWrapper,
                children: (0, i.jsx)(u.iWm, {
                    size: 'md',
                    className: o()(Y.headerIcon, Y.multipleIcon),
                    color: c.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, i.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: Y.headerIcon
            });
    }
    return null != r || null != l
        ? (0, i.jsx)(u.P3F, {
              onClick: r,
              className: o()(null != r ? Y.clickable : ''),
              onContextMenu: l,
              children: t
          })
        : t;
};
en.Src = et;
let er = (e) => {
    let { priorityUser: t, title: n, subtitle: r, icon: l, onSubtitleClick: a, onIconClick: o, onContextMenu: s, guildId: c } = e,
        d = (0, i.jsx)(u.Text, {
            color: 'header-secondary',
            className: Y.textContent,
            variant: 'text-sm/normal',
            children: r
        });
    return (0, i.jsxs)('header', {
        className: null != l ? Y.headerFull : Y.headerSimple,
        children: [
            (0, i.jsx)(u.qEK, {
                src: t.user.getAvatarURL(c, 32),
                'aria-label': t.user.username,
                size: u.EFr.SIZE_32,
                className: Y.headerAvatar,
                status: t.status,
                onContextMenu: s
            }),
            (0, i.jsxs)('div', {
                className: Y.__invalid_headerDetails,
                children: [
                    (0, i.jsx)(u.Text, {
                        className: Y.textContent,
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, i.jsx)(u.P3F, {
                              className: Y.clickable,
                              onClick: a,
                              children: d
                          })
                        : d
                ]
            }),
            null != l && null != o
                ? (0, i.jsx)(u.P3F, {
                      className: Y.clickable,
                      onClick: o,
                      children: l
                  })
                : l
        ]
    });
};
er.Icon = en;
let ei = (e) => {
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
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            ((r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r));
                        }));
                }
                return e;
            })(
                {
                    className: o()(l, Y.wrapper),
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
((ei.Header = er),
    (ei.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(T.Z, {
            inset: !0,
            padded: !1,
            className: Y.body,
            children: t
        });
    }),
    (ei.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, i.jsx)('div', { className: o()(Y.separator, { [Y.inset]: t }, n) });
    }),
    (ei.VoiceSection = (e) => {
        var t;
        let { guild: n, channel: r, partySize: a, members: s, onChannelContextMenu: c } = e,
            p = l.useRef(null),
            h = (0, C.ZP)(r, !0),
            f = (0, R.EB)(n, 32),
            g = (0, R.gM)(n);
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.voiceSection,
                ref: p,
                onContextMenu: (e) => c(e, r),
                children: [
                    (0, i.jsx)(u.P3F, {
                        onClick: () => (0, w.X)(n.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)('div', {
                            className: Y.voiceSectionAssets,
                            children: [
                                null != f
                                    ? (0, i.jsx)('img', {
                                          alt: '',
                                          src: f,
                                          className: o()(Y.voiceSectionGuildImage, Y.largeImageMask)
                                      })
                                    : (0, i.jsx)('div', {
                                          className: Y.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)('div', {
                                              className: Y.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (t = q[g.length]) ? t : q[q.length - 1] },
                                              children: g
                                          })
                                      }),
                                (0, i.jsx)('div', {
                                    className: Y.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(u.gj8, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: Y.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(u.P3F, {
                        onClick: () => {
                            (d.default.selectVoiceChannel(r.id), (0, Z.Kh)(r.id));
                        },
                        focusProps: { ringTarget: p },
                        children: (0, i.jsxs)('div', {
                            className: Y.voiceSectionDetails,
                            children: [X(n.name, Y.voiceSectionText), Q(h, Y.voiceSectionText)]
                        })
                    }),
                    (0, i.jsx)(F.Z, {
                        partySize: a,
                        members: s,
                        guildId: n.id
                    })
                ]
            })
        });
    }),
    (ei.GameSection = (e) => {
        let { icon: t, name: n, partySize: r, members: l } = e;
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.gameSection,
                children: [
                    null != t
                        ? (0, i.jsx)('img', {
                              alt: '',
                              src: t,
                              className: Y.gameSectionIcon
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        children: [X(n), Q(W.intl.formatToPlainString(W.t.C4WXvb, { memberCount: r.totalSize }))]
                    }),
                    (0, i.jsx)(F.Z, {
                        partySize: r,
                        members: l
                    })
                ]
            })
        });
    }),
    (ei.RichPresenceSection = ee),
    (ei.XboxSection = (e) => {
        let { title: t } = e;
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.xboxSection,
                children: [
                    (0, i.jsx)(G.Z, { className: Y.xboxSectionIcon }),
                    (0, i.jsxs)('div', {
                        className: Y.__invalid_xboxSectionDetails,
                        children: [X(t), Q(W.intl.string(W.t['JG9r+/']))]
                    })
                ]
            })
        });
    }),
    (ei.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: r, state: l, application_id: a },
            partySize: s,
            members: u,
            isSolo: d,
            getAssetImage: p
        } = e;
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.spotifySection,
                children: [
                    null != n
                        ? (0, i.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: null != (t = n.large_text) ? t : '',
                                      src: p(a, n.large_image, [K.LARGE, K.LARGE]),
                                      className: o()(Y.largeImage, Y.borderRadius0, { [Y.largeImageMask]: null != n.small_image })
                                  }),
                                  d
                                      ? null
                                      : (0, i.jsx)(U.Z, {
                                            className: Y.smallImage,
                                            color: c.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, i.jsx)('div', {}),
                    (0, i.jsxs)('div', {
                        children: [null != r ? X(r) : null, null != l ? Q(l) : null]
                    }),
                    (0, i.jsx)(F.Z, {
                        minAvatarsShown: d ? 2 : 1,
                        partySize: s,
                        members: u
                    })
                ]
            })
        });
    }),
    (ei.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: d, assets: p, application_id: h } = r;
        if (null != p && (0, E.Z)(r)) {
            var g;
            t = (0, i.jsx)(N.Z, {
                className: Y.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, i.jsxs)(u.P3F, {
                    href: (0, m.Z)(r),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, i.jsx)('img', {
                            alt: null != (g = p.large_text) ? g : '',
                            src: a(h, p.large_image, [900, 500]),
                            className: Y.twitchSectionPreview
                        }),
                        (0, i.jsx)('img', {
                            src: n(497726),
                            className: Y.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, i.jsxs)($, {
            children: [
                (0, i.jsxs)('div', {
                    className: o()({
                        [Y.twitchSectionSimple]: null == l,
                        [Y.twitchSectionFull]: null != l
                    }),
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: f.Z.get(z.ABu.TWITCH).icon.lightSVG,
                            className: Y.twitchSectionIcon
                        }),
                        (0, i.jsxs)('div', {
                            children: [X(c), null != d ? Q(d) : null]
                        }),
                        null != l
                            ? (0, i.jsx)(u.qEK, {
                                  src: l.getAvatarURL(s, 24),
                                  'aria-label': l.username,
                                  className: Y.twitchSectionAvatar,
                                  size: u.EFr.SIZE_24
                              })
                            : null
                    ]
                }),
                t
            ]
        });
    }),
    (ei.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: r, user: l, applicationStream: a, onPreviewClick: o, guildId: c } = e,
            d = (0, s.e7)([k.Z], () => k.Z.getChannel(a.channelId)),
            [p, h] = (0, j.wq)(d),
            f = (0, i.jsxs)(u.P3F, {
                onClick: p ? o : void 0,
                className: Y.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(A.Z, {
                        stream: a,
                        className: Y.applicationStreamingPreviewSize
                    }),
                    (0, i.jsx)(u.Text, {
                        className: Y.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, j.P9)(h)
                    })
                ]
            }),
            g = null != (n = null == (t = (0, y.Z)(r, a)) ? void 0 : t.activityText) ? n : W.intl.string(W.t.eXan7O);
        return (0, i.jsxs)($, {
            children: [
                (0, i.jsxs)('div', {
                    className: Y.applicationStreamingSection,
                    children: [
                        (0, i.jsx)(u.qEK, {
                            size: u.EFr.SIZE_32,
                            src: l.getAvatarURL(c, 32),
                            'aria-label': l.username,
                            className: Y.applicationStreamingAvatar
                        }),
                        (0, i.jsxs)('div', {
                            children: [X(H.ZP.getName(l)), Q(g)]
                        }),
                        (0, i.jsx)(S.ZP, { size: S.ZP.Sizes.SMALL })
                    ]
                }),
                f
            ]
        });
    }),
    (ei.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: r, participants: a } = e,
            [o, c] = l.useState(null),
            d = t.application_id;
        l.useEffect(() => {
            null != d &&
                (0, V.hR)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [d]);
        let p = (0, s.Wu)([M.default, D.default], () =>
                Array.from(a)
                    .map((e) => (D.default.getId() === e ? null : M.default.getUser(e)))
                    .filter(B.lm)
            ),
            f = (0, h.O)(),
            { analyticsLocations: m } = (0, v.ZP)();
        if (null == d) return null;
        let b = I.Z.getApplication(d);
        if (null == b) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            O = (0, V.xF)(b.id, o, 300);
        return (0, i.jsxs)($, {
            children: [
                (0, i.jsxs)('div', {
                    className: Y.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(P.Z, {
                            game: b,
                            size: P.Z.Sizes.XSMALL,
                            className: Y.embeddedActivityIcon
                        }),
                        (0, i.jsx)('div', {
                            className: Y.embeddedActivityName,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: b.name
                            })
                        }),
                        null != _
                            ? (0, i.jsx)('div', {
                                  className: Y.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, i.jsx)(J, { timestamps: _ })
                                  })
                              })
                            : null
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: Y.embeddedActivityPlayerContainer,
                    children: [
                        null != O
                            ? (0, i.jsx)('img', {
                                  src: O,
                                  alt: b.name,
                                  className: Y.embeddedActivityImage
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: Y.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(L.OV, {
                                    users: p,
                                    guildId: r,
                                    channelId: n.id
                                }),
                                (0, i.jsx)('div', {
                                    className: Y.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(u.zxk, {
                                        variant: 'primary',
                                        size: 'sm',
                                        text: W.intl.string(W.t.VJlc0d),
                                        onClick: (e) => {
                                            (e.stopPropagation(),
                                                (0, g.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: f.location,
                                                    analyticsLocations: m
                                                }));
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }));
let el = ei;
