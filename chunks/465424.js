n.d(t, { D: () => M });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(714114),
    s = n(323073),
    o = n(47167),
    u = n(262763),
    c = n(323443),
    A = n(332789),
    g = n(10862),
    b = n(70963),
    m = n(961350),
    E = n(576705),
    f = n(977997),
    h = n(652215),
    x = n(212590);
function C(e) {
    let { channel: t } = e,
        n = (0, o.Ay)(t);
    return (0, l.jsxs)("div", {
        className: x.W,
        children: [
            (0, l.jsx)(g.A, { channel: t, color: "currentColor", size: "xs", className: x.p }),
            (0, l.jsx)(r.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
        ],
    });
}
function M(e) {
    let { userId: t } = e,
        { voiceChannel: n } = (0, d.A)({ userId: t }),
        o = (0, a.bG)([E.A], () => {
            if (null == n) return !1;
            let e = (0, s.r9)() && (0, s.UK)(n.id);
            return (n.isPrivate() || E.A.can(h.xBc.CONNECT, n)) && !e;
        }),
        g = (0, a.bG)([f.A], () => f.A.isInChannel(n?.id)),
        x = (0, a.bG)([m.default], () => m.default.getId() === t),
        M = i.useCallback(() => {
            null != n &&
                (n.isGuildStageVoice()
                    ? (0, c.av)(n)
                    : u.A.handleVoiceConnect({
                          channel: n,
                          connected: g,
                          needSubscriptionToAccess: !1,
                          routeDirectlyToChannel: !0,
                          bypassChangeModal: !0,
                      }));
        }, [n, g]),
        { enabled: p } = (0, A.j)("useJoinVoiceItem");
    return p && o && !x && null != n
        ? (0, l.jsx)(r.Drp, {
              id: "join-voice",
              label: g ? (0, b.om)(n) : (0, b.M)(n),
              subtext: (0, l.jsx)(C, { channel: n }),
              action: M,
          })
        : null;
}
