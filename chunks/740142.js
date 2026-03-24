n.d(t, { A: () => d }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(554146),
    l = n(379848),
    r = n(209137),
    o = n(364504);
function d(e) {
    let { displayProfile: t, handleOpenUserProfileModal: n, height: d } = e,
        c = (0, r.A)({ location: "AccountProfilePopoutUpsell" }),
        u = i.useMemo(() => {
            let e = [];
            return c.length > 0 && e.push(s.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL), e;
        }, [c]);
    return (0, a.jsx)(l.Ay, {
        contentTypes: u,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e;
            return null == d
                ? null
                : i === s.M.WISHLIST_USER_PROFILE_ACCOUNT_POPOUT_UPSELL
                  ? (0, a.jsx)(o.A, {
                        profileUserId: t?.userId,
                        handleOpenUserProfileModal: n,
                        markAsDismissed: l,
                        applicationIds: c,
                    })
                  : null;
        },
    });
}
