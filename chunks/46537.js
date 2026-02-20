r.d(t, { Qc: () => h, b7: () => m, bc: () => I });
var l = r(64700),
    n = r(311907),
    i = r(576030),
    s = r(287809),
    a = r(403362),
    u = r(427262),
    o = r(594832),
    d = r(652215),
    c = r(985018);
function h(e) {
    return null != e.title && null == e.body && null == e.renderIcon;
}
function I(e, t) {
    return l.useMemo(() => {
        let r = e.map((e) => {
                let { item: t, source: r } = e;
                return { productLine: t.skuProductLine, source: r, renderIcon: i.GM };
            }),
            l = u.Ay.getName(t),
            { hasMultipleTypes: n, hasMultipleSources: s } = (function (e) {
                if (0 === e.length) return { hasMultipleTypes: !1, hasMultipleSources: !1 };
                let t = e[0];
                return {
                    hasMultipleTypes: e.some((e) => e.productLine !== t.productLine),
                    hasMultipleSources: e.some((e) => e.source !== t.source),
                };
            })(r);
        return n || s
            ? r.map((e) =>
                  !n && s
                      ? {
                            title:
                                e.source === o.uS.WISHLIST
                                    ? c.intl.formatToPlainString(c.t.p3RmJF, { username: l })
                                    : c.intl.string(c.t.Ig6VDH),
                            renderIcon: e.productLine !== d.EZt.COLLECTIBLES ? e.renderIcon : void 0,
                            shouldShow: !0,
                        }
                      : n && !s
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
                                      ? c.intl.formatToPlainString(c.t.p3RmJF, { username: l })
                                      : c.intl.string(c.t.Ig6VDH),
                              renderIcon: e.renderIcon,
                              shouldShow: !0,
                          },
              )
            : r.map(() => ({ shouldShow: !1 }));
    }, [e, t]);
}
function m(e, t) {
    let r = (0, n.yK)([s.default], () => e.map((e) => s.default.getUser(e.gifterUserId)).filter(a.Vq), [e]),
        o = l.useMemo(() => r.reduce((e, t) => ((e[t.id] = t), e), {}), [r]);
    return l.useMemo(() => {
        let r = new Set(e.map((e) => e.skuProductLine)).size > 1;
        return e.map((e) => {
            let l = t && e.isOwned && null != e.gifterUserId && null != o[e.gifterUserId],
                n = null != e.gifterUserId && null != o[e.gifterUserId] ? u.Ay.getName(o[e.gifterUserId]) : null;
            return r || l
                ? {
                      title: l
                          ? c.intl.formatToPlainString(c.t.TL4ktE, { username: n })
                          : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM
                            ? c.intl.string(c.t["4yiU7x"])
                            : c.intl.string(c.t.HFhcqh),
                      body: l ? e.skuName : void 0,
                      renderIcon: l ? i.uq : e.skuProductLine === d.EZt.SOCIAL_LAYER_GAME_ITEM ? i.GM : void 0,
                      shouldShow: !0,
                  }
                : { shouldShow: !1 };
        });
    }, [e, t, o]);
}
