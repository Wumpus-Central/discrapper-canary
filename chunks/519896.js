l.r(n), l.d(n, { SubscriptionDetailsModal: () => j }), l(953529);
var t = l(255367),
    r = l(73800),
    i = l(269210),
    s = l(752843),
    a = l(481060),
    o = l(757746),
    c = l(930155),
    d = l(889989),
    u = l(263519),
    m = l(73346),
    x = l(591759),
    h = l(886253),
    p = l(680005),
    v = l(938337);
function j(e) {
    var n, l;
    let { appId: j, subscriptionType: f, onClose: b, skuId: N, guildId: S, transitionState: g, onHeaderTitleClick: k } = e,
        { data: O } = (0, c.H)(N),
        I = O[0],
        { data: C } = (0, o.Z)(N),
        y = r.useMemo(() => {
            var e;
            return (null == C ? void 0 : C.thumbnail) != null && null != (e = x.Z.toURLSafe((0, m._W)(j, C.thumbnail, 256))) ? e : void 0;
        }, [j, null == C ? void 0 : C.thumbnail]),
        T = r.useMemo(() => {
            let e = null == C ? void 0 : C.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, d.n)(j, e.icon)
                }));
        }, [j, null == C ? void 0 : C.benefits]),
        { openModal: R, subscriptionPurchaseButtonState: E } = (0, u.Z)({
            skuId: N,
            initialSubscribeForGuild: null != S ? S : void 0
        });
    return null == C
        ? null
        : (0, t.jsx)(h.A, {
              appId: j,
              skuId: N,
              transitionState: g,
              onHeaderTitleClick: null != k ? k : b,
              onClose: b,
              footer: (0, t.jsx)(p.pV, {
                  onClick: R,
                  appId: j,
                  subscriptionType: f,
                  skuId: N,
                  subscriptionPlan: I,
                  state: E
              }),
              children: (0, t.jsx)(v.i, {
                  appId: j,
                  skuId: N,
                  benefits:
                      null != T
                          ? T.map((e) =>
                                (0, t.jsx)(
                                    i.Gm,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description
                                    },
                                    e.id
                                )
                            )
                          : void 0,
                  description: null != (n = C.description) ? n : void 0,
                  imgSrc: y,
                  title: null != (l = null == I ? void 0 : I.name) ? l : C.summary,
                  tag: (0, t.jsx)(s.Z, { type: f }),
                  FallbackIcon: a.Vh5
              })
          });
}
