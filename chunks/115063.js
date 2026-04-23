n.d(t, { CN: () => h, Kk: () => g, Lx: () => A, Oj: () => p, Tb: () => _, fO: () => E, iY: () => I, xo: () => u });
var i = n(58149),
    r = n(89381),
    s = n(253932),
    l = n(919638),
    o = n(71393),
    a = n(625494),
    d = n(652215);
n(985018);
let c = 864e5 * d.n83;
function _() {
    let e = s.$s.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function u() {
    let e = s.Zr.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function g() {
    let e = s.JG.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function h() {
    let e = s.pE.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function A(e) {
    return (e & d.yKI) === d.yKI
        ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
        : {
              all: !1,
              mutualFriends: (e & d.dzt.MUTUAL_FRIENDS) === d.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & d.dzt.MUTUAL_GUILDS) === d.dzt.MUTUAL_GUILDS,
          };
}
function p(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && c > Date.now() - new Date(e.created_at).getTime());
}
function I(e) {
    let { destinationPane: t, originPane: n, source: s, subsection: l, locationStack: o, applicationId: a } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: s,
        subsection: l,
        application_id: a,
        search_session_id: r.A.getSearchSessionId(),
    });
}
function E(e) {
    a._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e);
}
