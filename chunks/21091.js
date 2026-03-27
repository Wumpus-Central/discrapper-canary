n.d(t, { A: () => s });
var a = n(64700),
    i = n(311907),
    l = n(880405),
    r = n(422069);
function s(e) {
    let {
        data: t,
        hasFetched: n,
        isFetching: s,
    } = (0, i.cf)([r.A], () => ({
        data: null != e ? r.A.getAnnouncements(e) : void 0,
        hasFetched: null != e && r.A.hasAnnouncementsBeenFetched(e),
        isFetching: null != e && r.A.isAnnouncementsFetching(e),
    }));
    return (
        (0, a.useEffect)(() => {
            null == e || n || r.A.isAnnouncementsFetching(e) || (0, l.Rf)(e);
        }, [e, n]),
        { messages: t?.messages ?? [], channelId: t?.channelId, guildId: t?.guildId, loading: s }
    );
}
