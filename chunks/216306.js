(n.d(t, {
    Fo: () => b,
    KY: () => v,
    Uo: () => D,
    fU: () => M,
    qw: () => L,
    tn: () => x
}),
    n(290780));
var r = n(73800),
    l = n(658722),
    i = n.n(l),
    s = n(913527),
    a = n.n(s),
    o = n(442837),
    u = n(704215),
    c = n(45114),
    d = n(740504),
    E = n(605236),
    _ = n(931261),
    A = n(540126),
    m = n(671098),
    T = n(703656),
    f = n(592125),
    g = n(324067),
    I = n(306680),
    h = n(709054),
    O = n(981631),
    N = n(176505),
    p = n(443063),
    R = n(490897),
    S = n(388032);
function C(e, t) {
    e.index = t;
}
function b(e, t, n, l) {
    l = l.toLowerCase();
    let s = (0, _.g)(e),
        a = r.useCallback((e, t) => !(s && e.channel.hasFlag(N.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== O.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[O.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                ('null' === r.id && (e.null = t.null.filter((e) => a(e, l))), (e[r.id] = t[r.id].filter((e) => a(e, l))));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, d.Z)(e._categories, e).forEach(C),
            e
        );
    }, [t, n, a, l]);
}
function v(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case p.z.GUILD_HOME:
                return N.oC.GUILD_HOME;
            case p.z.GUILD_ROLE_SUBSCRIPTIONS:
                return N.oC.ROLE_SUBSCRIPTIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    ((0, m.n)(e, t),
        (0, c.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: R.W.CHANNEL,
                messageId: I.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, T.uL)(O.Z5c.CHANNEL(e, n)));
}
function x(e, t, n, r) {
    let l = (0, E.wE)(u.z.CHANNEL_BROWSER_NUX),
        i = (0, o.cj)(
            [f.Z],
            () => {
                let t = {},
                    n = f.Z.getMutableGuildChannelsForGuild(e);
                for (let e in n) {
                    let { parent_id: l } = n[e];
                    if (null != l) {
                        var r;
                        t[l] = (null != (r = t[l]) ? r : 0) + 1;
                    }
                }
                return t;
            },
            [e]
        ),
        s = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: 'null' !== e.channel.id && 0 === i[e.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : n
            };
        });
    return (
        l ||
            null == r ||
            s.unshift({
                rowCount: 1,
                rowHeight: r
            }),
        s
    );
}
function M(e) {
    var t, n;
    let r = (0, o.e7)([g.Z], () => g.Z.getCategories(e)),
        l = r._categories.length,
        i = r._categories[r._categories.length - 1];
    if (null == i) return 0;
    let s = r[null != (n = null == (t = i.channel) ? void 0 : t.id) ? n : 'null'];
    return null == s ? 0 : 0 === s.length ? i.index + 2 - l : s[s.length - 1].index + 2 - l;
}
function L(e) {
    var t;
    return S.intl.formatToPlainString(S.t['8N0BHR'], { timeAgo: a()(h.default.extractTimestamp(null != (t = I.ZP.lastMessageId(e)) ? t : e)).fromNow() });
}
