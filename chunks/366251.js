i.d(t, { A: () => m });
var l = i(17928),
    n = i(228366),
    s = i(763827);
let a = {},
    r = !1,
    d = null;
function c(e) {
    e in a && delete a[e];
}
function u() {
    if (!r && s.A.isConnected()) {
        let e = s.A.getChannelId();
        if (null != e) return c(e), (d = e), (r = !0), !0;
    } else if (r && !s.A.isConnected() && null != d) return c(d), (d = null), (r = !1), !0;
    return !1;
}
class o extends l.Ay.Store {
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
let m = new o(n.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !a[t] && ((a[t] = !0), !0);
    },
});
