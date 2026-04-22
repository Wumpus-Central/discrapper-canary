n.r(t), n.d(t, { SubscriptionDetailsModal: () => C });
var a = n(627968),
    l = n(64700),
    r = n(885996),
    i = n(423090),
    s = n(715641),
    o = n(272859),
    d = n(955440),
    c = n(3432),
    u = n(185438),
    m = n(371794),
    _ = n(998218),
    p = n(550732),
    h = n(376374),
    A = n(86889);
function C(e) {
    let {
            appId: t,
            subscriptionType: n,
            onClose: C,
            skuId: x,
            guildId: f,
            transitionState: E,
            onHeaderTitleClick: I,
        } = e,
        { data: N } = (0, d.A)(x),
        g = N?.[0],
        { data: v } = (0, o.d)(x),
        T = l.useMemo(
            () => (v?.thumbnail != null ? (_.A.toURLSafe((0, m.YE)(t, v.thumbnail, 256)) ?? void 0) : void 0),
            [t, v?.thumbnail],
        ),
        b = l.useMemo(() => {
            let e = v?.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.N)(t, e.icon),
                }));
        }, [t, v?.benefits]),
        { openModal: S, subscriptionPurchaseButtonState: j } = (0, u.A)({
            skuId: x,
            initialSubscribeForGuild: f ?? void 0,
        });
    return null == v
        ? null
        : (0, a.jsx)(p.C, {
              appId: t,
              skuId: x,
              transitionState: E,
              onHeaderTitleClick: I ?? C,
              onClose: C,
              footer: (0, a.jsx)(h.rc, {
                  onClick: S,
                  appId: t,
                  subscriptionType: n,
                  skuId: x,
                  subscriptionPlan: g,
                  state: j,
              }),
              children: (0, a.jsx)(A.D, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != b
                          ? b.map((e) =>
                                (0, a.jsx)(r.FY, { header: e.title, icon: e.icon, description: e.description }, e.id),
                            )
                          : void 0,
                  description: v.description ?? void 0,
                  imgSrc: T,
                  title: g?.name ?? v.summary,
                  tag: (0, a.jsx)(i.M, { type: n }),
                  FallbackIcon: s.b,
              }),
          });
}
