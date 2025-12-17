n.d(t, {
    Z: () => p,
    m: () => d,
});
var l,
    r = n(493683),
    i = n(904245),
    a = n(710845),
    s = n(592125),
    o = n(70956),
    u = n(651655);
let c = +o.Z.Millis.SECOND + 10;
var d = (((l = {})[(l.GROUP_DM = 0)] = "GROUP_DM"), (l[(l.USER = 1)] = "USER"), (l[(l.CHANNEL = 2)] = "CHANNEL"), l);
class h extends u.Z {
    _sendInvite(e, t, n, l, r) {
        i.Z.sendInvite(e.id, t, n, l).then(
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
                r.Z.ensurePrivateChannel(e.user.id).then(
                    (r) => {
                        let i = s.Z.getChannel(r);
                        null != i && this._sendInvite(i, e.inviteKey, n, l, t);
                    },
                    () => t(null, !1),
                );
        }
    }
    constructor() {
        super(new a.Z("InviteQueue"), c);
    }
}
let p = new h();
