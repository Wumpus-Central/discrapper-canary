n.d(t, { Z: () => s });
var r = n(184242),
    i = n(349902),
    o = n(697927),
    a = n(200634);
function s(e) {
    var t, n;
    let { user: s, currentUser: l, location: c } = e,
        u = null === (t = (0, o.Z)(s.id, s.id !== (null == l ? void 0 : l.id)).mutualFriends) || void 0 === t ? void 0 : t.length,
        d = null === (n = (0, a.Z)(s.id, s.id !== (null == l ? void 0 : l.id)).mutualGuilds) || void 0 === n ? void 0 : n.length,
        f = (0, i.Z)(s);
    return !((0, r.Ac)({ location: c }) && f && (null != u ? u : 0) === 0 && (null != d ? d : 0) === 0);
}
