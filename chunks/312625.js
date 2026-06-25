n.r(l), n.d(l, { default: () => p });
var t = n(627968);
n(64700);
var i = n(492462),
    u = n(873263),
    a = n(17928),
    d = n(730852),
    r = n(976860),
    s = n(734057),
    c = n(650048),
    h = n(19575),
    o = n(652215);
a.Ay.initialize();
let p = function (e) {
    let { match: l, location: n } = e,
        a = l.params.channelId,
        p = (0, i.parse)(n.search).messageId;
    return (0, t.jsx)(u.rd, {
        to:
            (function e(l, n) {
                let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = s.A.getChannel(l);
                if (null != i) {
                    h.Ay.focus();
                    let e = i.guild_id,
                        l = i.id,
                        t = n;
                    return (
                        i.type === o.rbe.GUILD_VOICE &&
                            (null != i.getGuildId() && d.default.selectVoiceChannel(i.id), (l = e), (t = void 0)),
                        null != l && null != e ? o.BVt.CHANNEL(e, l, t) : null
                    );
                }
                return (
                    t &&
                        s.A.addChangeListener(function t() {
                            s.A.removeChangeListener(t);
                            let i = e(l, n, !1);
                            null != i && (0, r.pX)(i);
                        }),
                    null
                );
            })(a, p) ?? c.A.fallbackRoute,
    });
};
