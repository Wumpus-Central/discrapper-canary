t.d(n, { Z: () => s }), t(539854);
var o = t(585305),
    r = t(806729),
    c = t(708108),
    i = t(146078),
    a = t(228168),
    l = t(388032);
function s(e) {
    let { user: n, currentUser: t } = e,
        { mutualFriendsCount: s, mutualGuilds: d } = (0, r.Z)(n),
        u = null == d ? void 0 : d.length,
        f = (0, o.Z)(n),
        p = [
            {
                text: l.intl.string(l.t.chq59f),
                section: a.oh.ACTIVITY,
                subsection: void 0
            }
        ];
    return (
        n.id !== (null == t ? void 0 : t.id) &&
            f &&
            (p.push({
                text: (0, c.Z)(s),
                section: a.oh.MUTUAL_FRIENDS,
                subsection: void 0
            }),
            p.push({
                text: (0, i.Z)(u),
                section: a.oh.MUTUAL_GUILDS,
                subsection: void 0
            })),
        p
    );
}
