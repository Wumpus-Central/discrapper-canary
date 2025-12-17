n.d(t, {
    Fo: () => R,
    KY: () => P,
    Uo: () => S,
    fU: () => L,
    qw: () => A,
    tn: () => C,
}),
    n(290780);
var l = n(473749),
    r = n(658722),
    i = n.n(r),
    a = n(913527),
    s = n.n(a),
    o = n(442837),
    u = n(704215),
    c = n(45114),
    d = n(740504),
    h = n(266454),
    p = n(931261),
    g = n(540126),
    f = n(671098),
    v = n(703656),
    m = n(592125),
    D = n(324067),
    b = n(306680),
    y = n(709054),
    E = n(981631),
    O = n(176505),
    j = n(443063),
    x = n(490897),
    w = n(388032);
function N(e, t) {
    e.index = t;
}
function R(e, t, n, r) {
    r = r.toLowerCase();
    let a = (0, p.g)(e),
        s = l.useCallback(
            (e, t) =>
                !(a && e.channel.hasFlag(O.zZ.IS_GUILD_RESOURCE_CHANNEL)) &&
                e.channel.type !== E.d4z.GUILD_DIRECTORY &&
                (0 === t.length || i()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)),
            [a],
        );
    return l.useMemo(() => {
        let e = {
            null: [],
            _categories: [],
        };
        return (
            n[E.d4z.GUILD_CATEGORY].forEach((n) => {
                let { channel: l } = n;
                "null" === l.id && (e.null = t.null.filter((e) => s(e, r))), (e[l.id] = t[l.id].filter((e) => s(e, r)));
            }),
            (e._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0,
            )),
            (0, d.Z)(e._categories, e).forEach(N),
            e
        );
    }, [t, n, s, r]);
}
function P(e) {
    let t = e.getSections(!1);
    if (t[g.wZ] > 0)
        switch (e.getGuildActionSection().getRow(0)) {
            case j.z.GUILD_HOME:
                return O.oC.GUILD_HOME;
            case j.z.GUILD_ROLE_SUBSCRIPTIONS:
                return O.oC.ROLE_SUBSCRIPTIONS;
            case j.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                return O.oC.MEMBER_SAFETY;
        }
    for (let l = g.wd; l < e.voiceChannelsSectionNumber; l++)
        if (t[l] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(l, 0)) ? void 0 : n.channel;
            if (null != t) return t.id;
        }
    return null;
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, f.n)(e, t),
        (0, c.y5)(
            t.map((e) => ({
                channelId: e,
                readStateType: x.W.CHANNEL,
                messageId: b.ZP.lastMessageId(e),
            })),
        ),
        null != n && (0, v.uL)(E.Z5c.CHANNEL(e, n));
}
function C(e, t, n, l) {
    let r = (0, h.Nj)(u.z.CHANNEL_BROWSER_NUX),
        i = (0, o.cj)([m.Z], () => {
            let t = {},
                n = m.Z.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let { parent_id: r } = n[e];
                if (null != r) {
                    var l;
                    t[r] = (null != (l = t[r]) ? l : 0) + 1;
                }
            }
            return t;
        }, [e]),
        a = t._categories.map((e) => {
            let l = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === i[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : n,
            };
        });
    return (
        r ||
            null == l ||
            a.unshift({
                rowCount: 1,
                rowHeight: l,
            }),
        a
    );
}
function L(e) {
    var t, n;
    let l = (0, o.e7)([D.Z], () => D.Z.getCategories(e)),
        r = l._categories.length,
        i = l._categories[l._categories.length - 1];
    if (null == i) return 0;
    let a = l[null != (n = null == (t = i.channel) ? void 0 : t.id) ? n : "null"];
    return null == a ? 0 : 0 === a.length ? i.index + 2 - r : a[a.length - 1].index + 2 - r;
}
function A(e) {
    var t;
    return w.intl.formatToPlainString(w.t["8N0BHR"], {
        timeAgo: s()(y.default.extractTimestamp(null != (t = b.ZP.lastMessageId(e)) ? t : e)).fromNow(),
    });
}
