n.d(t, { Z: () => u });
var i = n(524136),
    s = n(70730),
    l = n(419954),
    a = n(933297),
    r = n(253932),
    o = n(780964),
    d = n(985018);
let u = (0, l.zD)(o.X.FRIEND_ANNIVERSARY_NOTIFICATIONS, {
    useTitle: () => d.intl.string(d.t.NjOMvh),
    usePersistentBadge: () => ({ badgeType: a.Xi.BETA }),
    useValue: r.oz.useSetting,
    setValue: i.O,
    useSearchTerms: () => [d.intl.string(d.t.hi4dSk)],
    usePredicate: () => {
        let { enabled: e, showDmPrompts: t } = s.u.getConfig({ location: "FriendAnniversaryNotifications" });
        return e && t;
    },
});
