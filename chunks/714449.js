"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(66834),
    s = n(71393),
    a = n(287809);
let o = "21154681615024128";
class l extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        let e;
        (e = a.default.getCurrentUser()), e?.isStaff() && null != s.A.getGuild(o) && r.A.requestMembers(o, "", 0, !1);
    };
}
let u = new l();
