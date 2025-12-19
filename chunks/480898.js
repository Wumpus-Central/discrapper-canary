n.d(t, { Z: () => m }), n(539854);
var a = n(54381),
    r = n(473749),
    i = n(704215),
    l = n(243778),
    s = n(362416),
    o = n(372167),
    c = n(86419),
    d = n(172416),
    u = n(220141);
function m(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: m } = e,
        p = (0, d.Un)({ location: "AccountProfilePopoutUpsell" }),
        h = (0, c.ww)(t),
        f = (0, s.Z)({ location: "AccountProfilePopoutUpsell" }),
        x = r.useMemo(() => {
            let e = [];
            return (
                p && !h && e.push(i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                f && e.push(i.z.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                e
            );
        }, [p, h, f]);
    return (0, a.jsx)(l.ZP, {
        contentTypes: x,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: r } = e;
            if (null == m) return null;
            switch (t) {
                case i.z.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(u.Z, {
                        handleOpenUserProfileModal: n,
                        markAsDismissed: r,
                        height: m,
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
