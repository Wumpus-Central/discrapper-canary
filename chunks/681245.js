"use strict";
n.d(t, { A: () => d });
var r = n(765178),
    i = n(439372),
    s = n(667747),
    a = n(652215),
    o = n(985018);
function l(e) {
    let { relationship: t } = e,
        n = t.userIgnored;
    t.type !== a.eA$.PENDING_INCOMING ||
        n ||
        (r.O.announce(o.intl.formatToPlainString(o.t.zH0kC7, { username: t.user.username })), s.m(t.user));
}
function u(e) {
    let { user: t } = e;
    r.O.announce(o.intl.formatToPlainString(o.t["/+7xky"], { username: t.username })), s.I(t);
}
class c extends i.A {
    actions = { RELATIONSHIP_ADD: l, FRIEND_REQUEST_ACCEPTED: u };
}
let d = new c();
