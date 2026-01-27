n.d(t, {
    A: () => d,
});
var r,
    i,
    l = n(635377),
    a = n.n(l),
    s = n(311907),
    o = n(73153);
let c = new (a())({
    max: 500,
});
class u extends (i = s.Ay.Store) {
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return c.get(t);
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "MessageActivityInviteCoverImageStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "MessageActivityInviteCoverImageStore");
let d = new u(o.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (c.get(t) === n) return !1;
        c.set(t, n);
    },
});
