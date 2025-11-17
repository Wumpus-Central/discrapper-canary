n.d(t, { Z: () => p });
var r = n(54381),
    i = n(911969),
    a = n(627861),
    o = n(100527),
    s = n(906732),
    l = n(728345),
    c = n(973616),
    u = n(789407),
    d = n(616922);
function f(e) {
    return null != e.application
        ? c.ZP.createFromServer(e.application)
        : null != e.activity && null != e.activity.party_id && (0, d.Ps)(e.activity.party_id)
          ? u.r9
          : void 0;
}
function _(e) {
    var t;
    let n = null == e || null == (t = e.linkedGames) ? void 0 : t.find((e) => e.type === i.tE.OFFICIAL);
    return (0, l.IX)(null == n ? void 0 : n.id);
}
let p = (e) => {
    var t;
    let { channel: n, message: i, hideParty: c } = e,
        { analyticsLocations: u } = (0, s.ZP)(o.Z.INVITE_EMBED),
        d = f(i),
        { data: p } = (0, l.IX)(null == (t = i.application) ? void 0 : t.id),
        h = null != p ? p : d,
        { data: m } = _(h),
        g = null != m ? m : h;
    return null == g
        ? null
        : (0, r.jsx)(a.c, {
              app: g,
              channel: n,
              message: i,
              hideParty: c,
              analyticsLocations: u,
          });
};
