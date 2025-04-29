n.d(t, {
    Z: () => H,
    u: () => z
}),
    n(388685),
    n(953529);
var i = n(255367),
    r = n(73800),
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
    v = n(812236),
    x = n(835473),
    C = n(146282),
    g = n(26033),
    j = n(70097),
    P = n(240991),
    N = n(973616),
    O = n(626135),
    E = n(573188),
    A = n(783097),
    I = n(695676),
    S = n(886792),
    T = n(635753),
    w = n(520315),
    L = n(29380),
    R = n(783685),
    Z = n(981631),
    k = n(206583),
    M = n(388032),
    D = n(449549),
    B = n(73433);
function U(e) {
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
function H(e) {
    var t;
    let { context: n, application: l, videoUrl: a, imageCoverUrl: c, sectionName: h, hasCommands: _, showFriendsTab: y } = e,
        v = r.useMemo(() => {
            var e;
            return null != (e = (0, A.jD)(l)) ? e : '';
        }, [l]),
        x = (0, d.e7)([m.Z], () => m.Z.inDevModeForApplication(l.id)),
        { isSlideReady: P } = (0, I.hH)(),
        [N, O] = r.useState(!1);
    r.useEffect(() => {
        P && O(!0);
    }, [P]);
    let w = null != a,
        { enabled: L } = E.X.useExperiment({ location: 'AppLauncherProfile' }),
        [R, Z] = r.useState(y),
        { friends: B, friendsLastPlayed: H } = (0, f.Z)(l),
        G =
            ((t = B),
            r.useMemo(() => {
                var e, n, i, r;
                if (0 === t.length) return '';
                let l = u().sample(1 === t.length ? q : Y);
                return (
                    s()(l, 'intl message arrays should not be empty'),
                    M.intl.format(l, {
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
        Q = (0, d.e7)([C.Z], () => C.Z.getFeed(k.YN.GLOBAL_FEED)),
        J = r
            .useMemo(() => {
                if (null == Q) return [];
                let e = Q.entries.reduce((e, t) => {
                    var n, i;
                    return (
                        (n = U({}, e)),
                        (i = i = { [t.content.id]: t.content }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n
                    );
                }, {});
                return B.reduce((t, n) => {
                    let i = e[H[n.id]];
                    return null != i && (0, g.Mq)(i) ? [...t, i] : t;
                }, []);
            }, [Q, B, H])
            .map((e) =>
                (0, i.jsx)(
                    S.Z,
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
                [D.fixedHeight]: R && B.length > 1 && B.length <= 3,
                [D.friendsWhoPlay]: L
            },
            D.container
        ),
        children: [
            L
                ? (0, i.jsx)('div', {
                      className: D.experimentTitleContainer,
                      children: (0, i.jsx)(V, { application: l })
                  })
                : null,
            L && 0 !== B.length
                ? (0, i.jsxs)(p.njP, {
                      className: D.tabBar,
                      selectedItem: R ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? Z(!0) : Z(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(p.njP.Item, {
                              id: 'overview',
                              className: D.tabItem,
                              children: M.intl.string(M.t['/dp6yc'])
                          }),
                          (0, i.jsx)(p.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, T.d)(!1, B).toString(),
                              children: (0, i.jsx)(T.Z, {
                                  friends: B,
                                  shortText: !1
                              })
                          })
                      ]
                  })
                : null,
            R
                ? (0, i.jsxs)('div', {
                      className: D.friendsContainer,
                      children: [
                          (0, i.jsx)('div', { children: J }),
                          (0, i.jsx)(p.Text, {
                              className: D.friendsMotivationText,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: G
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          w
                              ? (0, i.jsxs)('div', {
                                    className: D.videoContainer,
                                    children: [
                                        N
                                            ? (0, i.jsx)(j.Z, {
                                                  className: o()(D.videoCover, D.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: a,
                                                  poster: c
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: D.videoCover,
                                            src: c,
                                            'aria-label': M.intl.string(M.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: w ? D.overviewContainerWithVideo : D.overviewContainerNoVideo,
                              children: [
                                  L ? null : (0, i.jsx)(V, { application: l }),
                                  (0, i.jsx)(F, { application: l }),
                                  v.length > 0 ? (0, i.jsx)(X, { description: v }) : null,
                                  x
                                      ? (0, i.jsx)('div', {
                                            className: D.developerShelfControlsContainer,
                                            children: (0, i.jsx)(b.W, {
                                                hideSearch: !0,
                                                className: D.developerShelfControls
                                            })
                                        })
                                      : null,
                                  L
                                      ? null
                                      : (0, i.jsx)(z, {
                                            context: n,
                                            application: l,
                                            sectionName: h,
                                            isDeveloperOfThisApp: x,
                                            hasCommands: _
                                        })
                              ]
                          }),
                          L ? null : (0, i.jsx)(W, { application: l })
                      ]
                  })
        ]
    });
}
function W(e) {
    let { application: t } = e,
        n = (0, A.Cb)(t),
        r = (0, A.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: D.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: D.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(p.EOn, {
                                    size: 'sm',
                                    color: p.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: M.intl.string(M.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: D.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(p.uMN, {
                                    size: 'sm',
                                    color: p.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(p.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: M.intl.string(M.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function V(e) {
    var t;
    let { application: n } = e,
        r = (0, A.BQ)(n) ? n.name : null != (t = (0, A.$d)(n)) ? t : '',
        l = (0, A.vJ)(n);
    return (0, i.jsxs)('div', {
        className: D.titleContainer,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: D.partnerLabelContainer,
                      children: (0, i.jsx)(p.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: M.intl.string(M.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function F(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, A.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, A.ye)(t)
        ? (0, i.jsxs)('div', {
              className: D.tagsContainer,
              children: [
                  (0, i.jsx)(G, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: D.tagContainer,
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
function G(e) {
    var t;
    let { application: n } = e;
    if (!(0, A.ye)(n)) return null;
    let r = null != (t = (0, A.BQ)(n) ? (n instanceof N.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: D.tagContainer,
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
function z(e) {
    var t;
    let { context: n, application: l, sectionName: o, hasCommands: a, isDeveloperOfThisApp: s } = e,
        c = (0, v.Fs)(n, l.id),
        u = (0, x.q)(l.id),
        d = null == u || null == (t = u.bot) ? void 0 : t.id,
        m = (0, y.Z)({
            context: n,
            application: l,
            botUserId: d
        }),
        { analyticsLocations: f } = (0, _.ZP)(),
        { enabled: h } = E.X.useExperiment({ location: 'AppLauncherProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, A.BQ)(l) || !(0, A.ye)(l)) return;
            let e = setTimeout(() => {
                (null == c || null == d) &&
                    O.default.track(Z.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != c,
                        is_bot_user_id_non_null: null != d,
                        show_try_it_out_button: m
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, c, d, m]),
        !(0, A.BQ)(l) || !(0, A.ye)(l))
    )
        return null;
    let b = p.PhG.MAX;
    return null != c && null != d
        ? (0, i.jsxs)('div', {
              className: h ? D.friendsWhoPlayPEP : void 0,
              children: [
                  (0, i.jsxs)('div', {
                      className: D.entrypointContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: D.entryPointContainerFlexChild,
                              children: (0, i.jsx)(L.Z, {
                                  context: n,
                                  application: l,
                                  sectionName: o,
                                  primaryEntryPointCommand: c,
                                  buttonSize: b
                              })
                          }),
                          m && null != d
                              ? (0, i.jsx)('div', {
                                    className: D.entryPointContainerFlexChild,
                                    children: (0, i.jsx)(R.Z, {
                                        botUserId: d,
                                        applicationId: l.id,
                                        buttonSize: b,
                                        analyticsLocations: f
                                    })
                                })
                              : null
                      ]
                  }),
                  h ? (0, i.jsx)(W, { application: l }) : null
              ]
          })
        : s && !a && (0, A.ye)(l)
          ? (0, i.jsx)(p.Wn, {
                className: D.primaryEntryPointWarningMessage,
                messageType: p.QYI.WARNING,
                children: M.intl.format(M.t['s/3hjI'], {})
            })
          : null;
}
function X(e) {
    let { description: t } = e,
        [n, l] = r.useState(!0);
    r.useLayoutEffect(() => l(!1), []);
    let o = r.useMemo(() => (0, P.parseBioReact)(t), [t]),
        {
            ref: a,
            lineHeight: s,
            lineCount: c
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
        u = r.useMemo(() => {
            if (null == s || null == c) return { key: 0 };
            let e = s * c;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +s),
                maxHeightOverride: e
            };
        }, [c, s]),
        { ref: d, isTransitioning: m, onTransitionEnd: f } = (0, w.Z)(U({ isExpanded: n }, u)),
        h = n || m;
    return (0, i.jsxs)('div', {
        className: D.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: d,
                className: D.overflowHidden,
                onTransitionEnd: f,
                children: (0, i.jsx)(p.Text, {
                    ref: a,
                    className: B.markup,
                    variant: 'text-sm/medium',
                    lineClamp: h ? void 0 : 1,
                    style: { maxHeight: h ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != c && c > 1
                ? (0, i.jsxs)(p.P3F, {
                      className: D.expandableDescriptionClickable,
                      onClick: () => l((e) => !e),
                      children: [
                          (0, i.jsx)(p.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: h ? M.intl.string(M.t.u4YJ8v) : M.intl.string(M.t['N/tajI'])
                          }),
                          h
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
let q = [M.t.eCLLn5, M.t.d8pkUF],
    Y = [M.t.d8pkUF, M.t.MbWAxs, M.t['8kiRMT'], M.t.GRL3Nj];
