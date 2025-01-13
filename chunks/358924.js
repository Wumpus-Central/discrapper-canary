n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    h = n(287734),
    m = n(438139),
    p = n(2052),
    g = n(726542),
    f = n(638880),
    _ = n(655922),
    E = n(122810),
    I = n(833664),
    C = n(503438),
    N = n(420660),
    v = n(74433),
    S = n(906732),
    T = n(812206),
    A = n(933557),
    b = n(194082),
    Z = n(264165),
    x = n(548816),
    L = n(925329),
    P = n(102172),
    O = n(871118),
    y = n(707409),
    R = n(359110),
    j = n(769654),
    D = n(849171),
    M = n(314897),
    w = n(592125),
    k = n(594174),
    U = n(395361),
    G = n(639351),
    B = n(81063),
    V = n(823379),
    H = n(51144),
    F = n(599706),
    z = n(981631),
    W = n(388032),
    Y = n(303790);
let K = {
        SMALL: 64,
        LARGE: 160
    },
    q = [14, 14, 12, 12, 10, 8, 6],
    X = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    Q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(u.Text, {
            className: o()(Y.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    J = (0, m.Z)((e) => {
        let { message: t } = e;
        return (0, l.jsx)('div', {
            className: Y.__invalid_timestamp,
            children: t
        });
    }),
    $ = (e) => {
        let { children: t } = e;
        return (0, l.jsx)('section', {
            className: Y.section,
            children: t
        });
    };
class ee extends a.Component {
    renderTimePlayed() {
        let e;
        let { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, I.Z)(t) || (0, C.Z)(t)
            ? null
            : Q(
                  (e = (0, E.Z)(t)
                      ? (0, l.jsx)(J, { timestamps: n })
                      : (0, l.jsx)(y.ZP, {
                            start: n.start,
                            end: n.end,
                            location: y.ZP.Locations.USER_ACTIVITY,
                            className: Y.__invalid_playTime
                        }))
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: i, details: r, state: a, application_id: s },
            getAssetImage: c
        } = this.props;
        return (0, l.jsx)($, {
            children: (0, l.jsxs)('div', {
                className: Y.activitySection,
                children: [
                    null != i && 0 !== Object.keys(i).length
                        ? (0, l.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
                                      src: c(s, i.large_image, [K.LARGE, K.LARGE]),
                                      className: o()(Y.largeImage, { [Y.largeImageMask]: null != i.small_image })
                                  }),
                                  null != i.small_image
                                      ? (0, l.jsx)('img', {
                                            alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
                                            src: c(s, i.small_image, [K.SMALL, K.SMALL]),
                                            className: Y.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, l.jsx)('div', {
                              className: Y.activitySectionAssets,
                              children: (0, l.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: Y.largeImage
                              })
                          }),
                    (0, l.jsxs)('div', {
                        children: [X(null != r && '' !== r ? r : W.intl.string(W.t['2TbM/P'])), null != a ? Q(a) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
((r = i || (i = {})).XBOX = 'XBOX'), (r.SPOTIFY = 'SPOTIFY'), (r.MULTIPLE = 'MULTIPLE');
let et = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case 'XBOX':
            t = (0, l.jsx)(G.Z, {
                className: Y.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, l.jsx)(U.Z, {
                className: Y.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, l.jsx)('div', {
                className: Y.multipleIconWrapper,
                children: (0, l.jsx)(u.GameControllerIcon, {
                    size: 'md',
                    className: o()(Y.headerIcon, Y.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, l.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: Y.headerIcon
            });
    }
    return null != i || null != r
        ? (0, l.jsx)(u.Clickable, {
              onClick: i,
              className: o()(null != i ? Y.clickable : ''),
              onContextMenu: r,
              children: t
          })
        : t;
};
et.Src = i;
let en = (e) => {
    let { priorityUser: t, title: n, subtitle: i, icon: r, onSubtitleClick: a, onIconClick: s, onContextMenu: c, guildId: d } = e,
        h = (0, l.jsx)(u.Text, {
            color: 'header-secondary',
            className: Y.textContent,
            variant: 'text-sm/normal',
            children: i
        });
    return (0, l.jsxs)('header', {
        className: null != r ? Y.headerFull : Y.headerSimple,
        children: [
            (0, l.jsx)(u.Avatar, {
                src: t.user.getAvatarURL(d, 32),
                'aria-label': t.user.username,
                size: u.AvatarSizes.SIZE_32,
                className: Y.headerAvatar,
                status: t.status,
                onContextMenu: c
            }),
            (0, l.jsxs)('div', {
                className: Y.__invalid_headerDetails,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: o()(Y.textContent),
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, l.jsx)(u.Clickable, {
                              className: Y.clickable,
                              onClick: a,
                              children: h
                          })
                        : h
                ]
            }),
            null != r && null != s
                ? (0, l.jsx)(u.Clickable, {
                      className: Y.clickable,
                      onClick: s,
                      children: r
                  })
                : r
        ]
    });
};
en.Icon = et;
let ei = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)(u.FocusRing, {
        children: (0, l.jsx)(x.Z, {
            className: o()(n, Y.wrapper),
            padded: !0,
            ...i,
            children: t
        })
    });
};
(ei.Header = en),
    (ei.Body = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(x.Z, {
            inset: !0,
            padded: !1,
            className: Y.body,
            children: t
        });
    }),
    (ei.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, l.jsx)('div', { className: o()(Y.separator, { [Y.inset]: t }, n) });
    }),
    (ei.VoiceSection = (e) => {
        var t, n;
        let { guild: i, channel: r, partySize: s, members: c, onChannelContextMenu: d } = e,
            m = a.useRef(null),
            p = (0, A.ZP)(r, !0);
        return (0, l.jsx)($, {
            children: (0, l.jsxs)('div', {
                className: Y.voiceSection,
                ref: m,
                onContextMenu: (e) => d(e, r),
                children: [
                    (0, l.jsx)(u.Clickable, {
                        onClick: () => (0, j.X)(i.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, l.jsxs)('div', {
                            className: Y.voiceSectionAssets,
                            children: [
                                null != i.getIconURL(32)
                                    ? (0, l.jsx)('img', {
                                          alt: '',
                                          src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
                                          className: o()(Y.voiceSectionGuildImage, Y.largeImageMask)
                                      })
                                    : (0, l.jsx)('div', {
                                          className: Y.voiceSectionNoGuildImageWrapper,
                                          children: (0, l.jsx)('div', {
                                              className: Y.voiceSectionNoGuildImage,
                                              style: { fontSize: null !== (n = q[i.acronym.length]) && void 0 !== n ? n : q[q.length - 1] },
                                              children: i.acronym
                                          })
                                      }),
                                (0, l.jsx)('div', {
                                    className: Y.voiceSectionIconWrapper,
                                    children: (0, l.jsx)(u.VoiceNormalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: Y.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(u.Clickable, {
                        onClick: () => {
                            h.default.selectVoiceChannel(r.id), (0, R.Kh)(r.id);
                        },
                        focusProps: { ringTarget: m },
                        children: (0, l.jsxs)('div', {
                            className: Y.voiceSectionDetails,
                            children: [X(i.toString(), Y.voiceSectionText), Q(p, Y.voiceSectionText)]
                        })
                    }),
                    (0, l.jsx)(F.Z, {
                        partySize: s,
                        members: c,
                        guildId: i.id
                    })
                ]
            })
        });
    }),
    (ei.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r } = e;
        return (0, l.jsx)($, {
            children: (0, l.jsxs)('div', {
                className: Y.gameSection,
                children: [
                    null != t
                        ? (0, l.jsx)('img', {
                              alt: '',
                              src: t,
                              className: Y.gameSectionIcon
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        children: [X(n), Q(W.intl.formatToPlainString(W.t.C4WXvb, { memberCount: i.totalSize }))]
                    }),
                    (0, l.jsx)(F.Z, {
                        partySize: i,
                        members: r
                    })
                ]
            })
        });
    }),
    (ei.RichPresenceSection = ee),
    (ei.XboxSection = (e) => {
        let { title: t } = e;
        return (0, l.jsx)($, {
            children: (0, l.jsxs)('div', {
                className: Y.xboxSection,
                children: [
                    (0, l.jsx)(G.Z, { className: Y.xboxSectionIcon }),
                    (0, l.jsxs)('div', {
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
            activity: { assets: n, details: i, state: r, application_id: a },
            partySize: s,
            members: c,
            isSolo: u,
            getAssetImage: h
        } = e;
        return (0, l.jsx)($, {
            children: (0, l.jsxs)('div', {
                className: Y.spotifySection,
                children: [
                    null != n
                        ? (0, l.jsxs)('div', {
                              className: Y.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
                                      src: h(a, n.large_image, [K.LARGE, K.LARGE]),
                                      className: o()(Y.largeImage, Y.borderRadius0, { [Y.largeImageMask]: null != n.small_image })
                                  }),
                                  u
                                      ? null
                                      : (0, l.jsx)(U.Z, {
                                            className: Y.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, l.jsx)('div', {}),
                    (0, l.jsxs)('div', {
                        children: [null != i ? X(i) : null, null != r ? Q(r) : null]
                    }),
                    (0, l.jsx)(F.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: s,
                        members: c
                    })
                ]
            })
        });
    }),
    (ei.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: s } = e,
            { name: c, details: d, assets: h, application_id: m } = i;
        if (null != h && (0, N.Z)(i)) {
            var p;
            t = (0, l.jsx)(Z.Z, {
                className: Y.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, l.jsxs)(u.Clickable, {
                    href: (0, _.Z)(i),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, l.jsx)('img', {
                            alt: null !== (p = h.large_text) && void 0 !== p ? p : '',
                            src: a(m, h.large_image, [900, 500]),
                            className: Y.twitchSectionPreview
                        }),
                        (0, l.jsx)('img', {
                            src: n(497726),
                            className: Y.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, l.jsxs)($, {
            children: [
                (0, l.jsxs)('div', {
                    className: o()({
                        [Y.twitchSectionSimple]: null == r,
                        [Y.twitchSectionFull]: null != r
                    }),
                    children: [
                        (0, l.jsx)('img', {
                            alt: '',
                            src: g.Z.get(z.ABu.TWITCH).icon.lightSVG,
                            className: Y.twitchSectionIcon
                        }),
                        (0, l.jsxs)('div', {
                            children: [X(c), null != d ? Q(d) : null]
                        }),
                        null != r
                            ? (0, l.jsx)(u.Avatar, {
                                  src: r.getAvatarURL(s, 24),
                                  'aria-label': r.username,
                                  className: Y.twitchSectionAvatar,
                                  size: u.AvatarSizes.SIZE_24
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
        let { activity: i, user: r, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            d = (0, c.e7)([w.Z], () => w.Z.getChannel(a.channelId)),
            [h, m] = (0, P.wq)(d),
            p = (0, l.jsxs)(u.Clickable, {
                onClick: h ? s : void 0,
                className: Y.applicationStreamingPreviewWrapper,
                children: [
                    (0, l.jsx)(O.Z, {
                        stream: a,
                        className: Y.applicationStreamingPreviewSize
                    }),
                    (0, l.jsx)(u.Text, {
                        className: Y.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, P.P9)(m)
                    })
                ]
            }),
            g = null !== (n = null === (t = (0, v.Z)(i, a)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : W.intl.string(W.t.eXan7O);
        return (0, l.jsxs)($, {
            children: [
                (0, l.jsxs)('div', {
                    className: Y.applicationStreamingSection,
                    children: [
                        (0, l.jsx)(u.Avatar, {
                            size: u.AvatarSizes.SIZE_32,
                            src: r.getAvatarURL(o, 32),
                            'aria-label': r.username,
                            className: Y.applicationStreamingAvatar
                        }),
                        (0, l.jsxs)('div', {
                            children: [X(H.ZP.getName(r)), Q(g)]
                        }),
                        (0, l.jsx)(b.ZP, { size: b.ZP.Sizes.SMALL })
                    ]
                }),
                p
            ]
        });
    }),
    (ei.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [s, o] = a.useState(null),
            d = t.application_id;
        a.useEffect(() => {
            if (null != d)
                (0, B.fetchAssetIds)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [d]);
        let h = (0, c.Wu)([k.default, M.default], () =>
                Array.from(r)
                    .map((e) => (M.default.getId() === e ? null : k.default.getUser(e)))
                    .filter(V.lm)
            ),
            m = (0, p.O)(),
            { analyticsLocations: g } = (0, S.ZP)();
        if (null == d) return null;
        let _ = T.Z.getApplication(d);
        if (null == _) return null;
        let E = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            I = (0, B.getAssetImage)(_.id, s, 300);
        return (0, l.jsxs)($, {
            children: [
                (0, l.jsxs)('div', {
                    className: Y.embeddedActivityTopRow,
                    children: [
                        (0, l.jsx)(L.Z, {
                            game: _,
                            size: L.Z.Sizes.XSMALL,
                            className: Y.embeddedActivityIcon
                        }),
                        (0, l.jsx)('div', {
                            className: Y.embeddedActivityName,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: _.name
                            })
                        }),
                        null != E
                            ? (0, l.jsx)('div', {
                                  className: Y.embeddedActivityTimeElapsed,
                                  children: (0, l.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, l.jsx)(J, { timestamps: E })
                                  })
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: Y.embeddedActivityPlayerContainer,
                    children: [
                        null != I
                            ? (0, l.jsx)('img', {
                                  src: I,
                                  alt: _.name,
                                  className: Y.embeddedActivityImage
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: Y.embeddedActivityImageOverlay,
                            children: [
                                (0, l.jsx)(D.OV, {
                                    users: h,
                                    guildId: i,
                                    channelId: n.id
                                }),
                                (0, l.jsx)('div', {
                                    className: Y.embeddedActivityJoinWrapper,
                                    children: (0, l.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, f.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: m.location,
                                                    analyticsLocations: g
                                                });
                                        },
                                        children: W.intl.string(W.t.VJlc0d)
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }),
    (t.Z = ei);
