(n.d(t, {
    Fo: () => b,
    KY: () => D,
    Uo: () => v,
    fU: () => L,
    qw: () => M,
    tn: () => U
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
    E = n(740504),
    d = n(266454),
    _ = n(931261),
    A = n(540126),
    T = n(671098),
    I = n(703656),
    g = n(592125),
    m = n(324067),
    f = n(306680),
    O = n(709054),
    N = n(981631),
    h = n(176505),
    R = n(443063),
    p = n(490897),
    S = n(388032);
function C(e, t) {
    e.index = t;
}
function b(e, t, n, l) {
    l = l.toLowerCase();
    let s = (0, _.g)(e),
        a = r.useCallback((e, t) => !(s && e.channel.hasFlag(h.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== N.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [s]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[N.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                ('null' === r.id && (e.null = t.null.filter((e) => a(e, l))), (e[r.id] = t[r.id].filter((e) => a(e, l))));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, E.Z)(e._categories, e).forEach(C),
            e
        );
    }, [t, n, a, l]);
}
function D(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case R.z.GUILD_HOME:
                return h.oC.GUILD_HOME;
            case R.z.GUILD_ROLE_SUBSCRIPTIONS:
                return h.oC.ROLE_SUBSCRIPTIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    ((0, T.n)(e, t),
        (0, c.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: p.W.CHANNEL,
                messageId: f.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, I.uL)(N.Z5c.CHANNEL(e, n)));
}
function U(e, t, n, r) {
    let l = (0, d.Nj)(u.z.CHANNEL_BROWSER_NUX),
        i = (0, o.cj)(
            [g.Z],
            () => {
                let t = {},
                    n = g.Z.getMutableGuildChannelsForGuild(e);
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
function L(e) {
    var t, n;
    let r = (0, o.e7)([m.Z], () => m.Z.getCategories(e)),
        l = r._categories.length,
        i = r._categories[r._categories.length - 1];
    if (null == i) return 0;
    let s = r[null != (n = null == (t = i.channel) ? void 0 : t.id) ? n : 'null'];
    return null == s ? 0 : 0 === s.length ? i.index + 2 - l : s[s.length - 1].index + 2 - l;
}
function M(e) {
    var t;
    return S.intl.formatToPlainString(S.t['8N0BHR'], { timeAgo: a()(O.default.extractTimestamp(null != (t = f.ZP.lastMessageId(e)) ? t : e)).fromNow() });
}
