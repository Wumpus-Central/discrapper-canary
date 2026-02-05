n.d(t, { D: () => f });
var i = n(64700),
    l = n(417597),
    a = n(717125),
    r = n(376943),
    s = n(961350),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(967198),
    m = n(287809),
    _ = n(36491),
    h = n(219444),
    p = n(752755),
    g = n(461715),
    A = n(652215);
function f(e, t) {
    let n = (0, h.$k)(),
        f = (0, g.CI)(e),
        x = (0, l.bG)([d.Ay, s.default], () => {
            let e = s.default.getId();
            return d.Ay.isMember(f?.guildId, e);
        }, [f]),
        E = (0, l.bG)([a.A], () => null != f && f?.channelId != null && a.A.isChannelGated(f.guildId, f.channelId), [
            f,
        ]),
        C = t.hasFlag(A.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: I,
            guild: T,
            parentChannel: v,
            user: N,
            selectedGuildId: S,
            canAccess: b,
        } = (0, l.cf)([p.A, c.A, o.A, m.default, u.A], () => {
            let e = p.A.getMediaPostEmbed(f?.threadId)?.media,
                t = c.A.getGuild(f?.guildId),
                n = o.A.getChannel(f?.channelId),
                i = m.default.getUser(e?.author_id),
                l = u.A.getGuildId(),
                a = null != n && (0, r.nc)(n);
            return { rawMediaPostEmbedData: e, guild: t, parentChannel: n, user: i, selectedGuildId: l, canAccess: a };
        }, [f]),
        y = i.useMemo(() => {
            let e = (0, g.tU)({
                mediaPostEmbedData: I,
                guild: T,
                parentChannel: v,
                user: N,
                selectedGuildId: S,
                canAccess: b,
            });
            return null == e ? null : { ...e, user: N };
        }, [I, T, v, N, S, b]);
    return (
        i.useEffect(() => {
            if (f?.threadId != null) {
                let e = p.A.getEmbedFetchState(f.threadId);
                !0 !== n || e !== p.e.NOT_FETCHED || (x && !1 === E) || (!x && C) || (0, _.O0)(f?.threadId);
            }
        }, [f, n, x, E, C]),
        y
    );
}
