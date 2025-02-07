n.d(t, {
    Fo: () => M,
    KY: () => h,
    Uo: () => p,
    fU: () => v,
    qw: () => P,
    tn: () => m
}),
    n(733860);
var r = n(192379),
    l = n(658722),
    i = n.n(l),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    E = n(704215),
    u = n(45114),
    c = n(740504),
    _ = n(605236),
    d = n(931261),
    A = n(540126),
    T = n(671098),
    I = n(703656),
    N = n(592125),
    g = n(324067),
    O = n(306680),
    R = n(709054),
    S = n(981631),
    U = n(176505),
    f = n(443063),
    D = n(490897),
    L = n(388032);
function C(e, t) {
    e.index = t;
}
function M(e, t, n, l) {
    l = l.toLowerCase();
    let a = (0, d.g)(e),
        s = r.useCallback((e, t) => !(a && e.channel.hasFlag(U.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== S.d4z.GUILD_DIRECTORY && (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [a]);
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return (
            n[S.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                'null' === r.id && (e.null = t.null.filter((e) => s(e, l))), (e[r.id] = t[r.id].filter((e) => s(e, l)));
            }),
            (e._categories = t._categories.filter((t) => 'null' === t.channel.id || 0 === l.length || e[t.channel.id].length > 0)),
            (0, c.Z)(e._categories, e).forEach(C),
            e
        );
    }, [t, n, s, l]);
}
function h(e) {
    let t = e.getSections(!1);
    if (t[A.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case f.z.GUILD_HOME:
                return U.oC.GUILD_HOME;
            case f.z.GUILD_ROLE_SUBSCRIPTIONS:
                return U.oC.ROLE_SUBSCRIPTIONS;
            case f.z.GUILD_MEMBER_APPLICATIONS:
                return U.oC.MEMBER_APPLICATIONS;
        }
    for (let r = A.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null === (n = e.getChannelFromSectionRow(r, 0)) || void 0 === n ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, T.n)(e, t),
        (0, u.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: D.W.CHANNEL,
                messageId: O.ZP.lastMessageId(e)
            }))
        ),
        null != n && (0, I.uL)(S.Z5c.CHANNEL(e, n));
}
function m(e, t, n, r) {
    let l = (0, _.wE)(E.z.CHANNEL_BROWSER_NUX),
        i = (0, o.cj)(
            [N.Z],
            () => {
                let t = {},
                    n = N.Z.getMutableGuildChannelsForGuild(e);
                for (let e in n) {
                    let { parent_id: l } = n[e];
                    if (null != l) {
                        var r;
                        t[l] = (null !== (r = t[l]) && void 0 !== r ? r : 0) + 1;
                    }
                }
                return t;
            },
            [e]
        ),
        a = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: 'null' !== e.channel.id && 0 === i[e.channel.id] ? 1 : r.length,
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
    let r = (0, o.e7)([g.Z], () => g.Z.getCategories(e)),
        l = r._categories.length,
        i = r._categories[r._categories.length - 1];
    if (null == i) return 0;
    let a = r[null !== (n = null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : 'null'];
    return null == a ? 0 : 0 === a.length ? i.index + 2 - l : a[a.length - 1].index + 2 - l;
}
function P(e) {
    var t;
    return L.intl.formatToPlainString(L.t['8N0BHR'], { timeAgo: s()(R.default.extractTimestamp(null !== (t = O.ZP.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow() });
}
