n.d(t, { Z: () => E }), n(653041), n(47120), n(789020), n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(131704),
    s = n(680089),
    o = n(592125),
    l = n(480294),
    u = n(580005),
    c = n(496675),
    d = n(9156),
    f = n(70956),
    _ = n(630388),
    p = n(823379),
    h = n(789662),
    m = n(981631),
    g = n(526761);
function E(e, t, n, i, r) {
    if (t !== h.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, t) => {
                    b(e, t, !0);
                }
            }
        ];
    let a = [],
        s = Object.values(o.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => c.Z.can(m.Plq.VIEW_CHANNEL, e));
    return a.push(...v(e, s)), a.push(y(e)), a.push(I()), a.push(...T(s)), a.push(...S(s)), a.push(...C(s)), l.Z.hasConsented(m.pjP.PERSONALIZATION) ? a.push(...A(e, s, n, i, r)) : a.push(...N(e, s)), a.filter(p.lm);
}
function v(e, t) {
    if (!(d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id))) return [];
    let n = [
            {
                label: 'Unmuting the guild and marking it as read',
                apply: (e) => {
                    (e.muted = !1), (e.mute_config = null);
                },
                needsMarkedAsRead: !0
            }
        ],
        i = t.filter((t) => d.ZP.getChannelMessageNotifications(e.id, t.id) === m.bL.ALL_MESSAGES);
    return (
        i.length > 0 &&
            n.push({
                label: 'Setting '.concat(i.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of i)
                        R(e, t, n.id, (e) => {
                            e.message_notifications = m.bL.ONLY_MENTIONS;
                        });
                }
            }),
        n
    );
}
function y(e) {
    if (d.ZP.getMessageNotifications(e.id) === m.bL.ALL_MESSAGES)
        return {
            label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
            apply: (e) => {
                e.message_notifications = m.bL.ONLY_MENTIONS;
            }
        };
}
function I() {
    return {
        label: 'Setting the guild to a grey dot unread',
        apply: (e, t) => {
            b(e, t, !1);
        }
    };
}
function b(e, t, n) {
    var i, r;
    (e.flags = (0, _.mB)(null !== (r = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== r ? r : 0, g.vc.UNREADS_ALL_MESSAGES, n)), (e.flags = (0, _.mB)(e.flags, g.vc.UNREADS_ONLY_MENTIONS, !n));
}
function T(e) {
    let t = [],
        [n, i] = r()(e)
            .filter((e) => e.type === m.d4z.GUILD_ANNOUNCEMENT)
            .partition((e) => d.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && d.ZP.isChannelMuted(e.guild_id, e.parent_id)))
            .value();
    return (
        n.length > 0 &&
            t.push({
                label: 'Not touching '.concat(n.length, ' announcement channels since they are muted'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join('')
            }),
        i.length > 0 &&
            t.push({
                label: 'Setting '.concat(i.length, ' announcement channels to white-dot'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of i) O(e, t, n.id, !0);
                }
            }),
        t
    );
}
function S(e) {
    let t = [],
        n = [];
    for (let t of e) d.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !s.Z.isCollapsed(t.id) && n.push(t);
    return (
        n.length > 0 &&
            t.push({
                label: 'Unmuting '.concat(n.length, ' categories and setting to grey-dot'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let i of n)
                        O(e, t, i.id, !1),
                            R(e, t, i.id, (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            });
                }
            }),
        t
    );
}
function A(e, t, n, i, a) {
    if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
    let s = new Set(t.map((e) => e.id)),
        o = i.filter((e) => s.has(e.channel_id)),
        l = r().keyBy(o, 'channel_id'),
        u = Math.max(
            n.messages === h.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer,
            o.reduce((e, t) => {
                var n;
                return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        c = Math.max(
            a.frecency.monthMinOpens,
            o.reduce((e, t) => {
                var n;
                return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        f = [],
        _ = [];
    t.forEach((e) => {
        var t, n, i, r;
        let a = null !== (t = l[e.id]) && void 0 !== t ? t : {};
        Number(null !== (n = a.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (i = a.num_month_opens) && void 0 !== i ? i : 0) > c ? f.push(e) : Number(null !== (r = a.num_three_month_opens) && void 0 !== r ? r : 0) > 2 && _.push(e);
    });
    let p = [];
    return (
        f.length > 0 &&
            p.push({
                label: 'Setting '.concat(f.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: f.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
                apply: (e, t) => {
                    for (let n of f) O(e, t, n.id, !0);
                }
            }),
        _.length > 0 &&
            p.push({
                label: 'NOT setting '.concat(_.length, ' channels to white-dot because they were only viewed a little.'),
                debug: _.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join('')
            }),
        p
    );
}
function N(e, t) {
    if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
    let n = [],
        i = new Set(t.map((e) => e.id)),
        r = Date.now() - f.Z.Millis.DAYS_30,
        s = u.Z.getFrequentlyWithoutFetchingLatest()
            .filter((e) => e instanceof a.Sf && i.has(e.id))
            .filter((e) => {
                var t, n;
                let i = null !== (n = null === (t = u.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== i.length && i[i.length - 1] >= r;
            });
    return (
        s.length > 0 &&
            n.push({
                label: 'Setting '.concat(s.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: s.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of s) O(e, t, n.id, !0);
                }
            }),
        n
    );
}
function C(e) {
    let t = [],
        n = [],
        i = [];
    return (
        e.forEach((e) => {
            if (d.ZP.isChannelMuted(e.guild_id, e.id)) return;
            let t = d.ZP.getChannelMessageNotifications(e.guild_id, e.id);
            t === m.bL.ALL_MESSAGES ? n.push(e) : t === m.bL.ONLY_MENTIONS && i.push(e);
        }),
        n.length > 0 &&
            t.push({
                label: 'Setting '.concat(n.length, ' channels to white-dot since they were explicitly All Messages'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let i of n) O(e, t, i.id, !0);
                }
            }),
        i.length > 0 &&
            t.push({
                label: 'Setting '.concat(i.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of i) O(e, t, n.id, !1);
                }
            }),
        t
    );
}
function R(e, t, n, i) {
    var a, s, o, l;
    let u = null !== (o = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== o ? o : {};
    i(u, null !== (l = null === (s = t.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== l ? l : {}), r().isEmpty(u) || (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[n] = u));
}
function O(e, t, n, i) {
    R(e, t, n, (e, t) => {
        var n, r;
        (e.flags = (0, _.mB)(null !== (r = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== r ? r : 0, g.ic.UNREADS_ALL_MESSAGES, i)), (e.flags = (0, _.mB)(e.flags, g.ic.UNREADS_ONLY_MENTIONS, !i));
    });
}
