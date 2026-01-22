r.d(t, {
    b: () => f,
    u: () => p,
}),
    r(896048);
var n = r(64700),
    i = r(311907),
    l = r(576030),
    o = r(287809),
    s = r(403362),
    u = r(427262),
    c = r(594832),
    a = r(652215),
    d = r(985018);

function f(e, t) {
    return n.useMemo(() => {
        let r = e.map((e) => {
                let { item: t, source: r } = e;
                return {
                    productLine: t.skuProductLine,
                    source: r,
                    renderIcon: l.GM,
                };
            }),
            n = u.Ay.getName(t),
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
                                e.source === c.uS.WISHLIST
                                    ? d.intl.formatToPlainString(d.t.p3RmJF, {
                                          username: n,
                                      })
                                    : d.intl.string(d.t.Ig6VDH),
                            renderIcon: e.productLine !== a.EZt.COLLECTIBLES ? e.renderIcon : void 0,
                            shouldShow: !0,
                        }
                      : i && !o
                        ? {
                              title:
                                  e.productLine === a.EZt.SOCIAL_LAYER_GAME_ITEM
                                      ? d.intl.string(d.t["4yiU7x"])
                                      : d.intl.string(d.t.HFhcqh),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          }
                        : {
                              title:
                                  e.productLine === a.EZt.SOCIAL_LAYER_GAME_ITEM
                                      ? d.intl.string(d.t["4yiU7x"])
                                      : d.intl.string(d.t.HFhcqh),
                              body:
                                  e.source === c.uS.WISHLIST
                                      ? d.intl.formatToPlainString(d.t.p3RmJF, {
                                            username: n,
                                        })
                                      : d.intl.string(d.t.Ig6VDH),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          },
              )
            : r.map(() => ({
                  shouldShow: !1,
              }));
    }, [e, t]);
}

function p(e, t) {
    let r = (0, i.yK)([o.default], () => e.map((e) => o.default.getUser(e.gifterUserId)).filter(s.Vq), [e]),
        u = n.useMemo(() => r.reduce((e, t) => ((e[t.id] = t), e), {}), [r]);
    return n.useMemo(
        () =>
            new Set(e.map((e) => e.skuProductLine)).size > 1
                ? e.map((e) => {
                      let r = t && e.isOwned && null != e.gifterUserId && null != u[e.gifterUserId];
                      return {
                          title:
                              e.skuProductLine === a.EZt.SOCIAL_LAYER_GAME_ITEM
                                  ? d.intl.string(d.t["4yiU7x"])
                                  : d.intl.string(d.t.HFhcqh),
                          renderIcon: e.skuProductLine === a.EZt.SOCIAL_LAYER_GAME_ITEM ? l.GM : void 0,
                          shouldShow: !r,
                      };
                  })
                : e.map(() => ({
                      shouldShow: !1,
                  })),
        [e, t, u],
    );
}
