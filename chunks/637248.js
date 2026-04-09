n.d(t, { DD: () => U, RD: () => b, YC: () => F, vh: () => M, xb: () => p, zH: () => k }), n(667532);
var l = n(64700),
    r = n(91871),
    a = n.n(r),
    i = n(989349),
    s = n.n(i),
    o = n(311907),
    E = n(554146),
    u = n(334738),
    c = n(999903),
    _ = n(47167),
    d = n(826673),
    A = n(473529),
    g = n(32603),
    T = n(101579),
    I = n(976860),
    N = n(734057),
    h = n(769765),
    m = n(222823),
    S = n(994500),
    G = n(287809),
    O = n(661191),
    R = n(652215),
    C = n(746080),
    L = n(281405),
    D = n(790782),
    f = n(985018);
function x(e, t) {
    e.index = t;
}
function M(e, t, n, r) {
    r = r.toLowerCase();
    let i = (0, A.d)(e),
        s = l.useCallback(
            (e, t) =>
                !(i && e.channel.hasFlag(C.lx.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== R.rbe.GUILD_DIRECTORY &&
                (0 === t.length ||
                    a()(t, (0, _.m1)(e.channel, G.default, S.A).toLowerCase()) ||
                    e.channel.topic.toLowerCase().includes(t)),
            [i],
        );
    return l.useMemo(() => {
        let e = { null: [], _categories: [] };
        return (
            n[R.rbe.GUILD_CATEGORY].forEach((n) => {
                let { channel: l } = n;
                "null" === l.id && (e.null = t.null.filter((e) => s(e, r))), (e[l.id] = t[l.id].filter((e) => s(e, r)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0,
            )),
            (0, c.A)(e._categories, e).forEach(x),
            e
        );
    }, [t, n, s, r]);
}
function p(e) {
    let t = e.getSections(!1);
    if (t[g.PU] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case L.n.GUILD_HOME:
                return C.VV.GUILD_HOME;
            case L.n.GUILD_ROLE_SUBSCRIPTIONS:
                return C.VV.ROLE_SUBSCRIPTIONS;
            case L.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                return C.VV.MEMBER_SAFETY;
        }
    for (let n = g.bK; n < e.voiceChannelsSectionNumber; n++)
        if (t[n] > 0) {
            let t = e.getChannelFromSectionRow(n, 0)?.channel;
            if (null != t) return t.id;
        }
    return null;
}
function U(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, T.y)(e, t),
        (0, u.Uq)(t.map((e) => ({ channelId: e, readStateType: D.P.CHANNEL, messageId: m.Ay.lastMessageId(e) }))),
        null != n && (0, I.pX)(R.BVt.CHANNEL(e, n));
}
function k(e, t, n, l) {
    let r = (0, d.JZ)(E.M.CHANNEL_BROWSER_NUX),
        a = (0, o.cf)([N.A], () => {
            let t = {},
                n = N.A.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: l } = n[e];
                null != l && (t[l] = (t[l] ?? 0) + 1);
            }
            return t;
        }, [e]),
        i = t._categories.map((e) => {
            let l = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : n,
            };
        });
    return r || null == l || i.unshift({ rowCount: 1, rowHeight: l }), i;
}
function b(e) {
    let t = (0, o.bG)([h.A], () => h.A.getCategories(e)),
        n = t._categories.length,
        l = t._categories[t._categories.length - 1];
    if (null == l) return 0;
    let r = t[l.channel?.id ?? "null"];
    return null == r ? 0 : 0 === r.length ? l.index + 2 - n : r[r.length - 1].index + 2 - n;
}
function F(e) {
    return f.intl.formatToPlainString(f.t["8N0BHR"], {
        timeAgo: s()(O.default.extractTimestamp(m.Ay.lastMessageId(e) ?? e)).fromNow(),
    });
}
