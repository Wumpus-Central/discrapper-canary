t.d(l, { A: () => s });
var i = t(64700),
    n = t(576622);
function s(e) {
    let { userId: l, initialGuildId: t } = e,
        [s, a] = i.useState(t),
        [r, o] = i.useState(t),
        d = i.useRef(r),
        c = i.useCallback((e) => {
            a(e ?? void 0);
        }, []);
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, n.A)(l, void 0, {
                    type: "modal",
                    guildId: s,
                    withMutualFriendsCount: !0,
                    withMutualFriends: !1,
                    withMutualGuilds: !0,
                }).then(
                    () => {
                        e || (o(s), (d.current = s));
                    },
                    () => {
                        e || a(d.current);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [s, l]),
        { guildId: r, pendingGuildId: s, isLoading: s !== r, selectUserProfile: c }
    );
}
