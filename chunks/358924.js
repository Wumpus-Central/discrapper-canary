n.d(t, { Z: () => el }), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(287734),
    h = n(438139),
    m = n(2052),
    p = n(726542),
    g = n(638880),
    _ = n(655922),
    f = n(122810),
    E = n(833664),
    I = n(503438),
    C = n(420660),
    v = n(74433),
    N = n(906732),
    T = n(812206),
    S = n(933557),
    Z = n(194082),
    A = n(264165),
    x = n(548816),
    b = n(925329),
    L = n(102172),
    y = n(871118),
    P = n(707409),
    O = n(359110),
    R = n(769654),
    j = n(849171),
    D = n(314897),
    w = n(592125),
    M = n(594174),
    k = n(395361),
    U = n(639351),
    G = n(81063),
    B = n(823379),
    V = n(51144),
    H = n(599706),
    F = n(981631),
    z = n(388032),
    W = n(979457);
let Y = {
        SMALL: 64,
        LARGE: 160
    },
    K = [14, 14, 12, 12, 10, 8, 6],
    q = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(d.Text, {
            className: s()(W.textContent, t),
            variant: 'text-sm/semibold',
            children: e
        });
    },
    X = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, l.jsx)(d.Text, {
            className: s()(W.textContent, t),
            variant: 'text-xs/normal',
            children: e
        });
    },
    Q = (0, h.Z)((e) => {
        let { message: t } = e;
        return (0, l.jsx)('div', {
            className: W.__invalid_timestamp,
            children: t
        });
    }),
    J = (e) => {
        let { children: t } = e;
        return (0, l.jsx)('section', {
            className: W.section,
            children: t
        });
    };
