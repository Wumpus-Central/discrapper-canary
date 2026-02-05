i.d(t, { b: () => I, u: () => h });
var r = i(64700),
    l = i(311907),
    s = i(576030),
    n = i(287809),
    a = i(403362),
    u = i(427262),
    o = i(594832),
    d = i(652215),
    c = i(985018);
function I(e, t) {
    return r.useMemo(() => {
        let i = e.map((e) => {
                let { item: t, source: i } = e;
                return { productLine: t.skuProductLine, source: i, renderIcon: s.GM };
            }),
            r = u.Ay.getName(t),
            { hasMultipleTypes: l, hasMultipleSources: n } = (function (e) {
                if (0 === e.length) return { hasMultipleTypes: !1, hasMultipleSources: !1 };
                let t = e[0];
                return {
                    hasMultipleTypes: e.some((e) => e.productLine !== t.productLine),
                    hasMultipleSources: e.some((e) => e.source !== t.source),
                };
            })(i);
        return l || n
            ? i.map((e) =>
                  !l && n
                      ? {
                            title:
                                e.source === o.uS.WISHLIST
                                    ? c.intl.formatToPlainString(c.t.p3RmJF, { username: r })
                                    : c.intl.string(c.t.Ig6VDH),
                            renderIcon: e.productLine !== d.EZt.COLLECTIBLES ? e.renderIcon : void 0,
                            shouldShow: !0,
                        }
                      : l && !n
                        ? {
                              title:
                                  e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM
                                      ? c.intl.string(c.t["4yiU7x"])
                                      : c.intl.string(c.t.HFhcqh),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          }
                        : {
                              title:
                                  e.productLine === d.EZt.SOCIAL_LAYER_GAME_ITEM
                                      ? c.intl.string(c.t["4yiU7x"])
                                      : c.intl.string(c.t.HFhcqh),
                              body:
                                  e.source === o.uS.WISHLIST
                                      ? c.intl.formatToPlainString(c.t.p3RmJF, { username: r })
                                      : c.intl.string(c.t.Ig6VDH),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          },
              )
            : i.map(() => ({ shouldShow: !1 }));
    }, [e, t]);
}
function h(e, t) {
    let i = (0, l.yK)([n.default], () => e.map((e) => n.default.getUser(e.gifterUserId)).filter(a.Vq), [e]),
        o = r.useMemo(() => i.reduce((e, t) => ((e[t.id] = t), e), {}), [i]);
    return r.useMemo(() => {
        let i = new Set(e.map((e) => e.skuProductLine)).size > 1;
        return e.map((e) => {
            let r = t && e.isOwned && null != e.gifterUserId && null != o[e.gifterUserId],
                l = null != e.gifterUserId && null != o[e.gifterUserId] ? u.Ay.getName(o[e.gifterUserId]) : null;
            return i || r
                ? {
                      title: r
                          ? c.intl.formatToPlainString(c.t.TL4ktE, { username: l })
                          : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM
                            ? c.intl.string(c.t["4yiU7x"])
                            : c.intl.string(c.t.HFhcqh),
                      body: r ? e.skuName : void 0,
                      renderIcon: r ? s.uq : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? s.GM : void 0,
                      shouldShow: !0,
                  }
                : { shouldShow: !1 };
        });
    }, [e, t, o]);
}
