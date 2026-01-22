i.d(n, {
    A: () => v,
});
var e = i(627968),
    r = i(64700),
    l = i(735438),
    a = i.n(l),
    d = i(311907),
    s = i(397927),
    o = i(367513),
    u = i(313961),
    c = i(721592),
    h = i(406704),
    A = i(977997),
    g = i(262763),
    b = i(985018);

function v(t) {
    let n = (0, h._M)(t),
        i = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
        l = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        { needSubscriptionToAccess: v } = (0, c.A)(t.id),
        p = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
        m = r.useCallback(() => {
            g.A.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: v,
                locked: !1,
            });
        }, [t, i, v]);
    return i || !n
        ? null
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  (0, e.jsx)(s.Drp, {
                      id: "join-thread-voice",
                      label: l ? b.intl.string(b.t["0D/6Rz"]) : b.intl.string(b.t.My50nf),
                      action: m,
                  }),
                  l &&
                      !p &&
                      (0, e.jsx)(s.Drp, {
                          id: "open-chat",
                          label: b.intl.string(b.t.ZXxLQg),
                          action: () => {
                              o.A.updateChatOpen(t.id, !0);
                          },
                      }),
              ],
          });
}
