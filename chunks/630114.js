n.d(t, { Z: () => E }), n(539854), n(388685), n(997841), n(49124);
var r = n(392711),
    i = n.n(r),
    a = n(131704),
    o = n(680089),
    s = n(592125),
    l = n(480294),
    c = n(580005),
    u = n(496675),
    d = n(9156),
    f = n(70956),
    _ = n(630388),
    p = n(823379),
    h = n(789662),
    m = n(981631),
    g = n(526761);
function E(e, t, n, r, i) {
    if (t !== h.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, t) => {
                    O(e, t, !0);
                }
            }
        ];
    let a = [],
        o = Object.values(s.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => u.Z.can(m.Plq.VIEW_CHANNEL, e));
    return a.push(...b(e, o)), a.push(y(e)), a.push(v()), a.push(...I(o)), a.push(...S(o)), a.push(...A(o)), l.Z.hasConsented(m.pjP.PERSONALIZATION) ? a.push(...T(e, o, n, r, i)) : a.push(...N(e, o)), a.filter(p.lm);
}
function b(e, t) {
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
        r = t.filter((t) => d.ZP.getChannelMessageNotifications(e.id, t.id) === m.bL.ALL_MESSAGES);
    return (
        r.length > 0 &&
            n.push({
                label: 'Setting '.concat(r.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r)
                        C(e, t, n.id, (e) => {
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
function v() {
    return {
        label: 'Setting the guild to a grey dot unread',
        apply: (e, t) => {
            O(e, t, !1);
        }
    };
}
function O(e, t, n) {
    var r, i;
    (e.flags = (0, _.mB)(null != (i = null != (r = e.flags) ? r : t.flags) ? i : 0, g.vc.UNREADS_ALL_MESSAGES, n)), (e.flags = (0, _.mB)(e.flags, g.vc.UNREADS_ONLY_MENTIONS, !n));
}
function I(e) {
    let t = [],
        [n, r] = i()(e)
            .filter((e) => e.type === m.d4z.GUILD_ANNOUNCEMENT)
            .partition((e) => d.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && d.ZP.isChannelMuted(e.guild_id, e.parent_id)))
            .value();
    return (
        n.length > 0 &&
            t.push({
                label: 'Not touching '.concat(n.length, ' announcement channels since they are muted'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join('')
            }),
        r.length > 0 &&
            t.push({
                label: 'Setting '.concat(r.length, ' announcement channels to white-dot'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r) R(e, t, n.id, !0);
                }
            }),
        t
    );
}
function S(e) {
    let t = [],
        n = [];
    for (let t of e) d.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && (o.Z.isCollapsed(t.id) || n.push(t));
    return (
        n.length > 0 &&
            t.push({
                label: 'Unmuting '.concat(n.length, ' categories and setting to grey-dot'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let r of n)
                        R(e, t, r.id, !1),
                            C(e, t, r.id, (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            });
                }
            }),
        t
    );
}
function T(e, t, n, r, a) {
    if (d.ZP.isMuted(e.id) && !d.ZP.isTemporarilyMuted(e.id)) return [];
    let o = new Set(t.map((e) => e.id)),
        s = r.filter((e) => o.has(e.channel_id)),
        l = i().keyBy(s, 'channel_id'),
        c = Math.max(
            n.messages === h.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer,
            s.reduce((e, t) => {
                var n;
                return e + Number(null != (n = t.num_year_opens) ? n : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        u = Math.max(
            a.frecency.monthMinOpens,
            s.reduce((e, t) => {
                var n;
                return e + Number(null != (n = t.num_three_month_opens) ? n : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        f = [],
        _ = [];
    t.forEach((e) => {
        var t, n, r, i;
        let a = null != (t = l[e.id]) ? t : {};
        Number(null != (n = a.num_year_opens) ? n : 0) > c || Number(null != (r = a.num_month_opens) ? r : 0) > u ? f.push(e) : Number(null != (i = a.num_three_month_opens) ? i : 0) > 2 && _.push(e);
    });
    let p = [];
    return (
        f.length > 0 &&
            p.push({
                label: 'Setting '.concat(f.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: f.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
                apply: (e, t) => {
                    for (let n of f) R(e, t, n.id, !0);
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
        r = new Set(t.map((e) => e.id)),
        i = Date.now() - f.Z.Millis.DAYS_30,
        o = c.Z.getFrequentlyWithoutFetchingLatest()
            .filter((e) => e instanceof a.Sf && r.has(e.id))
            .filter((e) => {
                var t, n;
                let r = null != (n = null == (t = c.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) ? void 0 : t.recentUses) ? n : [];
                return 0 !== r.length && r[r.length - 1] >= i;
            });
    return (
        o.length > 0 &&
            n.push({
                label: 'Setting '.concat(o.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: o.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of o) R(e, t, n.id, !0);
                }
            }),
        n
    );
}
function A(e) {
    let t = [],
        n = [],
        r = [];
    return (
        e.forEach((e) => {
            if (d.ZP.isChannelMuted(e.guild_id, e.id)) return;
            let t = d.ZP.getChannelMessageNotifications(e.guild_id, e.id);
            t === m.bL.ALL_MESSAGES ? n.push(e) : t === m.bL.ONLY_MENTIONS && r.push(e);
        }),
        n.length > 0 &&
            t.push({
                label: 'Setting '.concat(n.length, ' channels to white-dot since they were explicitly All Messages'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let r of n) R(e, t, r.id, !0);
                }
            }),
        r.length > 0 &&
            t.push({
                label: 'Setting '.concat(r.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r) R(e, t, n.id, !1);
                }
            }),
        t
    );
}
function C(e, t, n, r) {
    var a, o, s, l;
    let c = null != (s = null == (a = e.channel_overrides) ? void 0 : a[n]) ? s : {};
    r(c, null != (l = null == (o = t.channel_overrides) ? void 0 : o[n]) ? l : {}), i().isEmpty(c) || (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[n] = c));
}
function R(e, t, n, r) {
    C(e, t, n, (e, t) => {
        var n, i;
        (e.flags = (0, _.mB)(null != (i = null != (n = e.flags) ? n : t.flags) ? i : 0, g.ic.UNREADS_ALL_MESSAGES, r)), (e.flags = (0, _.mB)(e.flags, g.ic.UNREADS_ONLY_MENTIONS, !r));
    });
}
