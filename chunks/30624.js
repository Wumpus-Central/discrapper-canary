n.d(t, { Z: () => i });
var r = n(421535);
function i(e, t) {
    var n;
    return t.owner_user_id === e || (null === (n = t.members.find((t) => t.user.id === e)) || void 0 === n ? void 0 : n.role) === r.T.ADMIN;
}
