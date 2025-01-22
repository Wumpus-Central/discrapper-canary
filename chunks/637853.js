r.d(n, {
    Ee: function () {
        return N;
    },
    L6: function () {
        return B;
    },
    V7: function () {
        return O;
    },
    VF: function () {
        return U;
    },
    b$: function () {
        return T;
    },
    d9: function () {
        return M;
    },
    dF: function () {
        return R;
    },
    dX: function () {
        return G;
    },
    iF: function () {
        return D;
    },
    kl: function () {
        return L;
    },
    mn: function () {
        return x;
    },
    p3: function () {
        return A;
    },
    wC: function () {
        return S;
    }
});
var i = r(789020);
var a = r(47120);
var o = r(724458);
var s = r(653041);
var l = r(536091);
var u = r(442837),
    c = r(902704),
    d = r(447003),
    f = r(592125),
    p = r(984933),
    h = r(430824),
    _ = r(496675),
    m = r(630388),
    g = r(823379),
    E = r(700785),
    v = r(977258),
    y = r(981631),
    b = r(372897);
let I = new Date(1682488800000);
function T(e) {
    return (0, u.e7)([h.Z, _.Z], () => {
        let n = h.Z.getGuild(e),
            r = !!(null == n ? void 0 : n.hasFeature(y.oNc.COMMUNITY)),
            i = _.Z.can(y.Plq.MANAGE_GUILD, n),
            a = _.Z.can(y.Plq.MANAGE_ROLES, n);
        return r && i && a;
    });
}
function S(e) {
    let n = h.Z.getGuild(e),
        r = !!(null == n ? void 0 : n.hasFeature(y.oNc.COMMUNITY)),
        i = _.Z.can(y.Plq.MANAGE_GUILD, n),
        a = _.Z.can(y.Plq.MANAGE_ROLES, n);
    return r && i && a;
}
function A(e, n) {
    var r;
    if (null == e || !e.hasFeature(y.oNc.GUILD_ONBOARDING) || null == n || null == n.joinedAt || new Date(n.joinedAt) < I) return !1;
    let i = null !== (r = n.flags) && void 0 !== r ? r : 0;
    return m.yE(i, b.q.STARTED_ONBOARDING) && !m.yE(i, b.q.COMPLETED_ONBOARDING);
}
function C(e, n, r) {
    let i = new Set();
    e.forEach((e) => {
        e.options.forEach((e) => {
            var n;
            null == e ||
                null === (n = e.channelIds) ||
                void 0 === n ||
                n.forEach((e) => {
                    i.add(e);
                });
        });
    }),
        n.forEach((e) => i.add(e));
    let a = r.filter((e) => !e.isCategory() && !e.isThread() && !(0, d.Z)(e)),
        o = a.filter((e) => i.has(e.id) || (null != e.parent_id && i.has(e.parent_id)));
    return [o, a.filter((e) => !i.has(e.id) && !(null != e.parent_id && i.has(e.parent_id)))];
}
function N(e, n, r) {
    return C(
        n,
        r,
        p.ZP.getChannels(e)[p.sH].map((e) => {
            let { channel: n } = e;
            return n;
        })
    );
}
function R(e, n, r) {
    return C(
        n,
        r,
        (0, u.e7)([p.ZP], () => p.ZP.getChannels(e))[p.sH].map((e) => {
            let { channel: n } = e;
            return n;
        })
    );
}
function O(e) {
    return D(f.Z.getChannel(e));
}
function D(e) {
    return !!(null != e && (0, v.s)(e.guild_id, e.id)) && (e.isForumChannel() ? E.Uu(y.Plq.SEND_MESSAGES_IN_THREADS, e) : E.Uu(y.Plq.SEND_MESSAGES, e));
}
function x(e) {
    return (0, u.e7)([f.Z], () => {
        let n = f.Z.getChannel(e);
        return (0, g.lm)(n) && D(n);
    });
}
function L(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        a = P(e, n, (e) => e.id, i);
    return (
        r.forEach((n) => {
            var r, o;
            if (!n.required) return;
            let s = P(e, null !== (o = null === (r = n.options[0]) || void 0 === r ? void 0 : r.channelIds) && void 0 !== o ? o : [], (e) => e.id),
                l = n.options.reduce((n, r) => {
                    if (null == r.channelIds) return [];
                    let o = P(
                        e,
                        r.channelIds,
                        (e) => e.id,
                        (e) => i(e) && !a.includes(e)
                    );
                    return o.length < n.length ? o : n;
                }, s);
            a.push(...l);
        }),
        a
    );
}
function w(e, n) {
    return e.filter((e) => {
        var r;
        return D(null === (r = n[e]) || void 0 === r ? void 0 : r.channel);
    });
}
function P(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (e) => e,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0,
        a = p.ZP.getChannels(e)[p.sH],
        o = [];
    for (let { channel: e } of a)
        if ((0, v.s)(e.guild_id, e.id) && ((n.includes(e.id) && !e.isCategory()) || (!e.isThread() && null != e.parent_id && n.includes(e.parent_id)))) {
            let n = r(e);
            i(n) && o.push(n);
        }
    return o;
}
function M(e, n) {
    let r = P(e, n),
        i = p.ZP.getChannels(e)[p.sH],
        a = {};
    for (let e of i) a[e.channel.id] = e;
    return [
        w(
            r.map((e) => {
                let { id: n } = e;
                return n;
            }),
            a
        ),
        r
    ];
}
function k(e, n) {
    return e[0].length === n[0].length && e[1].length === n[1].length && (0, c.Z)(e[0], n[0]) && (0, c.Z)(e[1], n[1]);
}
function U(e, n) {
    return (0, u.e7)(
        [p.ZP],
        () => {
            let r = p.ZP.getChannels(e),
                i = [],
                a = [],
                o = {};
            for (let e of r[p.sH]) (0, v.s)(e.channel.guild_id, e.channel.id) && ((n.has(e.channel.id) && !e.channel.isCategory()) || (!e.channel.isThread() && null != e.channel.parent_id && n.has(e.channel.parent_id))) && ((o[e.channel.id] = e), i.push(e.channel), D(e.channel) && a.push(e.channel.id));
            return [a, i];
        },
        [e, n],
        k
    );
}
function B(e) {
    return new Set(
        e
            .map((e) => e.roleIds)
            .flat()
            .filter(g.lm)
    );
}
function G(e) {
    return new Set(
        e
            .map((e) => e.channelIds)
            .flat()
            .filter(g.lm)
    );
}
