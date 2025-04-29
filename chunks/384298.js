n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(657707),
    o = n(442837),
    a = n(481060),
    s = n(475179),
    l = n(287734),
    c = n(359110),
    u = n(922482),
    d = n(496675),
    f = n(979651),
    _ = n(387082),
    p = n(652853),
    h = n(475413),
    m = n(228168),
    g = n(981631),
    E = n(388032),
    b = n(227832);
function y(e) {
    let { channel: t, onAction: n, onClose: y } = e,
        { themeType: O } = (0, p.z)(),
        v = (0, o.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        I = (0, o.e7)([d.Z], () => t.isPrivate() || d.Z.can(g.Plq.CONNECT, t)),
        { chatButtonEnabled: S } = (0, _.s)({ location: 'UserProfileActivityVoiceChannelButtons' });
    if (!I) return null;
    let T = () => (O === m.lY.MODAL || O === m.lY.MODAL_V2 ? E.intl.string(E.t['3xjX0d']) : t.isDM() || t.isGroupDM() ? E.intl.string(E.t['7hwn2N']) : t.isGuildStageVoice() ? E.intl.string(E.t.Acqcoq) : E.intl.string(E.t.BXxdl5)),
        A = () => (O === m.lY.MODAL || O === m.lY.MODAL_V2 ? E.intl.string(E.t.VJlc0d) : t.isDM() || t.isGroupDM() ? E.intl.string(E.t.ozoE2N) : t.isGuildStageVoice() ? E.intl.string(E.t['7vb2cX']) : E.intl.string(E.t['96ANUF'])),
        N = (e) => {
            e.stopPropagation(), null == n || n({ action: 'PRESS_JOIN_CALL_BUTTON' }), t.isGuildStageVoice() ? (0, u.Cq)(t) : (l.default.selectVoiceChannel(t.id), (0, c.Kh)(t.id)), null == y || y();
        },
        C = (e) => {
            e.stopPropagation(), null == n || n({ action: 'OPEN_VOICE_CHAT' }), s.Z.updateChatOpen(t.id, !0), (0, c.Kh)(t.id), null == y || y();
        };
    return O === m.lY.MODAL_V2
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.tG, {
                      text: v ? T() : A(),
                      size: a.PhG.TINY,
                      themeColor: 'secondary',
                      onClick: N
                  }),
                  S &&
                      t.isGuildVocal() &&
                      (0, r.jsx)(h.ef, {
                          icon: i.kBi,
                          tooltipText: v ? E.intl.string(E.t.kkKapK) : E.intl.string(E.t.ZXxLQk),
                          className: b.tinyIconButton,
                          innerClassName: b.tinyIconButtonInner,
                          themeColor: 'secondary',
                          onClick: C
                      })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h.tG, {
                      text: v ? T() : A(),
                      themeColor: v ? 'secondary' : 'primary',
                      fullWidth: !0,
                      onClick: N
                  }),
                  S &&
                      t.isGuildVocal() &&
                      (0, r.jsx)(h.ef, {
                          icon: i.kBi,
                          tooltipText: v ? E.intl.string(E.t.kkKapK) : E.intl.string(E.t.ZXxLQk),
                          themeColor: v ? 'secondary' : 'primary',
                          onClick: C
                      })
              ]
          });
}
