n.d(t, { Z: () => S }), n(47120);
var a = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    c = n(100527),
    o = n(906732),
    r = n(895924),
    d = n(70097),
    u = n(592125),
    p = n(566620),
    m = n(122613),
    g = n(678173),
    f = n(636508),
    v = n(696068),
    h = n(361213),
    x = n(778569),
    _ = n(182906),
    b = n(412019),
    C = n(431136),
    I = n(226799),
    T = n(388032),
    Z = n(550773);
function S(e) {
    var t;
    let { applicationId: n, guildId: l, channelId: r, onActivityLaunch: u } = e,
        { analyticsLocations: m } = (0, o.ZP)(c.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
        (0, p.w1)({ guildId: l });
    }, [l]);
    let f = (0, x.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        v = (0, g.T)(null != l ? l : null, n);
    if (null == v) return null;
    let _ = null != v.activity.activity_preview_video_asset_id ? (0, h.Z)(n, v.activity.activity_preview_video_asset_id) : null,
        b = I.o[n],
        C = (null == b ? void 0 : b.playersSuggestionMin) != null && (null == b ? void 0 : b.playersSuggestionMax) != null ? ''.concat(b.playersSuggestionMin, ' - ').concat(b.playersSuggestionMax) : void 0;
    return (0, a.jsx)(o.Gt, {
        value: m,
        children: (0, a.jsx)('div', {
            className: Z.scrollContainer,
            children: (0, a.jsxs)(s.Ttm, {
                className: Z.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: Z.launcherOuterContainer,
                        children: (0, a.jsx)(y, {
                            activityItem: v,
                            onLaunch: u,
                            channelId: r
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: Z.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != _
                                        ? (0, a.jsx)('div', {
                                              className: Z.heroVideoContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: Z.heroVideo,
                                                  src: _,
                                                  poster: f.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: Z.detailsTitle,
                                        children: (0, a.jsx)(s.X6q, {
                                            variant: 'heading-xxl/bold',
                                            children: v.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: Z.detailsDetails,
                                        children: [
                                            null != C
                                                ? (0, a.jsxs)('div', {
                                                      className: Z.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.BFJ, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: Z.detailItemText,
                                                              children: T.intl.format(T.t.T3isFB, { nPlayers: C })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == b ? void 0 : b.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: Z.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.wGF, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: Z.detailItemText,
                                                              children: T.intl.format(T.t.dehcUV, { nMinutes: b.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: Z.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.DgT, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
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
                            (0, a.jsx)(s.X6q, {
                                variant: 'heading-lg/medium',
                                className: Z.detailsDescription,
                                children: v.application.description
                            }),
                            (0, a.jsx)('div', { className: Z.divider }),
                            (0, a.jsx)('div', {
                                className: Z.imagesContainer,
                                children: (null !== (t = null == b ? void 0 : b.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: T.intl.formatToPlainString(T.t.YOslsL, { activityName: v.application.name }),
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
function y(e) {
    var t, c;
    let { activityItem: d, onLaunch: p, channelId: g } = e,
        h = (0, x.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: I } = (0, o.ZP)(),
        [S, y] = i.useState(null !== (t = (0, f.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [N, j] = i.useState(
            null !==
                (c = (0, v.d)({
                    guildId: S,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== c
                ? c
                : void 0
        ),
        E = (0, l.e7)([u.Z], () => u.Z.getChannel(N), [N]),
        A = (0, f.W)(),
        M = (0, v.F)(S),
        O = i.useCallback(async () => {
            var e;
            null != N &&
                (await (0, m.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: N,
                    analyticsLocations: I,
                    commandOrigin: r.bB.APPLICATION_LAUNCHER
                }).then(p));
        }, [d, I, p, N]),
        L = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('60133').then(n.bind(n, 827940));
                return (t) =>
                    (0, a.jsx)(e, {
                        activityItem: d,
                        ...t,
                        analyticsLocations: I
                    });
            });
        }, [d, I]),
        k = null == E || (null != E.guild_id && !(null != S && null != N && A.some((e) => e.value === S) && M.some((e) => e.value.channel.id === N)));
    return (0, a.jsxs)('div', {
        className: Z.launcherInnerContainer,
        children: [
            (0, a.jsx)(_.Z, {
                applicationName: d.application.name,
                imageBackground: h,
                imageClassName: Z.launchImage,
                imageNotFoundClassName: Z.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: T.intl.string(T.t.lfSF4O)
            }),
            null == g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.PhF, {
                              placeholder: T.intl.string(T.t.etZ9tb),
                              optionClassName: Z.__invalid_option,
                              options: A,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === S);
                                  return null == t ? null : (0, a.jsx)(C.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(C.m, { guildId: t });
                              },
                              isSelected: (e) => e === S,
                              select: (e) => {
                                  var t;
                                  y(e), j(null !== (t = (0, v.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.PhF, {
                              placeholder: T.intl.string(T.t.SUryfX),
                              optionClassName: Z.__invalid_option,
                              options: M,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === N;
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
                                  let e = M.find((e) => e.value.channel.id === N);
                                  return null == e
                                      ? null
                                      : (0, a.jsx)(b.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, a.jsx)(b.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              disabled: k,
                              onClick: O,
                              children: T.intl.string(T.t.I0v0Qk)
                          }),
                          (0, a.jsx)('div', { className: Z.divider }),
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: L,
                              children: T.intl.string(T.t.RDE0SU)
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: Z.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              disabled: k,
                              onClick: O,
                              children: T.intl.string(T.t.I0v0Qk)
                          }),
                          (0, a.jsx)(s.zxk, {
                              className: Z.shareIconButton,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: L,
                              children: (0, a.jsx)(s.n$P, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                      ]
                  })
        ]
    });
}
