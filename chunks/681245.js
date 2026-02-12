"use strict";
n.d(t, { A: () => d });
var r = n(582754),
    i = n(439372),
    a = n(667747),
    s = n(652215),
    o = n(985018);
function l(e) {
    let { relationship: t } = e,
        n = t.userIgnored;
    t.type !== s.eA$.PENDING_INCOMING ||
        n ||
        (r.OR.announce(o.intl.formatToPlainString(o.t.zH0kC7, { username: t.user.username })), a.m(t.user));
}
function u(e) {
    let { user: t } = e;
    r.OR.announce(o.intl.formatToPlainString(o.t["/+7xky"], { username: t.username })), a.I(t);
}
class c extends i.A {
    actions = { RELATIONSHIP_ADD: l, FRIEND_REQUEST_ACCEPTED: u };
}
let d = new c();
