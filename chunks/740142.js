n.d(t, { A: () => u }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(554146),
    l = n(379848),
    r = n(948011),
    o = n(364504),
    d = n(735321),
    c = n(162942);
function u(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: u } = e,
        m = (0, d.yy)(t),
        h = (0, r.A)({ location: "AccountProfilePopoutUpsell" }),
        x = i.useMemo(() => {
            let e = [];
            return (
                m || e.push(s.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                h && e.push(s.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL),
                e
            );
        }, [m, h]);
    return (0, a.jsx)(l.Ay, {
        contentTypes: x,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e;
            if (null == u) return null;
            switch (i) {
                case s.M.GAME_WIDGETS_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(c.A, { handleOpenUserProfileModal: n, markAsDismissed: l, height: u });
                case s.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL:
                    return (0, a.jsx)(o.A, {
                        profileUserId: t?.userId,
                        handleOpenUserProfileModal: n,
                        markAsDismissed: l,
                    });
                default:
                    return null;
            }
        },
    });
}
