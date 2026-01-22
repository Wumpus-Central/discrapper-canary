n.r(l),
    n.d(l, {
        default: () => o,
    }),
    n(747238);
var t = n(627968);
n(64700);
var u = n(492462),
    i = n(960488),
    a = n(311907),
    r = n(956793),
    d = n(976860),
    s = n(734057),
    c = n(650048),
    h = n(837921),
    p = n(652215);
a.Ay.initialize();
let o = (e) => {
    var l;
    let { location: n } = e;
    return (0, t.jsx)(i.rd, {
        to:
            null !=
            (l = (function e(l) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    t = s.A.getChannel(l);
                if (null != t) {
                    h.Ay.focus();
                    let e = t.guild_id,
                        l = t.id;
                    return (
                        t.type === p.rbe.GUILD_VOICE &&
                            (null != t.getGuildId() && r.default.selectVoiceChannel(t.id), (l = e)),
                        null != l && null != e ? p.BVt.CHANNEL(e, l) : null
                    );
                }
                if (n) {
                    let n = () => {
                        s.A.removeChangeListener(n);
                        let t = e(l, !1);
                        null != t && (0, d.pX)(t);
                    };
                    s.A.addChangeListener(n);
                }
                return null;
            })((0, u.parse)(n.search).channelId))
                ? l
                : c.A.fallbackRoute,
    });
};
