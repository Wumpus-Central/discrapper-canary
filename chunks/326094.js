n.d(t, { Z: () => o });
var i = n(184242),
    r = n(349902),
    a = n(697927),
    s = n(200634);
function o(e) {
    var t, n;
    let { user: o, currentUser: l, location: u } = e,
        c = null === (t = (0, a.Z)(o.id, o.id !== (null == l ? void 0 : l.id)).mutualFriends) || void 0 === t ? void 0 : t.length,
        d = null === (n = (0, s.Z)(o.id, o.id !== (null == l ? void 0 : l.id)).mutualGuilds) || void 0 === n ? void 0 : n.length,
        f = (0, r.Z)(o);
    return !((0, i.Ac)({ location: u }) && f && (null != c ? c : 0) === 0 && (null != d ? d : 0) === 0);
}
