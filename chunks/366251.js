"use strict";
n.d(t, { A: () => h });
var i = n(311907),
    s = n(73153),
    l = n(383501);
let r = {},
    a = !1,
    o = null;
function c(e) {
    e in r && delete r[e];
}
function d() {
    if (!a && l.A.isConnected()) {
        let e = l.A.getChannelId();
        if (null != e) return c(e), (o = e), (a = !0), !0;
    } else if (a && !l.A.isConnected() && null != o) return c(o), (o = null), (a = !1), !0;
    return !1;
}
class u extends i.Ay.Store {
    static displayName = "VoiceInvitesuggestionsStore ";
    initialize() {
        this.waitFor(l.A), this.syncWith([l.A], d);
    }
    getIsPopoverDismissed(e) {
        return null != e && (r[e] ?? !1);
    }
    getShouldShowPopover(e) {
        return null != e && l.A.isConnected() && l.A.getChannelId() === e && !this.getIsPopoverDismissed(e);
    }
}
let h = new u(s.h, {
    VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function (e) {
        let { channelId: t } = e;
        return !r[t] && ((r[t] = !0), !0);
    },
});
