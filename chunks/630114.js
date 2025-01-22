r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(789020);
var s = r(724458);
var l = r(392711),
    u = r.n(l),
    c = r(131704),
    d = r(680089),
    f = r(592125),
    p = r(480294),
    h = r(580005),
    _ = r(496675),
    m = r(9156),
    g = r(70956),
    E = r(630388),
    v = r(823379),
    y = r(789662),
    b = r(981631),
    I = r(526761);
function T(e, n, r, i, a) {
    if (n !== y.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, n) => {
                    N(e, n, !0);
                }
            }
        ];
    let o = [],
        s = Object.values(f.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => _.Z.can(b.Plq.VIEW_CHANNEL, e));
    return o.push(...S(e, s)), o.push(A(e)), o.push(C()), o.push(...R(s)), o.push(...O(s)), o.push(...L(s)), p.Z.hasConsented(b.pjP.PERSONALIZATION) ? o.push(...D(e, s, r, i, a)) : o.push(...x(e, s)), o.filter(v.lm);
}
function S(e, n) {
    if (!(m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id))) return [];
    let r = [
            {
                label: 'Unmuting the guild and marking it as read',
                apply: (e) => {
                    (e.muted = !1), (e.mute_config = null);
                },
                needsMarkedAsRead: !0
            }
        ],
        i = n.filter((n) => m.ZP.getChannelMessageNotifications(e.id, n.id) === b.bL.ALL_MESSAGES);
    return (
        i.length > 0 &&
            r.push({
                label: 'Setting '.concat(i.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i)
                        w(e, n, r.id, (e) => {
                            e.message_notifications = b.bL.ONLY_MENTIONS;
                        });
                }
            }),
        r
    );
}
function A(e) {
    if (m.ZP.getMessageNotifications(e.id) === b.bL.ALL_MESSAGES)
        return {
            label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
            apply: (e) => {
                e.message_notifications = b.bL.ONLY_MENTIONS;
            }
        };
}
function C() {
    return {
        label: 'Setting the guild to a grey dot unread',
        apply: (e, n) => {
            N(e, n, !1);
        }
    };
}
function N(e, n, r) {
    var i, a;
    (e.flags = (0, E.mB)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : n.flags) && void 0 !== a ? a : 0, I.vc.UNREADS_ALL_MESSAGES, r)), (e.flags = (0, E.mB)(e.flags, I.vc.UNREADS_ONLY_MENTIONS, !r));
}
function R(e) {
    let n = [],
        [r, i] = u()(e)
            .filter((e) => e.type === b.d4z.GUILD_ANNOUNCEMENT)
            .partition((e) => m.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && m.ZP.isChannelMuted(e.guild_id, e.parent_id)))
            .value();
    return (
        r.length > 0 &&
            n.push({
                label: 'Not touching '.concat(r.length, ' announcement channels since they are muted'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join('')
            }),
        i.length > 0 &&
            n.push({
                label: 'Setting '.concat(i.length, ' announcement channels to white-dot'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i) P(e, n, r.id, !0);
                }
            }),
        n
    );
}
function O(e) {
    let n = [],
        r = [];
    for (let n of e) m.ZP.isChannelMuted(n.guild_id, n.id) && n.isCategory() && !d.Z.isCollapsed(n.id) && r.push(n);
    return (
        r.length > 0 &&
            n.push({
                label: 'Unmuting '.concat(r.length, ' categories and setting to grey-dot'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let i of r)
                        P(e, n, i.id, !1),
                            w(e, n, i.id, (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            });
                }
            }),
        n
    );
}
function D(e, n, r, i, a) {
    if (m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id)) return [];
    let o = new Set(n.map((e) => e.id)),
        s = i.filter((e) => o.has(e.channel_id)),
        l = u().keyBy(s, 'channel_id'),
        c = Math.max(
            r.messages === y.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer,
            s.reduce((e, n) => {
                var r;
                return e + Number(null !== (r = n.num_year_opens) && void 0 !== r ? r : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        d = Math.max(
            a.frecency.monthMinOpens,
            s.reduce((e, n) => {
                var r;
                return e + Number(null !== (r = n.num_three_month_opens) && void 0 !== r ? r : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        f = [],
        p = [];
    n.forEach((e) => {
        var n, r, i, a;
        let o = null !== (n = l[e.id]) && void 0 !== n ? n : {};
        Number(null !== (r = o.num_year_opens) && void 0 !== r ? r : 0) > c || Number(null !== (i = o.num_month_opens) && void 0 !== i ? i : 0) > d ? f.push(e) : Number(null !== (a = o.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && p.push(e);
    });
    let h = [];
    return (
        f.length > 0 &&
            h.push({
                label: 'Setting '.concat(f.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: f.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
                apply: (e, n) => {
                    for (let r of f) P(e, n, r.id, !0);
                }
            }),
        p.length > 0 &&
            h.push({
                label: 'NOT setting '.concat(p.length, ' channels to white-dot because they were only viewed a little.'),
                debug: p.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join('')
            }),
        h
    );
}
function x(e, n) {
    if (m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id)) return [];
    let r = [],
        i = new Set(n.map((e) => e.id)),
        a = Date.now() - g.Z.Millis.DAYS_30,
        o = h.Z.getFrequentlyWithoutFetchingLatest()
            .filter((e) => e instanceof c.Sf && i.has(e.id))
            .filter((e) => {
                var n, r;
                let i = null !== (r = null === (n = h.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === n ? void 0 : n.recentUses) && void 0 !== r ? r : [];
                return 0 !== i.length && i[i.length - 1] >= a;
            });
    return (
        o.length > 0 &&
            r.push({
                label: 'Setting '.concat(o.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: o.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of o) P(e, n, r.id, !0);
                }
            }),
        r
    );
}
function L(e) {
    let n = [],
        r = [],
        i = [];
    return (
        e.forEach((e) => {
            if (m.ZP.isChannelMuted(e.guild_id, e.id)) return;
            let n = m.ZP.getChannelMessageNotifications(e.guild_id, e.id);
            n === b.bL.ALL_MESSAGES ? r.push(e) : n === b.bL.ONLY_MENTIONS && i.push(e);
        }),
        r.length > 0 &&
            n.push({
                label: 'Setting '.concat(r.length, ' channels to white-dot since they were explicitly All Messages'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let i of r) P(e, n, i.id, !0);
                }
            }),
        i.length > 0 &&
            n.push({
                label: 'Setting '.concat(i.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i) P(e, n, r.id, !1);
                }
            }),
        n
    );
}
function w(e, n, r, i) {
    var a, o, s, l;
    let c = null !== (s = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[r]) && void 0 !== s ? s : {};
    i(c, null !== (l = null === (o = n.channel_overrides) || void 0 === o ? void 0 : o[r]) && void 0 !== l ? l : {}), !u().isEmpty(c) && (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[r] = c));
}
function P(e, n, r, i) {
    w(e, n, r, (e, n) => {
        var r, a;
        (e.flags = (0, E.mB)(null !== (a = null !== (r = e.flags) && void 0 !== r ? r : n.flags) && void 0 !== a ? a : 0, I.ic.UNREADS_ALL_MESSAGES, i)), (e.flags = (0, E.mB)(e.flags, I.ic.UNREADS_ONLY_MENTIONS, !i));
    });
}
