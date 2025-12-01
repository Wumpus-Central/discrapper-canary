n.r(t), n.d(t, { SubscriptionDetailsModal: () => g }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(621082),
    o = n(942682),
    s = n(481060),
    l = n(757746),
    c = n(930155),
    u = n(889989),
    d = n(263519),
    f = n(73346),
    p = n(591759),
    _ = n(886253),
    m = n(680005),
    h = n(938337);
function g(e) {
    var t, n;
    let {
            appId: g,
            subscriptionType: E,
            onClose: b,
            skuId: y,
            guildId: O,
            transitionState: v,
            onHeaderTitleClick: S,
        } = e,
        { data: I } = (0, c.H)(y),
        T = null == I ? void 0 : I[0],
        { data: A } = (0, l.Z)(y),
        C = i.useMemo(() => {
            var e;
            return (null == A ? void 0 : A.thumbnail) != null &&
                null != (e = p.Z.toURLSafe((0, f._W)(g, A.thumbnail, 256)))
                ? e
                : void 0;
        }, [g, null == A ? void 0 : A.thumbnail]),
        N = i.useMemo(() => {
            let e = null == A ? void 0 : A.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, u.n)(g, e.icon),
                }));
        }, [g, null == A ? void 0 : A.benefits]),
        { openModal: P, subscriptionPurchaseButtonState: R } = (0, d.Z)({
            skuId: y,
            initialSubscribeForGuild: null != O ? O : void 0,
        });
    return null == A
        ? null
        : (0, r.jsx)(_.A, {
              appId: g,
              skuId: y,
              transitionState: v,
              onHeaderTitleClick: null != S ? S : b,
              onClose: b,
              footer: (0, r.jsx)(m.pV, {
                  onClick: P,
                  appId: g,
                  subscriptionType: E,
                  skuId: y,
                  subscriptionPlan: T,
                  state: R,
              }),
              children: (0, r.jsx)(h.i, {
                  appId: g,
                  skuId: y,
                  benefits:
                      null != N
                          ? N.map((e) =>
                                (0, r.jsx)(
                                    a.Gm,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description,
                                    },
                                    e.id,
                                ),
                            )
                          : void 0,
                  description: null != (t = A.description) ? t : void 0,
                  imgSrc: C,
                  title: null != (n = null == T ? void 0 : T.name) ? n : A.summary,
                  tag: (0, r.jsx)(o.Z, { type: E }),
                  FallbackIcon: s.Vh5,
              }),
          });
}
