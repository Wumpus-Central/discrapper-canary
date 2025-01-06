n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(399606),
    s = n(481060),
    c = n(100527),
    o = n(906732),
    r = n(895924),
    d = n(70097),
    u = n(592125),
    p = n(566620),
    f = n(122613),
    m = n(678173),
    g = n(636508),
    v = n(696068),
    h = n(361213),
    x = n(778569),
    b = n(182906),
    C = n(412019),
    I = n(431136),
    T = n(226799),
    _ = n(388032),
    Z = n(550773);
function S(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: r, onActivityLaunch: u } = e,
        { analyticsLocations: f } = (0, o.ZP)(c.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    a.useEffect(() => {
        (0, p.w1)({ guildId: l });
    }, [l]);
    let g = (0, x.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        v = (0, m.T)(null != l ? l : null, n);
    if (null == v) return null;
    let b = null != v.activity.activity_preview_video_asset_id ? (0, h.Z)(n, v.activity.activity_preview_video_asset_id) : null,
        C = T.o[n],
        I = (null == C ? void 0 : C.playersSuggestionMin) != null && (null == C ? void 0 : C.playersSuggestionMax) != null ? ''.concat(C.playersSuggestionMin, ' - ').concat(C.playersSuggestionMax) : void 0;
    return (0, i.jsx)(o.Gt, {
        value: f,
        children: (0, i.jsx)('div', {
            className: Z.scrollContainer,
            children: (0, i.jsxs)(s.Scroller, {
                className: Z.scroller,
                children: [
                    (0, i.jsx)('div', {
                        className: Z.launcherOuterContainer,
                        children: (0, i.jsx)(N, {
                            activityItem: v,
                            onLaunch: u,
                            channelId: r
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: Z.activityDetailsContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                children: [
                                    null != b
                                        ? (0, i.jsx)('div', {
                                              className: Z.heroVideoContainer,
                                              children: (0, i.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: Z.heroVideo,
                                                  src: b,
                                                  poster: g.url
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)('div', {
                                        className: Z.detailsTitle,
                                        children: (0, i.jsx)(s.Heading, {
                                            variant: 'heading-xxl/bold',
                                            children: v.application.name
                                        })
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: Z.detailsDetails,
                                        children: [
                                            null != I
                                                ? (0, i.jsxs)('div', {
                                                      className: Z.detailItem,
                                                      children: [
                                                          (0, i.jsx)(s.GroupIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: Z.detailItemText,
                                                              children: _.intl.format(_.t.T3isFB, { nPlayers: I })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == C ? void 0 : C.timeSuggestionMinutes) != null
                                                ? (0, i.jsxs)('div', {
                                                      className: Z.detailItem,
                                                      children: [
                                                          (0, i.jsx)(s.HourglassIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, i.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: Z.detailItemText,
                                                              children: _.intl.format(_.t.dehcUV, { nMinutes: C.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, i.jsxs)('div', {
                                                className: Z.detailItem,
                                                children: [
                                                    (0, i.jsx)(s.TagsIcon, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, i.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: Z.detailItemText,
                                                        children: v.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/medium',
                                className: Z.detailsDescription,
                                children: v.application.description
                            }),
                            (0, i.jsx)('div', { className: Z.divider }),
                            (0, i.jsx)('div', {
                                className: Z.imagesContainer,
                                children: (null !== (t = null == C ? void 0 : C.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, i.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: _.intl.formatToPlainString(_.t.YOslsL, { activityName: v.application.name }),
                                            className: Z.activityImage
                                        },
                                        e
                                    )
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function N(e) {
    var t, c;
    let { activityItem: d, onLaunch: p, channelId: m } = e,
        h = (0, x.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: T } = (0, o.ZP)(),
        [S, N] = a.useState(null !== (t = (0, g.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [y, j] = a.useState(
            null !==
                (c = (0, v.d)({
                    guildId: S,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== c
                ? c
                : void 0
        ),
        E = (0, l.e7)([u.Z], () => u.Z.getChannel(y), [y]),
        A = (0, g.W)(),
        M = (0, v.F)(S),
        O = a.useCallback(async () => {
            var e;
            if (null != y)
                await (0, f.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: y,
                    analyticsLocations: T,
                    commandOrigin: r.bB.APPLICATION_LAUNCHER
                }).then(p);
        }, [d, T, p, y]),
        L = a.useCallback(() => {
            (0, s.openModalLazy)(async () => {
                let { default: e } = await n.e('60133').then(n.bind(n, 827940));
                return (t) =>
                    (0, i.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: T
                    });
            });
        }, [d, T]),
        w = null == E || (null != E.guild_id && !(null != S && null != y && A.some((e) => e.value === S) && M.some((e) => e.value.channel.id === y)) && !0);
    return (0, i.jsxs)('div', {
        className: Z.launcherInnerContainer,
        children: [
            (0, i.jsx)(b.Z, {
                applicationName: d.application.name,
                imageBackground: h,
                imageClassName: Z.launchImage,
                imageNotFoundClassName: Z.brokenLaunchImage
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: _.intl.string(_.t.lfSF4O)
            }),
            null == m
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(s.Select, {
                              placeholder: _.intl.string(_.t.etZ9tb),
                              optionClassName: Z.__invalid_option,
                              options: A,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === S);
                                  return null == t ? null : (0, i.jsx)(I.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, i.jsx)(I.m, { guildId: t });
                              },
                              isSelected: (e) => e === S,
                              select: (e) => {
                                  var t;
                                  N(e), j(null !== (t = (0, v.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, i.jsx)(s.Select, {
                              placeholder: _.intl.string(_.t.SUryfX),
                              optionClassName: Z.__invalid_option,
                              options: M,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === y;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return j(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = M.find((e) => e.value.channel.id === y);
                                  return null == e
                                      ? null
                                      : (0, i.jsx)(C.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, i.jsx)(C.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: w,
                              onClick: O,
                              children: _.intl.string(_.t.I0v0Qk)
                          }),
                          (0, i.jsx)('div', { className: Z.divider }),
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: _.intl.string(_.t.RDE0SU)
                          })
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: Z.singleRowShareContainer,
                      children: [
                          (0, i.jsx)(s.Button, {
                              fullWidth: !0,
                              disabled: w,
                              onClick: O,
                              children: _.intl.string(_.t.I0v0Qk)
                          }),
                          (0, i.jsx)(s.Button, {
                              className: Z.shareIconButton,
                              color: s.Button.Colors.PRIMARY,
                              onClick: L,
                              children: (0, i.jsx)(s.ArrowAngleLeftUpIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
