n.d(t, { A: () => d, F: () => c });
var l,
    r = n(308528),
    a = n(843472),
    i = n(626584),
    s = n(734057),
    o = n(927813),
    E = n(513391);
let u = +o.A.Millis.SECOND + 10;
var c = (((l = {})[(l.GROUP_DM = 0)] = "GROUP_DM"), (l[(l.USER = 1)] = "USER"), (l[(l.CHANNEL = 2)] = "CHANNEL"), l);
class _ extends E.A {
    constructor() {
        super(new i.A("InviteQueue"), u);
    }
    _sendInvite(e, t, n, l, r) {
        a.A.sendInvite(e.id, t, n, l).then(
            () => r(null, !0),
            () => r(null, !1),
        );
    }
    drain(e, t) {
        let { location: n, inviteAnalyticsMetadata: l } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, n, l, t);
                break;
            case 1:
                r.A.ensurePrivateChannel(e.user.id).then(
                    (r) => {
                        let a = s.A.getChannel(r);
                        null != a && this._sendInvite(a, e.inviteKey, n, l, t);
                    },
                    () => t(null, !1),
                );
        }
    }
}
let d = new _();
