"use strict";
n.d(t, { J: () => d, c: () => o });
var i = n(95701),
    r = n(734057),
    a = n(576705),
    s = n(652215);
let l = s.hVb.VIEW_CHANNEL | s.hVb.READ_MESSAGE_HISTORY;
function o(e) {
    return (
        null != e &&
        (e.type === s.rbe.DM || e.type === s.rbe.GROUP_DM || ((0, i.pQ)(e.type) && a.A.canBasicChannel(l, e)))
    );
}
function d(e) {
    return null != e && o(r.A.getBasicChannel(e));
}
