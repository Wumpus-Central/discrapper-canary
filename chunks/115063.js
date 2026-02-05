n.d(t, { CN: () => m, Kk: () => _, Lx: () => A, Oj: () => g, Tb: () => d, fO: () => h, iY: () => E, xo: () => u });
var i = n(58149),
    s = n(253932),
    r = n(919638),
    a = n(71393),
    l = n(203982),
    o = n(652215);
n(985018);
let c = 864e5 * o.n83;
function d() {
    let e = s.$s.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != a.A.getGuild(e))), new Set(e);
}
function u() {
    let e = s.Zr.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != a.A.getGuild(e))), new Set(e);
}
function _() {
    let e = s.JG.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != a.A.getGuild(e))), new Set(e);
}
function m() {
    let e = s.pE.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != a.A.getGuild(e))), new Set(e);
}
function A(e) {
    return (e & o.yKI) === o.yKI
        ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
        : {
              all: !1,
              mutualFriends: (e & o.dzt.MUTUAL_FRIENDS) === o.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & o.dzt.MUTUAL_GUILDS) === o.dzt.MUTUAL_GUILDS,
          };
}
function g(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
function E(e) {
    let { destinationPane: t, originPane: n, source: s, subsection: r, locationStack: a, applicationId: l } = e;
    i.Ay.trackWithMetadata(o.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: a,
        source: s,
        subsection: r,
        application_id: l,
    });
}
function h(e) {
    l._.dispatch(o.jej.SHAKE_SETTINGS_MODAL, e);
}
