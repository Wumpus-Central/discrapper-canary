r.d(t, {
    c: () => m,
    g: () => f,
}),
    r(388685);
var n = r(473749),
    i = r(442837),
    l = r(525302),
    o = r(594174),
    s = r(823379),
    c = r(51144),
    a = r(602733),
    u = r(981631),
    d = r(388032);
function f(e, t) {
    return n.useMemo(() => {
        let r = e.map((e) => {
                let { item: t, source: r } = e;
                return {
                    productLine: t.skuProductLine,
                    source: r,
                    renderIcon: l.Q,
                };
            }),
            n = c.ZP.getName(t),
            { hasMultipleTypes: i, hasMultipleSources: o } = (function (e) {
                if (0 === e.length)
                    return {
                        hasMultipleTypes: !1,
                        hasMultipleSources: !1,
                    };
                let t = e[0];
                return {
                    hasMultipleTypes: e.some((e) => e.productLine !== t.productLine),
                    hasMultipleSources: e.some((e) => e.source !== t.source),
                };
            })(r);
        return i || o
            ? r.map((e) =>
                  !i && o
                      ? {
                            title:
                                e.source === a.lr.WISHLIST
                                    ? d.intl.formatToPlainString(d.t.p3RmJF, { username: n })
                                    : d.intl.string(d.t.Ig6VDH),
                            renderIcon: e.productLine !== u.POd.COLLECTIBLES ? e.renderIcon : void 0,
                            shouldShow: !0,
                        }
                      : i && !o
                        ? {
                              title:
                                  e.productLine === u.POd.SOCIAL_LAYER_GAME_ITEM
                                      ? d.intl.string(d.t["4yiU7x"])
                                      : d.intl.string(d.t.HFhcqh),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          }
                        : {
                              title:
                                  e.productLine === u.POd.SOCIAL_LAYER_GAME_ITEM
                                      ? d.intl.string(d.t["4yiU7x"])
                                      : d.intl.string(d.t.HFhcqh),
                              body:
                                  e.source === a.lr.WISHLIST
                                      ? d.intl.formatToPlainString(d.t.p3RmJF, { username: n })
                                      : d.intl.string(d.t.Ig6VDH),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          },
              )
            : r.map(() => ({ shouldShow: !1 }));
    }, [e, t]);
}
function m(e, t) {
    let r = (0, i.Wu)([o.default], () => e.map((e) => o.default.getUser(e.gifterUserId)).filter(s.lm), [e]),
        c = n.useMemo(() => r.reduce((e, t) => ((e[t.id] = t), e), {}), [r]);
    return n.useMemo(
        () =>
            new Set(e.map((e) => e.skuProductLine)).size > 1
                ? e.map((e) => {
                      let r = t && e.isOwned && null != e.gifterUserId && null != c[e.gifterUserId];
                      return {
                          title:
                              e.skuProductLine === u.POd.SOCIAL_LAYER_GAME_ITEM
                                  ? d.intl.string(d.t["4yiU7x"])
                                  : d.intl.string(d.t.HFhcqh),
                          renderIcon: e.skuProductLine === u.POd.SOCIAL_LAYER_GAME_ITEM ? l.Q : void 0,
                          shouldShow: !r,
                      };
                  })
                : e.map(() => ({ shouldShow: !1 })),
        [e, t, c],
    );
}
