t.d(n, { A: () => r });
var l = t(64700),
    i = t(576622);
function r(e) {
    let { userId: n, initialGuildId: t } = e,
        [r, a] = l.useState(t),
        [s, o] = l.useState(t),
        d = l.useRef(s),
        u = l.useCallback((e) => {
            a(e ?? void 0);
        }, []);
    return (
        l.useEffect(() => {
            let e = !1;
            return (
                (0, i.A)(n, void 0, {
                    type: "modal",
                    guildId: r,
                    withMutualFriendsCount: !0,
                    withMutualFriends: !1,
                    withMutualGuilds: !0,
                }).then(
                    () => {
                        e || (o(r), (d.current = r));
                    },
                    () => {
                        e || a(d.current);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [r, n]),
        { guildId: s, pendingGuildId: r, isLoading: r !== s, selectUserProfile: u }
    );
}
