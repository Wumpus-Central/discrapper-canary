n.d(t, { Z: () => s }), n(539854);
var r = n(585305),
    o = n(806729),
    c = n(708108),
    i = n(146078),
    l = n(228168),
    a = n(388032);
function s(e) {
    let { user: t, currentUser: n } = e,
        { mutualFriendsCount: s, mutualGuilds: d } = (0, o.Z)(t),
        u = null == d ? void 0 : d.length,
        f = (0, r.Z)(t),
        p = [
            {
                text: a.intl.string(a.t.chq59f),
                section: l.oh.ACTIVITY,
                subsection: void 0
            }
        ];
    return (
        t.id !== (null == n ? void 0 : n.id) &&
            f &&
            (p.push({
                text: (0, c.Z)(s),
                section: l.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            p.push({
                text: (0, i.Z)(u),
                section: l.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        p
    );
}
