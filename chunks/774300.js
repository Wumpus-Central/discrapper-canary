"use strict";
n.d(t, { A: () => h, F: () => d });
var i,
    r = n(308528),
    s = n(720149),
    a = n(626584),
    o = n(734057),
    l = n(927813),
    u = n(513391);
let c = +l.A.Millis.SECOND + 10;
var d = (((i = {})[(i.GROUP_DM = 0)] = "GROUP_DM"), (i[(i.USER = 1)] = "USER"), (i[(i.CHANNEL = 2)] = "CHANNEL"), i);
class _ extends u.A {
    constructor() {
        super(new a.A("InviteQueue"), c);
    }
    _sendInvite(e, t, n, i, r) {
        s.A.sendInvite(e.id, t, n, i).then(
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
                        let s = o.A.getChannel(r);
                        null != s ? this._sendInvite(s, e.inviteKey, n, i, t) : t(null, !1);
                    },
                    () => t(null, !1),
                );
        }
    }
}
let h = new _();
