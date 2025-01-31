n.r(e), n.d(e, { SubscriptionDetailsModal: () => p });
var i = n(200651),
    s = n(192379),
    t = n(269210),
    r = n(752843),
    a = n(481060),
    o = n(757746),
    c = n(930155),
    d = n(889989),
    u = n(263519),
    x = n(73346),
    m = n(591759),
    h = n(886253),
    v = n(680005),
    j = n(938337);
function p(l) {
    var e, n;
    let { appId: p, subscriptionType: N, onClose: S, skuId: f, guildId: k, transitionState: _, onHeaderTitleClick: T } = l,
        { data: R } = (0, c.H)(f),
        g = R[0],
        { data: C } = (0, o.Z)(f),
        E = s.useMemo(() => {
            var l;
            return (null == C ? void 0 : C.thumbnail) != null && null !== (l = m.Z.toURLSafe((0, x._W)(p, C.thumbnail, 256))) && void 0 !== l ? l : void 0;
        }, [p, null == C ? void 0 : C.thumbnail]),
        I = s.useMemo(() => {
            let l = null == C ? void 0 : C.benefits;
            if (null != l && 0 !== l.length)
                return l.map((l) => ({
                    id: l.id,
                    title: l.name,
                    description: l.description,
                    icon: (0, d.n)(p, l.icon)
                }));
        }, [p, null == C ? void 0 : C.benefits]),
        { openModal: Z, subscriptionPurchaseButtonState: b } = (0, u.Z)({
            skuId: f,
            initialSubscribeForGuild: null != k ? k : void 0
        });
    return null == C
        ? null
        : (0, i.jsx)(h.A, {
              appId: p,
              skuId: f,
              transitionState: _,
              onHeaderTitleClick: null != T ? T : S,
              onClose: S,
              footer: (0, i.jsx)(v.pV, {
                  onClick: Z,
                  appId: p,
                  subscriptionType: N,
                  skuId: f,
                  subscriptionPlan: g,
                  state: b
              }),
              children: (0, i.jsx)(j.i, {
                  appId: p,
                  skuId: f,
                  benefits:
                      null != I
                          ? I.map((l) =>
                                (0, i.jsx)(
                                    t.Gm,
                                    {
                                        header: l.title,
                                        icon: l.icon,
                                        description: l.description
                                    },
                                    l.id
                                )
                            )
                          : void 0,
                  description: null !== (e = C.description) && void 0 !== e ? e : void 0,
                  imgSrc: E,
                  title: null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : C.summary,
                  tag: (0, i.jsx)(r.Z, { type: N }),
                  FallbackIcon: a.Vh5
              })
          });
}
