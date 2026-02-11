"use strict";
s.d(t, { A: () => p });
var r = s(562465),
    i = s(47167),
    n = s(71393),
    a = s(430452),
    o = s(994500),
    l = s(287809),
    c = s(544105),
    d = s(652215),
    u = s(985018);
function p(e, t) {
    let { nonce: s, forQRCode: p } = t,
        f = e.getGuildId(),
        m = n.A.getGuild(f),
        _ = (0, c.hw)({
            guildId: f ?? d.D0I,
            channelId: e.id,
            channelName: (0, i.m1)(e, l.default, o.A),
            guildName: m?.name ?? u.intl.string(u.t.LJpTRF),
            muted: a.Ay.isSelfMute(),
            deafened: a.Ay.isSelfDeaf(),
            nonce: s,
        });
    return p ? `${(0, r.TP)()}${d.Rsh.XBOX_HANDOFF}?${_.toString()}` : `${c.Gp}?${_.toString()}`;
}
