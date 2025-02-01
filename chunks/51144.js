n.d(t, {
    EO: () => T,
    Fc: () => I,
    Ft: () => A,
    W5: () => S,
    ZP: () => N,
    _T: () => m,
    oY: () => h,
    u5: () => v
}),
    n(411104);
var i = n(442837),
    r = n(246946),
    a = n(594174),
    s = n(981631),
    o = n(388032);
let l = 86400000,
    u = '???',
    c = (e) => ''.concat(e[0], '...'),
    d = (e) => '@'.concat(e),
    f = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function _(e) {
    return !!(null != e && e.length > 0);
}
function p(e) {
    return _(e.global_name) ? e.global_name : _(e.globalName) ? e.globalName : _(e.username) ? e.username : u;
}
function h(e) {
    var t;
    if (null == e) return;
    let n = r.Z.hidePersonalInformation,
        i = p(e);
    return n && i.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (i = c(i)), i;
}
function m(e) {
    var t;
    let n = (0, i.e7)([r.Z], () => r.Z.hidePersonalInformation);
    if (null == e) return;
    let a = p(e);
    return n && a.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (a = c(a)), a;
}
function g(e) {
    if (null != e) return _(e.globalName) ? e.globalName : _(e.global_name) ? e.global_name : void 0;
}
function E(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return u;
    let i = g(e),
        r = n ? S(e) : null !== (t = e.username) && void 0 !== t ? t : u;
    return i === r ? i : null != i ? ''.concat(i, ' (').concat(r, ')') : r;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case s.Skl.ONLINE:
            return t ? o.intl.string(o.t['9hghLC']) : o.intl.string(o.t.WbGtnJ);
        case s.Skl.OFFLINE:
            return o.intl.string(o.t.Vv0abG);
        case s.Skl.IDLE:
            return o.intl.string(o.t.qWbtVV);
        case s.Skl.DND:
            return o.intl.string(o.t.jaNpQE);
        case s.Skl.INVISIBLE:
            return o.intl.string(o.t.bg24HB);
        case s.Skl.STREAMING:
            return o.intl.string(o.t.XKYej4);
        case s.Skl.UNKNOWN:
        default:
            return null;
    }
}
function y(e, t) {
    let { maxDaysOld: n, minDaysOld: i = 0 } = t;
    if (null == e) return !1;
    let r = Date.now() - e.createdAt.getTime(),
        a = null == n || r <= l * n,
        s = r >= l * i;
    return !!a && !!s;
}
function I(e) {
    return !y(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function T(e) {
    return y(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function b(e, t, n) {
    if (null == e) return o.intl.string(o.t.sKdZ6e);
    if (!_(e.username)) return u;
    let i = n;
    if (('always' === t.identifiable ? (i = !1) : 'never' === t.identifiable && (i = !0), '0' !== e.discriminator && e.discriminator !== s.fo$ && !t.forcePomelo)) return 'username' === t.mode ? e.username : i ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let r = i ? c(e.username) : e.username;
    return 'never' !== t.decoration ? d(r) : r;
}
function S(e, t) {
    let n = {
            ...f,
            ...t
        },
        i = 'auto' !== n.identifiable || r.Z.hidePersonalInformation;
    return b(e, n, i);
}
function A(e) {
    return (0, i.e7)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
let N = {
    getName: h,
    useName: m,
    isNameConcealed: (e) => 4 === e.length && e.endsWith('...'),
    getUserTag: S,
    useUserTag: function (e, t) {
        return b(
            e,
            {
                ...f,
                ...t
            },
            (0, i.e7)([r.Z], () => r.Z.hidePersonalInformation)
        );
    },
    getFormattedName: E,
    getGlobalName: g,
    humanizeStatus: v,
    useDirectMessageRecipient: A
};
