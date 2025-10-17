n.d(t, {
    Z: () => h,
    m: () => c,
});
var i,
    l = n(493683),
    s = n(904245),
    a = n(710845),
    r = n(592125),
    o = n(70956),
    d = n(651655);
let u = +o.Z.Millis.SECOND + 10;
var c = (((i = {})[(i.GROUP_DM = 0)] = "GROUP_DM"), (i[(i.USER = 1)] = "USER"), (i[(i.CHANNEL = 2)] = "CHANNEL"), i);
class g extends d.Z {
    _sendInvite(e, t, n, i, l) {
        s.Z.sendInvite(e.id, t, n, i).then(
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
                l.Z.ensurePrivateChannel(e.user.id).then(
                    (l) => {
                        let s = r.Z.getChannel(l);
                        null != s && this._sendInvite(s, e.inviteKey, n, i, t);
                    },
                    () => t(null, !1),
                );
        }
    }
    constructor() {
        super(new a.Z("InviteQueue"), u);
    }
}
let h = new g();
