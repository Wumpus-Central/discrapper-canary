n.d(t, { Z: () => u }), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(704215),
    l = n(243778),
    s = n(362416),
    o = n(372167),
    c = n(86419),
    d = n(220141);
function u(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: u } = e,
        m = (0, c.ww)(t),
        p = (0, s.Z)({ location: "AccountProfilePopoutUpsell" }),
        h = r.useMemo(() => {
            let e = [];
            return (
                m || e.push(i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                p && e.push(i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                e
            );
        }, [m, p]);
    return (0, a.jsx)(l.ZP, {
        contentTypes: h,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            if (null == u) return null;
            switch (t) {
                case i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(d.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: r,
                        height: u,
                    });
                case i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(o.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: r,
                    });
                default:
                    return null;
            }
        },
    });
}
