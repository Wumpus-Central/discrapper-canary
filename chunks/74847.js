"use strict";
n.d(t, { t: () => l });
var i = n(734057),
    r = n(576705),
    s = n(652215);
function l(e) {
    let t = i.A.getChannel(e),
        n = t?.isPrivate(),
        l = t?.isForumChannel();
    return n || (r.A.can(s.xBc.ATTACH_FILES, t) && r.A.can(s.xBc.SEND_MESSAGES, t) && !l);
}
