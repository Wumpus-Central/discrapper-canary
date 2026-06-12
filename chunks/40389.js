n.d(e, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    l = n.n(a),
    d = n(17928),
    s = n(477782),
    o = n(367513),
    u = n(313961),
    c = n(499211),
    h = n(406704),
    A = n(977997),
    m = n(262763),
    g = n(375708);
function b(t) {
    let e = (0, h._M)(t),
        n = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
        a = (0, d.bG)([A.A], () => !l().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: b } = (0, c.A)(t.id),
        j = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
        p = r.useCallback(() => {
            m.A.handleVoiceConnect({ channel: t, connected: n, needSubscriptionToAccess: b, locked: !1 });
        }, [t, n, b]);
    return n || !e
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.Dr, {
                      id: "join-thread-voice",
                      label: a ? g.intl.string(g.t["0D/6Rz"]) : g.intl.string(g.t.My50nf),
                      action: p,
                  }),
                  a &&
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
