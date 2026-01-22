n.d(t, {
    CN: () => p,
    Kk: () => f,
    Lx: () => _,
    Oj: () => h,
    Tb: () => u,
    fO: () => g,
    iY: () => m,
    xo: () => d,
}),
    n(896048);
var r = n(58149),
    i = n(253932),
    a = n(919638),
    s = n(71393),
    o = n(203982),
    l = n(652215);
n(985018);
let c = 86400000 * l.n83;
function u() {
    let e = i.$s.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != s.A.getGuild(e))), new Set(e);
}
function d() {
    let e = i.Zr.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != s.A.getGuild(e))), new Set(e);
}
function f() {
    let e = i.JG.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != s.A.getGuild(e))), new Set(e);
}
function p() {
    let e = i.pE.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != s.A.getGuild(e))), new Set(e);
}
function _(e) {
    return (e & l.yKI) === l.yKI
        ? {
              all: !0,
              mutualFriends: !0,
              mutualGuilds: !0,
          }
        : {
              all: !1,
              mutualFriends: (e & l.dzt.MUTUAL_FRIENDS) === l.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & l.dzt.MUTUAL_GUILDS) === l.dzt.MUTUAL_GUILDS,
          };
}
function h(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
function m(e) {
    let { destinationPane: t, originPane: n, source: i, subsection: a, locationStack: s, applicationId: o } = e;
    r.Ay.trackWithMetadata(l.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: s,
        source: i,
        subsection: a,
        application_id: o,
    });
}
function g(e) {
    o._.dispatch(l.jej.SHAKE_SETTINGS_MODAL, e);
}
