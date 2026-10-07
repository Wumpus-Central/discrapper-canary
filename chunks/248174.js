n.d(t, { A: () => _ });
var i = n(71393),
    r = n(474090),
    a = n(158045),
    s = n(240921),
    l = n(753070);
let o = { maxBitrate: null, maxResolution: null, maxFPS: null, maskReportedQuality: !1 },
    d = { ...o, maxResolution: l.on.RESOLUTION_1080, maxFPS: l.kn.FPS_30 },
    c = (0, s.Ay)({
        name: "2026-05-frontier-tuning",
        kind: "guild",
        defaultConfig: o,
        variations: {
            1: { ...d, maxBitrate: 35e5, maskReportedQuality: !0 },
            2: { ...d, maxBitrate: 5e6, maskReportedQuality: !0 },
            3: { ...d, maxBitrate: 35e5 },
            4: { ...d, maxBitrate: 5e6 },
        },
    });
var u = n(652215);
function _(e, t, n) {
    if (
        null == n ||
        i.A.getGuild(n)?.premiumTier !== u.TVA.NONE ||
        (0, r.ki)(t) ||
        a.Ay.canStreamQuality(a.Ay.StreamQuality.MID, t)
    )
        return null;
    let s = c.getConfig({ location: e, guildId: n });
    return null != s.maxBitrate ? s : null;
}
