let n;
I.d(e, { Ay: () => U, Be: () => M, Gv: () => m, OK: () => P, Uo: () => g, Us: () => d, oW: () => V }), I(321073);
var i,
    l = I(933958),
    _ = I(734057),
    T = I(696451),
    u = I(222823),
    O = I(994500),
    N = I(287809),
    r = I(645959),
    a = I(248465),
    S = I(652215),
    s = I(172799),
    E = I(985018);
n = I(558213);
var P = (((i = {}).GROUP_DM = "GROUP_DM"), (i.DM = "DM"), (i.FRIEND = "FRIEND"), (i.CHANNEL = "CHANNEL"), i);
let o = (t, e) => null != t && T.Ay.isMember(t, e),
    f = (t) => {
        let {
                omitUserIds: e,
                maxRowsWithoutQuery: I,
                omitGuildId: n,
                shownUserIds: i,
                rows: l,
                counts: T,
                includeGroupDms: O,
                limit: a,
            } = t,
            s = 0;
        for (let t of r.default.getPrivateChannelIds()) {
            if ((null != I && I > 0 && l.length >= I) || (null != a && s >= a)) break;
            let r = _.A.getChannel(t);
            if (null == r || !r.isPrivate()) continue;
            if (O && r.type === S.rbe.GROUP_DM) {
                l.push({ type: "GROUP_DM", item: r, isSuggested: !1 }), T.numGroupDms++, s++;
                continue;
            }
            if (null == u.Ay.lastMessageId(r.id)) continue;
            let E = r.getRecipientId();
            if (null != E && !e.has(E) && !i.has(E)) {
                let t = N.default.getUser(E);
                if (null == t || t.bot || o(n, t.id)) continue;
                i.add(t.id), l.push({ type: "DM", item: t, isSuggested: !1 }), T.numDms++, s++;
            }
        }
    };
