n.d(t, {
    Z: () => g,
    m: () => d,
});
var r,
    i = n(493683),
    l = n(904245),
    a = n(710845),
    s = n(592125),
    o = n(70956),
    c = n(651655);
let u = +o.Z.Millis.SECOND + 10;
var d = (((r = {})[(r.GROUP_DM = 0)] = "GROUP_DM"), (r[(r.USER = 1)] = "USER"), (r[(r.CHANNEL = 2)] = "CHANNEL"), r);
class h extends c.Z {
    _sendInvite(e, t, n, r, i) {
        l.Z.sendInvite(e.id, t, n, r).then(
            () => i(null, !0),
            () => i(null, !1),
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
                i.Z.ensurePrivateChannel(e.user.id).then(
                    (i) => {
                        let l = s.Z.getChannel(i);
                        null != l && this._sendInvite(l, e.inviteKey, n, r, t);
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
