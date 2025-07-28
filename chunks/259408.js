r.d(t, { Z: () => f });
var n = r(544891),
    s = r(933557),
    i = r(430824),
    a = r(131951),
    c = r(699516),
    o = r(594174),
    l = r(927923),
    d = r(981631),
    u = r(388032);
function f(e, t) {
    var r;
    let { nonce: f, forQRCode: m } = t,
        p = e.getGuildId(),
        x = i.Z.getGuild(p),
        b = (0, l.Lc)({
            guildId: null != p ? p : d.aIL,
            channelId: e.id,
            channelName: (0, s.F6)(e, o.default, c.Z),
            guildName: null != (r = null == x ? void 0 : x.name) ? r : u.intl.string(u.t.LJpTRE),
            muted: a.Z.isSelfMute(),
            deafened: a.Z.isSelfDeaf(),
            nonce: f
        });
    return m
        ? ''
              .concat((0, n.K0)())
              .concat(d.ANM.XBOX_HANDOFF, '?')
              .concat(b.toString())
        : ''.concat(l.bJ, '?').concat(b.toString());
}
