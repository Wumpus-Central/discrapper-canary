n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(287734),
    s = n(359110),
    o = n(922482),
    l = n(496675),
    u = n(979651),
    c = n(652853),
    d = n(475413),
    f = n(228168),
    _ = n(981631),
    p = n(388032);
function h(e) {
    let { channel: t, onAction: n, onClose: h } = e,
        { profileType: m } = (0, c.z)(),
        g = (0, r.e7)([u.Z], () => u.Z.isInChannel(t.id)),
        E = (0, r.e7)([l.Z], () => l.Z.canBasicChannel(_.S7T.CONNECT, t)),
        v = t.isGuildStageVoice();
    if (!E) return null;
    let y = () => (g && m === f.y0.FULL_SIZE ? p.intl.string(p.t['3xjX0d']) : g ? p.intl.string(p.t.iOqmAQ) : m === f.y0.FULL_SIZE ? p.intl.string(p.t.VJlc0d) : p.intl.string(p.t['96ANUF'])),
        I = () => (g && m === f.y0.FULL_SIZE ? p.intl.string(p.t['3xjX0d']) : g ? p.intl.string(p.t.g6pBAg) : m === f.y0.FULL_SIZE ? p.intl.string(p.t.VJlc0d) : p.intl.string(p.t['7vb2cX']));
    return (0, i.jsx)(d.tG, {
        text: v ? I() : y(),
        themeColor: g ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: () => {
            null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), v ? (0, o.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == h || h();
        }
    });
}
