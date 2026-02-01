n.d(t, {
    t: () => o,
}),
    n(896048);
var i = n(64700),
    r = n(810412),
    l = n(914853),
    a = n(509295),
    s = n(406595);

function o(e) {
    let { tab: t, targetId: n, shouldStopPropagation: o, widgetType: u } = e;
    return i.useCallback(
        (e) => {
            o && (null == e || e.preventDefault(), null == e || e.stopPropagation());
            let [i] = s.A.isFavorite(t, n);
            (0, a.k)({
                tab: t,
                targetId: n,
                isFavorite: !i,
            }),
                (0, r.YX)(u, {
                    type: r.Z5.FAVORITE,
                    value: i ? r.IP.REMOVED_FROM_FAVORITES : r.IP.ADDED_TO_FAVORITES,
                    secondaryValue: t,
                    userId: t === l.x.FRIENDS ? n : void 0,
                });
        },
        [o, t, n, u],
    );
}
