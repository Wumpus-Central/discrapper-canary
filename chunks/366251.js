n.d(t, { A: () => h });
var i = n(311907),
    l = n(73153),
    s = n(383501);
let a = {},
    r = !1,
    o = null;
function d(e) {
    e in a && delete a[e];
}
function c() {
    if (!r && s.A.isConnected()) {
        let e = s.A.getChannelId();
        if (null != e) return d(e), (o = e), (r = !0), !0;
    } else if (r && !s.A.isConnected() && null != o) return d(o), (o = null), (r = !1), !0;
    return !1;
}
class u extends i.Ay.Store {
    static displayName = "VoiceInvitesuggestionsStore ";
    initialize() {
        this.waitFor(s.A), this.syncWith([s.A], c);
    }
    getIsPopoverDismissed(e) {
        return null != e && (a[e] ?? !1);
    }
    getShouldShowPopover(e) {
        return null != e && s.A.isConnected() && s.A.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
let h = new u(l.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !a[t] && ((a[t] = !0), !0);
    },
});
