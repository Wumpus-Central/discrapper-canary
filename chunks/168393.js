n.r(t), n.d(t, { SubscriptionDetailsModal: () => E });
var l = n(627968),
    a = n(64700),
    r = n(885996),
    s = n(423090),
    i = n(397927),
    o = n(272859),
    d = n(955440),
    c = n(3432),
    u = n(185438),
    m = n(371794),
    p = n(998218),
    A = n(550732),
    h = n(376374),
    C = n(86889);
function E(e) {
    let {
            appId: t,
            subscriptionType: n,
            onClose: E,
            skuId: x,
            guildId: N,
            transitionState: I,
            onHeaderTitleClick: _,
        } = e,
        { data: f } = (0, d.A)(x),
        g = f?.[0],
        { data: T } = (0, o.d)(x),
        v = a.useMemo(
            () => (T?.thumbnail != null ? (p.A.toURLSafe((0, m.YE)(t, T.thumbnail, 256)) ?? void 0) : void 0),
            [t, T?.thumbnail],
        ),
        j = a.useMemo(() => {
            let e = T?.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, c.N)(t, e.icon),
                }));
        }, [t, T?.benefits]),
        { openModal: S, subscriptionPurchaseButtonState: O } = (0, u.A)({
            skuId: x,
            initialSubscribeForGuild: N ?? void 0,
        });
    return null == T
        ? null
        : (0, l.jsx)(A.C, {
              appId: t,
              skuId: x,
              transitionState: I,
              onHeaderTitleClick: _ ?? E,
              onClose: E,
              footer: (0, l.jsx)(h.rc, {
                  onClick: S,
                  appId: t,
                  subscriptionType: n,
                  skuId: x,
                  subscriptionPlan: g,
                  state: O,
              }),
              children: (0, l.jsx)(C.D, {
                  appId: t,
                  skuId: x,
                  benefits:
                      null != j
                          ? j.map((e) =>
                                (0, l.jsx)(r.FY, { header: e.title, icon: e.icon, description: e.description }, e.id),
                            )
                          : void 0,
                  description: T.description ?? void 0,
                  imgSrc: v,
                  title: g?.name ?? T.summary,
                  tag: (0, l.jsx)(s.M, { type: n }),
                  FallbackIcon: i.bhD,
              }),
          });
}
