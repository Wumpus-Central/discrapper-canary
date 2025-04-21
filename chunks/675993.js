n.d(t, {
    Z: () => F,
    u: () => Y
}),
    n(388685),
    n(953529);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    p = n(882485),
    m = n(481060),
    f = n(115130),
    h = n(723163),
    b = n(147865),
    _ = n(427996),
    y = n(906732),
    x = n(706302),
    C = n(812236),
    v = n(835473),
    g = n(146282),
    j = n(26033),
    P = n(70097),
    N = n(240991),
    E = n(973616),
    O = n(626135),
    A = n(424602),
    I = n(573188),
    S = n(783097),
    T = n(695676),
    L = n(886792),
    w = n(635753),
    R = n(520315),
    Z = n(29380),
    k = n(783685),
    M = n(981631),
    D = n(206583),
    B = n(388032),
    U = n(449549),
    H = n(73433);
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    var t;
    let { context: n, application: l, videoUrl: a, imageCoverUrl: c, sectionName: p, hasCommands: b, showFriendsTab: y } = e,
        x = r.useMemo(() => {
            var e;
            return null != (e = (0, S.jD)(l)) ? e : '';
        }, [l]),
        C = (0, d.e7)([f.Z], () => f.Z.inDevModeForApplication(l.id)),
        { isSlideReady: v } = (0, T.hH)(),
        [N, E] = r.useState(!1);
    r.useEffect(() => {
        v && E(!0);
    }, [v]);
    let O = null != a,
        R = A.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { enabled: Z } = I.X.useExperiment({ location: 'AppLauncherProfile' }),
        [k, M] = r.useState(y),
        { friends: H, friendsLastPlayed: F } = (0, h.Z)(l),
        q =
            ((t = H),
            r.useMemo(() => {
                var e, n, i, r;
                if (0 === t.length) return '';
                let l = u().sample(1 === t.length ? J : K);
                return (
                    s()(l, 'intl message arrays should not be empty'),
                    B.intl.format(l, {
                        friendCount: t.length,
                        count: t.length,
                        friendCountMinusOne: t.length - 1,
                        firstFriendName: t[0].username,
                        secondFriendName: null != (i = null == (e = t[1]) ? void 0 : e.username) ? i : '',
                        thirdFriendName: null != (r = null == (n = t[2]) ? void 0 : n.username) ? r : ''
                    })
                );
            }, [t])),
        $ = (0, d.e7)([g.Z], () => g.Z.getFeed(D.YN.GLOBAL_FEED)),
        ee = r
            .useMemo(() => {
                if (null == $) return [];
                let e = $.entries.reduce((e, t) => V(W({}, e), { [t.content.id]: t.content }), {});
                return H.reduce((t, n) => {
                    let i = e[F[n.id]];
                    return null != i && (0, j.Mq)(i) ? [...t, i] : t;
                }, []);
            }, [$, H, F])
            .map((e) =>
                (0, i.jsx)(
                    L.Z,
                    {
                        entry: e,
                        onClose: async () => {},
                        disableActivityProfileLinks: !0
                    },
                    e.id
                )
            );
    return (0, i.jsxs)('div', {
        className: o()(
            {
                [U.experimentLayout]: R.enabled,
                [U.altLayout]: R.altLayout,
                [U.fixedHeight]: k && H.length > 1 && H.length <= 3,
                [U.friendsWhoPlay]: Z
            },
            U.container
        ),
        children: [
            R.enabled || Z
                ? (0, i.jsxs)('div', {
                      className: U.experimentTitleContainer,
                      children: [(0, i.jsx)(G, { application: l }), R.enabled ? (0, i.jsx)(z, { application: l }) : null]
                  })
                : null,
            Z && 0 !== H.length
                ? (0, i.jsxs)(m.njP, {
                      className: U.tabBar,
                      selectedItem: k ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? M(!0) : M(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(m.njP.Item, {
                              id: 'overview',
                              className: U.tabItem,
                              children: B.intl.string(B.t['/dp6yc'])
                          }),
                          (0, i.jsx)(m.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, w.d)(!1, H).toString(),
                              children: (0, i.jsx)(w.Z, {
                                  friends: H,
                                  shortText: !1
                              })
                          })
                      ]
                  })
                : null,
            k
                ? (0, i.jsxs)('div', {
                      className: U.friendsContainer,
                      children: [
                          (0, i.jsx)('div', { children: ee }),
                          (0, i.jsx)(m.Text, {
                              className: U.friendsMotivationText,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: q
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          O
                              ? (0, i.jsxs)('div', {
                                    className: U.videoContainer,
                                    children: [
                                        N
                                            ? (0, i.jsx)(P.Z, {
                                                  className: o()(U.videoCover, U.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: a,
                                                  poster: c
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: U.videoCover,
                                            src: c,
                                            'aria-label': B.intl.string(B.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: O ? U.overviewContainerWithVideo : U.overviewContainerNoVideo,
                              children: [
                                  R.enabled || Z ? null : (0, i.jsx)(G, { application: l }),
                                  (0, i.jsx)(X, { application: l }),
                                  x.length > 0 ? (0, i.jsx)(Q, { description: x }) : null,
                                  C
                                      ? (0, i.jsx)('div', {
                                            className: U.developerShelfControlsContainer,
                                            children: (0, i.jsx)(_.W, {
                                                hideSearch: !0,
                                                className: U.developerShelfControls
                                            })
                                        })
                                      : null,
                                  R.enabled || Z
                                      ? null
                                      : (0, i.jsx)(Y, {
                                            context: n,
                                            application: l,
                                            sectionName: p,
                                            isDeveloperOfThisApp: C,
                                            hasCommands: b
                                        })
                              ]
                          }),
                          R.enabled || Z ? null : (0, i.jsx)(z, { application: l })
                      ]
                  })
        ]
    });
}
function z(e) {
    let { application: t } = e,
        n = (0, S.Cb)(t),
        r = (0, S.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: U.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: U.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.EOn, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: B.intl.string(B.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: U.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.uMN, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: B.intl.string(B.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function G(e) {
    var t;
    let { application: n } = e,
        r = (0, S.BQ)(n) ? n.name : null != (t = (0, S.$d)(n)) ? t : '',
        l = (0, S.vJ)(n);
    return (0, i.jsxs)('div', {
        className: U.titleContainer,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: U.partnerLabelContainer,
                      children: (0, i.jsx)(m.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: B.intl.string(B.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function X(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, S.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, S.ye)(t)
        ? (0, i.jsxs)('div', {
              className: U.tagsContainer,
              children: [
                  (0, i.jsx)(q, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: U.tagContainer,
                              children: (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: e
                              })
                          },
                          e + t
                      )
                  )
              ]
          })
        : null;
}
function q(e) {
    var t;
    let { application: n } = e;
    if (!(0, S.ye)(n)) return null;
    let r = null != (t = (0, S.BQ)(n) ? (n instanceof E.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: U.tagContainer,
        children: [
            (0, i.jsx)(m.BFJ, {
                size: 'xs',
                color: m.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(m.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, b.lY)(r)
            })
        ]
    });
}
function Y(e) {
    var t;
    let { context: n, application: l, sectionName: a, hasCommands: s, isDeveloperOfThisApp: c } = e,
        u = (0, C.Fs)(n, l.id),
        d = (0, v.q)(l.id),
        f = null == d || null == (t = d.bot) ? void 0 : t.id,
        h = (0, x.Z)({
            context: n,
            application: l,
            botUserId: f
        }),
        { analyticsLocations: b } = (0, y.ZP)(),
        [_, g] = r.useState(!1),
        j = A.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' }),
        { enabled: P } = I.X.useExperiment({ location: 'AppLauncherProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, S.BQ)(l) || !(0, S.ye)(l)) return;
            let e = setTimeout(() => {
                (null == u || null == f) &&
                    O.default.track(M.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != u,
                        is_bot_user_id_non_null: null != f,
                        show_try_it_out_button: h
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, u, f, h]),
        !(0, S.BQ)(l) || !(0, S.ye)(l))
    )
        return null;
    let N = m.PhG.MAX;
    return null != u && null != f
        ? (0, i.jsxs)('div', {
              className: P ? U.friendsWhoPlayPEP : void 0,
              children: [
                  (0, i.jsxs)('div', {
                      className: o()(
                          {
                              [U.experimentLayout]: j.enabled,
                              [U.altLayout]: j.altLayout,
                              [U.noShowTryItOutButton]: !h
                          },
                          U.entrypointContainer
                      ),
                      children: [
                          (0, i.jsx)('div', {
                              className: U.entryPointContainerFlexChild,
                              children: (0, i.jsx)(Z.Z, {
                                  context: n,
                                  application: l,
                                  sectionName: a,
                                  primaryEntryPointCommand: u,
                                  buttonSize: N,
                                  playSolo: _
                              })
                          }),
                          h && null != f
                              ? j.altLayout
                                  ? (0, i.jsx)('div', {
                                        className: U.altLayout,
                                        children: (0, i.jsx)('div', {
                                            className: U.entryPointContainerFlexChild,
                                            children: (0, i.jsx)(m.XZJ, {
                                                className: U.entryPointCheckbox,
                                                value: _,
                                                onChange: () => g(!_),
                                                children: (0, i.jsxs)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    className: U.entryPointCheckboxLabel,
                                                    children: [
                                                        B.intl.string(B.t['e+CzPj']),
                                                        (0, i.jsx)(m.ua7, {
                                                            text: B.intl.string(B.t.QOZI8f),
                                                            children: (e) => (0, i.jsx)(p.d, V(W({}, e), { size: 'xs' }))
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                  : (0, i.jsx)('div', {
                                        className: U.entryPointContainerFlexChild,
                                        children: (0, i.jsx)(k.Z, {
                                            botUserId: f,
                                            applicationId: l.id,
                                            buttonSize: N,
                                            analyticsLocations: b
                                        })
                                    })
                              : null
                      ]
                  }),
                  P ? (0, i.jsx)(z, { application: l }) : null
              ]
          })
        : c && !s && (0, S.ye)(l)
          ? (0, i.jsx)(m.Wn, {
                className: U.primaryEntryPointWarningMessage,
                messageType: m.QYI.WARNING,
                children: B.intl.format(B.t['s/3hjI'], {})
            })
          : null;
}
function Q(e) {
    let { description: t } = e,
        n = A.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, o] = r.useState(!0);
    r.useLayoutEffect(() => o(n.enabled), [n]);
    let a = r.useMemo(() => (0, N.parseBioReact)(t), [t]),
        {
            ref: s,
            lineHeight: c,
            lineCount: u
        } = (function () {
            let e = r.useRef(null),
                [t, n] = r.useState(null),
                [i, l] = r.useState(null);
            return (
                r.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (n(i), l(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        d = r.useMemo(() => {
            if (null == c || null == u) return { key: 0 };
            let e = c * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +c),
                maxHeightOverride: e
            };
        }, [u, c]),
        { ref: p, isTransitioning: f, onTransitionEnd: h } = (0, R.Z)(W({ isExpanded: l }, d)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: U.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: p,
                className: U.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(m.Text, {
                    ref: s,
                    className: H.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : d.minHeightOverride },
                    children: a
                })
            }),
            null != u && u > 1 && !n.enabled
                ? (0, i.jsxs)(m.P3F, {
                      className: U.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(m.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? B.intl.string(B.t.u4YJ8v) : B.intl.string(B.t['N/tajI'])
                          }),
                          b
                              ? (0, i.jsx)(m.u04, {
                                    size: 'sm',
                                    color: m.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(m.CJ0, {
                                    size: 'sm',
                                    color: m.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
let J = [B.t.eCLLn5, B.t.d8pkUF],
    K = [B.t.d8pkUF, B.t.MbWAxs, B.t['8kiRMT'], B.t.GRL3Nj];
