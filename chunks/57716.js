i.d(t, {
    Z: function () {
        return c;
    }
}),
    i(47120);
var n = i(192379),
    r = i(434650),
    a = i(626135),
    o = i(132871),
    l = i(981631);
function c(e) {
    let { collection: t } = e,
        [i, c] = n.useState(!1),
        s = (0, o.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, r.O)((e) => {
            e && c(!0);
        });
    return (
        n.useEffect(() => {
            i &&
                a.default.track(l.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                    collection_id: t.id,
                    guild_id: s
                });
        }, [i, t, s]),
        d
    );
}
