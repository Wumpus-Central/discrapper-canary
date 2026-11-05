var i = t(477900),
    r = t(582128),
    l = t(435558),
    a = t.n(l),
    d = t(855986),
    o = t(477782),
    s = t(367513),
    u = t(628983),
    c = t(499211),
    h = t(406704),
    m = t(977997),
    A = t(262763),
    g = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, h._M)(n),
                t = (0, d.bG)([m.A], () => m.A.isInChannel(n.id)),
                l = (0, d.bG)([m.A], () => !a().isEmpty(m.A.getVoiceStatesForChannel(n.id))),
                { needSubscriptionToAccess: b } = (0, c.A)(n.id),
                p = (0, d.bG)([u.A], () => u.A.getChatOpen(n.id)),
                j = r.useCallback(() => {
                    A.A.handleVoiceConnect({ channel: n, connected: t, needSubscriptionToAccess: b, locked: !1 });
                }, [n, t, b]);
            return t || !e
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.Dr, {
                              id: "join-thread-voice",
                              label: l ? g.intl.string(g.t["0D/6Rz"]) : g.intl.string(g.t.My50nf),
                              action: j,
                          }),
                          l &&
                              !p &&
                              (0, i.jsx)(o.Dr, {
                                  id: "open-chat",
                                  label: g.intl.string(g.t.ZXxLQg),
                                  action: () => {
                                      s.A.updateChatOpen(n.id, !0);
                                  },
                              }),
                      ],
                  });
        },
    },
);
