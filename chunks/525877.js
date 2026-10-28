n.d(t, { o: () => s });
var l = n(582128),
    i = n(206828),
    r = n(118982),
    a = n(652215);
function s(e) {
    let { application: t, productLine: n, isGift: s = !1 } = e,
        o = n === a.EZt.SOCIAL_LAYER_GAME_ITEM,
        u = o ? t : null,
        { fetched: c, hasAlreadyLinked: d } = (0, i.RD)(u),
        m = o && c && !d && !s;
    return l.useMemo(
        () =>
            m
                ? {
                      type: "info",
                      message: (0, r.k3)(u ?? void 0),
                      role: "status",
                      key: "social-layer-game-item-disclaimer-notice",
                  }
                : null,
        [m, u],
    );
}
