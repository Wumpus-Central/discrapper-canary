n.d(t, {
    Fo: () => I,
    KY: () => P,
    Uo: () => N,
    fU: () => w,
    qw: () => T,
    tn: () => Z,
}),
    n(290780);
var r = n(647438),
    i = n(658722),
    l = n.n(i),
    o = n(913527),
    a = n.n(o),
    s = n(442837),
    c = n(704215),
    u = n(45114),
    d = n(740504),
    p = n(266454),
    h = n(931261),
    f = n(540126),
    g = n(671098),
    m = n(703656),
    b = n(592125),
    _ = n(324067),
    y = n(306680),
    O = n(709054),
    v = n(981631),
    j = n(176505),
    C = n(443063),
    x = n(490897),
    E = n(388032);
function S(e, t) {
    e.index = t;
}
function I(e, t, n, i) {
    i = i.toLowerCase();
    let o = (0, h.g)(e),
        a = r.useCallback(
            (e, t) =>
                !(o && e.channel.hasFlag(j.zZ.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== v.d4z.GUILD_DIRECTORY &&
                (0 === t.length || l()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)),
            [o],
        );
    return r.useMemo(() => {
        let e = {
            null: [],
            _categories: [],
        };
        return (
            n[v.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: r } = n;
                "null" === r.id && (e.null = t.null.filter((e) => a(e, i))), (e[r.id] = t[r.id].filter((e) => a(e, i)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === i.length || e[t.channel.id].length > 0,
            )),
            (0, d.Z)(e._categories, e).forEach(S),
            e
        );
    }, [t, n, a, i]);
}
function P(e) {
    let t = e.getSections(!1);
    if (t[f.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case C.z.GUILD_HOME:
                return j.oC.GUILD_HOME;
            case C.z.GUILD_ROLE_SUBSCRIPTIONS:
                return j.oC.ROLE_SUBSCRIPTIONS;
            case C.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                return j.oC.MEMBER_SAFETY;
        }
    for (let r = f.wd; r < e.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(r, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, g.n)(e, t),
        (0, u.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: x.W.CHANNEL,
                messageId: y.ZP.lastMessageId(e),
            })),
        ),
        null != n && (0, m.uL)(v.Z5c.CHANNEL(e, n));
}
function Z(e, t, n, r) {
    let i = (0, p.Nj)(c.z.CHANNEL_BROWSER_NUX),
        l = (0, s.cj)([b.Z], () => {
            let t = {},
                n = b.Z.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: i } = n[e];
                if (null != i) {
                    var r;
                    t[i] = (null != (r = t[i]) ? r : 0) + 1;
                }
            }
            return t;
        }, [e]),
        o = t._categories.map((e) => {
            let r = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === l[e.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : n,
            };
        });
    return (
        i ||
            null == r ||
            o.unshift({
                rowCount: 1,
                rowHeight: r,
            }),
        o
    );
}
function w(e) {
    var t, n;
    let r = (0, s.e7)([_.Z], () => _.Z.getCategories(e)),
        i = r._categories.length,
        l = r._categories[r._categories.length - 1];
    if (null == l) return 0;
    let o = r[null != (n = null == (t = l.channel) ? void 0 : t.id) ? n : "null"];
    return null == o ? 0 : 0 === o.length ? l.index + 2 - i : o[o.length - 1].index + 2 - i;
}
function T(e) {
    var t;
    return E.intl.formatToPlainString(E.t["8N0BHR"], {
        timeAgo: a()(O.default.extractTimestamp(null != (t = y.ZP.lastMessageId(e)) ? t : e)).fromNow(),
    });
}
