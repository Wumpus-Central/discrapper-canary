n.d(t, {
    J: function () {
        return E;
    }
});
var i = n(192379),
    r = n(399606),
    l = n(430198),
    a = n(754688),
    o = n(314897),
    s = n(592125),
    c = n(271383),
    d = n(430824),
    u = n(914010),
    m = n(594174),
    h = n(158222),
    f = n(312146),
    p = n(487554),
    _ = n(874748),
    g = n(981631);
function E(e, t) {
    let n = (0, f.p$)(),
        E = (0, _.LR)(e),
        C = (0, r.e7)(
            [c.ZP, o.default],
            () => {
                let e = o.default.getId();
                return c.ZP.isMember(null == E ? void 0 : E.guildId, e);
            },
            [E]
        ),
        I = (0, r.e7)([l.Z], () => null != E && (null == E ? void 0 : E.channelId) != null && l.Z.isChannelGated(E.guildId, E.channelId), [E]),
        x = t.hasFlag(g.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: N,
            guild: v,
            parentChannel: T,
            user: S,
            selectedGuildId: A,
            canAccess: b
        } = (0, r.cj)(
            [p.Z, d.Z, s.Z, m.default, u.Z],
            () => {
                var e;
                let t = null === (e = p.Z.getMediaPostEmbed(null == E ? void 0 : E.threadId)) || void 0 === e ? void 0 : e.media,
                    n = d.Z.getGuild(null == E ? void 0 : E.guildId),
                    i = s.Z.getChannel(null == E ? void 0 : E.channelId),
                    r = m.default.getUser(null == t ? void 0 : t.author_id),
                    l = u.Z.getGuildId(),
                    o = null != i && (0, a.YO)(i);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: i,
                    user: r,
                    selectedGuildId: l,
                    canAccess: o
                };
            },
            [E]
        ),
        j = i.useMemo(() => {
            let e = (0, _.ku)({
                mediaPostEmbedData: N,
                guild: v,
                parentChannel: T,
                user: S,
                selectedGuildId: A,
                canAccess: b
            });
            return null == e
                ? null
                : {
                      ...e,
                      user: S
                  };
        }, [N, v, T, S, A, b]);
    return (
        i.useEffect(() => {
            if ((null == E ? void 0 : E.threadId) != null) {
                let e = p.Z.getEmbedFetchState(E.threadId);
                !0 === n && e === p.M.NOT_FETCHED && (!C || !1 !== I) && (C || !x) && (0, h.xP)(null == E ? void 0 : E.threadId);
            }
        }, [E, n, C, I, x]),
        j
    );
}
