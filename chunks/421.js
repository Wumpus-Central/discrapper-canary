n.d(t, { Z: () => j }), n(266796), n(47120);
var a = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    c = n(100527),
    r = n(906732),
    o = n(895924),
    d = n(70097),
    u = n(592125),
    p = n(566620),
    f = n(122613),
    g = n(678173),
    m = n(636508),
    v = n(696068),
    h = n(361213),
    b = n(778569),
    x = n(182906),
    _ = n(412019),
    C = n(431136),
    I = n(226799),
    y = n(388032),
    T = n(927794);
function j(e) {
    var t;
    let { applicationId: n, guildId: o, channelId: f, onActivityLaunch: m } = e,
        { analyticsLocations: v } = (0, r.ZP)(c.Z.ACTIVITY_SHELF_ACTIVITY_DETAILS);
    i.useEffect(() => {
        (0, p.w1)({ guildId: o });
    }, [o]);
    let x = (0, b.Z)({
            applicationId: null != n ? n : '',
            size: 2048
        }),
        _ = (0, l.e7)([u.Z], () => u.Z.getChannel(f)),
        C = (0, g.T)(
            {
                channel: _,
                type: 'channel'
            },
            null != o ? o : null,
            n
        );
    if (null == C) return null;
    let j = null != C.activity.activity_preview_video_asset_id ? (0, h.Z)(n, C.activity.activity_preview_video_asset_id) : null,
        S = I.o[n],
        N = (null == S ? void 0 : S.playersSuggestionMin) != null && (null == S ? void 0 : S.playersSuggestionMax) != null ? ''.concat(S.playersSuggestionMin, ' - ').concat(S.playersSuggestionMax) : void 0;
    return (0, a.jsx)(r.Gt, {
        value: v,
        children: (0, a.jsx)('div', {
            className: T.scrollContainer,
            children: (0, a.jsxs)(s.Ttm, {
                className: T.scroller,
                children: [
                    (0, a.jsx)('div', {
                        className: T.launcherOuterContainer,
                        children: (0, a.jsx)(Z, {
                            activityItem: C,
                            onLaunch: m,
                            channelId: f
                        })
                    }),
                    (0, a.jsxs)('div', {
                        className: T.activityDetailsContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    null != j
                                        ? (0, a.jsx)('div', {
                                              className: T.heroVideoContainer,
                                              children: (0, a.jsx)(d.Z, {
                                                  loop: !0,
                                                  autoPlay: !0,
                                                  muted: !0,
                                                  className: T.heroVideo,
                                                  src: j,
                                                  poster: x.url
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)('div', {
                                        className: T.detailsTitle,
                                        children: (0, a.jsx)(s.X6q, {
                                            variant: 'heading-xxl/bold',
                                            children: C.application.name
                                        })
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: T.detailsDetails,
                                        children: [
                                            null != N
                                                ? (0, a.jsxs)('div', {
                                                      className: T.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.BFJ, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: T.detailItemText,
                                                              children: y.NW.format(y.t.T3isFB, { nPlayers: N })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (null == S ? void 0 : S.timeSuggestionMinutes) != null
                                                ? (0, a.jsxs)('div', {
                                                      className: T.detailItem,
                                                      children: [
                                                          (0, a.jsx)(s.wGF, {
                                                              size: 'xs',
                                                              color: 'currentColor'
                                                          }),
                                                          (0, a.jsx)(s.Text, {
                                                              variant: 'text-xs/semibold',
                                                              className: T.detailItemText,
                                                              children: y.NW.format(y.t.dehcUV, { nMinutes: S.timeSuggestionMinutes })
                                                          })
                                                      ]
                                                  })
                                                : null,
                                            (0, a.jsxs)('div', {
                                                className: T.detailItem,
                                                children: [
                                                    (0, a.jsx)(s.DgT, {
                                                        size: 'xs',
                                                        color: 'currentColor'
                                                    }),
                                                    (0, a.jsx)(s.Text, {
                                                        variant: 'text-xs/semibold',
                                                        className: T.detailItemText,
                                                        children: C.application.tags.slice(0, 3).join(', ')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, a.jsx)(s.X6q, {
                                variant: 'heading-lg/medium',
                                className: T.detailsDescription,
                                children: C.application.description
                            }),
                            (0, a.jsx)('div', { className: T.divider }),
                            (0, a.jsx)('div', {
                                className: T.imagesContainer,
                                children: (null !== (t = null == S ? void 0 : S.gameplayImageUrls) && void 0 !== t ? t : []).map((e) =>
                                    (0, a.jsx)(
                                        'img',
                                        {
                                            src: e,
                                            alt: y.NW.formatToPlainString(y.t.YOslsL, { activityName: C.application.name }),
                                            className: T.activityImage
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
function Z(e) {
    var t, c;
    let { activityItem: d, onLaunch: p, channelId: g } = e,
        h = (0, b.Z)({
            applicationId: d.application.id,
            size: 2048
        }),
        { analyticsLocations: I } = (0, r.ZP)(),
        [j, Z] = i.useState(null !== (t = (0, m.$)({ allowGdmActivityChannelSuggestion: !0 })) && void 0 !== t ? t : void 0),
        [S, N] = i.useState(
            null !==
                (c = (0, v.d)({
                    guildId: j,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== c
                ? c
                : void 0
        ),
        O = (0, l.e7)([u.Z], () => u.Z.getChannel(S), [S]),
        E = (0, m.W)(),
        A = (0, v.F)(j),
        M = i.useCallback(async () => {
            var e;
            null != S &&
                (await (0, f.Z)({
                    targetApplicationId: null == d ? void 0 : null === (e = d.application) || void 0 === e ? void 0 : e.id,
                    channelId: S,
                    analyticsLocations: I,
                    commandOrigin: o.bB.APPLICATION_LAUNCHER
                }).then(p));
        }, [d, I, p, S]),
        P = i.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('49049'), n.e('60133')]).then(n.bind(n, 827940));
                return (t) => {
                    var n, i;
                    return (0, a.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({ activityItem: d }, t)),
                        (i = i = { analyticsLocations: I }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                };
            });
        }, [d, I]),
        w = null == O || (null != O.guild_id && !(null != j && null != S && E.some((e) => e.value === j) && A.some((e) => e.value.channel.id === S)));
    return (0, a.jsxs)('div', {
        className: T.launcherInnerContainer,
        children: [
            (0, a.jsx)(x.Z, {
                applicationName: d.application.name,
                imageBackground: h,
                imageClassName: T.launchImage,
                imageNotFoundClassName: T.brokenLaunchImage
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-md/medium',
                children: y.NW.string(y.t.lfSF4O)
            }),
            null == g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(s.PhF, {
                              placeholder: y.NW.string(y.t.etZ9tb),
                              optionClassName: T.__invalid_option,
                              options: E,
                              renderOptionValue: (e) => {
                                  let t = e.find((e) => e.value === j);
                                  return null == t ? null : (0, a.jsx)(C.m, { guildId: t.value });
                              },
                              renderOptionLabel: (e) => {
                                  let { value: t } = e;
                                  return (0, a.jsx)(C.m, { guildId: t });
                              },
                              isSelected: (e) => e === j,
                              select: (e) => {
                                  var t;
                                  Z(e), N(null !== (t = (0, v.d)({ guildId: e })) && void 0 !== t ? t : void 0);
                              },
                              serialize: (e) => e
                          }),
                          (0, a.jsx)(s.PhF, {
                              placeholder: y.NW.string(y.t.SUryfX),
                              optionClassName: T.__invalid_option,
                              options: A,
                              isSelected: (e) => {
                                  let { channel: t } = e;
                                  return t.id === S;
                              },
                              select: (e) => {
                                  let { channel: t } = e;
                                  return N(t.id);
                              },
                              serialize: (e) => {
                                  let { channel: t } = e;
                                  return t.id;
                              },
                              renderOptionValue: () => {
                                  let e = A.find((e) => e.value.channel.id === S);
                                  return null == e
                                      ? null
                                      : (0, a.jsx)(_.O, {
                                            channel: e.value.channel,
                                            users: e.value.users
                                        });
                              },
                              renderOptionLabel: (e) => {
                                  let {
                                      value: { channel: t, users: n }
                                  } = e;
                                  return (0, a.jsx)(_.O, {
                                      channel: t,
                                      users: n
                                  });
                              }
                          }),
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              disabled: w,
                              onClick: M,
                              children: y.NW.string(y.t.I0v0Qk)
                          }),
                          (0, a.jsx)('div', { className: T.divider }),
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: P,
                              children: y.NW.string(y.t.RDE0SU)
                          })
                      ]
                  })
                : (0, a.jsxs)('div', {
                      className: T.singleRowShareContainer,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              fullWidth: !0,
                              disabled: w,
                              onClick: M,
                              children: y.NW.string(y.t.I0v0Qk)
                          }),
                          (0, a.jsx)(s.zxk, {
                              className: T.shareIconButton,
                              color: s.zxk.Colors.PRIMARY,
                              onClick: P,
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
