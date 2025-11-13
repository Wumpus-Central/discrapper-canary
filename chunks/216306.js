n.d(t, {
    Fo: () => S,
    KY: () => L,
    Uo: () => _,
    fU: () => P,
    qw: () => Z,
    tn: () => C,
}),
    n(290780);
var r = n(647438),
    i = n(658722),
    l = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    c = n(704215),
    u = n(45114),
    d = n(740504),
    h = n(266454),
    g = n(931261),
    p = n(540126),
    f = n(671098),
    v = n(703656),
    m = n(592125),
    D = n(324067),
    O = n(306680),
    b = n(709054),
    j = n(981631),
    y = n(176505),
    x = n(443063),
    w = n(490897),
    E = n(388032);
function N(e, t) {
    e.index = t;
}
function S(e, t, n, i) {
    i = i.toLowerCase();
    let a = (0, g.g)(e),
        s = r.useCallback(
            (e, t) =>
                !(a && e.channel.hasFlag(y.zZ.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== j.d4z.GUILD_DIRECTORY &&
                (0 === t.length || l()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)),
            [a],
        );
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: [],
        };
        return (
            n[j.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                "null" === r.id && (e.null = t.null.filter((e) => s(e, i))), (e[r.id] = t[r.id].filter((e) => s(e, i)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0,
            )),
            (0, d.Z)(e._categories, e).forEach(N),
            e
        );
    }, [t, n, s, i]);
}
function L(e) {
    let t = e.getSections(!1);
    if (t[p.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case x.z.GUILD_HOME:
                return y.oC.GUILD_HOME;
            case x.z.GUILD_ROLE_SUBSCRIPTIONS:
                return y.oC.ROLE_SUBSCRIPTIONS;
            case x.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                return y.oC.MEMBER_SAFETY;
        }
    for (let r = p.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, f.n)(e, t),
        (0, u.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: w.W.CHANNEL,
                messageId: O.ZP.lastMessageId(e),
            })),
        ),
        null != n && (0, v.uL)(j.Z5c.CHANNEL(e, n));
}
function C(e, t, n, r) {
    let i = (0, h.Nj)(c.z.CHANNEL_BROWSER_NUX),
        l = (0, o.cj)([m.Z], () => {
            let t = {},
                n = m.Z.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: i } = n[e];
                if (null != i) {
                    var r;
                    t[i] = (null != (r = t[i]) ? r : 0) + 1;
                }
            }
            return t;
        }, [e]),
        a = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : n,
            };
        });
    return (
        i ||
            null == r ||
            a.unshift({
                rowCount: 1,
                rowHeight: r,
            }),
        a
    );
}
function P(e) {
    var t, n;
    let r = (0, o.e7)([D.Z], () => D.Z.getCategories(e)),
        i = r._categories.length,
        l = r._categories[r._categories.length - 1];
    if (null == l) return 0;
    let a = r[null != (n = null == (t = l.channel) ? void 0 : t.id) ? n : "null"];
    return null == a ? 0 : 0 === a.length ? l.index + 2 - i : a[a.length - 1].index + 2 - i;
}
function Z(e) {
    var t;
    return E.intl.formatToPlainString(E.t["8N0BHR"], {
        timeAgo: s()(b.default.extractTimestamp(null != (t = O.ZP.lastMessageId(e)) ? t : e)).fromNow(),
    });
}
