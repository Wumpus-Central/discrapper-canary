n.d(t, { CN: () => E, Kk: () => A, Lx: () => I, Oj: () => h, Tb: () => u, fO: () => C, iY: () => g, xo: () => _ });
var i = n(58149),
    l = n(324593),
    r = n(253932),
    s = n(919638),
    o = n(71393),
    a = n(203982),
    d = n(652215);
n(985018);
let c = 864e5 * d.n83;
function u() {
    let e = r.$s.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function _() {
    let e = r.Zr.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function A() {
    let e = r.JG.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function E() {
    let e = r.pE.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function I(e) {
    return (e & d.yKI) === d.yKI
        ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
        : {
              all: !1,
              mutualFriends: (e & d.dzt.MUTUAL_FRIENDS) === d.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & d.dzt.MUTUAL_GUILDS) === d.dzt.MUTUAL_GUILDS,
          };
}
function h(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
function g(e) {
    let { destinationPane: t, originPane: n, source: r, subsection: s, locationStack: o, applicationId: a } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: r,
        subsection: s,
        application_id: a,
        search_session_id: l.A.getSearchSessionId(),
    });
}
function C(e) {
    a._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e);
}
