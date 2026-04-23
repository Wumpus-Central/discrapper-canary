n.d(t, { T: () => o });
var i = n(31300),
    s = n(646270),
    l = n(738678),
    a = n(754333),
    r = n(985018);
function o(e, t) {
    let n = e.client_info?.location ?? e.client_info?.ip,
        o = e.client_info?.platform,
        { text: d, icon: u } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: r.intl.string(r.t.cDHCNY), icon: i.k };
                case "ios":
                case "android":
                    return { text: e, icon: s.u };
                case "horizon os":
                    return { text: e, icon: l.G };
                default:
                    return { text: e, icon: i.k };
            }
        })(e.client_info?.os);
    return { location: n, platform: o, os: d, Icon: u, lastActive: t ? null : (0, a.Y)(e.approx_last_used_time) };
}
