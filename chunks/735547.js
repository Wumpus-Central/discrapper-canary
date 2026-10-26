let n;
(I.d(e, { Ay: () => U, Be: () => p, Gv: () => m, OK: () => o, Uo: () => g, Us: () => d, oW: () => V }), I(321073));
var i,
    l = I(933958),
    _ = I(734057),
    u = I(696451),
    T = I(573163),
    O = I(994500),
    N = I(287809),
    r = I(645959),
    s = I(768038),
    a = I(652215),
    S = I(172799),
    E = I(105292);
n = I(558213);
var o = (((i = {}).GROUP_DM = "GROUP_DM"), (i.DM = "DM"), (i.FRIEND = "FRIEND"), (i.CHANNEL = "CHANNEL"), i);
function P(t, e) {
    return null != t && u.Ay.isMember(t, e);
}
function f(t) {
    let {
            omitUserIds: e,
            maxRowsWithoutQuery: I,
            omitGuildId: n,
            shownUserIds: i,
            rows: l,
            counts: u,
            includeGroupDms: O,
            limit: s,
        } = t,
        S = 0;
    for (let t of r.A.getPrivateChannelIds()) {
        if ((null != I && I > 0 && l.length >= I) || (null != s && S >= s)) break;
        let r = _.A.getChannel(t);
        if (null == r || !r.isPrivate()) continue;
        if (O && r.type === a.rbe.GROUP_DM) {
            (l.push({ type: "GROUP_DM", item: r, isSuggested: !1 }), u.numGroupDms++, S++);
            continue;
        }
        if (null == T.Ay.lastMessageId(r.id)) continue;
        let E = r.getRecipientId();
        if (null != E && !e.has(E) && !i.has(E)) {
            let t = N.default.getUser(E);
            if (null == t || t.bot || P(n, t.id)) continue;
            (i.add(t.id), l.push({ type: "DM", item: t, isSuggested: !1 }), u.numDms++, S++);
        }
    }
}
function d(t) {
    let {
            query: e,
            inviteTargetType: I,
            omitUserIds: n,
            suggestedUserIds: i,
            suggestedChannelIds: l,
            maxRowsWithoutQuery: u,
            omitGuildId: r,
        } = t,
        a = new Set(),
        E = [],
        o = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
    if ("" === e) {
        let t = { omitUserIds: n, maxRowsWithoutQuery: u, omitGuildId: r, shownUserIds: a, rows: E, counts: o };
        (I === S.yV.EMBEDDED_APPLICATION &&
            (f({ ...t, includeGroupDms: !1, limit: 1 }),
            (function (t) {
                let { suggestedChannelIds: e, maxRowsWithoutQuery: I, rows: n, counts: i } = t;
                if (null != e)
                    for (let t of e) {
                        if (null != I && I > 0 && n.length >= I) break;
                        let e = _.A.getChannel(t);
                        null != e && (n.push({ type: "CHANNEL", item: e, isSuggested: !0 }), i.numChannels++);
                    }
            })({ ...t, suggestedChannelIds: l })),
            (function (t) {
                let {
                    omitUserIds: e,
                    suggestedUserIds: I,
                    maxRowsWithoutQuery: n,
                    omitGuildId: i,
                    shownUserIds: l,
                    rows: _,
                    counts: u,
                } = t;
                if (null != I)
                    for (let t of I) {
                        if (null != n && n > 0 && _.length >= n) break;
                        if (e.has(t) || l.has(t)) continue;
                        let I = N.default.getUser(t);
                        !(null == I || P(i, I.id)) &&
                            (l.add(I.id), _.push({ type: "FRIEND", item: I, isSuggested: !0 }), u.numFriends++);
                    }
            })({ ...t, suggestedUserIds: i }),
            f({ ...t, includeGroupDms: !0 }),
            (function (t) {
                let { omitUserIds: e, maxRowsWithoutQuery: I, omitGuildId: n, shownUserIds: i, rows: l, counts: _ } = t;
                for (let t of O.A.getFriendIDs()) {
                    if (null != I && I > 0 && l.length >= I) break;
                    if (e.has(t) || i.has(t)) continue;
                    let u = N.default.getUser(t);
                    !(null == u || P(n, u.id)) &&
                        (l.push({ type: "FRIEND", item: u, isSuggested: !1 }), _.numFriends++);
                }
            })(t));
    } else {
        let t = { query: e, rows: E, counts: o };
        (I === S.yV.EMBEDDED_APPLICATION &&
            (function (t) {
                let { query: e, rows: I, counts: n, inviteTargetType: i } = t;
                i === S.yV.EMBEDDED_APPLICATION &&
                    s.Ay.queryChannels({ query: e, limit: 3, guildId: void 0 }).forEach((t) => {
                        let { record: e, score: i } = t;
                        (I.push({ type: "CHANNEL", item: e, isSuggested: !1, score: i }), n.numChannels++);
                    });
            })({ ...t, inviteTargetType: I }),
            (function (t) {
                let {
                    query: e,
                    rows: I,
                    counts: n,
                    omitUserIds: i,
                    omitGuildId: l,
                    shownUserIds: _,
                    suggestedUserIds: u,
                } = t;
                if (null == u) return;
                let T = [];
                for (let t of u) {
                    if (i.has(t) || _.has(t)) continue;
                    let e = N.default.getUser(t);
                    null != e && T.push(e);
                }
                s.Ay.queryMemberList({ query: e, members: T, limit: 10 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    (_.add(e.id),
                        I.push({ type: "FRIEND", item: e, isSuggested: !0, score: i, isGuildMember: P(l, e.id) }),
                        n.numFriends++);
                });
            })({ ...t, omitUserIds: n, omitGuildId: r, shownUserIds: a, suggestedUserIds: i }),
            (function (t) {
                let { query: e, omitUserIds: I, omitGuildId: n, shownUserIds: i, rows: l, counts: u } = t;
                s.Ay.queryDMUsers({ query: e, limit: 50 }).forEach((t) => {
                    let { record: e, score: O } = t;
                    if (I.has(e.id) || i.has(e.id)) return;
                    let N = _.A.getDMFromUserId(e.id);
                    null == N ||
                        (null != T.Ay.lastMessageId(N) &&
                            (i.add(e.id),
                            l.push({ type: "DM", item: e, isSuggested: !1, score: O, isGuildMember: P(n, e.id) }),
                            u.numDms++));
                });
            })({ ...t, omitUserIds: n, omitGuildId: r, shownUserIds: a }),
            (function (t) {
                let { query: e, rows: I, counts: n } = t;
                s.Ay.queryGroupDMs({ query: e, limit: 50, fuzzy: !1 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    (I.push({ type: "GROUP_DM", item: e, isSuggested: !1, score: i }), n.numGroupDms++);
                });
            })(t),
            (function (t) {
                let { query: e, rows: I, counts: n, omitUserIds: i, omitGuildId: l, shownUserIds: _ } = t;
                s.Ay.queryFriends({ query: e, limit: 500, _fuzzy: !1 }).forEach((t) => {
                    let { record: e, score: u } = t;
                    i.has(e.id) ||
                        (!_.has(e.id) &&
                            (_.add(e.id),
                            I.push({ type: "FRIEND", item: e, isSuggested: !1, score: u, isGuildMember: P(l, e.id) }),
                            n.numFriends++));
                });
            })({ ...t, omitUserIds: n, omitGuildId: r, shownUserIds: a }));
    }
    return { rows: E, counts: o };
}
function m(t, e) {
    let [I, n] = [[], []];
    for (let i of t)
        switch (i.type) {
            case "FRIEND":
            case "DM":
                P(e, i.item.id) ? I.push(i) : n.push(i);
                break;
            case "CHANNEL":
            case "GROUP_DM":
                n.push(i);
        }
    return [I, n];
}
function V(t, e) {
    for (let I of r.A.getPrivateChannelIds()) {
        let n = _.A.getChannel(I);
        if (null == n || !n.isDM() || null == T.Ay.lastMessageId(n.id)) continue;
        let i = n.getRecipientId();
        if (null != i && !t.has(i)) {
            let t = N.default.getUser(i);
            if (null == t || t.bot || P(e, t.id)) continue;
            return t;
        }
    }
    return null;
}
function g(t) {
    let { channel: e, inviteTargetType: I, applicationId: n } = t;
    if (I === S.yV.EMBEDDED_APPLICATION && null != e) {
        for (let t of l.Ay.getEmbeddedActivitiesForChannel(e.id)) if (t.applicationId === n) return new Set(t.userIds);
    }
    return new Set();
}
let D = "minutes",
    A = "hours",
    c = "days",
    M = "never",
    h = {
        [n.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: D },
        [n.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: A },
        [n.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: A },
        [n.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: A },
        [n.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: c },
        [n.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: c },
        [n.INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: c },
        [n.INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: c },
        [n.INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: c },
        [n.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: M },
    };
