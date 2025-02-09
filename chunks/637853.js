n.d(t, {
    Ee: () => I,
    L6: () => x,
    V7: () => b,
    VF: () => L,
    b$: () => g,
    d9: () => O,
    dF: () => T,
    dX: () => w,
    iF: () => S,
    kl: () => N,
    mn: () => A,
    p3: () => v,
    wC: () => E
}),
    n(789020),
    n(47120),
    n(724458),
    n(653041),
    n(536091);
var i = n(442837),
    r = n(902704),
    a = n(447003),
    s = n(592125),
    o = n(984933),
    l = n(430824),
    u = n(496675),
    c = n(630388),
    d = n(823379),
    f = n(700785),
    _ = n(977258),
    p = n(981631),
    h = n(372897);
let m = new Date(1682488800000);
function g(e) {
    return (0, i.e7)([l.Z, u.Z], () => {
        let t = l.Z.getGuild(e),
            n = !!(null == t ? void 0 : t.hasFeature(p.oNc.COMMUNITY)),
            i = u.Z.can(p.Plq.MANAGE_GUILD, t),
            r = u.Z.can(p.Plq.MANAGE_ROLES, t);
        return n && i && r;
    });
}
function E(e) {
    let t = l.Z.getGuild(e),
        n = !!(null == t ? void 0 : t.hasFeature(p.oNc.COMMUNITY)),
        i = u.Z.can(p.Plq.MANAGE_GUILD, t),
        r = u.Z.can(p.Plq.MANAGE_ROLES, t);
    return n && i && r;
}
function v(e, t) {
    var n;
    if (null == e || !e.hasFeature(p.oNc.GUILD_ONBOARDING) || null == t || null == t.joinedAt || new Date(t.joinedAt) < m) return !1;
    let i = null !== (n = t.flags) && void 0 !== n ? n : 0;
    return c.yE(i, h.q.STARTED_ONBOARDING) && !c.yE(i, h.q.COMPLETED_ONBOARDING);
}
function y(e, t, n) {
    let i = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            var t;
            null == e ||
                null === (t = e.channelIds) ||
                void 0 === t ||
                t.forEach((e) => {
                    i.add(e);
                });
        });
    }),
        t.forEach((e) => i.add(e));
    let r = n.filter((e) => !e.isCategory() && !e.isThread() && !(0, a.Z)(e));
    return [r.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id))), r.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)))];
}
function I(e, t, n) {
    return y(
        t,
        n,
        o.ZP.getChannels(e)[o.sH].map((e) => {
            let { channel: t } = e;
            return t;
        })
    );
}
function T(e, t, n) {
    return y(
        t,
        n,
        (0, i.e7)([o.ZP], () => o.ZP.getChannels(e))[o.sH].map((e) => {
            let { channel: t } = e;
            return t;
        })
    );
}
function b(e) {
    return S(s.Z.getChannel(e));
}
function S(e) {
    return !!(null != e && (0, _.s)(e.guild_id, e.id)) && (e.isForumChannel() ? f.Uu(p.Plq.SEND_MESSAGES_IN_THREADS, e) : f.Uu(p.Plq.SEND_MESSAGES, e));
}
function A(e) {
    return (0, i.e7)([s.Z], () => {
        let t = s.Z.getChannel(e);
        return (0, d.lm)(t) && S(t);
    });
}
function N(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = R(e, t, (e) => e.id, i);
    return (
        n.forEach((t) => {
            var n, a;
            if (!t.required) return;
            let s = R(e, null !== (a = null === (n = t.options[0]) || void 0 === n ? void 0 : n.channelIds) && void 0 !== a ? a : [], (e) => e.id),
                o = t.options.reduce((t, n) => {
                    if (null == n.channelIds) return [];
                    let a = R(
                        e,
                        n.channelIds,
                        (e) => e.id,
                        (e) => i(e) && !r.includes(e)
                    );
                    return a.length < t.length ? a : t;
                }, s);
            r.push(...o);
        }),
        r
    );
}
function C(e, t) {
    return e.filter((e) => {
        var n;
        return S(null === (n = t[e]) || void 0 === n ? void 0 : n.channel);
    });
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        r = o.ZP.getChannels(e)[o.sH],
        a = [];
    for (let { channel: e } of r)
        if ((0, _.s)(e.guild_id, e.id) && ((t.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && t.includes(e.parent_id)))) {
            let t = n(e);
            i(t) && a.push(t);
        }
    return a;
}
function O(e, t) {
    let n = R(e, t),
        i = o.ZP.getChannels(e)[o.sH],
        r = {};
    for (let e of i) r[e.channel.id] = e;
    return [
        C(
            n.map((e) => {
                let { id: t } = e;
                return t;
            }),
            r
        ),
        n
    ];
}
function D(e, t) {
    return e[0].length === t[0].length && e[1].length === t[1].length && (0, r.Z)(e[0], t[0]) && (0, r.Z)(e[1], t[1]);
}
function L(e, t) {
    return (0, i.e7)(
        [o.ZP],
        () => {
            let n = o.ZP.getChannels(e),
                i = [],
                r = [],
                a = {};
            for (let e of n[o.sH]) (0, _.s)(e.channel.guild_id, e.channel.id) && ((t.has(e.channel.id) && !e.channel.isCategory()) || (!e.channel.isThread() && null != e.channel.parent_id && t.has(e.channel.parent_id))) && ((a[e.channel.id] = e), i.push(e.channel), S(e.channel) && r.push(e.channel.id));
            return [r, i];
        },
        [e, t],
        D
    );
}
function x(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(d.lm)
    );
}
function w(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(d.lm)
    );
}
