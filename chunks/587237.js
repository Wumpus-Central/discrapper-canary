"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(626584),
    a = n(237984),
    s = n(394072);
let l = new r.A("OverlaySmoketestLaunchManager");
class o extends i.A {
    launched = !1;
    actions = {
        POST_CONNECTION_OPEN: () => {
            (0, s.SE)() &&
                !this.launched &&
                ((this.launched = !0),
                l.info("Opening v3 overlay for smoketest"),
                (0, a.o)({ windowed: !0 }).catch((e) => {
                    l.error("Failed to open v3 overlay for smoketest", e);
                }));
        },
    };
}
let d = new o();
