n.d(t, { Z: () => _ }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(243814),
    s = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(367907),
    p = n(213459),
    m = n(600164),
    b = n(488915),
    g = n(970731),
    f = n(598077),
    h = n(626135),
    x = n(486199),
    j = n(929507),
    v = n(981631),
    y = n(388032),
    O = n(473059);
function _(e) {
    var t, n, l;
    let {
            name: _,
            icon: C,
            imageSrc: N,
            iconBackgroundColor: Z,
            iconClassName: S,
            iconWrapperClassName: w,
            details: T,
            integration: I,
            buttonText: P,
            buttonDisabled: E,
            hasNextSection: k,
            onButtonClick: A,
            guildId: D,
            isScrolling: R,
            canShowMigrationTooltip: L,
            trailing: M,
        } = e,
        [B, W] = r.useState(!1),
        [U, H] = r.useState(!1),
        G = L && !R && !U && void 0 !== D && null != I,
        z = r.useRef(null),
        F = r.useRef(null),
        K = r.useCallback(
            (e, t, n, r) =>
                null == e || null == r
                    ? null
                    : n
                      ? (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            ref: F,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: e,
                                }),
                                n
                                    ? (0, i.jsx)(d.Fbu, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 10,
                                          height: 10,
                                          className: O.caret,
                                      })
                                    : null,
                            ],
                        })
                      : (0, i.jsx)(c.zx, {
                            buttonRef: z,
                            size: c.zx.Sizes.SMALL,
                            look: n ? c.zx.Looks.LINK : c.zx.Looks.FILLED,
                            color: n ? c.zx.Colors.PRIMARY : c.zx.Colors.BRAND,
                            disabled: t,
                            onClick: r,
                            children: e,
                        }),
            [z, F],
        )(P, E, k, A);
    r.useEffect(() => {
        var e, t;
        G &&
            h.default.track(
                v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
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
                })({}, (0, u.hH)(D))),
                (t = t =
                    {
                        application_id: null == I ? void 0 : I.application.id,
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
    }, [D, null == I ? void 0 : I.application.id, G]);
    let V = G
            ? (0, i.jsx)(d.yRy, {
                  targetElementRef: k ? F : z,
                  renderPopout: () =>
                      (0, i.jsx)(d.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), H(!0), j.Z.dismissOverviewTooltip(D, I.integration);
                          },
                          children: (0, i.jsx)(g.ZP, {
                              content: y.intl.string(y.t.TyMJwM),
                              onClick: () => {},
                          }),
                      }),
                  position: "bottom",
                  align: "center",
                  animation: d.yRy.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => K,
              })
            : K,
        q = (0, s.Wu)([b.Z], () => {
            var e;
            return null != I && null != D && null != (e = b.Z.getApplicationEntitlementsForGuild(I.application.id, D))
                ? e
                : [];
        }),
        Y = (0, p.LD)(D, !0),
        $ =
            (null == I ? void 0 : I.application) != null &&
            Object.keys(
                null != (l = null == (n = Y.result) || null == (t = n.sections[I.application.id]) ? void 0 : t.commands)
                    ? l
                    : {},
            ).length > 0,
        J = (0, i.jsxs)(m.Z, {
            children: [
                (0, i.jsx)(x.Z, {
                    name: _,
                    icon: C,
                    imageSrc: N,
                    iconBackgroundColor: Z,
                    iconClassName: S,
                    iconWrapperClassName: w,
                    details: T,
                    isPremium: q.length > 0,
                }),
                (0, i.jsx)(m.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        justify: m.Z.Justify.END,
                        children: [
                            (function (e, t, n) {
                                var r, l;
                                if (null == e) return null;
                                let a = [],
                                    { application: s, integration: c, webhooks: u } = e;
                                return (
                                    null != s.bot &&
                                        (null == c || null == (r = c.scopes) ? void 0 : r.includes(o.x.BOT)) &&
                                        a.push(
                                            (0, i.jsx)(
                                                d.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: new f.Z(s.bot).isVerifiedBot()
                                                        ? y.intl.string(y.t.xxcTGx)
                                                        : y.intl.string(y.t.AOdOYm),
                                                    className: O.feature,
                                                    children: (0, i.jsx)(d.wGt, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: O.featureIcon,
                                                    }),
                                                },
                                                "bot",
                                            ),
                                        ),
                                    u.length > 0 &&
                                        a.push(
                                            (0, i.jsx)(
                                                d.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: y.intl.formatToPlainString(y.t["6HqDfX"], {
                                                        count: u.length,
                                                    }),
                                                    className: O.feature,
                                                    children: (0, i.jsx)(d.tYf, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: O.featureIcon,
                                                    }),
                                                },
                                                "webhooks",
                                            ),
                                        ),
                                    (null == c || null == (l = c.scopes)
                                        ? void 0
                                        : l.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        n &&
                                        a.push(
                                            (0, i.jsx)(
                                                d.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: y.intl.string(y.t["0hKkS0"]),
                                                    className: O.feature,
                                                    children: (0, i.jsx)(d.SsZ, {
                                                        size: "md",
                                                        color: "currentColor",
                                                        className: O.featureIcon,
                                                    }),
                                                },
                                                "commands",
                                            ),
                                        ),
                                    a
                                );
                            })(I, B, $),
                            V,
                            M,
                        ],
                    }),
                }),
            ],
        });
    return k
        ? (0, i.jsx)(d.P3F, {
              onClick: () => {
                  L && null != D && null != I && j.Z.dismissOverviewTooltip(D, I.integration), null == A || A();
              },
              onFocus: () => W(!0),
              onBlur: () => W(!1),
              children: (0, i.jsx)(d.Zbd, {
                  editable: !0,
                  className: a()(O.card, O.clickable),
                  children: J,
              }),
          })
        : (0, i.jsx)(d.Zbd, {
              editable: !0,
              className: O.card,
              children: J,
          });
}
