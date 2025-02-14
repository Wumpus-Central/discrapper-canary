n.d(t, { J: () => x });
var i = n(192379),
    l = n(399606),
    a = n(430198),
    r = n(754688),
    s = n(314897),
    o = n(592125),
    c = n(271383),
    d = n(430824),
    u = n(914010),
    m = n(594174),
    _ = n(158222),
    h = n(312146),
    p = n(487554),
    g = n(874748),
    f = n(981631);
function x(e, t) {
    let n = (0, h.p$)(),
        x = (0, g.LR)(e),
        C = (0, l.e7)(
            [c.ZP, s.default],
            () => {
                let e = s.default.getId();
                return c.ZP.isMember(null == x ? void 0 : x.guildId, e);
            },
            [x]
        ),
        E = (0, l.e7)([a.Z], () => null != x && (null == x ? void 0 : x.channelId) != null && a.Z.isChannelGated(x.guildId, x.channelId), [x]),
        v = t.hasFlag(f.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: I,
            guild: N,
            parentChannel: S,
            user: T,
            selectedGuildId: b,
            canAccess: A
        } = (0, l.cj)(
            [p.Z, d.Z, o.Z, m.default, u.Z],
            () => {
                var e;
                let t = null === (e = p.Z.getMediaPostEmbed(null == x ? void 0 : x.threadId)) || void 0 === e ? void 0 : e.media,
                    n = d.Z.getGuild(null == x ? void 0 : x.guildId),
                    i = o.Z.getChannel(null == x ? void 0 : x.channelId),
                    l = m.default.getUser(null == t ? void 0 : t.author_id),
                    a = u.Z.getGuildId(),
                    s = null != i && (0, r.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: l,
                    selectedGuildId: a,
                    canAccess: s
                };
            },
            [x]
        ),
        j = i.useMemo(() => {
            let e = (0, g.ku)({
                mediaPostEmbedData: I,
                guild: N,
                parentChannel: S,
                user: T,
                selectedGuildId: b,
                canAccess: A
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: T
                  };
        }, [I, N, S, T, b, A]);
    return (
        i.useEffect(() => {
            if ((null == x ? void 0 : x.threadId) != null) {
                let e = p.Z.getEmbedFetchState(x.threadId);
                !0 !== n || e !== p.M.NOT_FETCHED || (C && !1 === E) || (!C && v) || (0, _.xP)(null == x ? void 0 : x.threadId);
            }
        }, [x, n, C, E, v]),
        j
    );
}
