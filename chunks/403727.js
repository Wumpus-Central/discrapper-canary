n.d(t, {
    A: () => d,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(860689);

function o(e, t, n) {
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
let l = {};

function c(e) {
    let { invite: t } = e,
        n = t.guild;
    if (null == n) return !1;
    l[n.id] = (0, s.DY)(n);
}
class u extends (r = i.Ay.Store) {
    getGuild(e) {
        return l[e];
    }
}
o(u, "displayName", "AuthInviteStore");
let d = new u(a.h, {
    AUTH_INVITE_UPDATE: c,
});
