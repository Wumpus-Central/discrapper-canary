t.d(n, { A: () => g, F: () => c });
var e,
    l = t(308528),
    s = t(720149),
    d = t(626584),
    r = t(734057),
    a = t(927813),
    u = t(513391);
let A = +a.A.Millis.SECOND + 10;
var c = (((e = {})[(e.GROUP_DM = 0)] = "GROUP_DM"), (e[(e.USER = 1)] = "USER"), (e[(e.CHANNEL = 2)] = "CHANNEL"), e);
class o extends u.A {
    constructor() {
        super(new d.A("InviteQueue"), A);
    }
    _sendInvite(i, n, t, e, l) {
        s.A.sendInvite(i.id, n, t, e).then(
            () => l(null, !0),
            () => l(null, !1),
        );
    }
    drain(i, n) {
        let { location: t, inviteAnalyticsMetadata: e } = i;
        switch (i.type) {
            case 0:
            case 2:
                this._sendInvite(i.channel, i.inviteKey, t, e, n);
                break;
            case 1:
                l.A.ensurePrivateChannel(i.user.id).then(
                    (l) => {
                        let s = r.A.getChannel(l);
                        null != s && this._sendInvite(s, i.inviteKey, t, e, n);
                    },
                    () => n(null, !1),
                );
        }
    }
}
let g = new o();
