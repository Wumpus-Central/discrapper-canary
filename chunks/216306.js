e.d(t, {
    Fo: () => P,
    KY: () => u,
    Uo: () => I,
    fU: () => Z,
    qw: () => O,
    tn: () => j,
}),
    e(290780);
var r = e(73800),
    g = e(658722),
    v = e.n(g),
    n = e(913527),
    f = e.n(n),
    B = e(442837),
    l = e(704215),
    h = e(45114),
    i = e(740504),
    o = e(266454),
    C = e(931261),
    a = e(540126),
    w = e(671098),
    s = e(703656),
    Q = e(592125),
    H = e(324067),
    c = e(306680),
    D = e(709054),
    M = e(981631),
    d = e(176505),
    p = e(443063),
    b = e(490897),
    V = e(388032);
function E(A, t) {
    A.index = t;
}
function P(A, t, e, g) {
    g = g.toLowerCase();
    let n = (0, C.g)(A),
        f = r.useCallback(
            (A, t) =>
                !(n && A.channel.hasFlag(d.zZ.IS_GUILD_RESOURCE_CHANNEL)) &&
                A.channel.type !== M.d4z.GUILD_DIRECTORY &&
                (0 === t.length || v()(t, A.channel.name.toLowerCase()) || A.channel.topic.toLowerCase().includes(t)),
            [n],
        );
    return r.useMemo(() => {
        let A = {
            null: [],
            _categories: [],
        };
        return (
            e[M.d4z.GUILD_CATEGORY].forEach((e) => {
                let { channel: r } = e;
                "null" === r.id && (A.null = t.null.filter((A) => f(A, g))), (A[r.id] = t[r.id].filter((A) => f(A, g)));
            }),
            (A._categories = t._categories.filter(
                (t) => "null" === t.channel.id || 0 === g.length || A[t.channel.id].length > 0,
            )),
            (0, i.Z)(A._categories, A).forEach(E),
            A
        );
    }, [t, e, f, g]);
}
function u(A) {
    let t = A.getSections(!1);
    if (t[a.wZ] > 0)
        switch (A.getGuildActionSection().getRow(0)) {
            case p.z.GUILD_HOME:
                return d.oC.GUILD_HOME;
            case p.z.GUILD_ROLE_SUBSCRIPTIONS:
                return d.oC.ROLE_SUBSCRIPTIONS;
            case p.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                return d.oC.MEMBER_SAFETY;
        }
    for (let r = a.wd; r < A.voiceChannelsSectionNumber; r++)
        if (t[r] > 0) {
            var e;
            let t = null == (e = A.getChannelFromSectionRow(r, 0)) ? void 0 : e.channel;
            if (null != t) return t.id;
        }
    return null;
}
function I(A, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, w.n)(A, t),
        (0, h.y5)(
            t.map((A) => ({
                channelId: A,
                readStateType: b.W.CHANNEL,
                messageId: c.ZP.lastMessageId(A),
            })),
        ),
        null != e && (0, s.uL)(M.Z5c.CHANNEL(A, e));
}
function j(A, t, e, r) {
    let g = (0, o.Nj)(l.z.CHANNEL_BROWSER_NUX),
        v = (0, B.cj)([Q.Z], () => {
            let t = {},
                e = Q.Z.getMutableGuildChannelsForGuild(A);
            for (let A in e) {
                let { parent_id: g } = e[A];
                if (null != g) {
                    var r;
                    t[g] = (null != (r = t[g]) ? r : 0) + 1;
                }
            }
            return t;
        }, [A]),
        n = t._categories.map((A) => {
            let r = t[A.channel.id];
            return {
                rowCount: "null" !== A.channel.id && 0 === v[A.channel.id] ? 1 : r.length,
                rowHeight: 0 === r.length ? 0 : e,
            };
        });
    return (
        g ||
            null == r ||
            n.unshift({
                rowCount: 1,
                rowHeight: r,
            }),
        n
    );
}
function Z(A) {
    var t, e;
    let r = (0, B.e7)([H.Z], () => H.Z.getCategories(A)),
        g = r._categories.length,
        v = r._categories[r._categories.length - 1];
    if (null == v) return 0;
    let n = r[null != (e = null == (t = v.channel) ? void 0 : t.id) ? e : "null"];
    return null == n ? 0 : 0 === n.length ? v.index + 2 - g : n[n.length - 1].index + 2 - g;
}
function O(A) {
    var t;
    return V.intl.formatToPlainString(V.t["8N0BHR"], {
        timeAgo: f()(D.default.extractTimestamp(null != (t = c.ZP.lastMessageId(A)) ? t : A)).fromNow(),
    });
}
