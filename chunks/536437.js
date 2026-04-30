"use strict";
n.d(t, { A: () => s });
var i = n(132500);
function r(e) {
    return { channelId: e, sessionId: (0, i.A)() };
}
let s = new (class {
    session;
    getForumChannelSessionId(e) {
        return (
            null == this.session && (this.session = r(e)),
            this.session.channelId !== e && (this.session = r(e)),
            this.session.sessionId
        );
    }
})();
