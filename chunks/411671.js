"use strict";
n.d(t, { y: () => s });
var i = n(290349);
function s(e, t) {
    return t.owner_user_id === e || t.members.find((t) => t.user.id === e)?.role === i.D.ADMIN;
}
