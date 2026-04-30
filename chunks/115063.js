i.d(t, { CN: () => _, Kk: () => h, Lx: () => E, Oj: () => T, Tb: () => c, fO: () => I, iY: () => A, xo: () => o });
var s = i(58149),
    n = i(89381),
    a = i(253932),
    r = i(919638),
    l = i(71393),
    u = i(625494),
    d = i(652215);
i(985018);
let S = 864e5 * d.n83;
function c() {
    let e = a.$s.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function o() {
    let e = a.Zr.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function h() {
    let e = a.JG.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function _() {
    let e = a.pE.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
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
function T(e, t) {
    return !!(!t.verified || t.isStaff()) || (null != e && S > Date.now() - new Date(e.created_at).getTime());
}
function A(e) {
    let { destinationPane: t, originPane: i, source: a, subsection: r, locationStack: l, applicationId: u } = e;
    s.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: i,
        destination_pane: t,
        location_stack: l,
        source: a,
        subsection: r,
        application_id: u,
        search_session_id: n.A.getSearchSessionId(),
    });
}
function I(e) {
    u._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e);
}
