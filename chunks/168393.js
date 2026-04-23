l.r(t), l.d(t, { SubscriptionDetailsModal: () => j });
var n = l(627968),
    s = l(64700),
    i = l(885996),
    r = l(423090),
    a = l(715641),
    o = l(272859),
    c = l(955440),
    d = l(3432),
    u = l(185438),
    x = l(371794),
    _ = l(998218),
    m = l(550732),
    h = l(376374),
    p = l(888781);
function j(e) {
    let {
            appId: t,
            subscriptionType: l,
            onClose: j,
            skuId: v,
            guildId: E,
            transitionState: S,
            onHeaderTitleClick: A,
        } = e,
        { data: f } = (0, c.A)(v),
        g = f?.[0],
        { data: T } = (0, o.d)(v),
        I = s.useMemo(
            () => (T?.thumbnail != null ? (_.A.toURLSafe((0, x.YE)(t, T.thumbnail, 256)) ?? void 0) : void 0),
            [t, T?.thumbnail],
        ),
        C = s.useMemo(() => {
            let e = T?.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.N)(t, e.icon),
                }));
        }, [t, T?.benefits]),
        { openModal: b, subscriptionPurchaseButtonState: N } = (0, u.A)({
            skuId: v,
            initialSubscribeForGuild: E ?? void 0,
        });
    return null == T
        ? null
        : (0, n.jsx)(m.C, {
              appId: t,
              skuId: v,
              transitionState: S,
              onHeaderTitleClick: A ?? j,
              onClose: j,
              footer: (0, n.jsx)(h.rc, {
                  onClick: b,
                  appId: t,
                  subscriptionType: l,
                  skuId: v,
                  subscriptionPlan: g,
                  state: N,
              }),
              children: (0, n.jsx)(p.D, {
                  appId: t,
                  skuId: v,
                  benefits:
                      null != C
                          ? C.map((e) =>
                                (0, n.jsx)(i.FY, { header: e.title, icon: e.icon, description: e.description }, e.id),
                            )
                          : void 0,
                  description: T.description ?? void 0,
                  imgSrc: I,
                  title: g?.name ?? T.summary,
                  tag: (0, n.jsx)(r.M, { type: l }),
                  FallbackIcon: a.b,
              }),
          });
}
