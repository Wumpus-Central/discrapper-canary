var i = r(47120);
var a = r(570140),
    o = r(147913),
    s = r(271383),
    l = r(594174),
    u = r(69882);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = 10000,
    f = null,
    p = () => {
        let e = s.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((n) => {
            let r = n,
                i = (0, s.O5)(r),
                a = (0, s.V6)(r),
                o = e[r];
            !(0, u.J)(o) && h(i, a);
        });
    },
    h = (e, n) => {
        var r, i, o, c, d, f;
        let p = s.ZP.getMember(e, n),
            h = l.default.getUser(n);
        if (null == p || null == h || (0, u.b)(p)) return;
        let _ = {
            ...p,
            guildId: e,
            nick: null !== (r = p.nick) && void 0 !== r ? r : h.username,
            avatar: null !== (i = p.avatar) && void 0 !== i ? i : void 0,
            avatarDecoration: null != p.avatarDecoration ? { ...p.avatarDecoration } : void 0,
            premiumSince: null !== (o = p.premiumSince) && void 0 !== o ? o : void 0,
            isPending: null !== (c = p.isPending) && void 0 !== c && c,
            user: {
                ...h,
                email: null !== (d = h.email) && void 0 !== d ? d : void 0,
                phone: null !== (f = h.phone) && void 0 !== f ? f : void 0
            },
            communicationDisabledUntil: null
        };
        a.Z.dispatch({
            type: 'GUILD_MEMBER_UPDATE',
            ..._
        });
    };
class _ extends o.Z {
    _initialize() {
        f = setInterval(() => p(), d);
    }
    _terminate() {
        clearInterval(f);
    }
    constructor(...e) {
        super(...e), c(this, 'clearGuildMemberTimeout', h);
    }
}
n.Z = new _();
