n.d(t, { A: () => d });
var i = n(635377),
    l = n.n(i),
    a = n(311907),
    r = n(73153);
let s = new (l())({ max: 500 });
class o extends a.Ay.Store {
    static displayName = "MessageActivityInviteCoverImageStore";
    getCoverImageURL(e) {
        let { messageId: t } = e;
        return s.get(t);
    }
}
let d = new o(r.h, {
    SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL: function (e) {
        let { messageId: t, coverImageURL: n } = e;
        if (s.get(t) === n) return !1;
        s.set(t, n);
    },
});
