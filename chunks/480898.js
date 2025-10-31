n.d(t, { Z: () => d }), n(539854);
var a = n(951288),
    i = n(647438),
    l = n(704215),
    r = n(243778),
    s = n(86419),
    o = n(172416),
    c = n(220141);
function d(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: d } = e,
        u = (0, o.Un)({ location: "AccountProfilePopoutUpsell" }),
        m = (0, s.ww)(t),
        p = i.useMemo(() => {
            let e = [];
            return u && !m && e.push(l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [u, m]);
    return (0, a.jsx)(r.ZP, {
        contentTypes: p,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e;
            return null == d
                ? null
                : t === l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, a.jsx)(c.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: i,
                        height: d,
                    })
                  : null;
        },
    });
}
