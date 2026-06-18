let n;
I.d(e, { Ay: () => U, Be: () => y, Gv: () => m, OK: () => o, Uo: () => g, Us: () => d, oW: () => V }), I(321073);
var i,
    l = I(933958),
    _ = I(734057),
    u = I(696451),
    T = I(568548),
    O = I(994500),
    N = I(287809),
    r = I(567761),
    a = I(768038),
    S = I(652215),
    s = I(172799),
    E = I(375708);
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
            limit: a,
        } = t,
        s = 0;
    for (let t of r.default.getPrivateChannelIds()) {
        if ((null != I && I > 0 && l.length >= I) || (null != a && s >= a)) break;
        let r = _.A.getChannel(t);
        if (null == r || !r.isPrivate()) continue;
        if (O && r.type === S.rbe.GROUP_DM) {
            l.push({ type: "GROUP_DM", item: r, isSuggested: !1 }), u.numGroupDms++, s++;
            continue;
        }
        if (null == T.Ay.lastMessageId(r.id)) continue;
        let E = r.getRecipientId();
        if (null != E && !e.has(E) && !i.has(E)) {
            let t = N.default.getUser(E);
            if (null == t || t.bot || P(n, t.id)) continue;
            i.add(t.id), l.push({ type: "DM", item: t, isSuggested: !1 }), u.numDms++, s++;
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
        S = new Set(),
        E = [],
        o = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
    if ("" === e) {
        let t = { omitUserIds: n, maxRowsWithoutQuery: u, omitGuildId: r, shownUserIds: S, rows: E, counts: o };
        I === s.yV.EMBEDDED_APPLICATION &&
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
            })(t);
    } else {
        let t = { query: e, rows: E, counts: o };
        I === s.yV.EMBEDDED_APPLICATION &&
            (function (t) {
                let { query: e, rows: I, counts: n, inviteTargetType: i } = t;
                i === s.yV.EMBEDDED_APPLICATION &&
                    a.Ay.queryChannels({ query: e, limit: 3, guildId: void 0 }).forEach((t) => {
                        let { record: e, score: i } = t;
                        I.push({ type: "CHANNEL", item: e, isSuggested: !1, score: i }), n.numChannels++;
                    });
            })({ ...t, inviteTargetType: I }),
            (function (t) {
                let { query: e, rows: I, counts: n, omitUserIds: i, shownUserIds: l, suggestedUserIds: _ } = t;
                if (null == _) return;
                let u = [];
                for (let t of _) {
                    if (i.has(t) || l.has(t)) continue;
                    let e = N.default.getUser(t);
                    null != e && u.push(e);
                }
                a.Ay.queryMemberList({ query: e, members: u, limit: 10 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    l.add(e.id), I.push({ type: "FRIEND", item: e, isSuggested: !0, score: i }), n.numFriends++;
                });
            })({ ...t, omitUserIds: n, shownUserIds: S, suggestedUserIds: i }),
            (function (t) {
                let { query: e, omitUserIds: I, shownUserIds: n, rows: i, counts: l } = t;
                a.Ay.queryDMUsers({ query: e, limit: 50 }).forEach((t) => {
                    let { record: e, score: u } = t;
                    if (I.has(e.id) || n.has(e.id)) return;
                    let O = _.A.getDMFromUserId(e.id);
                    null == O ||
                        (null != T.Ay.lastMessageId(O) &&
                            (n.add(e.id), i.push({ type: "DM", item: e, isSuggested: !1, score: u }), l.numDms++));
                });
            })({ ...t, omitUserIds: n, shownUserIds: S }),
            (function (t) {
                let { query: e, rows: I, counts: n } = t;
                a.Ay.queryGroupDMs({ query: e, limit: 50, fuzzy: !1 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    I.push({ type: "GROUP_DM", item: e, isSuggested: !1, score: i }), n.numGroupDms++;
                });
            })(t),
            (function (t) {
                let { query: e, rows: I, counts: n, omitUserIds: i, shownUserIds: l } = t;
                a.Ay.queryFriends({ query: e, limit: 500, _fuzzy: !1 }).forEach((t) => {
                    let { record: e, score: _ } = t;
                    i.has(e.id) ||
                        (!l.has(e.id) &&
                            (l.add(e.id),
                            I.push({ type: "FRIEND", item: e, isSuggested: !1, score: _ }),
                            n.numFriends++));
                });
            })({ ...t, omitUserIds: n, shownUserIds: S });
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
    for (let I of r.default.getPrivateChannelIds()) {
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
    if (I === s.yV.EMBEDDED_APPLICATION && null != e) {
        for (let t of l.Ay.getEmbeddedActivitiesForChannel(e.id)) if (t.applicationId === n) return new Set(t.userIds);
    }
    return new Set();
}
let D = "minutes",
    A = "hours",
    c = "days",
    p = "never",
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
        [n.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: p },
    };
function y(t, e) {
    let I = parseInt(e, 10),
        n = 0 === I,
        i = h[t].value;
    switch (h[t].type) {
        case D:
            if (n) return E.intl.string(E.t["/WbTXD"]);
            return E.intl.formatToPlainString(E.t.eDRWJK, { numUses: I });
        case A:
            if (n) return E.intl.formatToPlainString(E.t.ZVdJMy, { numHours: i });
            return E.intl.formatToPlainString(E.t.NgZgAB, { numHours: i, numUses: I });
        case c:
            if (n) return E.intl.formatToPlainString(E.t.T96qss, { numDays: i });
            return E.intl.formatToPlainString(E.t.TfuB9B, { numDays: i, numUses: I });
        case p:
            if (n) return E.intl.string(E.t.QrHBnC);
            return E.intl.formatToPlainString(E.t.yJnTxI, { numUses: I });
        default:
            return "";
    }
}
let M = [n.INVITE_OPTIONS_14_DAYS, n.INVITE_OPTIONS_30_DAYS, n.INVITE_OPTIONS_60_DAYS],
    U = {
        getMaxAgeOptionByValue: function (t) {
            return [...n.MAX_AGE_OPTIONS, ...M].find((e) => e.value === t) || null;
        },
        getMaxAgeOptions: function (t) {
            return n.MAX_AGE_OPTIONS.filter((e) => !M.includes(e) || t?.includeExperimentalValues?.includes?.(e.value));
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
