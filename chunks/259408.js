r.d(t, { Z: () => f });
var n = r(544891),
    s = r(933557),
    i = r(430824),
    o = r(131951),
    a = r(699516),
    c = r(594174),
    l = r(927923),
    d = r(981631),
    u = r(388032);
function f(e, t) {
    var r;
    let { nonce: f, forQRCode: p } = t,
        m = e.getGuildId(),
        h = i.Z.getGuild(m),
        b = (0, l.Lc)({
            guildId: null != m ? m : d.aIL,
            channelId: e.id,
            channelName: (0, s.F6)(e, c.default, a.Z),
            guildName: null != (r = null == h ? void 0 : h.name) ? r : u.intl.string(u.t.LJpTRE),
            muted: o.Z.isSelfMute(),
            deafened: o.Z.isSelfDeaf(),
            nonce: f,
        });
    return p
        ? ""
              .concat((0, n.K0)())
              .concat(d.ANM.XBOX_HANDOFF, "?")
              .concat(b.toString())
        : "".concat(l.bJ, "?").concat(b.toString());
}
