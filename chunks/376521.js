r.d(t, {
    l: () => s,
    z: () => o,
}),
    r(388685);
var n = r(602733),
    i = r(981631),
    l = r(388032);
function o(e, t) {
    let { hasMultipleTypes: r, hasMultipleSources: o } = (function (e) {
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
    })(e);
    return r || o
        ? e.map((e) =>
              !r && o
                  ? {
                        title:
                            e.source === n.lr.WISHLIST
                                ? l.intl.formatToPlainString(l.t.p3RmJF, { username: t })
                                : l.intl.string(l.t.Ig6VDH),
                        shouldShow: !0,
                    }
                  : r && !o
                    ? {
                          title:
                              e.productLine === i.POd.SOCIAL_LAYER_GAME_ITEM
                                  ? l.intl.string(l.t["4yiU7x"])
                                  : l.intl.string(l.t.HFhcqh),
                          shouldShow: !0,
                      }
                    : {
                          title:
                              e.productLine === i.POd.SOCIAL_LAYER_GAME_ITEM
                                  ? l.intl.string(l.t["4yiU7x"])
                                  : l.intl.string(l.t.HFhcqh),
                          body:
                              e.source === n.lr.WISHLIST
                                  ? l.intl.formatToPlainString(l.t.p3RmJF, { username: t })
                                  : l.intl.string(l.t.Ig6VDH),
                          shouldShow: !0,
                      },
          )
        : e.map(() => ({ shouldShow: !1 }));
}
function s(e) {
    return new Set(e).size > 1
        ? e.map((e) => ({
              title: e === i.POd.SOCIAL_LAYER_GAME_ITEM ? l.intl.string(l.t["4yiU7x"]) : l.intl.string(l.t.HFhcqh),
              shouldShow: !0,
          }))
        : e.map(() => ({ shouldShow: !1 }));
}
