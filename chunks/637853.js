n.d(t, {
    Ee: () => S,
    L6: () => M,
    N4: () => U,
    O5: () => I,
    OZ: () => j,
    V7: () => C,
    VF: () => x,
    b$: () => y,
    d9: () => w,
    dF: () => A,
    dX: () => k,
    iF: () => N,
    kl: () => R,
    p3: () => v,
    wC: () => O,
}),
    n(997841),
    n(388685),
    n(539854),
    n(472816),
    n(794429);
var r = n(95015),
    i = n(442837),
    a = n(902704),
    o = n(447003),
    s = n(592125),
    l = n(553795),
    c = n(984933),
    u = n(430824),
    d = n(496675),
    f = n(823379),
    _ = n(700785),
    p = n(624138),
    h = n(977258),
    m = n(290511),
    g = n(981631),
    E = n(372897);
let b = new Date(1682488800000);
function y(e) {
    return (0, i.e7)([u.Z, d.Z], () => {
        let t = u.Z.getGuild(e),
            n = !!(null == t ? void 0 : t.features.has(g.GuildFeatures.COMMUNITY)),
            r = d.Z.can(g.Plq.MANAGE_GUILD, t),
            i = d.Z.can(g.Plq.MANAGE_ROLES, t);
        return n && r && i;
    });
}
function O(e) {
    let t = u.Z.getGuild(e),
        n = !!(null == t ? void 0 : t.features.has(g.GuildFeatures.COMMUNITY)),
        r = d.Z.can(g.Plq.MANAGE_GUILD, t),
        i = d.Z.can(g.Plq.MANAGE_ROLES, t);
    return n && r && i;
}
function v(e, t) {
    var n;
    if (
        null == e ||
        !e.features.has(g.GuildFeatures.GUILD_ONBOARDING) ||
        null == t ||
        null == t.joinedAt ||
        new Date(t.joinedAt) < b
    )
        return !1;
    let i = null != (n = t.flags) ? n : 0;
    return r.yE(i, E.q.STARTED_ONBOARDING) && !r.yE(i, E.q.COMPLETED_ONBOARDING);
}
function I(e, t) {
    return (
        !(
            null != e &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
            e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
        ) && null != t
    );
}
function T(e, t, n) {
    let r = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            var t;
            null == e ||
                null == (t = e.channelIds) ||
                t.forEach((e) => {
                    r.add(e);
                });
        });
    }),
        t.forEach((e) => r.add(e));
    let i = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, o.Z)(e));
    return [
        i.filter((e) => r.has(e.id) || (null != e.parent_id && r.has(e.parent_id))),
        i.filter((e) => !r.has(e.id) && !(null != e.parent_id && r.has(e.parent_id))),
    ];
}
function S(e, t, n) {
    return T(
        t,
        n,
        c.ZP.getChannels(e)[c.sH].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function A(e, t, n) {
    return T(
        t,
        n,
        (0, i.e7)([c.ZP], () => c.ZP.getChannels(e))[c.sH].map((e) => {
            let { channel: t } = e;
            return t;
        }),
    );
}
function C(e) {
    return N(s.Z.getChannel(e));
}
function N(e) {
    return (
        null != e &&
        !!(0, h.s)(e.guild_id, e.id) &&
        (e.isForumChannel() ? _.Uu(g.Plq.SEND_MESSAGES_IN_THREADS, e) : _.Uu(g.Plq.SEND_MESSAGES, e))
    );
}
function R(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = D(e, t, (e) => e.id, r);
    return (
        n.forEach((t) => {
            var n, a;
            if (!t.required) return;
            let o = D(e, null != (a = null == (n = t.options[0]) ? void 0 : n.channelIds) ? a : [], (e) => e.id),
                s = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = D(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => r(e) && !i.includes(e),
                    );
                    return a.length < t.length ? a : t;
                }, o);
            i.push(...s);
        }),
        i
    );
}
function P(e, t) {
    return e.filter((e) => {
        var n;
        return N(null == (n = t[e]) ? void 0 : n.channel);
    });
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        i = c.ZP.getChannels(e)[c.sH],
        a = [];
    for (let { channel: e } of i)
        if (
            (0, h.s)(e.guild_id, e.id) &&
            ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))
        ) {
            let t = n(e);
            r(t) && a.push(t);
        }
    return a;
}
function w(e, t) {
    let n = D(e, t),
        r = c.ZP.getChannels(e)[c.sH],
        i = {};
    for (let e of r) i[e.channel.id] = e;
    return [
        P(
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            i,
        ),
        n,
    ];
}
function L(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, a.Z)(e[0], t[0]) && (0, a.Z)(e[1], t[1]);
}
function x(e, t) {
    return (0, i.e7)(
        [c.ZP],
        () => {
            let n = c.ZP.getChannels(e),
                r = [],
                i = [],
                a = {};
            for (let e of n[c.sH])
                (0, h.s)(e.channel.guild_id, e.channel.id) &&
                    ((t.has(e.channel.id) && !e.channel.isCategory()) ||
                        (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) &&
                    ((a[e.channel.id] = e), r.push(e.channel), N(e.channel) && i.push(e.channel.id));
            return [i, r];
        },
        [e, t],
        L,
    );
}
function M(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(f.lm),
    );
}
function k(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(f.lm),
    );
}
function j(e) {
    let t = e.filter((e) => e.connection_type === m.zz.PROVIDER_CONNECTED_ACCOUNT && e.provider_id),
        n = [],
        r = [];
    return (
        t.forEach((e) => {
            let t = e.provider_id;
            if ((0, p.Ew)(t)) return;
            let i = l.Z.getAccount(null, t);
            null == i || i.revoked ? r.push(t) : n.push(t);
        }),
        {
            connected: n,
            notConnected: r,
        }
    );
}
function U(e) {
    let t = e.filter((e) => e.connection_type === m.zz.APPLICATION && e.application_id),
        r = [],
        i = [],
        a = n(881998).default,
        { FetchState: o } = n(881998);
    return (
        t.forEach((e) => {
            let t = e.application_id;
            if ((0, p.Ew)(t)) return;
            let n = a.getNewestTokenForApplication(t);
            a.getFetchStateForApplication(t) === o.FETCHED && null != n ? r.push(t) : i.push(t);
        }),
        {
            connected: r,
            notConnected: i,
        }
    );
}
