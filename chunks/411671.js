n.d(t, { y: () => i });
var r = n(290349);
function i(e, t) {
    var n;
    return (
        t.owner_user_id === e ||
        (null === (n = t.members.find((t) => t.user.id === e)) || void 0 === n ? void 0 : n.role) === r.D.ADMIN
    );
}
