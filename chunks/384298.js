n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(287734),
    s = n(359110),
    l = n(922482),
    c = n(496675),
    u = n(979651),
    d = n(652853),
    f = n(475413),
    _ = n(228168),
    p = n(981631),
    h = n(388032);
function m(e) {
    let { channel: t, onAction: n, onClose: m } = e,
        { themeType: g } = (0, d.z)(),
        E = (0, i.e7)([u.Z], () => u.Z.isInChannel(t.id));
    if (!(0, i.e7)([c.Z], () => t.isPrivate() || c.Z.can(p.Plq.CONNECT, t))) return null;
    let b = () => (g === _.lY.MODAL || g === _.lY.MODAL_V2 ? h.intl.string(h.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t['7hwn2N']) : t.isGuildStageVoice() ? h.intl.string(h.t.Acqcoq) : h.intl.string(h.t.BXxdl5)),
        y = () => (g === _.lY.MODAL || g === _.lY.MODAL_V2 ? h.intl.string(h.t.VJlc0d) : t.isDM() || t.isGroupDM() ? h.intl.string(h.t.ozoE2N) : t.isGuildStageVoice() ? h.intl.string(h.t['7vb2cX']) : h.intl.string(h.t['96ANUF'])),
        O = (e) => {
            e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, l.Cq)(t) : (a.default.selectVoiceChannel(t.id), (0, s.Kh)(t.id)), null == m || m();
        };
    return g === _.lY.MODAL_V2
        ? (0, r.jsx)(f.tG, {
              text: E ? b() : y(),
              size: o.PhG.TINY,
              themeColor: 'secondary',
              onClick: O
          })
        : (0, r.jsx)(f.tG, {
              text: E ? b() : y(),
              themeColor: E ? 'secondary' : 'primary',
              fullWidth: !0,
              onClick: O
          });
}
