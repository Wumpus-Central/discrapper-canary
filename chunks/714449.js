"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(66834),
    a = n(71393),
    s = n(287809);
let l = "21154681615024128";
class o extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        let e;
        (e = s.default.getCurrentUser()), e?.isStaff() && null != a.A.getGuild(l) && r.A.requestMembers(l, "", 0, !1);
    };
}
let d = new o();
