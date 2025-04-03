n.d(t, { Z: () => el }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
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
    b = n(620662),
    _ = n(122810),
    E = n(833664),
    O = n(503438),
    N = n(420660),
    y = n(74433),
    I = n(906732),
    v = n(812206),
    C = n(933557),
    S = n(194082),
    T = n(264165),
    P = n(548816),
    j = n(925329),
    A = n(102172),
    Z = n(871118),
    x = n(707409),
    L = n(359110),
    w = n(769654),
    R = n(849171),
    D = n(314897),
    k = n(592125),
    M = n(594174),
    U = n(395361),
    G = n(639351),
    W = n(81063),
    V = n(823379),
    B = n(51144),
    H = n(599706),
    F = n(981631),
    z = n(388032),
    Y = n(147049);
let K = {
        SMALL: 64,
        LARGE: 160
    },
    q = [14, 14, 12, 12, 10, 8, 6],
    Q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, i.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    X = function (e) {
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
        return null == n || !(0, E.Z)(t) || (0, O.Z)(t)
            ? null
            : X(
                  (0, _.Z)(t)
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
                        children: [Q(null != l && '' !== l ? l : z.NW.string(z.t['2TbM/P'])), null != a ? X(a) : null, this.renderTimePlayed()]
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
            P.Z,
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
(ei.Header = er),
    (ei.Body = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(P.Z, {
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
        var t, n;
        let { guild: r, channel: a, partySize: s, members: c, onChannelContextMenu: p } = e,
            h = l.useRef(null),
            f = (0, C.ZP)(a, !0);
        return (0, i.jsx)($, {
            children: (0, i.jsxs)('div', {
                className: Y.voiceSection,
                ref: h,
                onContextMenu: (e) => p(e, a),
                children: [
                    (0, i.jsx)(u.P3F, {
                        onClick: () => (0, w.X)(r.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, i.jsxs)('div', {
                            className: Y.voiceSectionAssets,
                            children: [
                                null != r.getIconURL(32)
                                    ? (0, i.jsx)('img', {
                                          alt: '',
                                          src: null != (t = r.getIconURL(32)) ? t : void 0,
                                          className: o()(Y.voiceSectionGuildImage, Y.largeImageMask)
                                      })
                                    : (0, i.jsx)('div', {
                                          className: Y.voiceSectionNoGuildImageWrapper,
                                          children: (0, i.jsx)('div', {
                                              className: Y.voiceSectionNoGuildImage,
                                              style: { fontSize: null != (n = q[r.acronym.length]) ? n : q[q.length - 1] },
                                              children: r.acronym
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
                            d.default.selectVoiceChannel(a.id), (0, L.Kh)(a.id);
                        },
                        focusProps: { ringTarget: h },
                        children: (0, i.jsxs)('div', {
                            className: Y.voiceSectionDetails,
                            children: [Q(r.toString(), Y.voiceSectionText), X(f, Y.voiceSectionText)]
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
                        children: [Q(n), X(z.NW.formatToPlainString(z.t.C4WXvb, { memberCount: r.totalSize }))]
                    }),
                    (0, i.jsx)(H.Z, {
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
                        children: [Q(t), X(z.NW.string(z.t['JG9r+/']))]
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
                        children: [null != r ? Q(r) : null, null != l ? X(l) : null]
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
    (ei.TwitchSection = (e) => {
        let t,
            { activity: r, user: l, getAssetImage: a, guildId: s } = e,
            { name: c, details: d, assets: p, application_id: h } = r;
        if (null != p && (0, N.Z)(r)) {
            var g;
            t = (0, i.jsx)(T.Z, {
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
                            src: f.Z.get(F.ABu.TWITCH).icon.lightSVG,
                            className: Y.twitchSectionIcon
                        }),
                        (0, i.jsxs)('div', {
                            children: [Q(c), null != d ? X(d) : null]
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
            [p, h] = (0, A.wq)(d),
            f = (0, i.jsxs)(u.P3F, {
                onClick: p ? o : void 0,
                className: Y.applicationStreamingPreviewWrapper,
                children: [
                    (0, i.jsx)(Z.Z, {
                        stream: a,
                        className: Y.applicationStreamingPreviewSize
                    }),
                    (0, i.jsx)(u.Text, {
                        className: Y.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, A.P9)(h)
                    })
                ]
            }),
            g = null != (n = null == (t = (0, y.Z)(r, a)) ? void 0 : t.activityText) ? n : z.NW.string(z.t.eXan7O);
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
                            children: [Q(B.ZP.getName(l)), X(g)]
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
                (0, W.hR)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [d]);
        let p = (0, s.Wu)([M.default, D.default], () =>
                Array.from(a)
                    .map((e) => (D.default.getId() === e ? null : M.default.getUser(e)))
                    .filter(V.lm)
            ),
            f = (0, h.O)(),
            { analyticsLocations: m } = (0, I.ZP)();
        if (null == d) return null;
        let _ = v.Z.getApplication(d);
        if (null == _) return null;
        let E = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            O = (0, W.xF)(_.id, o, 300);
        return (0, i.jsxs)($, {
            children: [
                (0, i.jsxs)('div', {
                    className: Y.embeddedActivityTopRow,
                    children: [
                        (0, i.jsx)(j.Z, {
                            game: _,
                            size: j.Z.Sizes.XSMALL,
                            className: Y.embeddedActivityIcon
                        }),
                        (0, i.jsx)('div', {
                            className: Y.embeddedActivityName,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: _.name
                            })
                        }),
                        null != E
                            ? (0, i.jsx)('div', {
                                  className: Y.embeddedActivityTimeElapsed,
                                  children: (0, i.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, i.jsx)(J, { timestamps: E })
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
                                  alt: _.name,
                                  className: Y.embeddedActivityImage
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: Y.embeddedActivityImageOverlay,
                            children: [
                                (0, i.jsx)(R.OV, {
                                    users: p,
                                    guildId: r,
                                    channelId: n.id
                                }),
                                (0, i.jsx)('div', {
                                    className: Y.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(u.zxk, {
                                        size: u.zxk.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, g.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: f.location,
                                                    analyticsLocations: m,
                                                    instanceId: void 0,
                                                    isContextlessActivity: (0, b.Z)(t, F.xjy.EMBEDDED) && (0, b.Z)(t, F.xjy.CONTEXTLESS)
                                                });
                                        },
                                        children: z.NW.string(z.t.VJlc0d)
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
let el = ei;
