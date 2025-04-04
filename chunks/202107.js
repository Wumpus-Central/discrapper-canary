n.d(t, { Z: () => g }), n(47120);
var r = n(570140),
    i = n(147913),
    o = n(271383),
    a = n(594174),
    s = n(69882);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 10000,
    _ = null,
    p = () => {
        let e = o.ZP.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = t,
                r = (0, o.O5)(n),
                i = (0, o.V6)(n),
                a = e[n];
            (0, s.J)(a) || h(r, i);
        });
    },
    h = (e, t) => {
        var n, i, l, u, f, _;
        let p = o.ZP.getMember(e, t),
            h = a.default.getUser(t);
        if (null == p || null == h || (0, s.b)(p)) return;
        let m = d(c({}, p), {
            guildId: e,
            nick: null != (n = p.nick) ? n : h.username,
            avatar: null != (i = p.avatar) ? i : void 0,
            avatarDecoration: null != p.avatarDecoration ? c({}, p.avatarDecoration) : void 0,
            premiumSince: null != (l = p.premiumSince) ? l : void 0,
            isPending: null != (u = p.isPending) && u,
            user: d(c({}, h), {
                email: null != (f = h.email) ? f : void 0,
                phone: null != (_ = h.phone) ? _ : void 0
            }),
            communicationDisabledUntil: null
        });
        r.Z.dispatch(c({ type: 'GUILD_MEMBER_UPDATE' }, m));
    };
class m extends i.Z {
    _initialize() {
        _ = setInterval(() => p(), f);
    }
    _terminate() {
        clearInterval(_);
    }
    constructor(...e) {
        super(...e), l(this, 'clearGuildMemberTimeout', h);
    }
}
let g = new m();
