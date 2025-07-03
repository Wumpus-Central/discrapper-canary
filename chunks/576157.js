n.d(t, { w: () => c });
var r = n(73800),
    i = n(704215),
    a = n(211644),
    o = n(266454),
    s = n(605236),
    l = n(921944);
function c() {
    let e = (0, o.Nj)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE);
    return (
        r.useEffect(() => {
            if (!e)
                return (
                    (0, s.kk)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                    () => {
                        (0, a.gE)({ content: i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                    }
                );
        }, [e]),
        {
            shouldShowNewBadge: !e,
            markNewBadgeAsDismissed: r.useCallback(() => {
                (0, o.Q3)(i.z.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: l.L.TAKE_ACTION });
            }, [])
        }
    );
}
