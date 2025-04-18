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
    v = n(812236),
    C = n(835473),
    g = n(146282),
    N = n(26033),
    j = n(70097),
    P = n(240991),
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
    W = n(206583),
    D = n(388032),
    B = n(565486),
    U = n(852831);
function H(e) {
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
        v = (0, d.e7)([f.Z], () => f.Z.inDevModeForApplication(l.id)),
        { isSlideReady: C } = (0, T.hH)(),
        [P, E] = r.useState(!1);
    r.useEffect(() => {
        C && E(!0);
    }, [C]);
    let O = null != a,
        R = A.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { enabled: Z } = I.X.useExperiment({ location: 'AppLauncherProfile' }),
        [k, M] = r.useState(y),
        { friends: U, friendsLastPlayed: F } = (0, h.Z)(l),
        q =
            ((t = U),
            r.useMemo(() => {
                var e, n, i, r;
                if (0 === t.length) return '';
                let l = u().sample(1 === t.length ? J : K);
                return (
                    s()(l, 'intl message arrays should not be empty'),
                    D.NW.format(l, {
                        friendCount: t.length,
                        count: t.length,
                        friendCountMinusOne: t.length - 1,
                        firstFriendName: t[0].username,
                        secondFriendName: null != (i = null == (e = t[1]) ? void 0 : e.username) ? i : '',
                        thirdFriendName: null != (r = null == (n = t[2]) ? void 0 : n.username) ? r : ''
                    })
                );
            }, [t])),
        $ = (0, d.e7)([g.Z], () => g.Z.getFeed(W.YN.GLOBAL_FEED)),
        ee = r
            .useMemo(() => {
                if (null == $) return [];
                let e = $.entries.reduce((e, t) => V(H({}, e), { [t.content.id]: t.content }), {});
                return U.reduce((t, n) => {
                    let i = e[F[n.id]];
                    return null != i && (0, N.Mq)(i) ? [...t, i] : t;
                }, []);
            }, [$, U, F])
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
                [B.experimentLayout]: R.enabled,
                [B.altLayout]: R.altLayout,
                [B.fixedHeight]: k && U.length > 1 && U.length <= 3,
                [B.friendsWhoPlay]: Z
            },
            B.container
        ),
        children: [
            R.enabled || Z
                ? (0, i.jsxs)('div', {
                      className: B.experimentTitleContainer,
                      children: [(0, i.jsx)(G, { application: l }), R.enabled ? (0, i.jsx)(z, { application: l }) : null]
                  })
                : null,
            Z && 0 !== U.length
                ? (0, i.jsxs)(m.njP, {
                      className: B.tabBar,
                      selectedItem: k ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? M(!0) : M(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(m.njP.Item, {
                              id: 'overview',
                              className: B.tabItem,
                              children: D.NW.string(D.t['/dp6yc'])
                          }),
                          (0, i.jsx)(m.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, w.d)(!1, U).toString(),
                              children: (0, i.jsx)(w.Z, {
                                  friends: U,
                                  shortText: !1
                              })
                          })
                      ]
                  })
                : null,
            k
                ? (0, i.jsxs)('div', {
                      className: B.friendsContainer,
                      children: [
                          (0, i.jsx)('div', { children: ee }),
                          (0, i.jsx)(m.Text, {
                              className: B.friendsMotivationText,
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
                                    className: B.videoContainer,
                                    children: [
                                        P
                                            ? (0, i.jsx)(j.Z, {
                                                  className: o()(B.videoCover, B.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: a,
                                                  poster: c
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: B.videoCover,
                                            src: c,
                                            'aria-label': D.NW.string(D.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: O ? B.overviewContainerWithVideo : B.overviewContainerNoVideo,
                              children: [
                                  R.enabled || Z ? null : (0, i.jsx)(G, { application: l }),
                                  (0, i.jsx)(X, { application: l }),
                                  x.length > 0 ? (0, i.jsx)(Q, { description: x }) : null,
                                  v
                                      ? (0, i.jsx)('div', {
                                            className: B.developerShelfControlsContainer,
                                            children: (0, i.jsx)(_.W, {
                                                hideSearch: !0,
                                                className: B.developerShelfControls
                                            })
                                        })
                                      : null,
                                  R.enabled || Z
                                      ? null
                                      : (0, i.jsx)(Y, {
                                            context: n,
                                            application: l,
                                            sectionName: p,
                                            isDeveloperOfThisApp: v,
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
              className: B.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: B.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.EOn, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: D.NW.string(D.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: B.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.uMN, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: D.NW.string(D.t['5khEk5'])
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
        className: B.titleContainer,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: B.partnerLabelContainer,
                      children: (0, i.jsx)(m.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: D.NW.string(D.t.LO4f0N)
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
              className: B.tagsContainer,
              children: [
                  (0, i.jsx)(q, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: B.tagContainer,
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
        className: B.tagContainer,
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
        u = (0, v.Fs)(n, l.id),
        d = (0, C.q)(l.id),
        f = null == d || null == (t = d.bot) ? void 0 : t.id,
        h = (0, x.Z)({
            context: n,
            application: l,
            botUserId: f
        }),
        { analyticsLocations: b } = (0, y.ZP)(),
        [_, g] = r.useState(!1),
        N = A.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' }),
        { enabled: j } = I.X.useExperiment({ location: 'AppLauncherProfile.PrimaryEntryPointArea()' });
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
    let P = m.PhG.MAX;
    return null != u && null != f
        ? (0, i.jsxs)('div', {
              className: j ? B.friendsWhoPlayPEP : void 0,
              children: [
                  (0, i.jsxs)('div', {
                      className: o()(
                          {
                              [B.experimentLayout]: N.enabled,
                              [B.altLayout]: N.altLayout,
                              [B.noShowTryItOutButton]: !h
                          },
                          B.entrypointContainer
                      ),
                      children: [
                          (0, i.jsx)('div', {
                              className: B.entryPointContainerFlexChild,
                              children: (0, i.jsx)(Z.Z, {
                                  context: n,
                                  application: l,
                                  sectionName: a,
                                  primaryEntryPointCommand: u,
                                  buttonSize: P,
                                  playSolo: _
                              })
                          }),
                          h && null != f
                              ? N.altLayout
                                  ? (0, i.jsx)('div', {
                                        className: B.altLayout,
                                        children: (0, i.jsx)('div', {
                                            className: B.entryPointContainerFlexChild,
                                            children: (0, i.jsx)(m.XZJ, {
                                                className: B.entryPointCheckbox,
                                                value: _,
                                                onChange: () => g(!_),
                                                children: (0, i.jsxs)(m.Text, {
                                                    variant: 'text-sm/medium',
                                                    className: B.entryPointCheckboxLabel,
                                                    children: [
                                                        D.NW.string(D.t['e+CzPj']),
                                                        (0, i.jsx)(m.ua7, {
                                                            text: D.NW.string(D.t.QOZI8f),
                                                            children: (e) => (0, i.jsx)(p.d, V(H({}, e), { size: 'xs' }))
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                  : (0, i.jsx)('div', {
                                        className: B.entryPointContainerFlexChild,
                                        children: (0, i.jsx)(k.Z, {
                                            botUserId: f,
                                            applicationId: l.id,
                                            buttonSize: P,
                                            analyticsLocations: b
                                        })
                                    })
                              : null
                      ]
                  }),
                  j ? (0, i.jsx)(z, { application: l }) : null
              ]
          })
        : c && !s && (0, S.ye)(l)
          ? (0, i.jsx)(m.Wn, {
                className: B.primaryEntryPointWarningMessage,
                messageType: m.QYI.WARNING,
                children: D.NW.format(D.t['s/3hjI'], {})
            })
          : null;
}
function Q(e) {
    let { description: t } = e,
        n = A.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, o] = r.useState(!0);
    r.useLayoutEffect(() => o(n.enabled), [n]);
    let a = r.useMemo(() => (0, P.parseBioReact)(t), [t]),
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
        { ref: p, isTransitioning: f, onTransitionEnd: h } = (0, R.Z)(H({ isExpanded: l }, d)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: B.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: p,
                className: B.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(m.Text, {
                    ref: s,
                    className: U.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : d.minHeightOverride },
                    children: a
                })
            }),
            null != u && u > 1 && !n.enabled
                ? (0, i.jsxs)(m.P3F, {
                      className: B.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(m.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? D.NW.string(D.t.u4YJ8v) : D.NW.string(D.t['N/tajI'])
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
let J = [D.t.eCLLn5, D.t.d8pkUF],
    K = [D.t.d8pkUF, D.t.MbWAxs, D.t['8kiRMT'], D.t.GRL3Nj];
