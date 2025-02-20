n.d(t, {
    Z: () => g,
    m: () => c
});
var l,
    i = n(493683),
    s = n(904245),
    r = n(710845),
    a = n(592125),
    o = n(70956),
    d = n(651655);
let u = +o.Z.Millis.SECOND + 10;
var c = (((l = {})[(l.GROUP_DM = 0)] = 'GROUP_DM'), (l[(l.USER = 1)] = 'USER'), (l[(l.CHANNEL = 2)] = 'CHANNEL'), l);
class h extends d.Z {
    _sendInvite(e, t, n, l, i) {
        s.Z.sendInvite(e.id, t, n, l).then(
            () => i(null, !0),
            () => i(null, !1)
        );
    }
    drain(e, t) {
        let { location: n, suggested: l } = e;
        switch (e.type) {
            case 0:
            case 2:
                this._sendInvite(e.channel, e.inviteKey, n, l, t);
                break;
            case 1:
                i.Z.ensurePrivateChannel(e.user.id).then(
                    (i) => {
                        let s = a.Z.getChannel(i);
                        null != s && this._sendInvite(s, e.inviteKey, n, l, t);
                    },
                    () => t(null, !1)
                );
        }
    }
    constructor() {
        super(new r.Z('InviteQueue'), u);
    }
}
let g = new h();
