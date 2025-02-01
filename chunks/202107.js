n.d(t, { Z: () => p }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(271383),
    s = n(594174),
    o = n(69882);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = 10000,
    c = null,
    d = () => {
        let e = a.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = t,
                i = (0, a.O5)(n),
                r = (0, a.V6)(n),
                s = e[n];
            (0, o.J)(s) || f(i, r);
        });
    },
    f = (e, t) => {
        var n, r, l, u, c, d;
        let f = a.ZP.getMember(e, t),
            _ = s.default.getUser(t);
        if (null == f || null == _ || (0, o.b)(f)) return;
        let p = {
            ...f,
            guildId: e,
            nick: null !== (n = f.nick) && void 0 !== n ? n : _.username,
            avatar: null !== (r = f.avatar) && void 0 !== r ? r : void 0,
            avatarDecoration: null != f.avatarDecoration ? { ...f.avatarDecoration } : void 0,
            premiumSince: null !== (l = f.premiumSince) && void 0 !== l ? l : void 0,
            isPending: null !== (u = f.isPending) && void 0 !== u && u,
            user: {
                ..._,
                email: null !== (c = _.email) && void 0 !== c ? c : void 0,
                phone: null !== (d = _.phone) && void 0 !== d ? d : void 0
            },
            communicationDisabledUntil: null
        };
        i.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ...p
        });
    };
class _ extends r.Z {
    _initialize() {
        c = setInterval(() => d(), u);
    }
    _terminate() {
        clearInterval(c);
    }
    constructor(...e) {
        super(...e), l(this, 'clearGuildMemberTimeout', f);
    }
}
let p = new _();
