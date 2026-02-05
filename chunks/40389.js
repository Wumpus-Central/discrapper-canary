n.d(e, { A: () => p });
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    s = n(311907),
    d = n(397927),
    o = n(367513),
    u = n(313961),
    c = n(721592),
    A = n(406704),
    g = n(977997),
    f = n(262763),
    h = n(985018);
function p(t) {
    let e = (0, A._M)(t),
        n = (0, s.bG)([g.A], () => g.A.isInChannel(t.id)),
        l = (0, s.bG)([g.A], () => !a().isEmpty(g.A.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: p } = (0, c.A)(t.id),
        m = (0, s.bG)([u.A], () => u.A.getChatOpen(t.id)),
        v = r.useCallback(() => {
            f.A.handleVoiceConnect({ channel: t, connected: n, needSubscriptionToAccess: p, locked: !1 });
        }, [t, n, p]);
    return n || !e
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.Drp, {
                      id: "join-thread-voice",
                      label: l ? h.intl.string(h.t["0D/6Rz"]) : h.intl.string(h.t.My50nf),
                      action: v,
                  }),
                  l &&
                      !m &&
                      (0, i.jsx)(d.Drp, {
                          id: "open-chat",
                          label: h.intl.string(h.t.ZXxLQg),
                          action: () => {
                              o.A.updateChatOpen(t.id, !0);
                          },
                      }),
              ],
          });
}
