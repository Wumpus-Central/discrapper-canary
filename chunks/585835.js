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
    b = n(486199),
    _ = n(929507),
    f = n(981631),
    v = n(388032),
    C = n(588741);
function j(e) {
    var t, n, a;
    let { name: j, icon: N, imageSrc: I, iconBackgroundColor: Z, iconClassName: T, iconWrapperClassName: E, details: S, integration: y, buttonText: A, buttonDisabled: k, hasNextSection: R, onButtonClick: L, guildId: w, isScrolling: O, canShowMigrationTooltip: P, trailing: D } = e,
        [M, B] = l.useState(!1),
        [U, W] = l.useState(!1),
        H =
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
                                      className: C.caret
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
        z = P && !O && !U && void 0 !== w && null != y;
    l.useEffect(() => {
        z &&
            p.default.track(f.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, c.hH)(w),
                application_id: null == y ? void 0 : y.application.id,
                location: 'overview'
            });
    }, [w, null == y ? void 0 : y.application.id, z]);
    let G = z
            ? (0, i.jsx)(d.yRy, {
                  renderPopout: () =>
                      (0, i.jsx)(d.P3F, {
                          onClick: (e) => {
                              e.stopPropagation(), W(!0), _.Z.dismissOverviewTooltip(w, y.integration);
                          },
                          children: (0, i.jsx)(x.ZP, {
                              content: v.intl.string(v.t.TyMJwM),
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: d.yRy.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => H
              })
            : H,
        F = (0, o.Wu)([h.Z], () => {
            var e;
            return null != y && null != w && null !== (e = h.Z.getApplicationEntitlementsForGuild(y.application.id, w)) && void 0 !== e ? e : [];
        }),
        V = (0, u.LD)(w, !0),
        K = (null == y ? void 0 : y.application) != null && Object.keys(null !== (a = null === (n = V.result) || void 0 === n ? void 0 : null === (t = n.sections[y.application.id]) || void 0 === t ? void 0 : t.commands) && void 0 !== a ? a : {}).length > 0,
        q = (0, i.jsxs)(m.Z, {
            children: [
                (0, i.jsx)(b.Z, {
                    name: j,
                    icon: N,
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
                                                    text: new g.Z(r.bot).isVerifiedBot() ? v.intl.string(v.t.xxcTGx) : v.intl.string(v.t.AOdOYm),
                                                    className: C.feature,
                                                    children: (0, i.jsx)(d.wGt, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: C.featureIcon
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
                                                    text: v.intl.formatToPlainString(v.t['6HqDfX'], { count: c.length }),
                                                    className: C.feature,
                                                    children: (0, i.jsx)(d.tYf, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: C.featureIcon
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
                                                    className: C.feature,
                                                    children: (0, i.jsx)(d.SsZ, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: C.featureIcon
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
                  P && null != w && null != y && _.Z.dismissOverviewTooltip(w, y.integration), null == L || L();
              },
              onFocus: () => B(!0),
              onBlur: () => B(!1),
              children: (0, i.jsx)(d.Zbd, {
                  editable: !0,
                  className: r()(C.card, C.clickable),
                  children: q
              })
          })
        : (0, i.jsx)(d.Zbd, {
              editable: !0,
              className: C.card,
              children: q
          });
}
