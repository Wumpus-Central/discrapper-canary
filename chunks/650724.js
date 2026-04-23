n.d(t, { D: () => A });
var i = n(64700),
    l = n(417597),
    a = n(717125),
    s = n(376943),
    r = n(961350),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(967198),
    m = n(287809),
    _ = n(36491),
    h = n(752755),
    p = n(461715),
    g = n(652215);
function A(e, t) {
    let n = (0, p.CI)(e),
        A = (0, l.bG)([d.Ay, r.default], () => {
            let e = r.default.getId();
            return d.Ay.isMember(n?.guildId, e);
        }, [n]),
        f = (0, l.bG)([a.A], () => null != n && n?.channelId != null && a.A.isChannelGated(n.guildId, n.channelId), [
            n,
        ]),
        x = t.hasFlag(g.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: C,
            guild: E,
            parentChannel: I,
            user: v,
            selectedGuildId: b,
            canAccess: T,
        } = (0, l.cf)([h.A, c.A, o.A, m.default, u.A], () => {
            let e = h.A.getMediaPostEmbed(n?.threadId)?.media,
                t = c.A.getGuild(n?.guildId),
                i = o.A.getChannel(n?.channelId),
                l = m.default.getUser(e?.author_id),
                a = u.A.getGuildId(),
                r = null != i && (0, s.nc)(i);
            return { rawMediaPostEmbedData: e, guild: t, parentChannel: i, user: l, selectedGuildId: a, canAccess: r };
        }, [n]),
        S = i.useMemo(() => {
            let e = (0, p.tU)({
                mediaPostEmbedData: C,
                guild: E,
                parentChannel: I,
                user: v,
                selectedGuildId: b,
                canAccess: T,
            });
            return null == e ? null : { ...e, user: v };
        }, [C, E, I, v, b, T]);
    return (
        i.useEffect(() => {
            n?.threadId != null &&
                (h.A.getEmbedFetchState(n.threadId) !== h.e.NOT_FETCHED ||
                    (A && !1 === f) ||
                    (!A && x) ||
                    (0, _.O0)(n?.threadId));
        }, [n, A, f, x]),
        S
    );
}
