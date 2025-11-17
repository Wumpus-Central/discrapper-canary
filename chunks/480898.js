n.d(t, { Z: () => d }), n(539854);
var a = n(54381),
    l = n(473749),
    r = n(704215),
    i = n(243778),
    s = n(86419),
    o = n(172416),
    c = n(220141);
function d(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: d } = e,
        u = (0, o.Un)({ location: "AccountProfilePopoutUpsell" }),
        m = (0, s.ww)(t),
        p = l.useMemo(() => {
            let e = [];
            return u && !m && e.push(r.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [u, m]);
    return (0, a.jsx)(i.ZP, {
        contentTypes: p,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e;
            return null == d
                ? null
                : t === r.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, a.jsx)(c.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: l,
                        height: d,
                    })
                  : null;
        },
    });
}
