t.d(n, {
    Z: () => v,
    m: () => b,
});
var i,
    o = t(493683),
    a = t(904245),
    r = t(710845),
    s = t(592125),
    _ = t(70956),
    c = t(651655);
let d = +_.Z.Millis.SECOND + 10;
var b = (((i = {})[(i.GROUP_DM = 0)] = "GROUP_DM"), (i[(i.USER = 1)] = "USER"), (i[(i.CHANNEL = 2)] = "CHANNEL"), i);
class l extends c.Z {
    _sendInvite(e, n, t, i, o) {
        a.Z.sendInvite(e.id, n, t, i).then(
            () => o(null, !0),
            () => o(null, !1),
        );
    }
    drain(e, n) {
        let { location: t, inviteAnalyticsMetadata: i } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, t, i, n);
                break;
            case 1:
                o.Z.ensurePrivateChannel(e.user.id).then(
                    (o) => {
                        let a = s.Z.getChannel(o);
                        null != a && this._sendInvite(a, e.inviteKey, t, i, n);
                    },
                    () => n(null, !1),
                );
        }
    }
    constructor() {
        super(new r.Z("InviteQueue"), d);
    }
}
let v = new l();
