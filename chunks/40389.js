i.d(n, { A: () => m });
var e = i(627968),
    l = i(64700),
    r = i(735438),
    a = i.n(r),
    s = i(17928),
    d = i(477782),
    o = i(367513),
    u = i(313961),
    c = i(721592),
    A = i(406704),
    h = i(977997),
    g = i(262763),
    b = i(985018);
function m(t) {
    let n = (0, A._M)(t),
        i = (0, s.bG)([h.A], () => h.A.isInChannel(t.id)),
        r = (0, s.bG)([h.A], () => !a().isEmpty(h.A.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: m } = (0, c.A)(t.id),
        f = (0, s.bG)([u.A], () => u.A.getChatOpen(t.id)),
        j = l.useCallback(() => {
            g.A.handleVoiceConnect({ channel: t, connected: i, needSubscriptionToAccess: m, locked: !1 });
        }, [t, i, m]);
    return i || !n
        ? null
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(d.Dr, {
                      id: "join-thread-voice",
                      label: r ? b.intl.string(b.t["0D/6Rz"]) : b.intl.string(b.t.My50nf),
                      action: j,
                  }),
                  r &&
                      !f &&
                      (0, e.jsx)(d.Dr, {
                          id: "open-chat",
                          label: b.intl.string(b.t.ZXxLQg),
                          action: () => {
                              o.A.updateChatOpen(t.id, !0);
                          },
                      }),
              ],
          });
}
