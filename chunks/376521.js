r.d(t, {
    c: () => u,
    g: () => a,
}),
    r(388685);
var n = r(473749),
    i = r(525302),
    l = r(51144),
    o = r(602733),
    c = r(981631),
    s = r(388032);
function a(e, t) {
    return n.useMemo(() => {
        let r = e.map((e) => {
                let { item: t, source: r } = e;
                return {
                    productLine: t.skuProductLine,
                    source: r,
                    renderIcon: i.Q,
                };
            }),
            n = l.ZP.getName(t),
            { hasMultipleTypes: a, hasMultipleSources: u } = (function (e) {
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
        return a || u
            ? r.map((e) =>
                  !a && u
                      ? {
                            title:
                                e.source === o.lr.WISHLIST
                                    ? s.intl.formatToPlainString(s.t.p3RmJF, { username: n })
                                    : s.intl.string(s.t.Ig6VDH),
                            renderIcon: e.productLine !== c.POd.COLLECTIBLES ? e.renderIcon : void 0,
                            shouldShow: !0,
                        }
                      : a && !u
                        ? {
                              title:
                                  e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM
                                      ? s.intl.string(s.t["4yiU7x"])
                                      : s.intl.string(s.t.HFhcqh),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          }
                        : {
                              title:
                                  e.productLine === c.POd.SOCIAL_LAYER_GAME_ITEM
                                      ? s.intl.string(s.t["4yiU7x"])
                                      : s.intl.string(s.t.HFhcqh),
                              body:
                                  e.source === o.lr.WISHLIST
                                      ? s.intl.formatToPlainString(s.t.p3RmJF, { username: n })
                                      : s.intl.string(s.t.Ig6VDH),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          },
              )
            : r.map(() => ({ shouldShow: !1 }));
    }, [e, t]);
}
function u(e) {
    return n.useMemo(
        () =>
            new Set(e.map((e) => e.skuProductLine)).size > 1
                ? e.map((e) => ({
                      title:
                          e.skuProductLine === c.POd.SOCIAL_LAYER_GAME_ITEM
                              ? s.intl.string(s.t["4yiU7x"])
                              : s.intl.string(s.t.HFhcqh),
                      renderIcon: e.skuProductLine === c.POd.SOCIAL_LAYER_GAME_ITEM ? i.Q : void 0,
                      shouldShow: !0,
                  }))
                : e.map(() => ({ shouldShow: !1 })),
        [e],
    );
}
