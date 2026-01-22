n.r(t), n.d(t, { SubscriptionDetailsModal: () => g }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(885996),
    s = n(423090),
    o = n(397927),
    l = n(272859),
    c = n(955440),
    u = n(3432),
    d = n(185438),
    f = n(371794),
    p = n(998218),
    _ = n(550732),
    h = n(376374),
    m = n(86889);
function g(e) {
    var t, n;
    let {
            appId: g,
            subscriptionType: E,
            onClose: b,
            skuId: y,
            guildId: O,
            transitionState: A,
            onHeaderTitleClick: v,
        } = e,
        { data: S } = (0, c.A)(y),
        I = null == S ? void 0 : S[0],
        { data: T } = (0, l.d)(y),
        C = i.useMemo(() => {
            var e;
            return (null == T ? void 0 : T.thumbnail) != null &&
                null != (e = p.A.toURLSafe((0, f.YE)(g, T.thumbnail, 256)))
                ? e
                : void 0;
        }, [g, null == T ? void 0 : T.thumbnail]),
        N = i.useMemo(() => {
            let e = null == T ? void 0 : T.benefits;
            if (null != e && 0 !== e.length)
                return e.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, u.N)(g, e.icon),
                }));
        }, [g, null == T ? void 0 : T.benefits]),
        { openModal: R, subscriptionPurchaseButtonState: w } = (0, d.A)({
            skuId: y,
            initialSubscribeForGuild: null != O ? O : void 0,
        });
    return null == T
        ? null
        : (0, r.jsx)(_.C, {
              appId: g,
              skuId: y,
              transitionState: A,
              onHeaderTitleClick: null != v ? v : b,
              onClose: b,
              footer: (0, r.jsx)(h.rc, {
                  onClick: R,
                  appId: g,
                  subscriptionType: E,
                  skuId: y,
                  subscriptionPlan: I,
                  state: w,
              }),
              children: (0, r.jsx)(m.D, {
                  appId: g,
                  skuId: y,
                  benefits:
                      null != N
                          ? N.map((e) =>
                                (0, r.jsx)(
                                    a.FY,
                                    {
                                        header: e.title,
                                        icon: e.icon,
                                        description: e.description,
                                    },
                                    e.id,
                                ),
                            )
                          : void 0,
                  description: null != (t = T.description) ? t : void 0,
                  imgSrc: C,
                  title: null != (n = null == I ? void 0 : I.name) ? n : T.summary,
                  tag: (0, r.jsx)(s.M, { type: E }),
                  FallbackIcon: o.bhD,
              }),
          });
}
