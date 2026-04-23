n.d(t, { y: () => l });
var i = n(290349);
function l(e, t) {
    return t.owner_user_id === e || t.members.find((t) => t.user.id === e)?.role === i.D.ADMIN;
}
