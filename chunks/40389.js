e.d(n, { A: () => b });
var i = e(477900),
    r = e(582128),
    l = e(435558),
    a = e.n(l),
    d = e(17928),
    s = e(477782),
    o = e(367513),
    u = e(313961),
    c = e(499211),
    h = e(406704),
    A = e(977997),
    m = e(262763),
    g = e(375708);
function b(t) {
    let n = (0, h._M)(t),
        e = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
        l = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: b } = (0, c.A)(t.id),
        j = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
        p = r.useCallback(() => {
            m.A.handleVoiceConnect({ channel: t, connected: e, needSubscriptionToAccess: b, locked: !1 });
        }, [t, e, b]);
    return e || !n
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Dr, {
                      id: "join-thread-voice",
                      label: l ? g.intl.string(g.t["0D/6Rz"]) : g.intl.string(g.t.My50nf),
                      action: p,
                  }),
                  l &&
                      !j &&
                      (0, i.jsx)(s.Dr, {
                          id: "open-chat",
                          label: g.intl.string(g.t.ZXxLQg),
                          action: () => {
                              o.A.updateChatOpen(t.id, !0);
                          },
                      }),
              ],
          });
}
