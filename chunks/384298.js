n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(755721),
    o = n(287734),
    s = n(359110),
    l = n(922482),
    c = n(496675),
    u = n(979651),
    d = n(652853),
    _ = n(475413),
    f = n(228168),
    p = n(981631),
    h = n(388032);
function m(e) {
    let { channel: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, d.z)(),
        E = (0, i.e7)([u.Z], () => u.Z.isInChannel(t.id));
    if (!(0, i.e7)([c.Z], () => t.isPrivate() || c.Z.can(p.Plq.CONNECT, t))) return null;
    let b = () => (g === f.lY.MODAL || g === f.lY.MODAL_V2 ? h.intl.string(h.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t['7hwn2N']) : t.isGuildStageVoice() ? h.intl.string(h.t.Acqcoq) : h.intl.string(h.t.BXxdl5)),
        y = () => (g === f.lY.MODAL || g === f.lY.MODAL_V2 ? h.intl.string(h.t.VJlc0d) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t.ozoE2N) : t.isGuildStageVoice() ? h.intl.string(h.t['7vb2cX']) : h.intl.string(h.t['96ANUF'])),
        O = (e) => {
            (e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, l.Cq)(t) : (o.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == m || m());
        };
    return g === f.lY.MODAL_V2
        ? (0, r.jsx)(_.tG, {
              text: E ? b() : y(),
              size: a.Ph.TINY,
              themeColor: 'secondary',
              onClick: O
          })
        : (0, r.jsx)(_.tG, {
              text: E ? b() : y(),
              themeColor: 'secondary',
              fullWidth: !0,
              onClick: O
          });
}
