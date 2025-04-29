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
    var t, n, l;
    let { name: v, icon: _, imageSrc: C, iconBackgroundColor: N, iconClassName: I, iconWrapperClassName: S, details: E, integration: P, buttonText: w, buttonDisabled: T, hasNextSection: Z, onButtonClick: k, guildId: A, isScrolling: D, canShowMigrationTooltip: R, trailing: L } = e,
        [M, B] = i.useState(!1),
        [U, W] = i.useState(!1),
        z =
            null == w || null == k
                ? null
                : Z
                  ? (0, r.jsxs)(p.Z, {
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: w
                            }),
                            Z
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
                        size: c.zxk.Sizes.SMALL,
                        look: Z ? c.zxk.Looks.LINK : c.zxk.Looks.FILLED,
                        color: Z ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND,
                        disabled: T,
                        onClick: k,
                        children: w
                    }),
        H = R && !D && !U && void 0 !== A && null != P;
    i.useEffect(() => {
        var e, t;
        H &&
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
                })({}, (0, d.hH)(A))),
                (t = t =
                    {
                        application_id: null == P ? void 0 : P.application.id,
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
    }, [A, null == P ? void 0 : P.application.id, H]);
    let G = H
            ? (0, r.jsx)(c.yRy, {
                  renderPopout: () =>
                      (0, r.jsx)(c.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), W(!0), x.Z.dismissOverviewTooltip(A, P.integration);
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
                  children: () => z
              })
            : z,
        F = (0, s.Wu)([m.Z], () => {
            var e;
            return null != P && null != A && null != (e = m.Z.getApplicationEntitlementsForGuild(P.application.id, A)) ? e : [];
        }),
        V = (0, u.LD)(A, !0),
        K = (null == P ? void 0 : P.application) != null && Object.keys(null != (l = null == (n = V.result) || null == (t = n.sections[P.application.id]) ? void 0 : t.commands) ? l : {}).length > 0,
        q = (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(h.Z, {
                    name: v,
                    icon: _,
                    imageSrc: C,
                    iconBackgroundColor: N,
                    iconClassName: I,
                    iconWrapperClassName: S,
                    details: E,
                    isPremium: F.length > 0
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
                            })(P, M, K),
                            G,
                            L
                        ]
                    })
                })
            ]
        });
    return Z
        ? (0, r.jsx)(c.P3F, {
              onClick: () => {
                  R && null != A && null != P && x.Z.dismissOverviewTooltip(A, P.integration), null == k || k();
              },
              onFocus: () => B(!0),
              onBlur: () => B(!1),
              children: (0, r.jsx)(c.Zbd, {
                  editable: !0,
                  className: o()(y.card, y.clickable),
                  children: q
              })
          })
        : (0, r.jsx)(c.Zbd, {
              editable: !0,
              className: y.card,
              children: q
          });
}
