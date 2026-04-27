n.d(t, { A: () => p, F: () => u });
var i,
    l = n(308528),
    s = n(720149),
    a = n(626584),
    o = n(734057),
    r = n(927813),
    d = n(513391);
let c = +r.A.Millis.SECOND + 10;
var u = (((i = {})[(i.GROUP_DM = 0)] = "GROUP_DM"), (i[(i.USER = 1)] = "USER"), (i[(i.CHANNEL = 2)] = "CHANNEL"), i);
class h extends d.A {
    constructor() {
        super(new a.A("InviteQueue"), c);
    }
    _sendInvite(e, t, n, i, l) {
        s.A.sendInvite(e.id, t, n, i).then(
            () => l(null, !0),
            () => l(null, !1),
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
                l.A.ensurePrivateChannel(e.user.id).then(
                    (l) => {
                        let s = o.A.getChannel(l);
                        null != s && this._sendInvite(s, e.inviteKey, n, i, t);
                    },
                    () => t(null, !1),
                );
        }
    }
}
let p = new h();
