n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(657707),
    o = n(442837),
    a = n(475179),
    s = n(287734),
    l = n(359110),
    c = n(922482),
    u = n(496675),
    d = n(979651),
    f = n(387082),
    _ = n(652853),
    p = n(475413),
    h = n(228168),
    m = n(981631),
    g = n(388032);
function E(e) {
    let { channel: t, onAction: n, onClose: E } = e,
        { profileType: b } = (0, _.z)(),
        y = (0, o.e7)([d.Z], () => d.Z.isInChannel(t.id)),
        v = (0, o.e7)([u.Z], () => t.isPrivate() || u.Z.can(m.Plq.CONNECT, t)),
        { chatButtonEnabled: O } = (0, f.s)({ location: 'UserProfileActivityVoiceChannelButtons' });
    if (!v) return null;
    let I = () => (b === h.y0.FULL_SIZE ? g.NW.string(g.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? g.NW.string(g.t['7hwn2N']) : t.isGuildStageVoice() ? g.NW.string(g.t.Acqcoq) : g.NW.string(g.t.BXxdl5)),
        S = () => (b === h.y0.FULL_SIZE ? g.NW.string(g.t.VJlc0d) : t.isDM() || t.isGroupDM() ? g.NW.string(g.t.ozoE2N) : t.isGuildStageVoice() ? g.NW.string(g.t['7vb2cX']) : g.NW.string(g.t['96ANUF']));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.tG, {
                text: y ? I() : S(),
                themeColor: y ? 'secondary' : 'primary',
                fullWidth: !0,
                onClick: (e) => {
                    e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, c.Cq)(t) : (s.default.selectVoiceChannel(t.id), (0, l.Kh)(t.id)), null == E || E();
                }
            }),
            O &&
                t.isGuildVocal() &&
                (0, r.jsx)(p.ef, {
                    icon: i.kBi,
                    tooltipText: y ? g.NW.string(g.t.kkKapK) : g.NW.string(g.t.ZXxLQk),
                    themeColor: y ? 'secondary' : 'primary',
                    onClick: (e) => {
                        e.stopPropagation(), null == n || n({ action: 'OPEN_VOICE_CHAT' }), a.Z.updateChatOpen(t.id, !0), (0, l.Kh)(t.id), null == E || E();
                    }
                })
        ]
    });
}
