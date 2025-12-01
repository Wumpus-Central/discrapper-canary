n.d(t, {
    Z: () => g,
    m: () => d,
});
var r,
    l = n(493683),
    i = n(904245),
    a = n(710845),
    s = n(592125),
    o = n(70956),
    c = n(651655);
let u = +o.Z.Millis.SECOND + 10;
var d = (((r = {})[(r.GROUP_DM = 0)] = "GROUP_DM"), (r[(r.USER = 1)] = "USER"), (r[(r.CHANNEL = 2)] = "CHANNEL"), r);
class h extends c.Z {
    _sendInvite(e, t, n, r, l) {
        i.Z.sendInvite(e.id, t, n, r).then(
            () => l(null, !0),
            () => l(null, !1),
        );
    }
    drain(e, t) {
        let { location: n, inviteAnalyticsMetadata: r } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, n, r, t);
                break;
            case 1:
                l.Z.ensurePrivateChannel(e.user.id).then(
                    (l) => {
                        let i = s.Z.getChannel(l);
                        null != i && this._sendInvite(i, e.inviteKey, n, r, t);
                    },
                    () => t(null, !1),
                );
        }
    }
    constructor() {
        super(new a.Z("InviteQueue"), u);
    }
}
let g = new h();
