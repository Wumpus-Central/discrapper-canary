n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(582754),
    i = n(439372),
    a = n(667747),
    s = n(652215),
    o = n(985018);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    let { relationship: t } = e,
        n = t.userIgnored;
    t.type !== s.eA$.PENDING_INCOMING ||
        n ||
        (r.OR.announce(
            o.intl.formatToPlainString(o.t.zH0kC7, {
                username: t.user.username,
            }),
        ),
        a.m(t.user));
}

function u(e) {
    let { user: t } = e;
    r.OR.announce(
        o.intl.formatToPlainString(o.t["/+7xky"], {
            username: t.username,
        }),
    ),
        a.I(t);
}
class d extends i.A {
    constructor(...e) {
        super(...e),
            l(this, "actions", {
                RELATIONSHIP_ADD: c,
                FRIEND_REQUEST_ACCEPTED: u,
            });
    }
}
let f = new d();
