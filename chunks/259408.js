t.d(r, { Z: () => m });
var n = t(544891),
    a = t(933557),
    s = t(430824),
    o = t(131951),
    i = t(699516),
    c = t(594174),
    l = t(927923),
    d = t(981631),
    u = t(388032);
function m(e, r) {
    var t;
    let { nonce: m, forQRCode: x } = r,
        f = e.getGuildId(),
        _ = s.Z.getGuild(f),
        C = (0, l.Lc)({
            guildId: null != f ? f : d.aIL,
            channelId: e.id,
            channelName: (0, a.F6)(e, c.default, i.Z),
            guildName: null !== (t = null == _ ? void 0 : _.name) && void 0 !== t ? t : u.intl.string(u.t.LJpTRE),
            muted: o.Z.isSelfMute(),
            deafened: o.Z.isSelfDeaf(),
            nonce: m
        });
    return x
        ? ''
              .concat((0, n.K0)())
              .concat(d.ANM.XBOX_HANDOFF, '?')
              .concat(C.toString())
        : ''.concat(l.bJ, '?').concat(C.toString());
}
