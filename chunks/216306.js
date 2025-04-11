n.d(t, {
    Fo: () => L,
    KY: () => C,
    Uo: () => m,
    fU: () => v,
    qw: () => b,
    tn: () => M
}),
    n(290780);
var r = n(192379),
    l = n(658722),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    i = n(442837),
    E = n(704215),
    c = n(45114),
    u = n(740504),
    _ = n(605236),
    d = n(931261),
    A = n(540126),
    T = n(671098),
    N = n(703656),
    I = n(592125),
    O = n(324067),
    g = n(306680),
    f = n(709054),
    R = n(981631),
    p = n(176505),
    S = n(443063),
    h = n(490897),
    U = n(388032);
function D(e, t) {
    e.index = t;
}
function L(e, t, n, l) {
    l = l.toLowerCase();
    let s = (0, d.g)(e),
        o = r.useCallback((e, t) => !(s && e.channel.hasFlag(p.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== R.d4z.GUILD_DIRECTORY && (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[R.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                'null' === r.id && (e.null = t.null.filter((e) => o(e, l))), (e[r.id] = t[r.id].filter((e) => o(e, l)));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, u.Z)(e._categories, e).forEach(D),
            e
        );
    }, [t, n, o, l]);
}
function C(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case S.z.GUILD_HOME:
                return p.oC.GUILD_HOME;
            case S.z.GUILD_ROLE_SUBSCRIPTIONS:
                return p.oC.ROLE_SUBSCRIPTIONS;
            case S.z.GUILD_MEMBER_APPLICATIONS:
                return p.oC.MEMBER_APPLICATIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, T.n)(e, t),
        (0, c.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: h.W.CHANNEL,
                messageId: g.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, N.uL)(R.Z5c.CHANNEL(e, n));
}
function M(e, t, n, r) {
    let l = (0, _.wE)(E.z.CHANNEL_BROWSER_NUX),
        a = (0, i.cj)(
            [I.Z],
            () => {
                let t = {},
                    n = I.Z.getMutableGuildChannelsForGuild(e);
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
                rowCount: 'null' !== e.channel.id && 0 === a[e.channel.id] ? 1 : r.length,
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
function v(e) {
    var t, n;
    let r = (0, i.e7)([O.Z], () => O.Z.getCategories(e)),
        l = r._categories.length,
        a = r._categories[r._categories.length - 1];
    if (null == a) return 0;
    let s = r[null != (n = null == (t = a.channel) ? void 0 : t.id) ? n : 'null'];
    return null == s ? 0 : 0 === s.length ? a.index + 2 - l : s[s.length - 1].index + 2 - l;
}
function b(e) {
    var t;
    return U.NW.formatToPlainString(U.t['8N0BHR'], { timeAgo: o()(f.default.extractTimestamp(null != (t = g.ZP.lastMessageId(e)) ? t : e)).fromNow() });
}
