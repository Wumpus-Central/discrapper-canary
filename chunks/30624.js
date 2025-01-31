n.d(t, { Z: () => r });
var i = n(421535);
function r(e, t) {
    var n;
    return t.owner_user_id === e || (null === (n = t.members.find((t) => t.user.id === e)) || void 0 === n ? void 0 : n.role) === i.T.ADMIN;
}
