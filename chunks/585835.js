n.d(t, { Z: () => j }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(243814),
    o = n(442837),
    d = n(481060),
    c = n(367907),
    u = n(213459),
    m = n(600164),
    h = n(488915),
    x = n(970731),
    g = n(598077),
    p = n(626135),
    f = n(486199),
    b = n(929507),
    v = n(981631),
    _ = n(388032),
    N = n(295285);
function j(e) {
    var t, n, a;
    let { name: j, icon: C, imageSrc: I, iconBackgroundColor: Z, iconClassName: T, iconWrapperClassName: E, details: S, integration: y, buttonText: A, buttonDisabled: k, hasNextSection: R, onButtonClick: L, guildId: O, isScrolling: w, canShowMigrationTooltip: P, trailing: D } = e,
        [M, B] = l.useState(!1),
        [U, W] = l.useState(!1),
        z =
            null == A || null == L
                ? null
                : R
                  ? (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: A
                            }),
                            R
                                ? (0, i.jsx)(d.Fbu, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: N.caret
                                  })
                                : null
                        ]
                    })
                  : (0, i.jsx)(d.zxk, {
                        size: d.zxk.Sizes.SMALL,
                        look: R ? d.zxk.Looks.LINK : d.zxk.Looks.FILLED,
                        color: R ? d.zxk.Colors.PRIMARY : d.zxk.Colors.BRAND,
                        disabled: k,
                        onClick: L,
                        children: A
                    }),
        H = P && !w && !U && void 0 !== O && null != y;
    l.useEffect(() => {
        H &&
            p.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, c.hH)(O),
                application_id: null == y ? void 0 : y.application.id,
                location: 'overview'
            });
    }, [O, null == y ? void 0 : y.application.id, H]);
    let G = H
            ? (0, i.jsx)(d.yRy, {
                  renderPopout: () =>
                      (0, i.jsx)(d.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), W(!0), b.Z.dismissOverviewTooltip(O, y.integration);
                          },
                          children: (0, i.jsx)(x.ZP, {
                              content: _.intl.string(_.t.TyMJwM),
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: d.yRy.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => z
              })
            : z,
        F = (0, o.Wu)([h.Z], () => {
            var e;
            return null != y && null != O && null !== (e = h.Z.getApplicationEntitlementsForGuild(y.application.id, O)) && void 0 !== e ? e : [];
        }),
        V = (0, u.LD)(O, !0),
        K = (null == y ? void 0 : y.application) != null && Object.keys(null !== (a = null === (n = V.result) || void 0 === n ? void 0 : null === (t = n.sections[y.application.id]) || void 0 === t ? void 0 : t.commands) && void 0 !== a ? a : {}).length > 0,
        q = (0, i.jsxs)(m.Z, {
            children: [
                (0, i.jsx)(f.Z, {
                    name: j,
                    icon: C,
                    imageSrc: I,
                    iconBackgroundColor: Z,
                    iconClassName: T,
                    iconWrapperClassName: E,
                    details: S,
                    isPremium: F.length > 0
                }),
                (0, i.jsx)(m.Z.Child, {
                    shrink: 0,
                    grow: 0,
                    children: (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        justify: m.Z.Justify.END,
                        children: [
                            (function (e, t, n) {
                                var l;
                                if (null == e) return null;
                                let a = [],
                                    { application: r, integration: o, webhooks: c } = e;
                                return (
                                    null != r.bot &&
                                        a.push(
                                            (0, i.jsx)(
                                                d.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: new g.Z(r.bot).isVerifiedBot() ? _.intl.string(_.t.xxcTGx) : _.intl.string(_.t.AOdOYm),
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.wGt, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    c.length > 0 &&
                                        a.push(
                                            (0, i.jsx)(
                                                d.DY3,
                                                {
                                                    forceOpen: t,
                                                    text: _.intl.formatToPlainString(_.t['6HqDfX'], { count: c.length }),
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.tYf, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == o ? void 0 : null === (l = o.scopes) || void 0 === l ? void 0 : l.includes(s.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        n &&
                                        a.push(
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.SsZ, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    a
                                );
                            })(y, M, K),
                            G,
                            D
                        ]
                    })
                })
            ]
        });
    return R
        ? (0, i.jsx)(d.P3F, {
              onClick: () => {
                  P && null != O && null != y && b.Z.dismissOverviewTooltip(O, y.integration), null == L || L();
              },
              onFocus: () => B(!0),
              onBlur: () => B(!1),
              children: (0, i.jsx)(d.Zbd, {
                  editable: !0,
                  className: r()(N.card, N.clickable),
                  children: q
              })
          })
        : (0, i.jsx)(d.Zbd, {
              editable: !0,
              className: N.card,
              children: q
          });
}
