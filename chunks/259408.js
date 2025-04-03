t.d(r, { Z: () => m });
var n = t(544891),
    a = t(933557),
    s = t(430824),
    o = t(131951),
    c = t(699516),
    l = t(594174),
    i = t(927923),
    d = t(981631),
    u = t(388032);
function m(e, r) {
    var t;
    let { nonce: m, forQRCode: f } = r,
        x = e.getGuildId(),
        p = s.Z.getGuild(x),
        _ = (0, i.Lc)({
            guildId: null != x ? x : d.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, l.default, c.Z),
            guildName: null != (t = null == p ? void 0 : p.name) ? t : u.NW.string(u.t.LJpTRE),
            muted: o.Z.isSelfMute(),
            deafened: o.Z.isSelfDeaf(),
            nonce: m
        });
    return f
        ? ''
              .concat((0, n.K0)())
              .concat(d.ANM.XBOX_HANDOFF, '?')
              .concat(_.toString())
        : ''.concat(i.bJ, '?').concat(_.toString());
}
