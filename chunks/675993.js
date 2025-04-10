n.d(t, {
    Z: () => D,
    u: () => z
}),
    n(388685),
    n(953529);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(442837),
    p = n(882485),
    m = n(481060),
    f = n(115130),
    h = n(723163),
    b = n(147865),
    x = n(427996),
    C = n(906732),
    _ = n(706302),
    v = n(812236),
    y = n(835473),
    N = n(70097),
    g = n(240991),
    j = n(973616),
    P = n(626135),
    E = n(424602),
    A = n(573188),
    I = n(783097),
    O = n(695676),
    S = n(635753),
    T = n(520315),
    L = n(29380),
    w = n(783685),
    R = n(981631),
    k = n(388032),
    Z = n(449549),
    M = n(73433);
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
function D(e) {
    var t;
    let { context: n, application: l, videoUrl: o, imageCoverUrl: c, sectionName: p, hasCommands: b, showFriendsTab: C } = e,
        _ = r.useMemo(() => {
            var e;
            return null != (e = (0, I.jD)(l)) ? e : '';
        }, [l]),
        v = (0, u.e7)([f.Z], () => f.Z.inDevModeForApplication(l.id)),
        [y, g] = r.useState(C),
        { friends: j } = (0, h.Z)(l),
        P =
            ((t = j),
            r.useMemo(() => {
                var e, n, i, r;
                if (0 === t.length) return '';
                let l = d().sample(1 === t.length ? X : q);
                return (
                    s()(l, 'intl message arrays should not be empty'),
                    k.NW.format(l, {
                        friendCount: t.length,
                        count: t.length,
                        friendCountMinusOne: t.length - 1,
                        firstFriendName: t[0].username,
                        secondFriendName: null != (i = null == (e = t[1]) ? void 0 : e.username) ? i : '',
                        thirdFriendName: null != (r = null == (n = t[2]) ? void 0 : n.username) ? r : ''
                    })
                );
            }, [t])),
        T = null != o,
        L = E.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { isSlideReady: w } = (0, O.hH)(),
        [R, M] = r.useState(!1);
    r.useEffect(() => {
        w && M(!0);
    }, [w]);
    let { enabled: W } = A.X.useExperiment({ location: 'AppLauncherProfile' });
    return (0, i.jsxs)('div', {
        className: a()(
            {
                [Z.experimentLayout]: L.enabled,
                [Z.altLayout]: L.altLayout,
                [Z.fixedHeight]: y && j.length > 1 && j.length <= 3
            },
            Z.container
        ),
        children: [
            L.enabled
                ? (0, i.jsxs)('div', {
                      className: Z.experimentTitleContainer,
                      children: [(0, i.jsx)(H, { application: l }), (0, i.jsx)(B, { application: l })]
                  })
                : null,
            W && 0 !== j.length
                ? (0, i.jsxs)(m.njP, {
                      selectedItem: y ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? g(!0) : g(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(m.njP.Item, {
                              id: 'overview',
                              children: k.NW.string(k.t['/dp6yc'])
                          }),
                          (0, i.jsx)(m.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, S.d)(!1, j).toString(),
                              children: (0, i.jsx)(S.Z, {
                                  friends: j,
                                  shortText: !1
                              })
                          })
                      ]
                  })
                : null,
            y
                ? (0, i.jsx)(U, {
                      application: l,
                      pepButtonLabelEnabled: L.enabled,
                      children: (0, i.jsxs)('div', {
                          className: Z.friendsContainer,
                          children: [
                              (0, i.jsx)('div', { children: 'Friend stuff goes here' }),
                              (0, i.jsx)(m.Text, {
                                  className: Z.friendsMotivationText,
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: P
                              })
                          ]
                      })
                  })
                : (0, i.jsxs)(U, {
                      application: l,
                      pepButtonLabelEnabled: L.enabled,
                      children: [
                          T
                              ? (0, i.jsxs)('div', {
                                    className: Z.videoContainer,
                                    children: [
                                        R
                                            ? (0, i.jsx)(N.Z, {
                                                  className: a()(Z.videoCover, Z.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: o,
                                                  poster: c
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: Z.videoCover,
                                            src: c,
                                            'aria-label': k.NW.string(k.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: T ? Z.overviewContainerWithVideo : Z.overviewContainerNoVideo,
                              children: [
                                  L.enabled ? null : (0, i.jsx)(H, { application: l }),
                                  (0, i.jsx)(V, { application: l }),
                                  _.length > 0 ? (0, i.jsx)(G, { description: _ }) : null,
                                  v
                                      ? (0, i.jsx)('div', {
                                            className: Z.developerShelfControlsContainer,
                                            children: (0, i.jsx)(x.W, {
                                                hideSearch: !0,
                                                className: Z.developerShelfControls
                                            })
                                        })
                                      : null,
                                  L.enabled
                                      ? null
                                      : (0, i.jsx)(z, {
                                            context: n,
                                            application: l,
                                            sectionName: p,
                                            isDeveloperOfThisApp: v,
                                            hasCommands: b
                                        })
                              ]
                          })
                      ]
                  })
        ]
    });
}
function U(e) {
    let { children: t, pepButtonLabelEnabled: n, application: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [t, n ? null : (0, i.jsx)(B, { application: r })]
    });
}
function B(e) {
    let { application: t } = e,
        n = (0, I.Cb)(t),
        r = (0, I.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: Z.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: Z.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.EOn, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: k.NW.string(k.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: Z.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(m.uMN, {
                                    size: 'sm',
                                    color: m.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: k.NW.string(k.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function H(e) {
    var t;
    let { application: n } = e,
        r = (0, I.BQ)(n) ? n.name : null != (t = (0, I.$d)(n)) ? t : '',
        l = (0, I.vJ)(n);
    return (0, i.jsxs)('div', {
        className: Z.titleContainer,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: Z.partnerLabelContainer,
                      children: (0, i.jsx)(m.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: k.NW.string(k.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function V(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, I.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, I.ye)(t)
        ? (0, i.jsxs)('div', {
              className: Z.tagsContainer,
              children: [
                  (0, i.jsx)(F, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: Z.tagContainer,
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
function F(e) {
    var t;
    let { application: n } = e;
    if (!(0, I.ye)(n)) return null;
    let r = null != (t = (0, I.BQ)(n) ? (n instanceof j.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: Z.tagContainer,
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
function z(e) {
    var t;
    let { context: n, application: l, sectionName: o, hasCommands: s, isDeveloperOfThisApp: c } = e,
        d = (0, v.Fs)(n, l.id),
        u = (0, y.q)(l.id),
        f = null == u || null == (t = u.bot) ? void 0 : t.id,
        h = (0, _.Z)({
            context: n,
            application: l,
            botUserId: f
        }),
        { analyticsLocations: b } = (0, C.ZP)(),
        [x, N] = r.useState(!1),
        g = E.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, I.BQ)(l) || !(0, I.ye)(l)) return;
            let e = setTimeout(() => {
                (null == d || null == f) &&
                    P.default.track(R.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != d,
                        is_bot_user_id_non_null: null != f,
                        show_try_it_out_button: h
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, d, f, h]),
        !(0, I.BQ)(l) || !(0, I.ye)(l))
    )
        return null;
    let j = m.PhG.MAX;
    return null != d && null != f
        ? (0, i.jsxs)('div', {
              className: a()(
                  {
                      [Z.experimentLayout]: g.enabled,
                      [Z.altLayout]: g.altLayout,
                      [Z.noShowTryItOutButton]: !h
                  },
                  Z.entrypointContainer
              ),
              children: [
                  (0, i.jsx)('div', {
                      className: Z.entryPointContainerFlexChild,
                      children: (0, i.jsx)(L.Z, {
                          context: n,
                          application: l,
                          sectionName: o,
                          primaryEntryPointCommand: d,
                          buttonSize: j,
                          playSolo: x
                      })
                  }),
                  h && null != f
                      ? g.altLayout
                          ? (0, i.jsx)('div', {
                                className: Z.altLayout,
                                children: (0, i.jsx)('div', {
                                    className: Z.entryPointContainerFlexChild,
                                    children: (0, i.jsx)(m.XZJ, {
                                        className: Z.entryPointCheckbox,
                                        value: x,
                                        onChange: () => N(!x),
                                        children: (0, i.jsxs)(m.Text, {
                                            variant: 'text-sm/medium',
                                            className: Z.entryPointCheckboxLabel,
                                            children: [
                                                k.NW.string(k.t['e+CzPj']),
                                                (0, i.jsx)(m.ua7, {
                                                    text: k.NW.string(k.t.QOZI8f),
                                                    children: (e) => {
                                                        var t, n;
                                                        return (0, i.jsx)(
                                                            p.d,
                                                            ((t = W({}, e)),
                                                            (n = n = { size: 'xs' }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                : (function (e, t) {
                                                                      var n = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var i = Object.getOwnPropertySymbols(e);
                                                                          n.push.apply(n, i);
                                                                      }
                                                                      return n;
                                                                  })(Object(n)).forEach(function (e) {
                                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                  }),
                                                            t)
                                                        );
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: Z.entryPointContainerFlexChild,
                                children: (0, i.jsx)(w.Z, {
                                    botUserId: f,
                                    applicationId: l.id,
                                    buttonSize: j,
                                    analyticsLocations: b
                                })
                            })
                      : null
              ]
          })
        : c && !s && (0, I.ye)(l)
          ? (0, i.jsx)(m.Wn, {
                className: Z.primaryEntryPointWarningMessage,
                messageType: m.QYI.WARNING,
                children: k.NW.format(k.t['s/3hjI'], {})
            })
          : null;
}
function G(e) {
    let { description: t } = e,
        n = E.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, a] = r.useState(!0);
    r.useLayoutEffect(() => a(n.enabled), [n]);
    let o = r.useMemo(() => (0, g.parseBioReact)(t), [t]),
        {
            ref: s,
            lineHeight: c,
            lineCount: d
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
            if (null == c || null == d) return { key: 0 };
            let e = c * d;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +c),
                maxHeightOverride: e
            };
        }, [d, c]),
        { ref: p, isTransitioning: f, onTransitionEnd: h } = (0, T.Z)(W({ isExpanded: l }, u)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: Z.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: p,
                className: Z.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(m.Text, {
                    ref: s,
                    className: M.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1 && !n.enabled
                ? (0, i.jsxs)(m.P3F, {
                      className: Z.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(m.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? k.NW.string(k.t.u4YJ8v) : k.NW.string(k.t['N/tajI'])
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
let X = [k.t.eCLLn5, k.t.d8pkUF],
    q = [k.t.d8pkUF, k.t.MbWAxs, k.t['8kiRMT'], k.t.GRL3Nj];
