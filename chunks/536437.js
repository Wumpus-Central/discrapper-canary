"use strict";
n.d(t, { A: () => s });
var r = n(835245);
function i(e) {
    return { channelId: e, sessionId: (0, r.A)() };
}
let s = new (class {
    session;
    getForumChannelSessionId(e) {
        return (
            null == this.session && (this.session = i(e)),
            this.session.channelId !== e && (this.session = i(e)),
            this.session.sessionId
        );
    }
})();
