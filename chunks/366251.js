n.d(t, { A: () => h });
var r,
    l,
    i = n(311907),
    a = n(73153),
    s = n(383501);
let o = {},
    c = !1,
    u = null;
function d(e) {
    e in o && delete o[e];
}
function f() {
    if (!c && s.A.isConnected()) {
        let e = s.A.getChannelId();
        if (null != e) return d(e), (u = e), (c = !0), !0;
    } else if (c && !s.A.isConnected() && null != u) return d(u), (u = null), (c = !1), !0;
    return !1;
}
class p extends (l = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], f);
    }
    getIsPopoverDismissed(e) {
        var t;
        return null != e && null != (t = o[e]) && t;
    }
    getShouldShowPopover(e) {
        return null != e && s.A.isConnected() && s.A.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
(r = "displayName") in p
    ? Object.defineProperty(p, r, {
          value: "VoiceInvitesuggestionsStore ",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (p[r] = "VoiceInvitesuggestionsStore ");
let h = new p(a.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !o[t] && ((o[t] = !0), !0);
    },
});
