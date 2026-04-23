n.d(t, { t: () => u });
var l = n(64700),
    i = n(810412),
    r = n(914853),
    s = n(509295),
    a = n(406595);
function u(e) {
    let { tab: t, targetId: n, shouldStopPropagation: u, widgetType: o } = e;
    return l.useCallback(
        (e) => {
            u && (e?.preventDefault(), e?.stopPropagation());
            let [l] = a.A.isFavorite(t, n);
            (0, s.k)({ tab: t, targetId: n, isFavorite: !l }),
                (0, i.YX)(o, {
                    type: i.Z5.FAVORITE,
                    value: l ? i.IP.REMOVED_FROM_FAVORITES : i.IP.ADDED_TO_FAVORITES,
                    secondaryValue: t,
                    userId: t === r.x.FRIENDS ? n : void 0,
                });
        },
        [u, t, n, o],
    );
}
