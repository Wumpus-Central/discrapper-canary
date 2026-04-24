"use strict";
l.d(t, { A: () => g, F: () => u });
var n,
    i = l(308528),
    s = l(720149),
    a = l(626584),
    r = l(734057),
    o = l(927813),
    d = l(513391);
let c = +o.A.Millis.SECOND + 10;
var u = (((n = {})[(n.GROUP_DM = 0)] = "GROUP_DM"), (n[(n.USER = 1)] = "USER"), (n[(n.CHANNEL = 2)] = "CHANNEL"), n);
class h extends d.A {
    constructor() {
        super(new a.A("InviteQueue"), c);
    }
    _sendInvite(e, t, l, n, i) {
        s.A.sendInvite(e.id, t, l, n).then(
            () => i(null, !0),
            () => i(null, !1),
        );
    }
    drain(e, t) {
        let { location: l, inviteAnalyticsMetadata: n } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, l, n, t);
                break;
            case 1:
                i.A.ensurePrivateChannel(e.user.id).then(
                    (i) => {
                        let s = r.A.getChannel(i);
                        null != s && this._sendInvite(s, e.inviteKey, l, n, t);
                    },
                    () => t(null, !1),
                );
        }
    }
}
let g = new h();
