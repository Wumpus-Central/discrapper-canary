n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(287734),
    a = n(359110),
    s = n(922482),
    l = n(496675),
    c = n(979651),
    u = n(652853),
    d = n(475413),
    f = n(228168),
    p = n(981631),
    _ = n(388032);
function h(e) {
    let { channel: t, onAction: n, onClose: h } = e,
        { profileType: m } = (0, u.z)(),
        g = (0, i.e7)([c.Z], () => c.Z.isInChannel(t.id));
    if (!(0, i.e7)([l.Z], () => t.isPrivate() || l.Z.can(p.Plq.CONNECT, t))) return null;
    let E = () => (m === f.y0.FULL_SIZE ? _.NW.string(_.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? _.NW.string(_.t['7hwn2N']) : t.isGuildStageVoice() ? _.NW.string(_.t.Acqcoq) : _.NW.string(_.t.BXxdl5)),
        v = () => (m === f.y0.FULL_SIZE ? _.NW.string(_.t.VJlc0d) : t.isDM() || t.isGroupDM() ? _.NW.string(_.t.ozoE2N) : t.isGuildStageVoice() ? _.NW.string(_.t['7vb2cX']) : _.NW.string(_.t['96ANUF']));
    return (0, r.jsx)(d.tG, {
        text: g ? E() : v(),
        themeColor: g ? 'secondary' : 'primary',
        fullWidth: !0,
        onClick: (e) => {
            e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, s.Cq)(t) : (o.default.selectVoiceChannel(t.id), (0, a.Kh)(t.id)), null == h || h();
        }
    });
}
