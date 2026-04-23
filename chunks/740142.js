n.d(t, { A: () => d }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(379848),
    r = n(209137),
    o = n(364504);
function d(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: d } = e,
        c = (0, r.A)({ location: "AccountProfilePopoutUpsell" }),
        u = s.useMemo(() => {
            let e = [];
            return c.length > 0 && e.push(l.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [c]);
    return (0, i.jsx)(a.Ay, {
        contentTypes: u,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: a } = e;
            return null == d
                ? null
                : s === l.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, i.jsx)(o.A, { profileUserId: t?.userId, handleOpenUserProfileModal: n, markAsDismissed: a })
                  : null;
        },
    });
}
