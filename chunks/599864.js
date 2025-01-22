r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(287734),
    s = r(359110),
    l = r(922482),
    u = r(496675),
    c = r(979651),
    d = r(652853),
    f = r(475413),
    p = r(228168),
    h = r(981631),
    _ = r(388032);
function m(e) {
    let { channel: n, onAction: r, onClose: m } = e,
        { profileType: g } = (0, d.z)(),
        E = (0, a.e7)([c.Z], () => c.Z.isInChannel(n.id)),
        v = (0, a.e7)([u.Z], () => u.Z.canBasicChannel(h.S7T.CONNECT, n)),
        y = n.isGuildStageVoice();
    if (!v) return null;
    let b = () => (E && g === p.y0.FULL_SIZE ? _.intl.string(_.t['3xjX0d']) : E ? _.intl.string(_.t.iOqmAQ) : g === p.y0.FULL_SIZE ? _.intl.string(_.t.VJlc0d) : _.intl.string(_.t['96ANUF'])),
        I = () => (E && g === p.y0.FULL_SIZE ? _.intl.string(_.t['3xjX0d']) : E ? _.intl.string(_.t.g6pBAg) : g === p.y0.FULL_SIZE ? _.intl.string(_.t.VJlc0d) : _.intl.string(_.t['7vb2cX']));
    return (0, i.jsx)(f.tG, {
        text: y ? I() : b(),
        themeColor: E ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: () => {
            null == r || r({ action: 'PRESS_JOIN_CALL_BUTTON' }), y ? (0, l.Cq)(n) : (o.default.selectVoiceChannel(n.id), (0, s.Kh)(n.id)), null == m || m();
        }
    });
}