function d(t) {
    let {
            query: e,
            inviteTargetType: I,
            omitUserIds: n,
            suggestedUserIds: i,
            suggestedChannelIds: l,
            maxRowsWithoutQuery: T,
            omitGuildId: r,
        } = t,
        S = new Set(),
        E = [],
        P = { numFriends: 0, numDms: 0, numGroupDms: 0, numGuildMembers: 0, numChannels: 0 };
    if ("" === e) {
        let t = { omitUserIds: n, maxRowsWithoutQuery: T, omitGuildId: r, shownUserIds: S, rows: E, counts: P };
        I === s.yV.EMBEDDED_APPLICATION &&
            (f({ ...t, includeGroupDms: !1, limit: 1 }),
            ((t) => {
                let { suggestedChannelIds: e, maxRowsWithoutQuery: I, rows: n, counts: i } = t;
                if (null != e)
                    for (let t of e) {
                        if (null != I && I > 0 && n.length >= I) break;
                        let e = _.A.getChannel(t);
                        null != e && (n.push({ type: "CHANNEL", item: e, isSuggested: !0 }), i.numChannels++);
                    }
            })({ ...t, suggestedChannelIds: l })),
            ((t) => {
                let {
                    omitUserIds: e,
                    suggestedUserIds: I,
                    maxRowsWithoutQuery: n,
                    omitGuildId: i,
                    shownUserIds: l,
                    rows: _,
                    counts: T,
                } = t;
                if (null != I)
                    for (let t of I) {
                        if (null != n && n > 0 && _.length >= n) break;
                        if (e.has(t) || l.has(t)) continue;
                        let I = N.default.getUser(t);
                        !(null == I || o(i, I.id)) &&
                            (l.add(I.id), _.push({ type: "FRIEND", item: I, isSuggested: !0 }), T.numFriends++);
                    }
            })({ ...t, suggestedUserIds: i }),
            f({ ...t, includeGroupDms: !0 }),
            ((t) => {
                let { omitUserIds: e, maxRowsWithoutQuery: I, omitGuildId: n, shownUserIds: i, rows: l, counts: _ } = t;
                for (let t of O.A.getFriendIDs()) {
                    if (null != I && I > 0 && l.length >= I) break;
                    if (e.has(t) || i.has(t)) continue;
                    let T = N.default.getUser(t);
                    !(null == T || o(n, T.id)) &&
                        (l.push({ type: "FRIEND", item: T, isSuggested: !1 }), _.numFriends++);
                }
            })(t);
    } else {
        let t = { query: e, rows: E, counts: P };
        I === s.yV.EMBEDDED_APPLICATION &&
            ((t) => {
                let { query: e, rows: I, counts: n, inviteTargetType: i } = t;
                i === s.yV.EMBEDDED_APPLICATION &&
                    a.Ay.queryChannels({ query: e, limit: 3, guildId: void 0 }).forEach((t) => {
                        let { record: e, score: i } = t;
                        I.push({ type: "CHANNEL", item: e, isSuggested: !1, score: i }), n.numChannels++;
                    });
            })({ ...t, inviteTargetType: I }),
            ((t) => {
                let { query: e, rows: I, counts: n, omitUserIds: i, shownUserIds: l, suggestedUserIds: _ } = t;
                if (null == _) return;
                let T = [];
                for (let t of _) {
                    if (i.has(t) || l.has(t)) continue;
                    let e = N.default.getUser(t);
                    null != e && T.push(e);
                }
                a.Ay.queryMemberList({ query: e, members: T, limit: 10 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    l.add(e.id), I.push({ type: "FRIEND", item: e, isSuggested: !0, score: i }), n.numFriends++;
                });
            })({ ...t, omitUserIds: n, shownUserIds: S, suggestedUserIds: i }),
            ((t) => {
                let { query: e, omitUserIds: I, shownUserIds: n, rows: i, counts: l } = t;
                a.Ay.queryDMUsers({ query: e, limit: 50 }).forEach((t) => {
                    let { record: e, score: T } = t;
                    if (I.has(e.id) || n.has(e.id)) return;
                    let O = _.A.getDMFromUserId(e.id);
                    null == O ||
                        (null != u.Ay.lastMessageId(O) &&
                            (n.add(e.id), i.push({ type: "DM", item: e, isSuggested: !1, score: T }), l.numDms++));
                });
            })({ ...t, omitUserIds: n, shownUserIds: S }),
            ((t) => {
                let { query: e, rows: I, counts: n } = t;
                a.Ay.queryGroupDMs({ query: e, limit: 50, fuzzy: !1 }).forEach((t) => {
                    let { record: e, score: i } = t;
                    I.push({ type: "GROUP_DM", item: e, isSuggested: !1, score: i }), n.numGroupDms++;
                });
            })(t),
            ((t) => {
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
    return { rows: E, counts: P };
}
function m(t, e) {
    let [I, n] = [[], []];
    for (let i of t)
        switch (i.type) {
            case "FRIEND":
            case "DM":
                o(e, i.item.id) ? I.push(i) : n.push(i);
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
        if (null == n || !n.isDM() || null == u.Ay.lastMessageId(n.id)) continue;
        let i = n.getRecipientId();
        if (null != i && !t.has(i)) {
            let t = N.default.getUser(i);
            if (null == t || t.bot || o(e, t.id)) continue;
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
    p = "days",
    h = "never",
    y = {
        [n.INVITE_OPTIONS_30_MINUTES.value]: { value: 30, type: D },
        [n.INVITE_OPTIONS_1_HOUR.value]: { value: 1, type: A },
        [n.INVITE_OPTIONS_6_HOURS.value]: { value: 6, type: A },
        [n.INVITE_OPTIONS_12_HOURS.value]: { value: 12, type: A },
        [n.INVITE_OPTIONS_1_DAY.value]: { value: 1, type: p },
        [n.INVITE_OPTIONS_7_DAYS.value]: { value: 7, type: p },
        [n.INVITE_OPTIONS_14_DAYS.value]: { value: 14, type: p },
        [n.INVITE_OPTIONS_30_DAYS.value]: { value: 30, type: p },
        [n.INVITE_OPTIONS_60_DAYS.value]: { value: 60, type: p },
        [n.INVITE_OPTIONS_FOREVER.value]: { value: 0, type: h },
    };
function M(t, e) {
    let I = parseInt(e, 10),
        n = 0 === I,
        i = y[t].value;
    switch (y[t].type) {
        case D:
            if (n) return E.intl.string(E.t["/WbTXD"]);
            return E.intl.formatToPlainString(E.t.eDRWJK, { numUses: I });
        case A:
            if (n) return E.intl.formatToPlainString(E.t.ZVdJMy, { numHours: i });
            return E.intl.formatToPlainString(E.t.NgZgAB, { numHours: i, numUses: I });
        case p:
            if (n) return E.intl.formatToPlainString(E.t.T96qss, { numDays: i });
            return E.intl.formatToPlainString(E.t.TfuB9B, { numDays: i, numUses: I });
        case h:
            if (n) return E.intl.string(E.t.QrHBnC);
            return E.intl.formatToPlainString(E.t.yJnTxI, { numUses: I });
        default:
            return "";
    }
}
let c = [n.INVITE_OPTIONS_14_DAYS, n.INVITE_OPTIONS_30_DAYS, n.INVITE_OPTIONS_60_DAYS],
    U = {
        getMaxAgeOptionByValue: function (t) {
            return [...n.MAX_AGE_OPTIONS, ...c].find((e) => e.value === t) || null;
        },
        getMaxAgeOptions: function (t) {
            return n.MAX_AGE_OPTIONS.filter((e) => !c.includes(e) || t?.includeExperimentalValues?.includes?.(e.value));
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
