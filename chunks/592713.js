n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(73153),
    i = n(439372),
    a = n(696451),
    s = n(287809),
    o = n(316031);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
let f = 1e4,
    p = null,
    _ = () => {
        let e = a.Ay.getCommunicationDisabledUserMap();
        Object.keys(e).forEach((t) => {
            let n = t,
                r = (0, a.DL)(n),
                i = (0, a.vg)(n),
                s = e[n];
            (0, o.n)(s) || h(r, i);
        });
    },
    h = (e, t) => {
        var n, i, l, u, f, p;
        let _ = a.Ay.getMember(e, t),
            h = s.default.getUser(t);
        if (null == _ || null == h || (0, o.Z)(_)) return;
        let m = d(c({}, _), {
            guildId: e,
            nick: null != (n = _.nick) ? n : h.username,
            avatar: null != (i = _.avatar) ? i : void 0,
            avatarDecoration: null != _.avatarDecoration ? c({}, _.avatarDecoration) : void 0,
            premiumSince: null != (l = _.premiumSince) ? l : void 0,
            isPending: null != (u = _.isPending) && u,
            user: d(c({}, h), {
                email: null != (f = h.email) ? f : void 0,
                phone: null != (p = h.phone) ? p : void 0,
            }),
            communicationDisabledUntil: null,
        });
        r.h.dispatch(
            c(
                {
                    type: "GUILD_MEMBER_UPDATE",
                },
                m,
            ),
        );
    };
class m extends i.A {
    _initialize() {
        p = setInterval(() => _(), f);
    }
    _terminate() {
        clearInterval(p);
    }
    constructor(...e) {
        super(...e), l(this, "clearGuildMemberTimeout", h);
    }
}
let g = new m();
