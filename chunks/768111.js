n.d(t, { Z: () => s }), n(539854);
var o = n(585305),
    r = n(806729),
    i = n(708108),
    c = n(146078),
    a = n(228168),
    l = n(388032);
function s(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: s, mutualGuilds: d } = (0, r.Z)(t),
        u = null == d ? void 0 : d.length,
        f = (0, o.Z)(t),
        p = [
            {
                text: l.intl.string(l.t.chq59f),
                section: a.oh.ACTIVITY,
                subsection: void 0
            }
        ];
    return (
        t.id !== (null == n ? void 0 : n.id) &&
            f &&
            (p.push({
                text: (0, i.Z)(s),
                section: a.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            p.push({
                text: (0, c.Z)(u),
                section: a.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        p
    );
}
