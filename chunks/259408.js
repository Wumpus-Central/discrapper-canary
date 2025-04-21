r.d(t, { Z: () => m });
var n = r(544891),
    a = r(933557),
    s = r(430824),
    o = r(131951),
    c = r(699516),
    l = r(594174),
    i = r(927923),
    d = r(981631),
    u = r(388032);
function m(e, t) {
    var r;
    let { nonce: m, forQRCode: f } = t,
        x = e.getGuildId(),
        p = s.Z.getGuild(x),
        _ = (0, i.Lc)({
            guildId: null != x ? x : d.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, l.default, c.Z),
            guildName: null != (r = null == p ? void 0 : p.name) ? r : u.intl.string(u.t.LJpTRE),
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
