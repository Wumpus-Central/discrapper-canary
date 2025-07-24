n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(755721),
    o = n(287734),
    s = n(622822),
    l = n(359110),
    c = n(922482),
    u = n(496675),
    d = n(979651),
    _ = n(652853),
    f = n(475413),
    p = n(228168),
    h = n(981631),
    m = n(388032);
function g(e) {
    let { channel: t, onAction: n, onClose: g } = e,
        { themeType: E } = (0, _.z)(),
        b = (0, i.e7)([d.Z], () => d.Z.isInChannel(t.id));
    if (
        !(0, i.e7)([u.Z], () => {
            let e = (0, s.dl)() && (0, s.zd)(t.id);
            return (t.isPrivate() || u.Z.can(h.Plq.CONNECT, t)) && !e;
        })
    )
        return null;
    let y = () => (E === p.lY.MODAL || E === p.lY.MODAL_V2 ? m.intl.string(m.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t['7hwn2N']) : t.isGuildStageVoice() ? m.intl.string(m.t.Acqcoq) : m.intl.string(m.t.BXxdl5)),
        O = () => (E === p.lY.MODAL || E === p.lY.MODAL_V2 ? m.intl.string(m.t.VJlc0d) : t.isDM() || t.isGroupDM() ? m.intl.string(m.t.ozoE2N) : t.isGuildStageVoice() ? m.intl.string(m.t['7vb2cX']) : m.intl.string(m.t['96ANUF'])),
        v = (e) => {
            (e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, c.Cq)(t) : (o.default.selectVoiceChannel(t.id), (0, l.Kh)(t.id)), null == g || g());
        };
    return E === p.lY.MODAL_V2
        ? (0, r.jsx)(f.tG, {
              text: b ? y() : O(),
              size: a.Ph.TINY,
              themeColor: 'secondary',
              onClick: v
          })
        : (0, r.jsx)(f.tG, {
              text: b ? y() : O(),
              themeColor: 'secondary',
              fullWidth: !0,
              onClick: v
          });
}
