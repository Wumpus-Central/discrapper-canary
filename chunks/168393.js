e.r(t), e.d(t, { SubscriptionDetailsModal: () => f });
var n = e(627968),
    s = e(64700),
    o = e(885996),
    a = e(423090),
    d = e(715641),
    l = e(272859),
    r = e(955440),
    c = e(473545),
    p = e(185438),
    u = e(371794),
    b = e(998218),
    m = e(550732),
    h = e(376374),
    k = e(888781);
function f(i) {
    let {
            appId: t,
            subscriptionType: e,
            onClose: f,
            skuId: I,
            guildId: v,
            transitionState: C,
            onHeaderTitleClick: j,
        } = i,
        { data: x } = (0, r.A)(I),
        S = x?.[0],
        { data: M } = (0, l.d)(I),
        g = s.useMemo(
            () => (M?.thumbnail != null ? (b.A.toURLSafe((0, u.YE)(t, M.thumbnail, 256)) ?? void 0) : void 0),
            [t, M?.thumbnail],
        ),
        y = s.useMemo(() => {
            let i = M?.benefits;
            if (null != i && 0 !== i.length)
                return i.map((i) => ({
                    id: i.id,
                    title: i.name,
                    description: i.description,
                    icon: (0, c.N)(t, i.icon),
                }));
        }, [t, M?.benefits]),
        { openModal: A, subscriptionPurchaseButtonState: F } = (0, p.A)({
            skuId: I,
            initialSubscribeForGuild: v ?? void 0,
        });
    return null == M
        ? null
        : (0, n.jsx)(m.C, {
              appId: t,
              skuId: I,
              transitionState: C,
              onHeaderTitleClick: j ?? f,
              onClose: f,
              footer: (0, n.jsx)(h.rc, {
                  onClick: A,
                  appId: t,
                  subscriptionType: e,
                  skuId: I,
                  subscriptionPlan: S,
                  state: F,
              }),
              children: (0, n.jsx)(k.D, {
                  appId: t,
                  skuId: I,
                  benefits:
                      null != y
                          ? y.map((i) =>
                                (0, n.jsx)(o.FY, { header: i.title, icon: i.icon, description: i.description }, i.id),
                            )
                          : void 0,
                  description: M.description ?? void 0,
                  imgSrc: g,
                  title: S?.name ?? M.summary,
                  tag: (0, n.jsx)(a.M, { type: e }),
                  FallbackIcon: d.b,
              }),
          });
}
