n.d(t, { Z: () => p });
var r,
    i = n(31775),
    a = n.n(i),
    o = n(442837),
    s = n(570140);
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
let c = 500,
    u = new (a())({ max: c });
function d(e) {
    let { messageId: t, coverImageURL: n } = e;
    if (u.get(t) === n) return !1;
    u.set(t, n);
}
class f extends (r = o.ZP.Store) {
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return u.get(t);
    }
}
l(f, "displayName", "MessageActivityInviteCoverImageStore");
let p = new f(s.Z, { SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: d });
