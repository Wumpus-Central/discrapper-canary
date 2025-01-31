n.d(t, {
    CG: () => c,
    OY: () => E,
    SG: () => g,
    T1: () => f,
    i9: () => u,
    kk: () => d,
    lk: () => p,
    pQ: () => l,
    sN: () => m,
    sO: () => _,
    ur: () => h
}),
    n(653041);
var i = n(913527),
    r = n.n(i),
    a = n(666657),
    s = n(676770),
    o = n(388032);
let l = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
function u(e) {
    return (null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.lp, 'hours') > r()()) || (null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.lp, 'hours') > r()());
}
function c(e) {
    return null != e.raidDetectedAt && r()(e.raidDetectedAt).add(s.lp, 'hours') > r()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && r()(e.dmSpamDetectedAt).add(s.lp, 'hours') > r()();
}
function f(e) {
    return null == e ? void 0 : c(e) ? a.Hl.JOIN_RAID : a.Hl.DM_RAID;
}
function _(e, t) {
    let n = [];
    return e && n.push(a.dj.INVITES_DISABLED), t && n.push(a.dj.DMS_DISABLED), n;
}
function p(e, t) {
    let n = [];
    return e || n.push(a.dj.INVITES_DISABLED), t || n.push(a.dj.DMS_DISABLED), n;
}
function h(e) {
    return (null != e.dmsDisabledUntil && new Date(e.dmsDisabledUntil) > new Date()) || (null != e.invitesDisabledUntil && new Date(e.invitesDisabledUntil) > new Date());
}
function m(e) {
    return (null == e ? void 0 : e.dmsDisabledUntil) != null && new Date(e.dmsDisabledUntil) > new Date();
}
function g(e) {
    return (null == e ? void 0 : e.invitesDisabledUntil) != null && new Date(e.invitesDisabledUntil) > new Date();
}
function E(e, t) {
    var n;
    let i = null !== (n = e.dmsDisabledUntil) && void 0 !== n ? n : e.invitesDisabledUntil;
    if (null == i) return '';
    let r = null != e.dmsDisabledUntil,
        a = null != e.invitesDisabledUntil;
    switch (!0) {
        case r && a:
            return o.intl.formatToPlainString(o.t.hCZitb, {
                guildName: t,
                time: new Date(i).toLocaleString(o.intl.currentLocale, l)
            });
        case r:
            return o.intl.formatToPlainString(o.t.HNKxf3, {
                guildName: t,
                time: new Date(i).toLocaleString(o.intl.currentLocale, l)
            });
        case a:
            return o.intl.formatToPlainString(o.t.M3iSyM, {
                guildName: t,
                time: new Date(i).toLocaleString(o.intl.currentLocale, l)
            });
        default:
            return '';
    }
}
