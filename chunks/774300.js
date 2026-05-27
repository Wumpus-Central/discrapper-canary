t.d(n, { A: () => p, F: () => r });
var s,
    i = t(308528),
    l = t(720149),
    a = t(626584),
    u = t(734057),
    c = t(927813),
    d = t(513391);
let h = +c.A.Millis.SECOND + 10;
var r = (((s = {})[(s.GROUP_DM = 0)] = "GROUP_DM"), (s[(s.USER = 1)] = "USER"), (s[(s.CHANNEL = 2)] = "CHANNEL"), s);
class v extends d.A {
    constructor() {
        super(new a.A("InviteQueue"), h);
    }
    _sendInvite(e, n, t, s, i) {
        l.A.sendInvite(e.id, n, t, s).then(
            () => i(null, !0),
            () => i(null, !1),
        );
    }
    drain(e, n) {
        let { location: t, inviteAnalyticsMetadata: s } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, t, s, n);
                break;
            case 1:
                i.A.ensurePrivateChannel(e.user.id).then(
                    (i) => {
                        let l = u.A.getChannel(i);
                        null != l && this._sendInvite(l, e.inviteKey, t, s, n);
                    },
                    () => n(null, !1),
                );
        }
    }
}
let p = new v();