class $ extends r.Component {
    renderTimePlayed() {
        let e;
        let { activity: t } = this.props,
            { timestamps: n } = t;
        return null == n || !(0, E.Z)(t) || (0, I.Z)(t)
            ? null
            : X(
                  (0, f.Z)(t)
                      ? (0, l.jsx)(Q, { timestamps: n })
                      : (0, l.jsx)(P.ZP, {
                            start: n.start,
                            end: n.end,
                            location: P.ZP.Locations.USER_ACTIVITY,
                            className: W.__invalid_playTime
                        })
              );
    }
    render() {
        var e, t;
        let {
            activity: { assets: i, details: r, state: a, application_id: o },
            getAssetImage: c
        } = this.props;
        return (0, l.jsx)(J, {
            children: (0, l.jsxs)('div', {
                className: W.activitySection,
                children: [
                    null != i && 0 !== Object.keys(i).length
                        ? (0, l.jsxs)('div', {
                              className: W.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (e = i.large_text) && void 0 !== e ? e : '',
                                      src: c(o, i.large_image, [Y.LARGE, Y.LARGE]),
                                      className: s()(W.largeImage, { [W.largeImageMask]: null != i.small_image })
                                  }),
                                  null != i.small_image
                                      ? (0, l.jsx)('img', {
                                            alt: null !== (t = i.small_text) && void 0 !== t ? t : '',
                                            src: c(o, i.small_image, [Y.SMALL, Y.SMALL]),
                                            className: W.smallImage
                                        })
                                      : null
                              ]
                          })
                        : (0, l.jsx)('div', {
                              className: W.activitySectionAssets,
                              children: (0, l.jsx)('img', {
                                  alt: '',
                                  src: n(211827),
                                  className: W.largeImage
                              })
                          }),
                    (0, l.jsxs)('div', {
                        children: [q(null != r && '' !== r ? r : z.intl.string(z.t['2TbM/P'])), null != a ? X(a) : null, this.renderTimePlayed()]
                    })
                ]
            })
        });
    }
}
var ee = (((i = ee || {}).XBOX = 'XBOX'), (i.SPOTIFY = 'SPOTIFY'), (i.MULTIPLE = 'MULTIPLE'), i);
let et = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case 'XBOX':
            t = (0, l.jsx)(U.Z, {
                className: W.headerIcon,
                color: c.Z.unsafe_rawColors.PRIMARY_300.css
            });
            break;
        case 'SPOTIFY':
            t = (0, l.jsx)(k.Z, {
                className: W.headerIcon,
                color: c.Z.unsafe_rawColors.SPOTIFY.css
            });
            break;
        case 'MULTIPLE':
            t = (0, l.jsx)('div', {
                className: W.multipleIconWrapper,
                children: (0, l.jsx)(d.iWm, {
                    size: 'md',
                    className: s()(W.headerIcon, W.multipleIcon),
                    color: c.Z.unsafe_rawColors.PRIMARY_300.css
                })
            });
            break;
        default:
            t = (0, l.jsx)('img', {
                src: null != n ? n : void 0,
                alt: '',
                className: W.headerIcon
            });
    }
    return null != i || null != r
        ? (0, l.jsx)(d.P3F, {
              onClick: i,
              className: s()(null != i ? W.clickable : ''),
              onContextMenu: r,
              children: t
          })
        : t;
};
et.Src = ee;
let en = (e) => {
    let { priorityUser: t, title: n, subtitle: i, icon: r, onSubtitleClick: a, onIconClick: o, onContextMenu: c, guildId: u } = e,
        h = (0, l.jsx)(d.Text, {
            color: 'header-secondary',
            className: W.textContent,
            variant: 'text-sm/normal',
            children: i
        });
    return (0, l.jsxs)('header', {
        className: null != r ? W.headerFull : W.headerSimple,
        children: [
            (0, l.jsx)(d.qEK, {
                src: t.user.getAvatarURL(u, 32),
                'aria-label': t.user.username,
                size: d.EFr.SIZE_32,
                className: W.headerAvatar,
                status: t.status,
                onContextMenu: c
            }),
            (0, l.jsxs)('div', {
                className: W.__invalid_headerDetails,
                children: [
                    (0, l.jsx)(d.Text, {
                        className: s()(W.textContent),
                        variant: 'text-md/semibold',
                        children: n
                    }),
                    null != a
                        ? (0, l.jsx)(d.P3F, {
                              className: W.clickable,
                              onClick: a,
                              children: h
                          })
                        : h
                ]
            }),
            null != r && null != o
                ? (0, l.jsx)(d.P3F, {
                      className: W.clickable,
                      onClick: o,
                      children: r
                  })
                : r
        ]
    });
};
en.Icon = et;
let ei = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, l.jsx)(d.tEY, {
        children: (0, l.jsx)(x.Z, {
            className: s()(n, W.wrapper),
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
            className: W.body,
            children: t
        });
    }),
    (ei.Separator = (e) => {
        let { inset: t, className: n } = e;
        return (0, l.jsx)('div', { className: s()(W.separator, { [W.inset]: t }, n) });
    }),
    (ei.VoiceSection = (e) => {
        var t, n;
        let { guild: i, channel: a, partySize: o, members: c, onChannelContextMenu: h } = e,
            m = r.useRef(null),
            p = (0, S.ZP)(a, !0);
        return (0, l.jsx)(J, {
            children: (0, l.jsxs)('div', {
                className: W.voiceSection,
                ref: m,
                onContextMenu: (e) => h(e, a),
                children: [
                    (0, l.jsx)(d.P3F, {
                        onClick: () => (0, R.X)(i.id),
                        'aria-hidden': !0,
                        tabIndex: -1,
                        children: (0, l.jsxs)('div', {
                            className: W.voiceSectionAssets,
                            children: [
                                null != i.getIconURL(32)
                                    ? (0, l.jsx)('img', {
                                          alt: '',
                                          src: null !== (t = i.getIconURL(32)) && void 0 !== t ? t : void 0,
                                          className: s()(W.voiceSectionGuildImage, W.largeImageMask)
                                      })
                                    : (0, l.jsx)('div', {
                                          className: W.voiceSectionNoGuildImageWrapper,
                                          children: (0, l.jsx)('div', {
                                              className: W.voiceSectionNoGuildImage,
                                              style: { fontSize: null !== (n = K[i.acronym.length]) && void 0 !== n ? n : K[K.length - 1] },
                                              children: i.acronym
                                          })
                                      }),
                                (0, l.jsx)('div', {
                                    className: W.voiceSectionIconWrapper,
                                    children: (0, l.jsx)(d.gj8, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: W.voiceSectionIcon
                                    })
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(d.P3F, {
                        onClick: () => {
                            u.default.selectVoiceChannel(a.id), (0, O.Kh)(a.id);
                        },
                        focusProps: { ringTarget: m },
                        children: (0, l.jsxs)('div', {
                            className: W.voiceSectionDetails,
                            children: [q(i.toString(), W.voiceSectionText), X(p, W.voiceSectionText)]
                        })
                    }),
                    (0, l.jsx)(H.Z, {
                        partySize: o,
                        members: c,
                        guildId: i.id
                    })
                ]
            })
        });
    }),
    (ei.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r } = e;
        return (0, l.jsx)(J, {
            children: (0, l.jsxs)('div', {
                className: W.gameSection,
                children: [
                    null != t
                        ? (0, l.jsx)('img', {
                              alt: '',
                              src: t,
                              className: W.gameSectionIcon
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        children: [q(n), X(z.intl.formatToPlainString(z.t.C4WXvb, { memberCount: i.totalSize }))]
                    }),
                    (0, l.jsx)(H.Z, {
                        partySize: i,
                        members: r
                    })
                ]
            })
        });
    }),
    (ei.RichPresenceSection = $),
    (ei.XboxSection = (e) => {
        let { title: t } = e;
        return (0, l.jsx)(J, {
            children: (0, l.jsxs)('div', {
                className: W.xboxSection,
                children: [
                    (0, l.jsx)(U.Z, { className: W.xboxSectionIcon }),
                    (0, l.jsxs)('div', {
                        className: W.__invalid_xboxSectionDetails,
                        children: [q(t), X(z.intl.string(z.t['JG9r+/']))]
                    })
                ]
            })
        });
    }),
    (ei.SpotifySection = (e) => {
        var t;
        let {
            activity: { assets: n, details: i, state: r, application_id: a },
            partySize: o,
            members: d,
            isSolo: u,
            getAssetImage: h
        } = e;
        return (0, l.jsx)(J, {
            children: (0, l.jsxs)('div', {
                className: W.spotifySection,
                children: [
                    null != n
                        ? (0, l.jsxs)('div', {
                              className: W.activitySectionAssets,
                              children: [
                                  (0, l.jsx)('img', {
                                      alt: null !== (t = n.large_text) && void 0 !== t ? t : '',
                                      src: h(a, n.large_image, [Y.LARGE, Y.LARGE]),
                                      className: s()(W.largeImage, W.borderRadius0, { [W.largeImageMask]: null != n.small_image })
                                  }),
                                  u
                                      ? null
                                      : (0, l.jsx)(k.Z, {
                                            className: W.smallImage,
                                            color: c.Z.unsafe_rawColors.SPOTIFY.css
                                        })
                              ]
                          })
                        : (0, l.jsx)('div', {}),
                    (0, l.jsxs)('div', {
                        children: [null != i ? q(i) : null, null != r ? X(r) : null]
                    }),
                    (0, l.jsx)(H.Z, {
                        minAvatarsShown: u ? 2 : 1,
                        partySize: o,
                        members: d
                    })
                ]
            })
        });
    }),
    (ei.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: o } = e,
            { name: c, details: u, assets: h, application_id: m } = i;
        if (null != h && (0, C.Z)(i)) {
            var g;
            t = (0, l.jsx)(A.Z, {
                className: W.twitchSectionPreviewWrapper,
                aspectRatio: 16 / 9,
                children: (0, l.jsxs)(d.P3F, {
                    href: (0, _.Z)(i),
                    tag: 'a',
                    target: '_blank',
                    children: [
                        (0, l.jsx)('img', {
                            alt: null !== (g = h.large_text) && void 0 !== g ? g : '',
                            src: a(m, h.large_image, [900, 500]),
                            className: W.twitchSectionPreview
                        }),
                        (0, l.jsx)('img', {
                            src: n(497726),
                            className: W.twitchSectionPlayButton,
                            alt: ''
                        })
                    ]
                })
            });
        }
        return (0, l.jsxs)(J, {
            children: [
                (0, l.jsxs)('div', {
                    className: s()({
                        [W.twitchSectionSimple]: null == r,
                        [W.twitchSectionFull]: null != r
                    }),
                    children: [
                        (0, l.jsx)('img', {
                            alt: '',
                            src: p.Z.get(F.ABu.TWITCH).icon.lightSVG,
                            className: W.twitchSectionIcon
                        }),
                        (0, l.jsxs)('div', {
                            children: [q(c), null != u ? X(u) : null]
                        }),
                        null != r
                            ? (0, l.jsx)(d.qEK, {
                                  src: r.getAvatarURL(o, 24),
                                  'aria-label': r.username,
                                  className: W.twitchSectionAvatar,
                                  size: d.EFr.SIZE_24
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
        let { activity: i, user: r, applicationStream: a, onPreviewClick: s, guildId: c } = e,
            u = (0, o.e7)([w.Z], () => w.Z.getChannel(a.channelId)),
            [h, m] = (0, L.wq)(u),
            p = (0, l.jsxs)(d.P3F, {
                onClick: h ? s : void 0,
                className: W.applicationStreamingPreviewWrapper,
                children: [
                    (0, l.jsx)(y.Z, {
                        stream: a,
                        className: W.applicationStreamingPreviewSize
                    }),
                    (0, l.jsx)(d.Text, {
                        className: W.applicationStreamingHoverText,
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: (0, L.P9)(m)
                    })
                ]
            }),
            g = null !== (n = null === (t = (0, v.Z)(i, a)) || void 0 === t ? void 0 : t.activityText) && void 0 !== n ? n : z.intl.string(z.t.eXan7O);
        return (0, l.jsxs)(J, {
            children: [
                (0, l.jsxs)('div', {
                    className: W.applicationStreamingSection,
                    children: [
                        (0, l.jsx)(d.qEK, {
                            size: d.EFr.SIZE_32,
                            src: r.getAvatarURL(c, 32),
                            'aria-label': r.username,
                            className: W.applicationStreamingAvatar
                        }),
                        (0, l.jsxs)('div', {
                            children: [q(V.ZP.getName(r)), X(g)]
                        }),
                        (0, l.jsx)(Z.ZP, { size: Z.ZP.Sizes.SMALL })
                    ]
                }),
                p
            ]
        });
    }),
    (ei.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: a } = e,
            [s, c] = r.useState(null),
            u = t.application_id;
        r.useEffect(() => {
            null != u &&
                (0, G.fetchAssetIds)(u, ['embedded_background']).then((e) => {
                    let [t] = e;
                    return c(t);
                });
        }, [u]);
        let h = (0, o.Wu)([M.default, D.default], () =>
                Array.from(a)
                    .map((e) => (D.default.getId() === e ? null : M.default.getUser(e)))
                    .filter(B.lm)
            ),
            p = (0, m.O)(),
            { analyticsLocations: _ } = (0, N.ZP)();
        if (null == u) return null;
        let f = T.Z.getApplication(u);
        if (null == f) return null;
        let E = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            I = (0, G.getAssetImage)(f.id, s, 300);
        return (0, l.jsxs)(J, {
            children: [
                (0, l.jsxs)('div', {
                    className: W.embeddedActivityTopRow,
                    children: [
                        (0, l.jsx)(b.Z, {
                            game: f,
                            size: b.Z.Sizes.XSMALL,
                            className: W.embeddedActivityIcon
                        }),
                        (0, l.jsx)('div', {
                            className: W.embeddedActivityName,
                            children: (0, l.jsx)(d.Text, {
                                variant: 'text-sm/semibold',
                                children: f.name
                            })
                        }),
                        null != E
                            ? (0, l.jsx)('div', {
                                  className: W.embeddedActivityTimeElapsed,
                                  children: (0, l.jsx)(d.Text, {
                                      color: 'text-muted',
                                      variant: 'text-sm/normal',
                                      children: (0, l.jsx)(Q, { timestamps: E })
                                  })
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: W.embeddedActivityPlayerContainer,
                    children: [
                        null != I
                            ? (0, l.jsx)('img', {
                                  src: I,
                                  alt: f.name,
                                  className: W.embeddedActivityImage
                              })
                            : null,
                        (0, l.jsxs)('div', {
                            className: W.embeddedActivityImageOverlay,
                            children: [
                                (0, l.jsx)(j.OV, {
                                    users: h,
                                    guildId: i,
                                    channelId: n.id
                                }),
                                (0, l.jsx)('div', {
                                    className: W.embeddedActivityJoinWrapper,
                                    children: (0, l.jsx)(d.zxk, {
                                        size: d.zxk.Sizes.SMALL,
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, g.Z)({
                                                    applicationId: u,
                                                    activityChannelId: n.id,
                                                    locationObject: p.location,
                                                    analyticsLocations: _
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
let el = ei;
