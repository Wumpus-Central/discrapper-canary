n.d(t, { T: () => a });
var i = n(158954),
    s = n(754333),
    l = n(985018);
function a(e, t) {
    let n = e.client_info?.location ?? e.client_info?.ip,
        a = e.client_info?.platform,
        { text: r, icon: o } = (function (e) {
            switch (e?.toLowerCase().trim()) {
                case null:
                case void 0:
                case "":
                    return { text: l.intl.string(l.t.cDHCNY), icon: i.kN9 };
                case "ios":
                case "android":
                    return { text: e, icon: i.u6o };
                case "horizon os":
                    return { text: e, icon: i.G47 };
                default:
                    return { text: e, icon: i.kN9 };
            }
        })(e.client_info?.os);
    return { location: n, platform: a, os: r, Icon: o, lastActive: t ? null : (0, s.Y)(e.approx_last_used_time) };
}
