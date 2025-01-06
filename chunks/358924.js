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
    h = n(438139),
    m = n(2052),
    p = n(726542),
    g = n(638880),
    f = n(655922),
    _ = n(122810),
    E = n(833664),
    I = n(503438),
    C = n(420660),
    N = n(74433),
    v = n(906732),
    S = n(812206),
    T = n(933557),
    b = n(194082),
    A = n(264165),
    Z = n(548816),
    x = n(925329),
    L = n(102172),
    P = n(871118),
    O = n(707409),
    y = n(849171),
    R = n(314897),
    j = n(592125),
    D = n(594174),
    M = n(395361),
    w = n(639351),
    k = n(81063),
    U = n(823379),
    G = n(51144),
    B = n(599706),
    V = n(981631),
    H = n(388032),
    F = n(303790);
let z = {
        SMALL: 64,
        LARGE: 160
    },
    W = [14, 14, 12, 12, 10, 8, 6],
    Y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(u.Text, {
            className: o()(F.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    K = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(u.Text, {
            className: o()(F.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    q = (0, h.Z)((e) => {
        let { message: t } = e;
        return (0, l.jsx)('div', {
            className: F.__invalid_timestamp,
            children: t
        });
    }),
    X = (e) => {
        let { children: t } = e;
        return (0, l.jsx)('section', {
            className: F.section,
            children: t
        });
    };
class Q extends a.Component {
    renderTimePlayed() {
        let e;
        let { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, E.Z)(t) || (0, I.Z)(t)
            ? null
            : K(
                  (e = (0, _.Z)(t)
                      ? (0, l.jsx)(q, { timestamps: n })
                      : (0, l.jsx)(O.ZP, {
                            start: n.start,
                            end: n.end,
                            location: O.ZP.Locations.USER_ACTIVITY,
                            className: F.__invalid_playTime
                        }))
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: i, details: r, state: a, application_id: s },
            getAssetImage: c
        } = this.props;
        return (0, l.jsx)(X, {
            children: (0, l.jsxs)('div', {
                className: F.activitySection,
                children: [
                    null != i && 0 !== Object.keys(i).length
                        ? (0, l.jsxs)('div', {
                              className: F.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
                                      src: c(s, i.large_image, [z.LARGE, z.LARGE]),
                                      className: o()(F.largeImage, { [F.largeImageMask]: null != i.small_image })
                                  }),
                                  null != i.small_image
                                      ? (0, l.jsx)('img', {
                                            alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
                                            src: c(s, i.small_image, [z.SMALL, z.SMALL]),
                                            className: F.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, l.jsx)('div', {
                              className: F.activitySectionAssets,
                              children: (0, l.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: F.largeImage
                              })
                          }),
                    (0, l.jsxs)('div', {
                        children: [Y(null != r && '' !== r ? r : H.intl.string(H.t['2TbM/P'])), null != a ? K(a) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
((r = i || (i = {})).XBOX = 'XBOX'), (r.SPOTIFY = 'SPOTIFY'), (r.MULTIPLE = 'MULTIPLE');
let J = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case 'XBOX':
            t = (0, l.jsx)(w.Z, {
                className: F.headerIcon,
                color: d.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, l.jsx)(M.Z, {
                className: F.headerIcon,
                color: d.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, l.jsx)('div', {
                className: F.multipleIconWrapper,
                children: (0, l.jsx)(u.GameControllerIcon, {
                    size: 'md',
                    className: o()(F.headerIcon, F.multipleIcon),
                    color: d.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, l.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: F.headerIcon
            });
    }
    return null != i || null != r
        ? (0, l.jsx)(u.Clickable, {
              onClick: i,
              className: o()(null != i ? F.clickable : ''),
              onContextMenu: r,
              children: t
          })
        : t;
};
J.Src = i;
let $ = (e) => {
    let { priorityUser: t, title: n, subtitle: i, icon: r, onSubtitleClick: a, onIconClick: s, onContextMenu: c, guildId: d } = e,
        h = (0, l.jsx)(u.Text, {
            color: 'header-secondary',
            className: F.textContent,
            variant: 'text-sm/normal',
            children: i
        });
    return (0, l.jsxs)('header', {
        className: null != r ? F.headerFull : F.headerSimple,
        children: [
            (0, l.jsx)(u.Avatar, {
                src: t.user.getAvatarURL(d, 32),
                'aria-label': t.user.username,
                size: u.AvatarSizes.SIZE_32,
                className: F.headerAvatar,
                status: t.status,
                onContextMenu: c
            }),
            (0, l.jsxs)('div', {
                className: F.__invalid_headerDetails,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: o()(F.textContent),
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, l.jsx)(u.Clickable, {
                              className: F.clickable,
                              onClick: a,
                              children: h
                          })
                        : h
                ]
            }),
            null != r && null != s
                ? (0, l.jsx)(u.Clickable, {
                      className: F.clickable,
                      onClick: s,
                      children: r
                  })
                : r
        ]
    });
};
$.Icon = J;
let ee = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)(u.FocusRing, {
        children: (0, l.jsx)(Z.Z, {
            className: o()(n, F.wrapper),
            padded: !0,
            ...i,
            children: t
        })
    });
};
(ee.Header = $),
    (ee.Body = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(Z.Z, {
            inset: !0,
            padded: !1,
            className: F.body,
            children: t
        });
    }),
    (ee.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, l.jsx)('div', { className: o()(F.separator, { [F.inset]: t }, n) });
    }),
    (ee.VoiceSection = (e) => {
        var t, n;
        let { guild: i, channel: r, onGuildClick: s, partySize: c, members: d, onChannelContextMenu: h } = e,
            m = a.useRef(null),
            p = (0, T.ZP)(r, !0);
        return (0, l.jsx)(X, {
            children: (0, l.jsxs)('div', {
                className: F.voiceSection,
                ref: m,
                onContextMenu: (e) => h(e, r),
                children: [
                    (0, l.jsx)(u.Clickable, {
                        onClick: s,
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, l.jsxs)('div', {
                            className: F.voiceSectionAssets,
                            children: [
                                null != i.getIconURL(32)
                                    ? (0, l.jsx)('img', {
                                          alt: '',
                                          src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
                                          className: o()(F.voiceSectionGuildImage, F.largeImageMask)
                                      })
                                    : (0, l.jsx)('div', {
                                          className: F.voiceSectionNoGuildImageWrapper,
                                          children: (0, l.jsx)('div', {
                                              className: F.voiceSectionNoGuildImage,
                                              style: { fontSize: null !== (n = W[i.acronym.length]) && void 0 !== n ? n : W[W.length - 1] },
                                              children: i.acronym
                                          })
                                      }),
                                (0, l.jsx)('div', {
                                    className: F.voiceSectionIconWrapper,
                                    children: (0, l.jsx)(u.VoiceNormalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: F.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(u.Clickable, {
                        onClick: s,
                        focusProps: { ringTarget: m },
                        children: (0, l.jsxs)('div', {
                            className: F.voiceSectionDetails,
                            children: [Y(i.toString(), F.voiceSectionText), K(p, F.voiceSectionText)]
                        })
                    }),
                    (0, l.jsx)(B.Z, {
                        partySize: c,
                        members: d,
                        guildId: i.id
                    })
                ]
            })
        });
    }),
    (ee.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r } = e;
        return (0, l.jsx)(X, {
            children: (0, l.jsxs)('div', {
                className: F.gameSection,
                children: [
                    null != t
                        ? (0, l.jsx)('img', {
                              alt: '',
                              src: t,
                              className: F.gameSectionIcon
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        children: [Y(n), K(H.intl.formatToPlainString(H.t.C4WXvb, { memberCount: i.totalSize }))]
                    }),
                    (0, l.jsx)(B.Z, {
                        partySize: i,
                        members: r
                    })
                ]
            })
        });
    }),
    (ee.RichPresenceSection = Q),
    (ee.XboxSection = (e) => {
        let { title: t } = e;
        return (0, l.jsx)(X, {
            children: (0, l.jsxs)('div', {
                className: F.xboxSection,
                children: [
                    (0, l.jsx)(w.Z, { className: F.xboxSectionIcon }),
                    (0, l.jsxs)('div', {
                        className: F.__invalid_xboxSectionDetails,
                        children: [Y(t), K(H.intl.string(H.t['JG9r+/']))]
                    })
                ]
            })
        });
    }),
    (ee.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: i, state: r, application_id: a },
            partySize: s,
            members: c,
            isSolo: u,
            getAssetImage: h
        } = e;
        return (0, l.jsx)(X, {
            children: (0, l.jsxs)('div', {
                className: F.spotifySection,
                children: [
                    null != n
                        ? (0, l.jsxs)('div', {
                              className: F.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
                                      src: h(a, n.large_image, [z.LARGE, z.LARGE]),
                                      className: o()(F.largeImage, F.borderRadius0, { [F.largeImageMask]: null != n.small_image })
                                  }),
                                  u
                                      ? null
                                      : (0, l.jsx)(M.Z, {
                                            className: F.smallImage,
                                            color: d.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, l.jsx)('div', {}),
                    (0, l.jsxs)('div', {
                        children: [null != i ? Y(i) : null, null != r ? K(r) : null]
                    }),
                    (0, l.jsx)(B.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: s,
                        members: c
                    })
                ]
            })
        });
    }),
    (ee.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: s } = e,
            { name: c, details: d, assets: h, application_id: m } = i;
        if (null != h && (0, C.Z)(i)) {
            var g;
            t = (0, l.jsx)(A.Z, {
                className: F.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, l.jsxs)(u.Clickable, {
                    href: (0, f.Z)(i),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, l.jsx)('img', {
                            alt: null !== (g = h.large_text) && void 0 !== g ? g : '',
                            src: a(m, h.large_image, [900, 500]),
                            className: F.twitchSectionPreview
                        }),
                        (0, l.jsx)('img', {
                            src: n(497726),
                            className: F.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, l.jsxs)(X, {
            children: [
                (0, l.jsxs)('div', {
                    className: o()({
                        [F.twitchSectionSimple]: null == r,
                        [F.twitchSectionFull]: null != r
                    }),
                    children: [
                        (0, l.jsx)('img', {
                            alt: '',
                            src: p.Z.get(V.ABu.TWITCH).icon.lightSVG,
                            className: F.twitchSectionIcon
                        }),
                        (0, l.jsxs)('div', {
                            children: [Y(c), null != d ? K(d) : null]
                        }),
                        null != r
                            ? (0, l.jsx)(u.Avatar, {
                                  src: r.getAvatarURL(s, 24),
                                  'aria-label': r.username,
                                  className: F.twitchSectionAvatar,
                                  size: u.AvatarSizes.SIZE_24
                              })
                            : null
                    ]
                }),
                t
            ]
        });
    }),
    (ee.ApplicationStreamingSection = (e) => {
        var t, n;
        let { activity: i, user: r, applicationStream: a, onPreviewClick: s, guildId: o } = e,
            d = (0, c.e7)([j.Z], () => j.Z.getChannel(a.channelId)),
            [h, m] = (0, L.wq)(d),
            p = (0, l.jsxs)(u.Clickable, {
                onClick: h ? s : void 0,
                className: F.applicationStreamingPreviewWrapper,
                children: [
                    (0, l.jsx)(P.Z, {
                        stream: a,
                        className: F.applicationStreamingPreviewSize
                    }),
                    (0, l.jsx)(u.Text, {
                        className: F.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, L.P9)(m)
                    })
                ]
            }),
            g = null !== (n = null === (t = (0, N.Z)(i, a)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : H.intl.string(H.t.eXan7O);
        return (0, l.jsxs)(X, {
            children: [
                (0, l.jsxs)('div', {
                    className: F.applicationStreamingSection,
                    children: [
                        (0, l.jsx)(u.Avatar, {
                            size: u.AvatarSizes.SIZE_32,
                            src: r.getAvatarURL(o, 32),
                            'aria-label': r.username,
                            className: F.applicationStreamingAvatar
                        }),
                        (0, l.jsxs)('div', {
                            children: [Y(G.ZP.getName(r)), K(g)]
                        }),
                        (0, l.jsx)(b.ZP, { size: b.ZP.Sizes.SMALL })
                    ]
                }),
                p
            ]
        });
    }),
    (ee.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [s, o] = a.useState(null),
            d = t.application_id;
        a.useEffect(() => {
            if (null != d)
                (0, k.fetchAssetIds)(d, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return o(t);
                });
        }, [d]);
        let h = (0, c.Wu)([D.default, R.default], () =>
                Array.from(r)
                    .map((e) => (R.default.getId() === e ? null : D.default.getUser(e)))
                    .filter(U.lm)
            ),
            p = (0, m.O)(),
            { analyticsLocations: f } = (0, v.ZP)();
        if (null == d) return null;
        let _ = S.Z.getApplication(d);
        if (null == _) return null;
        let E = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            I = (0, k.getAssetImage)(_.id, s, 300);
        return (0, l.jsxs)(X, {
            children: [
                (0, l.jsxs)('div', {
                    className: F.embeddedActivityTopRow,
                    children: [
                        (0, l.jsx)(x.Z, {
                            game: _,
                            size: x.Z.Sizes.XSMALL,
                            className: F.embeddedActivityIcon
                        }),
                        (0, l.jsx)('div', {
                            className: F.embeddedActivityName,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: _.name
                            })
                        }),
                        null != E
                            ? (0, l.jsx)('div', {
                                  className: F.embeddedActivityTimeElapsed,
                                  children: (0, l.jsx)(u.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, l.jsx)(q, { timestamps: E })
                                  })
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: F.embeddedActivityPlayerContainer,
                    children: [
                        null != I
                            ? (0, l.jsx)('img', {
                                  src: I,
                                  alt: _.name,
                                  className: F.embeddedActivityImage
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: F.embeddedActivityImageOverlay,
                            children: [
                                (0, l.jsx)(y.OV, {
                                    users: h,
                                    guildId: i,
                                    channelId: n.id
                                }),
                                (0, l.jsx)('div', {
                                    className: F.embeddedActivityJoinWrapper,
                                    children: (0, l.jsx)(u.Button, {
                                        size: u.Button.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, g.Z)({
                                                    applicationId: d,
                                                    activityChannelId: n.id,
                                                    locationObject: p.location,
                                                    analyticsLocations: f
                                                });
                                        },
                                        children: H.intl.string(H.t.VJlc0d)
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }),
    (t.Z = ee);
