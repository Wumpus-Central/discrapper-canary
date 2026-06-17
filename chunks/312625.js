n.r(l), n.d(l, { default: () => p });
var t = n(627968);
n(64700);
var u = n(492462),
    i = n(873263),
    a = n(17928),
    r = n(730852),
    d = n(976860),
    c = n(734057),
    s = n(650048),
    h = n(19575),
    o = n(652215);
a.Ay.initialize();
let p = function (e) {
    let { location: l } = e;
    return (0, t.jsx)(i.rd, {
        to:
            (function e(l) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = c.A.getChannel(l);
                if (null != t) {
                    h.Ay.focus();
                    let e = t.guild_id,
                        l = t.id;
                    return (
                        t.type === o.rbe.GUILD_VOICE &&
                            (null != t.getGuildId() && r.default.selectVoiceChannel(t.id), (l = e)),
                        null != l && null != e ? o.BVt.CHANNEL(e, l) : null
                    );
                }
                return (
                    n &&
                        c.A.addChangeListener(function n() {
                            c.A.removeChangeListener(n);
                            let t = e(l, !1);
                            null != t && (0, d.pX)(t);
                        }),
                    null
                );
            })((0, u.parse)(l.search).channelId) ?? s.A.fallbackRoute,
    });
};
