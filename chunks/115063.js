"use strict";
n.d(t, { CN: () => f, Kk: () => _, Lx: () => h, Tb: () => c, fO: () => E, iY: () => p, xo: () => d });
var i = n(95561),
    r = n(89381),
    s = n(885386),
    a = n(919638),
    o = n(71393),
    l = n(625494),
    u = n(652215);
function c() {
    let e = s.$s.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function d() {
    let e = s.Zr.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function _() {
    let e = s.JG.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function f() {
    let e = s.pE.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter((e) => null != o.A.getGuild(e))), new Set(e);
}
function h(e) {
    return (e & u.yKI) === u.yKI
        ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
        : {
              all: !1,
              mutualFriends: (e & u.dzt.MUTUAL_FRIENDS) === u.dzt.MUTUAL_FRIENDS,
              mutualGuilds: (e & u.dzt.MUTUAL_GUILDS) === u.dzt.MUTUAL_GUILDS,
          };
}
function p(e) {
    let { destinationPane: t, originPane: n, source: s, subsection: a, locationStack: o, applicationId: l } = e;
    i.Ay.trackWithMetadata(u.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: o,
        source: s,
        subsection: a,
        application_id: l,
        search_session_id: r.A.getSearchSessionId(),
    });
}
function E(e) {
    l._.dispatch(u.jej.SHAKE_SETTINGS_MODAL, e);
}
n(375708);
