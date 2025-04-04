n.d(t, {
    CG: () => u,
    OY: () => E,
    SG: () => g,
    T1: () => f,
    i9: () => c,
    kk: () => d,
    lk: () => p,
    pQ: () => l,
    sN: () => m,
    sO: () => _,
    ur: () => h
}),
    n(653041);
var r = n(913527),
    i = n.n(r),
    o = n(666657),
    a = n(676770),
    s = n(388032);
let l = {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
};
function c(e) {
    return (null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.lp, 'hours') > i()()) || (null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.lp, 'hours') > i()());
}
function u(e) {
    return null != e.raidDetectedAt && i()(e.raidDetectedAt).add(a.lp, 'hours') > i()();
}
function d(e) {
    return null != e.dmSpamDetectedAt && i()(e.dmSpamDetectedAt).add(a.lp, 'hours') > i()();
}
function f(e) {
    return null == e ? void 0 : u(e) ? o.Hl.JOIN_RAID : o.Hl.DM_RAID;
}
function _(e, t) {
    let n = [];
    return e && n.push(o.dj.INVITES_DISABLED), t && n.push(o.dj.DMS_DISABLED), n;
}
function p(e, t) {
    let n = [];
    return e || n.push(o.dj.INVITES_DISABLED), t || n.push(o.dj.DMS_DISABLED), n;
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
    let r = null != (n = e.dmsDisabledUntil) ? n : e.invitesDisabledUntil;
    if (null == r) return '';
    let i = null != e.dmsDisabledUntil,
        o = null != e.invitesDisabledUntil;
    switch (!0) {
        case i && o:
            return s.NW.formatToPlainString(s.t.hCZitb, {
                guildName: t,
                time: new Date(r).toLocaleString(s.NW.currentLocale, l)
            });
        case i:
            return s.NW.formatToPlainString(s.t.HNKxf3, {
                guildName: t,
                time: new Date(r).toLocaleString(s.NW.currentLocale, l)
            });
        case o:
            return s.NW.formatToPlainString(s.t.M3iSyM, {
                guildName: t,
                time: new Date(r).toLocaleString(s.NW.currentLocale, l)
            });
        default:
            return '';
    }
}
