t.r(l), t.d(l, { default: () => o });
var n = t(627968);
t(64700);
var i = t(492462),
    u = t(873263),
    a = t(17928),
    r = t(956793),
    d = t(976860),
    s = t(734057),
    c = t(650048),
    h = t(19575),
    p = t(652215);
a.Ay.initialize();
let o = (e) => {
    let { location: l } = e;
    return (0, n.jsx)(u.rd, {
        to:
            (function e(l) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = s.A.getChannel(l);
                if (null != n) {
                    h.Ay.focus();
                    let e = n.guild_id,
                        l = n.id;
                    return (
                        n.type === p.rbe.GUILD_VOICE &&
                            (null != n.getGuildId() && r.default.selectVoiceChannel(n.id), (l = e)),
                        null != l && null != e ? p.BVt.CHANNEL(e, l) : null
                    );
                }
                if (t) {
                    let t = () => {
                        s.A.removeChangeListener(t);
                        let n = e(l, !1);
                        null != n && (0, d.pX)(n);
                    };
                    s.A.addChangeListener(t);
                }
                return null;
            })((0, i.parse)(l.search).channelId) ?? c.A.fallbackRoute,
    });
};