function p(t, e) {
    let I = 0 === e,
        n = h[t].value;
    switch (h[t].type) {
        case D:
            if (I) return E.intl.string(E.t["/WbTXD"]);
            return E.intl.formatToPlainString(E.t.eDRWJK, { numUses: e });
        case A:
            if (I) return E.intl.formatToPlainString(E.t.ZVdJMy, { numHours: n });
            return E.intl.formatToPlainString(E.t.NgZgAB, { numHours: n, numUses: e });
        case c:
            if (I) return E.intl.formatToPlainString(E.t.T96qss, { numDays: n });
            return E.intl.formatToPlainString(E.t.TfuB9B, { numDays: n, numUses: e });
        case M:
            if (I) return E.intl.string(E.t.QrHBnC);
            return E.intl.formatToPlainString(E.t.yJnTxI, { numUses: e });
        default:
            return "";
    }
}
let y = [n.INVITE_OPTIONS_14_DAYS, n.INVITE_OPTIONS_30_DAYS, n.INVITE_OPTIONS_60_DAYS],
    U = {
        getMaxAgeOptionByValue: function (t) {
            return [...n.MAX_AGE_OPTIONS, ...y].find((e) => e.value === t) ?? null;
        },
        getMaxAgeOptions: function (t) {
            return n.MAX_AGE_OPTIONS.filter((e) => !y.includes(e) || t?.includeExperimentalValues?.includes?.(e.value));
        },
        getMaxUsesOptions: n.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_14_DAYS: n.INVITE_OPTIONS_14_DAYS,
        INVITE_OPTIONS_30_DAYS: n.INVITE_OPTIONS_30_DAYS,
        INVITE_OPTIONS_60_DAYS: n.INVITE_OPTIONS_60_DAYS,
        INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_8_HOURS: n.INVITE_OPTIONS_8_HOURS,
        INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES,
    };
