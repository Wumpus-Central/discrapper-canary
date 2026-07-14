"use strict";
n.d(t, { CN: () => E, Kk: () => _, Lx: () => A, Tb: () => c, fO: () => I, iY: () => h, xo: () => u });
var i = n(95561),
    r = n(89381),
    a = n(885386),
    s = n(919638),
    l = n(71393),
    o = n(625494),
    d = n(652215);
function c() {
    let e = a.$s.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function u() {
    let e = a.Zr.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function _() {
    let e = a.JG.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
}
function E() {
    let e = a.pE.getSetting();
    return 0 === s.A.totalUnavailableGuilds && (e = e.filter((e) => null != l.A.getGuild(e))), new Set(e);
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
function I(e) {
    o._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e);
}
n(375708);
