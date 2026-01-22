r.d(t, { A: () => u });
var n = r(562465),
    s = r(47167),
    a = r(71393),
    i = r(430452),
    l = r(994500),
    o = r(287809),
    c = r(544105),
    f = r(652215),
    d = r(985018);
function u(e, t) {
    var r;
    let { nonce: u, forQRCode: p } = t,
        b = e.getGuildId(),
        m = a.A.getGuild(b),
        g = (0, c.hw)({
            guildId: null != b ? b : f.D0I,
            channelId: e.id,
            channelName: (0, s.m1)(e, o.default, l.A),
            guildName: null != (r = null == m ? void 0 : m.name) ? r : d.intl.string(d.t.LJpTRF),
            muted: i.A.isSelfMute(),
            deafened: i.A.isSelfDeaf(),
            nonce: u,
        });
    return p
        ? ""
              .concat((0, n.TP)())
              .concat(f.Rsh.XBOX_HANDOFF, "?")
              .concat(g.toString())
        : "".concat(c.Gp, "?").concat(g.toString());
}
