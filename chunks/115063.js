n.d(t, { CN: () => g, Kk: () => A, Lx: () => E, Oj: () => I, Tb: () => c, fO: () => p, iY: () => h, xo: () => u });
var i = n(58149),
    r = n(324593),
    a = n(253932),
    s = n(919638),
    l = n(71393),
    o = n(203982),
    d = n(652215);
n(985018);
let _ = 864e5 * d.n83;
function c() {
    let e = a.$s.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function u() {
    let e = a.Zr.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function A() {
    let e = a.JG.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function g() {
    let e = a.pE.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function E(e) {
    return (e & d.yKI) === d.yKI
        ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
        : {
              all: !1,
              mutualFriends: (e & d.dzt.MUTUAL_FRIENDS) === d.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & d.dzt.MUTUAL_GUILDS) === d.dzt.MUTUAL_GUILDS,
          };
}
function I(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && _ > Date.now() - new Date(e.created_at).getTime());
}
function h(e) {
    let { destinationPane: t, originPane: n, source: a, subsection: s, locationStack: l, applicationId: o } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: l,
        source: a,
        subsection: s,
        application_id: o,
        search_session_id: r.A.getSearchSessionId(),
    });
}
function p(e) {
    o._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e);
}
