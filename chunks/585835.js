n.d(t, { Z: () => C }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(243814),
    s = n(442837),
    c = n(28664),
    d = n(755721),
    u = n(481060),
    p = n(367907),
    m = n(213459),
    b = n(600164),
    g = n(488915),
    f = n(970731),
    h = n(598077),
    x = n(626135),
    j = n(486199),
    v = n(929507),
    y = n(981631),
    O = n(388032),
    _ = n(473059);
function C(e) {
    var t, n, l;
    let {
            name: C,
            icon: N,
            imageSrc: Z,
            iconBackgroundColor: S,
            iconClassName: w,
            iconWrapperClassName: I,
            details: T,
            integration: P,
            buttonText: E,
            buttonDisabled: k,
            hasNextSection: A,
            onButtonClick: D,
            guildId: R,
            isScrolling: L,
            canShowMigrationTooltip: M,
            trailing: B,
        } = e,
        [W, U] = r.useState(!1),
        [H, G] = r.useState(!1),
        z = M && !L && !H && void 0 !== R && null != P,
        F = r.useRef(null),
        K = r.useRef(null),
        V = r.useCallback(
            (e, t, n, r) =>
                null == e || null == r
                    ? null
                    : n
                      ? (0, i.jsxs)(b.Z, {
                            align: b.Z.Align.CENTER,
                            ref: K,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: e,
                                }),
                                n
                                    ? (0, i.jsx)(u.Fbu, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 10,
                                          height: 10,
                                          className: _.caret,
                                      })
                                    : null,
                            ],
                        })
                      : (0, i.jsx)(d.zx, {
                            buttonRef: F,
                            size: d.zx.Sizes.SMALL,
                            look: n ? d.zx.Looks.LINK : d.zx.Looks.FILLED,
                            color: n ? d.zx.Colors.PRIMARY : d.zx.Colors.BRAND,
                            disabled: t,
                            onClick: r,
                            children: e,
                        }),
            [F, K],
        )(E, k, A, D);
    r.useEffect(() => {
        var e, t;
        z &&
            x.default.track(
                y.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, (0, p.hH)(R))),
                (t = t =
                    {
                        application_id: null == P ? void 0 : P.application.id,
                        location: "overview",
                    }),
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
                e),
            );
    }, [R, null == P ? void 0 : P.application.id, z]);
    let q = z
            ? (0, i.jsx)(u.yRy, {
                  targetElementRef: A ? K : F,
                  renderPopout: () =>
                      (0, i.jsx)(u.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), G(!0), v.Z.dismissOverviewTooltip(R, P.integration);
                          },
                          children: (0, i.jsx)(f.ZP, {
                              content: O.intl.string(O.t.TyMJwM),
                              onClick: () => {},
                          }),
                      }),
                  position: "bottom",
                  align: "center",
                  animation: u.yRy.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => V,
              })
            : V,
        Y = (0, s.Wu)([g.Z], () => {
            var e;
            return null != P && null != R && null != (e = g.Z.getApplicationEntitlementsForGuild(P.application.id, R))
                ? e
                : [];
        }),
        $ = (0, m.LD)(R, !0),
        J =
            (null == P ? void 0 : P.application) != null &&
            Object.keys(
                null != (l = null == (n = $.result) || null == (t = n.sections[P.application.id]) ? void 0 : t.commands)
                    ? l
                    : {},
            ).length > 0,
        X = (0, i.jsxs)(b.Z, {
            children: [
                (0, i.jsx)(j.Z, {
                    name: C,
                    icon: N,
                    imageSrc: Z,
                    iconBackgroundColor: S,
                    iconClassName: w,
                    iconWrapperClassName: I,
                    details: T,
                    isPremium: Y.length > 0,
                }),
                (0, i.jsx)(b.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(b.Z, {
                        align: b.Z.Align.CENTER,
                        justify: b.Z.Justify.END,
                        children: [
                            (function (e, t, n) {
                                var r, l;
                                if (null == e) return null;
                                let a = [],
                                    { application: s, integration: d, webhooks: p } = e;
                                return (
                                    null != s.bot &&
                                        (null == d || null == (r = d.scopes) ? void 0 : r.includes(o.x.BOT)) &&
                                        a.push(
                                            (0, i.jsx)(
                                                c.u,
                                                {
                                                    asContainer: !0,
                                                    forceOpen: t,
                                                    text: new h.Z(s.bot).isVerifiedBot()
                                                        ? O.intl.string(O.t.xxcTGx)
                                                        : O.intl.string(O.t.AOdOYm),
                                                    children: (0, i.jsx)(u.wGt, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: _.featureIcon,
                                                    }),
                                                },
                                                "bot",
                                            ),
                                        ),
                                    p.length > 0 &&
                                        a.push(
                                            (0, i.jsx)(
                                                c.u,
                                                {
                                                    asContainer: !0,
                                                    forceOpen: t,
                                                    text: O.intl.formatToPlainString(O.t["6HqDfX"], {
                                                        count: p.length,
                                                    }),
                                                    children: (0, i.jsx)(u.tYf, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: _.featureIcon,
                                                    }),
                                                },
                                                "webhooks",
                                            ),
                                        ),
                                    (null == d || null == (l = d.scopes)
                                        ? void 0
                                        : l.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        n &&
                                        a.push(
                                            (0, i.jsx)(
                                                c.u,
                                                {
                                                    asContainer: !0,
                                                    forceOpen: t,
                                                    text: O.intl.string(O.t["0hKkS0"]),
                                                    children: (0, i.jsx)(u.SsZ, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: _.featureIcon,
                                                    }),
                                                },
                                                "commands",
                                            ),
                                        ),
                                    a
                                );
                            })(P, W, J),
                            q,
                            B,
                        ],
                    }),
                }),
            ],
        });
    return A
        ? (0, i.jsx)(u.P3F, {
              onClick: () => {
                  M && null != R && null != P && v.Z.dismissOverviewTooltip(R, P.integration), null == D || D();
              },
              onFocus: () => U(!0),
              onBlur: () => U(!1),
              children: (0, i.jsx)(u.Zbd, {
                  editable: !0,
                  className: a()(_.card, _.clickable),
                  children: X,
              }),
          })
        : (0, i.jsx)(u.Zbd, {
              editable: !0,
              className: _.card,
              children: X,
          });
}
