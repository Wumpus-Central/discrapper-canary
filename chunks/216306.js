n.d(t, {
    Fo: () => D,
    KY: () => C,
    Uo: () => M,
    fU: () => v,
    qw: () => b,
    tn: () => m
}),
    n(290780);
var r = n(192379),
    l = n(658722),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
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
    R = n(306680),
    g = n(709054),
    f = n(981631),
    S = n(176505),
    p = n(443063),
    h = n(490897),
    U = n(388032);
function L(e, t) {
    e.index = t;
}
function D(e, t, n, l) {
    l = l.toLowerCase();
    let a = (0, d.g)(e),
        o = r.useCallback((e, t) => !(a && e.channel.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== f.d4z.GUILD_DIRECTORY && (0 === t.length || s()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[f.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                'null' === r.id && (e.null = t.null.filter((e) => o(e, l))), (e[r.id] = t[r.id].filter((e) => o(e, l)));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, u.Z)(e._categories, e).forEach(L),
            e
        );
    }, [t, n, o, l]);
}
function C(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case p.z.GUILD_HOME:
                return S.oC.GUILD_HOME;
            case p.z.GUILD_ROLE_SUBSCRIPTIONS:
                return S.oC.ROLE_SUBSCRIPTIONS;
            case p.z.GUILD_MEMBER_APPLICATIONS:
                return S.oC.MEMBER_APPLICATIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, T.n)(e, t),
        (0, c.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: h.W.CHANNEL,
                messageId: R.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, N.uL)(f.Z5c.CHANNEL(e, n));
}
function m(e, t, n, r) {
    let l = (0, _.wE)(E.z.CHANNEL_BROWSER_NUX),
        s = (0, i.cj)(
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
        a = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: 'null' !== e.channel.id && 0 === s[e.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : n
            };
        });
    return (
        l ||
            null == r ||
            a.unshift({
                rowCount: 1,
                rowHeight: r
            }),
        a
    );
}
function v(e) {
    var t, n;
    let r = (0, i.e7)([O.Z], () => O.Z.getCategories(e)),
        l = r._categories.length,
        s = r._categories[r._categories.length - 1];
    if (null == s) return 0;
    let a = r[null != (n = null == (t = s.channel) ? void 0 : t.id) ? n : 'null'];
    return null == a ? 0 : 0 === a.length ? s.index + 2 - l : a[a.length - 1].index + 2 - l;
}
function b(e) {
    var t;
    return U.NW.formatToPlainString(U.t['8N0BHR'], { timeAgo: o()(g.default.extractTimestamp(null != (t = R.ZP.lastMessageId(e)) ? t : e)).fromNow() });
}
