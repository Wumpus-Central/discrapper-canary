n.d(t, { D: () => A });
var i = n(64700),
    l = n(417597),
    r = n(717125),
    a = n(376943),
    s = n(961350),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(967198),
    _ = n(287809),
    m = n(36491),
    h = n(752755),
    p = n(461715),
    g = n(652215);
function A(e, t) {
    let n = (0, p.CI)(e),
        A = (0, l.bG)([d.Ay, s.default], () => {
            let e = s.default.getId();
            return d.Ay.isMember(n?.guildId, e);
        }, [n]),
        x = (0, l.bG)([r.A], () => null != n && n?.channelId != null && r.A.isChannelGated(n.guildId, n.channelId), [
            n,
        ]),
        f = t.hasFlag(g.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: C,
            guild: I,
            parentChannel: E,
            user: v,
            selectedGuildId: b,
            canAccess: T,
        } = (0, l.cf)([h.A, c.A, o.A, _.default, u.A], () => {
            let e = h.A.getMediaPostEmbed(n?.threadId)?.media,
                t = c.A.getGuild(n?.guildId),
                i = o.A.getChannel(n?.channelId),
                l = _.default.getUser(e?.author_id),
                r = u.A.getGuildId(),
                s = null != i && (0, a.nc)(i);
            return { rawMediaPostEmbedData: e, guild: t, parentChannel: i, user: l, selectedGuildId: r, canAccess: s };
        }, [n]),
        S = i.useMemo(() => {
            let e = (0, p.tU)({
                mediaPostEmbedData: C,
                guild: I,
                parentChannel: E,
                user: v,
                selectedGuildId: b,
                canAccess: T,
            });
            return null == e ? null : { ...e, user: v };
        }, [C, I, E, v, b, T]);
    return (
        i.useEffect(() => {
            n?.threadId != null &&
                (h.A.getEmbedFetchState(n.threadId) !== h.e.NOT_FETCHED ||
                    (A && !1 === x) ||
                    (!A && f) ||
                    (0, m.O0)(n?.threadId));
        }, [n, A, x, f]),
        S
    );
}
