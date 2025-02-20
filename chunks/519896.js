t.r(e), t.d(e, { SubscriptionDetailsModal: () => v }), t(266796);
var o = t(200651),
    i = t(192379),
    l = t(269210),
    a = t(752843),
    r = t(481060),
    d = t(757746),
    s = t(930155),
    _ = t(889989),
    c = t(263519),
    u = t(73346),
    p = t(591759),
    m = t(886253),
    f = t(680005),
    b = t(938337);
function v(n) {
    var e, t;
    let { appId: v, subscriptionType: h, onClose: k, skuId: x, guildId: B, transitionState: I, onHeaderTitleClick: C } = n,
        { data: g } = (0, s.H)(x),
        S = g[0],
        { data: H } = (0, d.Z)(x),
        T = i.useMemo(() => {
            var n;
            return (null == H ? void 0 : H.thumbnail) != null && null !== (n = p.Z.toURLSafe((0, u._W)(v, H.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [v, null == H ? void 0 : H.thumbnail]),
        j = i.useMemo(() => {
            let n = null == H ? void 0 : H.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, _.n)(v, n.icon)
                }));
        }, [v, null == H ? void 0 : H.benefits]),
        { openModal: y, subscriptionPurchaseButtonState: L } = (0, c.Z)({
            skuId: x,
            initialSubscribeForGuild: null != B ? B : void 0
        });
    return null == H
        ? null
        : (0, o.jsx)(m.A, {
              appId: v,
              skuId: x,
              transitionState: I,
              onHeaderTitleClick: null != C ? C : k,
              onClose: k,
              footer: (0, o.jsx)(f.pV, {
                  onClick: y,
                  appId: v,
                  subscriptionType: h,
                  skuId: x,
                  subscriptionPlan: S,
                  state: L
              }),
              children: (0, o.jsx)(b.i, {
                  appId: v,
                  skuId: x,
                  benefits:
                      null != j
                          ? j.map((n) =>
                                (0, o.jsx)(
                                    l.Gm,
                                    {
                                        header: n.title,
                                        icon: n.icon,
                                        description: n.description
                                    },
                                    n.id
                                )
                            )
                          : void 0,
                  description: null !== (e = H.description) && void 0 !== e ? e : void 0,
                  imgSrc: T,
                  title: null !== (t = null == S ? void 0 : S.name) && void 0 !== t ? t : H.summary,
                  tag: (0, o.jsx)(a.Z, { type: h }),
                  FallbackIcon: r.Vh5
              })
          });
}
