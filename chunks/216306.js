(t.d(e, {
    Fo: () => Q,
    KY: () => O,
    Uo: () => P,
    fU: () => j,
    qw: () => T,
    tn: () => V
}),
    t(290780));
var n = t(73800),
    r = t(658722),
    l = t.n(r),
    i = t(913527),
    s = t.n(i),
    a = t(442837),
    o = t(704215),
    g = t(45114),
    v = t(740504),
    f = t(266454),
    c = t(931261),
    h = t(540126),
    u = t(671098),
    E = t(703656),
    d = t(592125),
    C = t(324067),
    B = t(306680),
    w = t(709054),
    D = t(981631),
    M = t(176505),
    I = t(443063),
    p = t(490897),
    H = t(388032);
function b(A, e) {
    A.index = e;
}
function Q(A, e, t, r) {
    r = r.toLowerCase();
    let i = (0, c.g)(A),
        s = n.useCallback((A, e) => !(i && A.channel.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL)) && A.channel.type !== D.d4z.GUILD_DIRECTORY && (0 === e.length || l()(e, A.channel.name.toLowerCase()) || A.channel.topic.toLowerCase().includes(e)), [i]);
    return n.useMemo(() => {
        let A = {
            null: [],
            _categories: []
        };
        return (
            t[D.d4z.GUILD_CATEGORY].forEach((t) => {
                let { channel: n } = t;
                ('null' === n.id && (A.null = e.null.filter((A) => s(A, r))), (A[n.id] = e[n.id].filter((A) => s(A, r))));
            }),
            (A._categories = e._categories.filter((e) => 'null' === e.channel.id || 0 === r.length || A[e.channel.id].length > 0)),
            (0, v.Z)(A._categories, A).forEach(b),
            A
        );
    }, [e, t, s, r]);
}
function O(A) {
    let e = A.getSections(!1);
    if (e[h.wZ] > 0)
        switch (A.getGuildActionSection().getRow(0)) {
            case I.z.GUILD_HOME:
                return M.oC.GUILD_HOME;
            case I.z.GUILD_ROLE_SUBSCRIPTIONS:
                return M.oC.ROLE_SUBSCRIPTIONS;
        }
    for (let n = h.wd; n < A.voiceChannelsSectionNumber; n++)
        if (e[n] > 0) {
            var t;
            let e = null == (t = A.getChannelFromSectionRow(n, 0)) ? void 0 : t.channel;
            if (null != e) return e.id;
        }
    return null;
}
function P(A, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    ((0, u.n)(A, e),
        (0, g.y5)(
            e.map((A) => ({
                channelId: A,
                readStateType: p.W.CHANNEL,
                messageId: B.ZP.lastMessageId(A)
            }))
        ),
        null != t && (0, E.uL)(D.Z5c.CHANNEL(A, t)));
}
function V(A, e, t, n) {
    let r = (0, f.Nj)(o.z.CHANNEL_BROWSER_NUX),
        l = (0, a.cj)(
            [d.Z],
            () => {
                let e = {},
                    t = d.Z.getMutableGuildChannelsForGuild(A);
                for (let A in t) {
                    let { parent_id: r } = t[A];
                    if (null != r) {
                        var n;
                        e[r] = (null != (n = e[r]) ? n : 0) + 1;
                    }
                }
                return e;
            },
            [A]
        ),
        i = e._categories.map((A) => {
            let n = e[A.channel.id];
            return {
                rowCount: 'null' !== A.channel.id && 0 === l[A.channel.id] ? 1 : n.length,
                rowHeight: 0 === n.length ? 0 : t
            };
        });
    return (
        r ||
            null == n ||
            i.unshift({
                rowCount: 1,
                rowHeight: n
            }),
        i
    );
}
function j(A) {
    var e, t;
    let n = (0, a.e7)([C.Z], () => C.Z.getCategories(A)),
        r = n._categories.length,
        l = n._categories[n._categories.length - 1];
    if (null == l) return 0;
    let i = n[null != (t = null == (e = l.channel) ? void 0 : e.id) ? t : 'null'];
    return null == i ? 0 : 0 === i.length ? l.index + 2 - r : i[i.length - 1].index + 2 - r;
}
function T(A) {
    var e;
    return H.intl.formatToPlainString(H.t['8N0BHR'], { timeAgo: s()(w.default.extractTimestamp(null != (e = B.ZP.lastMessageId(A)) ? e : A)).fromNow() });
}
