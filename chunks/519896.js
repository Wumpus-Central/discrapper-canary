l.r(e),
    l.d(e, {
        SubscriptionDetailsModal: function () {
            return f;
        }
    });
var t = l(200651),
    i = l(192379),
    r = l(269210),
    o = l(752843),
    s = l(481060),
    a = l(757746),
    c = l(930155),
    d = l(889989),
    u = l(263519),
    m = l(73346),
    x = l(591759),
    h = l(886253),
    v = l(680005),
    j = l(938337);
function f(n) {
    var e, l;
    let { appId: f, subscriptionType: p, onClose: S, skuId: N, guildId: _, transitionState: C, onHeaderTitleClick: T } = n,
        { data: I } = (0, c.H)(N),
        R = I[0],
        { data: g } = (0, a.Z)(N),
        E = i.useMemo(() => {
            var n;
            return (null == g ? void 0 : g.thumbnail) != null && null !== (n = x.Z.toURLSafe((0, m._W)(f, g.thumbnail, 256))) && void 0 !== n ? n : void 0;
        }, [f, null == g ? void 0 : g.thumbnail]),
        k = i.useMemo(() => {
            let n = null == g ? void 0 : g.benefits;
            if (null != n && 0 !== n.length)
                return n.map((n) => ({
                    id: n.id,
                    title: n.name,
                    description: n.description,
                    icon: (0, d.n)(f, n.icon)
                }));
        }, [f, null == g ? void 0 : g.benefits]),
        { openModal: b, subscriptionPurchaseButtonState: M } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != _ ? _ : void 0
        });
    return null == g
        ? null
        : (0, t.jsx)(h.A, {
              appId: f,
              skuId: N,
              transitionState: C,
              onHeaderTitleClick: null != T ? T : S,
              onClose: S,
              footer: (0, t.jsx)(v.pV, {
                  onClick: b,
                  appId: f,
                  subscriptionType: p,
                  skuId: N,
                  subscriptionPlan: R,
                  state: M
              }),
              children: (0, t.jsx)(j.i, {
                  appId: f,
                  skuId: N,
                  benefits:
                      null != k
                          ? k.map((n) =>
                                (0, t.jsx)(
                                    r.Gm,
                                    {
                                        header: n.title,
                                        icon: n.icon,
                                        description: n.description
                                    },
                                    n.id
                                )
                            )
                          : void 0,
                  description: null !== (e = g.description) && void 0 !== e ? e : void 0,
                  imgSrc: E,
                  title: null !== (l = null == R ? void 0 : R.name) && void 0 !== l ? l : g.summary,
                  tag: (0, t.jsx)(o.Z, { type: p }),
                  FallbackIcon: s.BadgeIcon
              })
          });
}
