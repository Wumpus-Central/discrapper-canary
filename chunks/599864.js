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
        g = (0, r.e7)([u.Z], () => u.Z.isInChannel(t.id));
    if (!(0, r.e7)([l.Z], () => t.isPrivate() || l.Z.can(_.Plq.CONNECT, t))) return null;
    let E = () => (m === f.y0.FULL_SIZE ? p.intl.string(p.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? p.intl.string(p.t['7hwn2N']) : t.isGuildStageVoice() ? p.intl.string(p.t.g6pBAg) : p.intl.string(p.t.iOqmAQ)),
        v = () => (m === f.y0.FULL_SIZE ? p.intl.string(p.t.VJlc0d) : t.isDM() || t.isGroupDM() ? p.intl.string(p.t.ozoE2N) : t.isGuildStageVoice() ? p.intl.string(p.t['7vb2cX']) : p.intl.string(p.t['96ANUF']));
    return (0, i.jsx)(d.tG, {
        text: g ? E() : v(),
        themeColor: g ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: (e) => {
            e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, o.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == h || h();
        }
    });
}
