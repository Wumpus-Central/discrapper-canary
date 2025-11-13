e.d(n, { Z: () => Z });
var i = e(951288),
    a = e(647438),
    l = e(392711),
    r = e.n(l),
    s = e(442837),
    o = e(481060),
    d = e(475179),
    u = e(358221),
    c = e(66999),
    h = e(665906),
    f = e(979651),
    g = e(557135),
    v = e(388032);
function Z(t) {
    let n = (0, h.Y)(t),
        e = (0, s.e7)([f.Z], () => f.Z.isInChannel(t.id)),
        l = (0, s.e7)([f.Z], () => !r().isEmpty(f.Z.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: Z } = (0, c.Z)(t.id),
        m = (0, s.e7)([u.Z], () => u.Z.getChatOpen(t.id)),
        b = a.useCallback(() => {
            g.Z.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: Z,
                locked: !1,
            });
        }, [t, e, Z]);
    return e || !n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.sNh, {
                      id: "join-thread-voice",
                      label: l ? v.intl.string(v.t["0D/6Rz"]) : v.intl.string(v.t.My50nf),
                      action: b,
                  }),
                  l &&
                      !m &&
                      (0, i.jsx)(o.sNh, {
                          id: "open-chat",
                          label: v.intl.string(v.t.ZXxLQg),
                          action: () => {
                              d.Z.updateChatOpen(t.id, !0);
                          },
                      }),
              ],
          });
}
