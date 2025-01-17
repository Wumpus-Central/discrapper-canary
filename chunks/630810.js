n.d(t, {
    m: function () {
        return i;
    }
});
var l,
    i,
    s = n(493683),
    r = n(904245),
    a = n(710845),
    o = n(592125),
    d = n(70956),
    u = n(651655);
let c = 1 * d.Z.Millis.SECOND + 10;
((l = i || (i = {}))[(l.GROUP_DM = 0)] = 'GROUP_DM'), (l[(l.USER = 1)] = 'USER'), (l[(l.CHANNEL = 2)] = 'CHANNEL');
class h extends u.Z {
    _sendInvite(e, t, n, l, i) {
        r.Z.sendInvite(e.id, t, n, l).then(
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
                s.Z.ensurePrivateChannel(e.user.id).then(
                    (i) => {
                        let s = o.Z.getChannel(i);
                        null != s && this._sendInvite(s, e.inviteKey, n, l, t);
                    },
                    () => t(null, !1)
                );
        }
    }
    constructor() {
        super(new a.Z('InviteQueue'), c);
    }
}
t.Z = new h();
