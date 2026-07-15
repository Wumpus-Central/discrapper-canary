"use strict";
n.d(t, { A: () => E, F: () => u });
var i,
    r = n(308528),
    a = n(493336),
    s = n(626584),
    l = n(734057),
    o = n(927813),
    d = n(513391);
let c = +o.A.Millis.SECOND + 10;
var u = (((i = {})[(i.GROUP_DM = 0)] = "GROUP_DM"), (i[(i.USER = 1)] = "USER"), (i[(i.CHANNEL = 2)] = "CHANNEL"), i);
class _ extends d.A {
    constructor() {
        super(new s.A("InviteQueue"), c);
    }
    _sendInvite(e, t, n, i, r) {
        a.A.sendInvite(e.id, t, n, i).then(
            () => r(null, !0),
            () => r(null, !1),
        );
    }
    drain(e, t) {
        let { location: n, inviteAnalyticsMetadata: i } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, n, i, t);
                break;
            case 1:
                r.A.ensurePrivateChannel(e.user.id).then(
                    (r) => {
                        let a = l.A.getChannel(r);
                        null != a ? this._sendInvite(a, e.inviteKey, n, i, t) : t(null, !1);
                    },
                    () => t(null, !1),
                );
        }
    }
}
let E = new _();
