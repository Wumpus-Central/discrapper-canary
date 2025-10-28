n.d(t, { Z: () => d }), n(539854);
var a = n(951288),
    r = n(647438),
    l = n(704215),
    i = n(243778),
    o = n(86419),
    s = n(172416),
    c = n(220141);
function d(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: d } = e,
        u = (0, s.Un)({ location: "AccountProfilePopoutUpsell" }),
        m = (0, o.ww)(t),
        p = r.useMemo(() => {
            let e = [];
            return u && !m && e.push(l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [u, m]);
    return (0, a.jsx)(i.ZP, {
        contentTypes: p,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            return null == d
                ? null
                : t === l.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, a.jsx)(c.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: r,
                        height: d,
                    })
                  : null;
        },
    });
}
