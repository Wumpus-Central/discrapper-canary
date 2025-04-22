n.d(t, {
    Z: () => V,
    u: () => q
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
    p = n(481060),
    m = n(115130),
    f = n(723163),
    h = n(147865),
    b = n(427996),
    _ = n(906732),
    y = n(706302),
    x = n(812236),
    C = n(835473),
    v = n(146282),
    g = n(26033),
    j = n(70097),
    P = n(240991),
    N = n(973616),
    E = n(626135),
    O = n(424602),
    A = n(573188),
    I = n(783097),
    S = n(695676),
    T = n(886792),
    L = n(635753),
    w = n(520315),
    R = n(29380),
    Z = n(783685),
    k = n(981631),
    M = n(206583),
    D = n(388032),
    B = n(449549),
    U = n(73433);
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
function W(e, t) {
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
function V(e) {
    var t;
    let { context: n, application: l, videoUrl: a, imageCoverUrl: c, sectionName: h, hasCommands: _, showFriendsTab: y } = e,
        x = r.useMemo(() => {
            var e;
            return null != (e = (0, I.jD)(l)) ? e : '';
        }, [l]),
        C = (0, d.e7)([m.Z], () => m.Z.inDevModeForApplication(l.id)),
        { isSlideReady: P } = (0, S.hH)(),
        [N, E] = r.useState(!1);
    r.useEffect(() => {
        P && E(!0);
    }, [P]);
    let w = null != a,
        R = O.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { enabled: Z } = A.X.useExperiment({ location: 'AppLauncherProfile' }),
        [k, U] = r.useState(y),
        { friends: V, friendsLastPlayed: X } = (0, f.Z)(l),
        K =
            ((t = V),
            r.useMemo(() => {
                var e, n, i, r;
                if (0 === t.length) return '';
                let l = u().sample(1 === t.length ? Q : J);
                return (
                    s()(l, 'intl message arrays should not be empty'),
                    D.intl.format(l, {
                        friendCount: t.length,
                        count: t.length,
                        friendCountMinusOne: t.length - 1,
                        friendCountMinusTwo: t.length - 2,
                        firstFriendName: t[0].username,
                        secondFriendName: null != (i = null == (e = t[1]) ? void 0 : e.username) ? i : '',
                        thirdFriendName: null != (r = null == (n = t[2]) ? void 0 : n.username) ? r : ''
                    })
                );
            }, [t])),
        $ = (0, d.e7)([v.Z], () => v.Z.getFeed(M.YN.GLOBAL_FEED)),
        ee = r
            .useMemo(() => {
                if (null == $) return [];
                let e = $.entries.reduce((e, t) => W(H({}, e), { [t.content.id]: t.content }), {});
                return V.reduce((t, n) => {
                    let i = e[X[n.id]];
                    return null != i && (0, g.Mq)(i) ? [...t, i] : t;
                }, []);
            }, [$, V, X])
            .map((e) =>
                (0, i.jsx)(
                    T.Z,
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
                [B.fixedHeight]: k && V.length > 1 && V.length <= 3,
                [B.friendsWhoPlay]: Z
            },
            B.container
        ),
        children: [
            R.enabled || Z
                ? (0, i.jsxs)('div', {
                      className: B.experimentTitleContainer,
                      children: [(0, i.jsx)(z, { application: l }), R.enabled ? (0, i.jsx)(F, { application: l }) : null]
                  })
                : null,
            Z && 0 !== V.length
                ? (0, i.jsxs)(p.njP, {
                      className: B.tabBar,
                      selectedItem: k ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? U(!0) : U(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(p.njP.Item, {
                              id: 'overview',
                              className: B.tabItem,
                              children: D.intl.string(D.t['/dp6yc'])
                          }),
                          (0, i.jsx)(p.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, L.d)(!1, V).toString(),
                              children: (0, i.jsx)(L.Z, {
                                  friends: V,
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
                          (0, i.jsx)(p.Text, {
                              className: B.friendsMotivationText,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: K
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          w
                              ? (0, i.jsxs)('div', {
                                    className: B.videoContainer,
                                    children: [
                                        N
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
                                            'aria-label': D.intl.string(D.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: w ? B.overviewContainerWithVideo : B.overviewContainerNoVideo,
                              children: [
                                  R.enabled || Z ? null : (0, i.jsx)(z, { application: l }),
                                  (0, i.jsx)(G, { application: l }),
                                  x.length > 0 ? (0, i.jsx)(Y, { description: x }) : null,
                                  C
                                      ? (0, i.jsx)('div', {
                                            className: B.developerShelfControlsContainer,
                                            children: (0, i.jsx)(b.W, {
                                                hideSearch: !0,
                                                className: B.developerShelfControls
                                            })
                                        })
                                      : null,
                                  R.enabled || Z
                                      ? null
                                      : (0, i.jsx)(q, {
                                            context: n,
                                            application: l,
                                            sectionName: h,
                                            isDeveloperOfThisApp: C,
                                            hasCommands: _
                                        })
                              ]
                          }),
                          R.enabled || Z ? null : (0, i.jsx)(F, { application: l })
                      ]
                  })
        ]
    });
}
function F(e) {
    let { application: t } = e,
        n = (0, I.Cb)(t),
        r = (0, I.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: B.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: B.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(p.EOn, {
                                    size: 'sm',
                                    color: p.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: D.intl.string(D.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: B.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(p.uMN, {
                                    size: 'sm',
                                    color: p.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: D.intl.string(D.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function z(e) {
    var t;
    let { application: n } = e,
        r = (0, I.BQ)(n) ? n.name : null != (t = (0, I.$d)(n)) ? t : '',
        l = (0, I.vJ)(n);
    return (0, i.jsxs)('div', {
        className: B.titleContainer,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: B.partnerLabelContainer,
                      children: (0, i.jsx)(p.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: D.intl.string(D.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function G(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, I.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, I.ye)(t)
        ? (0, i.jsxs)('div', {
              className: B.tagsContainer,
              children: [
                  (0, i.jsx)(X, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: B.tagContainer,
                              children: (0, i.jsx)(p.Text, {
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
function X(e) {
    var t;
    let { application: n } = e;
    if (!(0, I.ye)(n)) return null;
    let r = null != (t = (0, I.BQ)(n) ? (n instanceof N.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: B.tagContainer,
        children: [
            (0, i.jsx)(p.BFJ, {
                size: 'xs',
                color: p.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(p.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, h.lY)(r)
            })
        ]
    });
}
function q(e) {
    var t;
    let { context: n, application: l, sectionName: a, hasCommands: s, isDeveloperOfThisApp: c } = e,
        u = (0, x.Fs)(n, l.id),
        d = (0, C.q)(l.id),
        m = null == d || null == (t = d.bot) ? void 0 : t.id,
        f = (0, y.Z)({
            context: n,
            application: l,
            botUserId: m
        }),
        { analyticsLocations: h } = (0, _.ZP)(),
        [b, v] = r.useState(!1),
        g = O.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' }),
        { enabled: j } = A.X.useExperiment({ location: 'AppLauncherProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, I.BQ)(l) || !(0, I.ye)(l)) return;
            let e = setTimeout(() => {
                (null == u || null == m) &&
                    E.default.track(k.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != u,
                        is_bot_user_id_non_null: null != m,
                        show_try_it_out_button: f
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, u, m, f]),
        !(0, I.BQ)(l) || !(0, I.ye)(l))
    )
        return null;
    let P = p.PhG.MAX;
    return null != u && null != m
        ? (0, i.jsxs)('div', {
              className: j ? B.friendsWhoPlayPEP : void 0,
              children: [
                  (0, i.jsxs)('div', {
                      className: o()(
                          {
                              [B.experimentLayout]: g.enabled,
                              [B.altLayout]: g.altLayout,
                              [B.noShowTryItOutButton]: !f
                          },
                          B.entrypointContainer
                      ),
                      children: [
                          (0, i.jsx)('div', {
                              className: B.entryPointContainerFlexChild,
                              children: (0, i.jsx)(R.Z, {
                                  context: n,
                                  application: l,
                                  sectionName: a,
                                  primaryEntryPointCommand: u,
                                  buttonSize: P,
                                  playSolo: b
                              })
                          }),
                          f && null != m
                              ? g.altLayout
                                  ? (0, i.jsx)('div', {
                                        className: B.altLayout,
                                        children: (0, i.jsx)('div', {
                                            className: B.entryPointContainerFlexChild,
                                            children: (0, i.jsx)(p.XZJ, {
                                                className: B.entryPointCheckbox,
                                                value: b,
                                                onChange: () => v(!b),
                                                children: (0, i.jsxs)(p.Text, {
                                                    variant: 'text-sm/medium',
                                                    className: B.entryPointCheckboxLabel,
                                                    children: [
                                                        D.intl.string(D.t['e+CzPj']),
                                                        (0, i.jsx)(p.ua7, {
                                                            text: D.intl.string(D.t.QOZI8f),
                                                            children: (e) => (0, i.jsx)(p.d3s, W(H({}, e), { size: 'xs' }))
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                  : (0, i.jsx)('div', {
                                        className: B.entryPointContainerFlexChild,
                                        children: (0, i.jsx)(Z.Z, {
                                            botUserId: m,
                                            applicationId: l.id,
                                            buttonSize: P,
                                            analyticsLocations: h
                                        })
                                    })
                              : null
                      ]
                  }),
                  j ? (0, i.jsx)(F, { application: l }) : null
              ]
          })
        : c && !s && (0, I.ye)(l)
          ? (0, i.jsx)(p.Wn, {
                className: B.primaryEntryPointWarningMessage,
                messageType: p.QYI.WARNING,
                children: D.intl.format(D.t['s/3hjI'], {})
            })
          : null;
}
function Y(e) {
    let { description: t } = e,
        n = O.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
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
        { ref: m, isTransitioning: f, onTransitionEnd: h } = (0, w.Z)(H({ isExpanded: l }, d)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: B.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: B.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(p.Text, {
                    ref: s,
                    className: U.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : d.minHeightOverride },
                    children: a
                })
            }),
            null != u && u > 1 && !n.enabled
                ? (0, i.jsxs)(p.P3F, {
                      className: B.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(p.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? D.intl.string(D.t.u4YJ8v) : D.intl.string(D.t['N/tajI'])
                          }),
                          b
                              ? (0, i.jsx)(p.u04, {
                                    size: 'sm',
                                    color: p.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(p.CJ0, {
                                    size: 'sm',
                                    color: p.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
let Q = [D.t.eCLLn5, D.t.d8pkUF],
    J = [D.t.d8pkUF, D.t.MbWAxs, D.t['8kiRMT'], D.t.GRL3Nj];
