r.d(n, {
    $R: function () {
        return x;
    },
    C7: function () {
        return N;
    },
    Ek: function () {
        return S;
    },
    Gu: function () {
        return G;
    },
    JQ: function () {
        return C;
    },
    NE: function () {
        return v;
    },
    RG: function () {
        return w;
    },
    Xb: function () {
        return k;
    },
    Xu: function () {
        return b;
    },
    Y: function () {
        return B;
    },
    cD: function () {
        return I;
    },
    ki: function () {
        return y;
    },
    kn: function () {
        return L;
    },
    tM: function () {
        return E;
    },
    tc: function () {
        return D;
    },
    xl: function () {
        return P;
    }
});
var i = r(392711),
    a = r.n(i),
    o = r(149765),
    s = r(442837),
    l = r(987170),
    u = r(590293),
    c = r(901461),
    d = r(131704),
    f = r(314897),
    p = r(592125),
    h = r(496675),
    _ = r(709054),
    m = r(601070),
    g = r(981631);
let E = (0, l.Z)({
    id: '2022-07_voice_in_threads',
    label: 'Voice in Threads',
    kind: 'guild',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function v(e, n) {
    return T(
        (0, s.e7)(
            [h.Z],
            () => {
                let n = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : o.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
                return h.Z.can(n, e);
            },
            [e]
        ),
        e,
        n
    );
}
function y(e, n) {
    let r = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : o.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
    return T(h.Z.can(r, e), e, n);
}
function b(e) {
    let n = (0, s.e7)([h.Z], () => h.Z.can(o.$e(g.Plq.CREATE_PRIVATE_THREADS), e), [e]);
    return e.type === g.d4z.GUILD_TEXT && T(n, e);
}
function I(e) {
    let n = v(e),
        r = b(e);
    return n || r;
}
function T(e, n, r) {
    return !(__OVERLAY__ || !e || !d.uC.has(n.type) || (null != r && (r.hasFlag(g.iLy.HAS_THREAD) || (0, c.Z)(r)))) && !0;
}
function S(e) {
    let n = (0, s.e7)([p.Z], () => p.Z.getChannel(_.default.castMessageIdAsChannelId(e.id)), [e]);
    return A(
        (0, s.e7)([h.Z], () => h.Z.can(g.Plq.VIEW_CHANNEL, n), [n]),
        e,
        n
    );
}
function A(e, n, r) {
    return (!!n.hasFlag(g.iLy.HAS_THREAD) && null != r && !!e) || !1;
}
function C(e) {
    return (0, s.cj)([m.Z, h.Z], () => {
        let n = m.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
            r = m.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
            i = m.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
            o = a()(r).some((e) => h.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
            s = a()(n).some((e) => !(e.channel.id in r) && h.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
            l = a()(i).some((e) => h.Z.can(g.Plq.VIEW_CHANNEL, e));
        return {
            hasActiveThreads: o || s || l,
            hasMoreActiveThreads: l || s
        };
    });
}
function N(e) {
    let n = (0, s.e7)([p.Z], () => p.Z.getChannel(null == e ? void 0 : e.parent_id)),
        r = (0, s.e7)([h.Z], () => null != n && h.Z.can(g.Plq.MANAGE_THREADS, n), [n]),
        i = (0, s.e7)([f.default], () => f.default.getId());
    return !!(null != e && null != n && e.isThread()) && (!!r || (!e.isLockedThread() && (e.ownerId === i || !1)));
}
function R(e, n) {
    return null != e && n.can(g.Plq.SEND_MESSAGES_IN_THREADS, e);
}
function O(e, n, r) {
    var i;
    return !!(null != e && e.isThread()) && ((null === (i = e.threadMetadata) || void 0 === i ? void 0 : i.locked) ? r : n);
}
function D(e) {
    let n = (0, s.e7)([h.Z], () => R(e, h.Z)),
        r = k(e);
    return O(e, n, r);
}
function L(e) {
    let n = R(e, h.Z),
        r = U(e);
    return O(e, n, r);
}
function x(e) {
    var n;
    let r = (0, s.e7)([h.Z], () => null != e && h.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e));
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) !== !0 && r));
}
function w(e) {
    var n;
    return null != e && (!e.isThread() || e.isActiveThread() || (e.isArchivedThread() && (null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.locked) !== !0 && h.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e)));
}
function P(e) {
    let n = h.Z.can(g.Plq.MANAGE_THREADS, e);
    return e.isArchivedLockedThread() && !n;
}
function M(e, n) {
    return null != e && n.can(g.Plq.MANAGE_THREADS, e);
}
function k(e) {
    return (0, s.e7)([h.Z], () => M(e, h.Z));
}
function U(e) {
    return M(e, h.Z);
}
function B(e) {
    let n = (0, u.Z)(),
        r = (0, s.e7)([h.Z], () => h.Z.can(g.Plq.CONNECT, e)),
        i = x(e),
        a = E.useExperiment(
            {
                guildId: e.guild_id,
                location: 'e791ea_1'
            },
            { autoTrackExposure: !1 }
        ).enabled;
    return !n && e.isVocalThread() && a && r && i;
}
function G(e) {
    let n = k(e);
    return e.isLockedThread() && !n;
}
