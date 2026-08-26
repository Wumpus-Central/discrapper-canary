t.d(i, { A: () => m });
var n = t(17928),
    l = t(228366),
    s = t(763827);
let a = {},
    r = !1,
    d = null;
function o(e) {
    e in a && delete a[e];
}
function u() {
    if (!r && s.A.isConnected()) {
        let e = s.A.getChannelId();
        if (null != e) return o(e), (d = e), (r = !0), !0;
    } else if (r && !s.A.isConnected() && null != d) return o(d), (d = null), (r = !1), !0;
    return !1;
}
class c extends n.Ay.Store {
    static displayName = "VoiceInvitesuggestionsStore ";
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], u);
    }
    getIsPopoverDismissed(e) {
        return null != e && (a[e] ?? !1);
    }
    getShouldShowPopover(e) {
        return null != e && s.A.isConnected() && s.A.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
let m = new c(l.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: i } = e;
        return !a[i] && ((a[i] = !0), !0);
    },
});
