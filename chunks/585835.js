n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(243814),
    s = n(442837),
    c = n(481060),
    d = n(367907),
    u = n(213459),
    p = n(600164),
    m = n(488915),
    b = n(970731),
    g = n(598077),
    f = n(626135),
    h = n(486199),
    x = n(929507),
    j = n(981631),
    O = n(388032),
    y = n(694095);
function v(e) {
    var t, n, l, v, _, C, N;
    let { name: I, icon: S, imageSrc: E, iconBackgroundColor: P, iconClassName: w, iconWrapperClassName: T, details: Z, integration: k, buttonText: A, buttonDisabled: D, hasNextSection: R, onButtonClick: L, guildId: M, isScrolling: B, canShowMigrationTooltip: U, trailing: W } = e,
        [z, H] = i.useState(!1),
        [G, F] = i.useState(!1),
        V =
            ((v = A),
            (_ = D),
            (C = R),
            (N = L),
            null == v || null == N
                ? null
                : C
                  ? (0, r.jsxs)(p.Z, {
                        align: p.Z.Align.CENTER,
                        ref: Y,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: v
                            }),
                            C
                                ? (0, r.jsx)(c.Fbu, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: y.caret
                                  })
                                : null
                        ]
                    })
                  : (0, r.jsx)(c.zxk, {
                        buttonRef: q,
                        size: c.zxk.Sizes.SMALL,
                        look: C ? c.zxk.Looks.LINK : c.zxk.Looks.FILLED,
                        color: C ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND,
                        disabled: _,
                        onClick: N,
                        children: v
                    })),
        K = U && !B && !G && void 0 !== M && null != k,
        q = i.useRef(null),
        Y = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        K &&
            f.default.track(
                j.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, (0, d.hH)(M))),
                (t = t =
                    {
                        application_id: null == k ? void 0 : k.application.id,
                        location: 'overview'
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e)
            );
    }, [M, null == k ? void 0 : k.application.id, K]);
    let X = K
            ? (0, r.jsx)(c.yRy, {
                  targetElementRef: R ? Y : q,
                  renderPopout: () =>
                      (0, r.jsx)(c.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), F(!0), x.Z.dismissOverviewTooltip(M, k.integration);
                          },
                          children: (0, r.jsx)(b.ZP, {
                              content: O.intl.string(O.t.TyMJwM),
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: c.yRy.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => V
              })
            : V,
        $ = (0, s.Wu)([m.Z], () => {
            var e;
            return null != k && null != M && null != (e = m.Z.getApplicationEntitlementsForGuild(k.application.id, M)) ? e : [];
        }),
        J = (0, u.LD)(M, !0),
        Q = (null == k ? void 0 : k.application) != null && Object.keys(null != (l = null == (n = J.result) || null == (t = n.sections[k.application.id]) ? void 0 : t.commands) ? l : {}).length > 0,
        ee = (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(h.Z, {
                    name: I,
                    icon: S,
                    imageSrc: E,
                    iconBackgroundColor: P,
                    iconClassName: w,
                    iconWrapperClassName: T,
                    details: Z,
                    isPremium: $.length > 0
                }),
                (0, r.jsx)(p.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, r.jsxs)(p.Z, {
                        align: p.Z.Align.CENTER,
                        justify: p.Z.Justify.END,
                        children: [
                            (function (e, t, n) {
                                var i;
                                if (null == e) return null;
                                let l = [],
                                    { application: o, integration: s, webhooks: d } = e;
                                return (
                                    null != o.bot &&
                                        l.push(
                                            (0, r.jsx)(
                                                c.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: new g.Z(o.bot).isVerifiedBot() ? O.intl.string(O.t.xxcTGx) : O.intl.string(O.t.AOdOYm),
                                                    className: y.feature,
                                                    children: (0, r.jsx)(c.wGt, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: y.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    d.length > 0 &&
                                        l.push(
                                            (0, r.jsx)(
                                                c.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: O.intl.formatToPlainString(O.t['6HqDfX'], { count: d.length }),
                                                    className: y.feature,
                                                    children: (0, r.jsx)(c.tYf, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: y.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == s || null == (i = s.scopes) ? void 0 : i.includes(a.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        n &&
                                        l.push(
                                            (0, r.jsx)(
                                                'div',
                                                {
                                                    className: y.feature,
                                                    children: (0, r.jsx)(c.SsZ, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: y.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    l
                                );
                            })(k, z, Q),
                            X,
                            W
                        ]
                    })
                })
            ]
        });
    return R
        ? (0, r.jsx)(c.P3F, {
              onClick: () => {
                  U && null != M && null != k && x.Z.dismissOverviewTooltip(M, k.integration), null == L || L();
              },
              onFocus: () => H(!0),
              onBlur: () => H(!1),
              children: (0, r.jsx)(c.Zbd, {
                  editable: !0,
                  className: o()(y.card, y.clickable),
                  children: ee
              })
          })
        : (0, r.jsx)(c.Zbd, {
              editable: !0,
              className: y.card,
              children: ee
          });
}
