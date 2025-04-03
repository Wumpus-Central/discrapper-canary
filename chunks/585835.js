n.d(t, { Z: () => v }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
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
    N = n(388032),
    O = n(694095);
function v(e) {
    var t, n, l;
    let { name: v, icon: y, imageSrc: _, iconBackgroundColor: C, iconClassName: I, iconWrapperClassName: S, details: E, integration: P, buttonText: w, buttonDisabled: T, hasNextSection: Z, onButtonClick: W, guildId: k, isScrolling: A, canShowMigrationTooltip: D, trailing: R } = e,
        [L, M] = i.useState(!1),
        [B, U] = i.useState(!1),
        z =
            null == w || null == W
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
                                      className: O.caret
                                  })
                                : null
                        ]
                    })
                  : (0, r.jsx)(c.zxk, {
                        size: c.zxk.Sizes.SMALL,
                        look: Z ? c.zxk.Looks.LINK : c.zxk.Looks.FILLED,
                        color: Z ? c.zxk.Colors.PRIMARY : c.zxk.Colors.BRAND,
                        disabled: T,
                        onClick: W,
                        children: w
                    }),
        H = D && !A && !B && void 0 !== k && null != P;
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
                })({}, (0, d.hH)(k))),
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
    }, [k, null == P ? void 0 : P.application.id, H]);
    let G = H
            ? (0, r.jsx)(c.yRy, {
                  renderPopout: () =>
                      (0, r.jsx)(c.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), U(!0), x.Z.dismissOverviewTooltip(k, P.integration);
                          },
                          children: (0, r.jsx)(b.ZP, {
                              content: N.NW.string(N.t.TyMJwM),
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
            return null != P && null != k && null != (e = m.Z.getApplicationEntitlementsForGuild(P.application.id, k)) ? e : [];
        }),
        V = (0, u.LD)(k, !0),
        K = (null == P ? void 0 : P.application) != null && Object.keys(null != (l = null == (n = V.result) || null == (t = n.sections[P.application.id]) ? void 0 : t.commands) ? l : {}).length > 0,
        q = (0, r.jsxs)(p.Z, {
            children: [
                (0, r.jsx)(h.Z, {
                    name: v,
                    icon: y,
                    imageSrc: _,
                    iconBackgroundColor: C,
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
                                                    text: new g.Z(o.bot).isVerifiedBot() ? N.NW.string(N.t.xxcTGx) : N.NW.string(N.t.AOdOYm),
                                                    className: O.feature,
                                                    children: (0, r.jsx)(c.wGt, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: O.featureIcon
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
                                                    text: N.NW.formatToPlainString(N.t['6HqDfX'], { count: d.length }),
                                                    className: O.feature,
                                                    children: (0, r.jsx)(c.tYf, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: O.featureIcon
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
                                                    className: O.feature,
                                                    children: (0, r.jsx)(c.SsZ, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: O.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    l
                                );
                            })(P, L, K),
                            G,
                            R
                        ]
                    })
                })
            ]
        });
    return Z
        ? (0, r.jsx)(c.P3F, {
              onClick: () => {
                  D && null != k && null != P && x.Z.dismissOverviewTooltip(k, P.integration), null == W || W();
              },
              onFocus: () => M(!0),
              onBlur: () => M(!1),
              children: (0, r.jsx)(c.Zbd, {
                  editable: !0,
                  className: o()(O.card, O.clickable),
                  children: q
              })
          })
        : (0, r.jsx)(c.Zbd, {
              editable: !0,
              className: O.card,
              children: q
          });
}
