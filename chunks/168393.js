var n = e(477900),
    s = e(582128),
    o = e(885996),
    a = e(423090),
    d = e(715641),
    l = e(272859),
    c = e(955440),
    r = e(3432),
    p = e(185438),
    u = e(371794),
    b = e(998218),
    m = e(550732),
    h = e(376374),
    k = e(752166);
e.d(
    t,
    {},
    {
        SubscriptionDetailsModal: function (i) {
            let {
                    appId: t,
                    subscriptionType: e,
                    onClose: I,
                    skuId: f,
                    guildId: v,
                    transitionState: C,
                    onHeaderTitleClick: j,
                } = i,
                { data: x } = (0, c.A)(f),
                S = x?.[0],
                { data: g } = (0, l.d)(f),
                M = s.useMemo(
                    () => (g?.thumbnail != null ? (b.A.toURLSafe((0, u.YE)(t, g.thumbnail, 256)) ?? void 0) : void 0),
                    [t, g?.thumbnail],
                ),
                y = s.useMemo(() => {
                    let i = g?.benefits;
                    if (null != i && 0 !== i.length)
                        return i.map((i) => ({
                            id: i.id,
                            title: i.name,
                            description: i.description,
                            icon: (0, r.N)(t, i.icon),
                        }));
                }, [t, g?.benefits]),
                { openModal: A, subscriptionPurchaseButtonState: F } = (0, p.A)({
                    skuId: f,
                    initialSubscribeForGuild: v ?? void 0,
                });
            return null == g
                ? null
                : (0, n.jsx)(m.C, {
                      appId: t,
                      skuId: f,
                      transitionState: C,
                      onHeaderTitleClick: j ?? I,
                      onClose: I,
                      footer: (0, n.jsx)(h.rc, {
                          onClick: A,
                          appId: t,
                          subscriptionType: e,
                          skuId: f,
                          subscriptionPlan: S,
                          state: F,
                      }),
                      children: (0, n.jsx)(k.D, {
                          appId: t,
                          skuId: f,
                          benefits:
                              null != y
                                  ? y.map((i) =>
                                        (0, n.jsx)(
                                            o.F,
                                            { header: i.title, icon: i.icon, description: i.description },
                                            i.id,
                                        ),
                                    )
                                  : void 0,
                          description: g.description ?? void 0,
                          imgSrc: M,
                          title: S?.name ?? g.summary,
                          tag: (0, n.jsx)(a.M, { type: e }),
                          FallbackIcon: d.BadgeIcon,
                      }),
                  });
        },
    },
);
