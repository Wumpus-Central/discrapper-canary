n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(243814),
    s = n(442837),
    d = n(481060),
    c = n(367907),
    u = n(213459),
    m = n(600164),
    h = n(488915),
    p = n(970731),
    g = n(598077),
    x = n(626135),
    f = n(486199),
    b = n(929507),
    v = n(981631),
    C = n(388032),
    N = n(970242);
function I(e) {
    var t, n, r, I, j, T, _;
    let { name: Z, icon: E, imageSrc: S, iconBackgroundColor: y, iconClassName: A, iconWrapperClassName: R, details: L, integration: k, buttonText: O, buttonDisabled: w, hasNextSection: M, onButtonClick: B, guildId: P, isScrolling: D, canShowMigrationTooltip: U, trailing: F } = e,
        [W, H] = l.useState(!1),
        [G, z] = l.useState(!1);
    let V =
            ((I = O),
            (j = w),
            (T = M),
            (_ = B),
            null == I || null == _
                ? null
                : T
                  ? (0, i.jsxs)(m.Z, {
                        align: m.Z.Align.CENTER,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: I
                            }),
                            T
                                ? (0, i.jsx)(d.ChevronSmallRightIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 10,
                                      height: 10,
                                      className: N.caret
                                  })
                                : null
                        ]
                    })
                  : (0, i.jsx)(d.Button, {
                        size: d.Button.Sizes.SMALL,
                        look: T ? d.Button.Looks.LINK : d.Button.Looks.FILLED,
                        color: T ? d.Button.Colors.PRIMARY : d.Button.Colors.BRAND,
                        disabled: j,
                        onClick: _,
                        children: I
                    })),
        K = U && !D && !G && void 0 !== P && null != k;
    l.useEffect(() => {
        K &&
            x.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, c.hH)(P),
                application_id: null == k ? void 0 : k.application.id,
                location: 'overview'
            });
    }, [P, null == k ? void 0 : k.application.id, K]);
    let q = K
            ? (0, i.jsx)(d.Popout, {
                  renderPopout: () =>
                      (0, i.jsx)(d.Clickable, {
                          onClick: (e) => {
                              e.stopPropagation(), z(!0), b.Z.dismissOverviewTooltip(P, k.integration);
                          },
                          children: (0, i.jsx)(p.ZP, {
                              content: C.intl.string(C.t.TyMJwM),
                              onClick: () => {}
                          })
                      }),
                  position: 'bottom',
                  align: 'center',
                  animation: d.Popout.Animation.TRANSLATE,
                  shouldShow: !0,
                  children: () => V
              })
            : V,
        Y = (0, s.Wu)([h.Z], () => {
            var e;
            return null != k && null != P && null !== (e = h.Z.getApplicationEntitlementsForGuild(k.application.id, P)) && void 0 !== e ? e : [];
        }),
        J = (0, u.LD)(P, !0),
        X = (null == k ? void 0 : k.application) != null && Object.keys(null !== (r = null === (n = J.result) || void 0 === n ? void 0 : null === (t = n.sections[k.application.id]) || void 0 === t ? void 0 : t.commands) && void 0 !== r ? r : {}).length > 0,
        Q = (0, i.jsxs)(m.Z, {
            children: [
                (0, i.jsx)(f.Z, {
                    name: Z,
                    icon: E,
                    imageSrc: S,
                    iconBackgroundColor: y,
                    iconClassName: A,
                    iconWrapperClassName: R,
                    details: L,
                    isPremium: Y.length > 0
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
                                let r = [],
                                    { application: a, integration: s, webhooks: c } = e;
                                return (
                                    null != a.bot &&
                                        r.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: t,
                                                    text: new g.Z(a.bot).isVerifiedBot() ? C.intl.string(C.t.xxcTGx) : C.intl.string(C.t.AOdOYm),
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.RobotIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'bot'
                                            )
                                        ),
                                    c.length > 0 &&
                                        r.push(
                                            (0, i.jsx)(
                                                d.TooltipContainer,
                                                {
                                                    forceOpen: t,
                                                    text: C.intl.formatToPlainString(C.t['6HqDfX'], { count: c.length }),
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.WebhookIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'webhooks'
                                            )
                                        ),
                                    (null == s ? void 0 : null === (l = s.scopes) || void 0 === l ? void 0 : l.includes(o.x.APPLICATIONS_COMMANDS)) === !0 &&
                                        n &&
                                        r.push(
                                            (0, i.jsx)(
                                                'div',
                                                {
                                                    className: N.feature,
                                                    children: (0, i.jsx)(d.SlashBoxIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: N.featureIcon
                                                    })
                                                },
                                                'commands'
                                            )
                                        ),
                                    r
                                );
                            })(k, W, X),
                            q,
                            F
                        ]
                    })
                })
            ]
        });
    return M
        ? (0, i.jsx)(d.Clickable, {
              onClick: () => {
                  U && null != P && null != k && b.Z.dismissOverviewTooltip(P, k.integration), null == B || B();
              },
              onFocus: () => H(!0),
              onBlur: () => H(!1),
              children: (0, i.jsx)(d.Card, {
                  editable: !0,
                  className: a()(N.card, N.clickable),
                  children: Q
              })
          })
        : (0, i.jsx)(d.Card, {
              editable: !0,
              className: N.card,
              children: Q
          });
}
