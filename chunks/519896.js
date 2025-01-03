l.r(e),
    l.d(e, {
        SubscriptionDetailsModal: function () {
            return j;
        }
    });
var t = l(200651),
    i = l(192379),
    o = l(269210),
    r = l(752843),
    s = l(481060),
    a = l(757746),
    c = l(930155),
    d = l(889989),
    u = l(263519),
    m = l(73346),
    x = l(591759),
    h = l(886253),
    v = l(680005),
    f = l(938337);
function j(n) {
    var e, l;
    let { appId: j, subscriptionType: p, onClose: S, skuId: N, guildId: _, transitionState: I, onHeaderTitleClick: R } = n,
        { data: T } = (0, c.H)(N),
        C = T[0],
        { data: E } = (0, a.Z)(N),
        g = i.useMemo(() => {
            var n;
            return (null == E ? void 0 : E.thumbnail) != null && null !== (n = x.Z.toURLSafe((0, m._W)(j, E.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [j, null == E ? void 0 : E.thumbnail]),
        k = i.useMemo(() => {
            let n = null == E ? void 0 : E.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, d.n)(j, n.icon)
                }));
        }, [j, null == E ? void 0 : E.benefits]),
        { openModal: M, subscriptionPurchaseButtonState: Z } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != _ ? _ : void 0
        });
    return null == E
        ? null
        : (0, t.jsx)(h.A, {
              appId: j,
              skuId: N,
              transitionState: I,
              onHeaderTitleClick: null != R ? R : S,
              onClose: S,
              footer: (0, t.jsx)(v.pV, {
                  onClick: M,
                  appId: j,
                  subscriptionType: p,
                  skuId: N,
                  subscriptionPlan: C,
                  state: Z
              }),
              children: (0, t.jsx)(f.i, {
                  appId: j,
                  skuId: N,
                  benefits:
                      null != k
                          ? k.map((n) =>
                                (0, t.jsx)(
                                    o.Gm,
                                    {
                                        header: n.title,
                                        icon: n.icon,
                                        description: n.description
                                    },
                                    n.id
                                )
                            )
                          : void 0,
                  description: null !== (e = E.description) && void 0 !== e ? e : void 0,
                  imgSrc: g,
                  title: null !== (l = null == C ? void 0 : C.name) && void 0 !== l ? l : E.summary,
                  tag: (0, t.jsx)(r.Z, { type: p }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}
