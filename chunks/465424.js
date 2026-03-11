n.d(t, { D: () => p });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(397927),
    d = n(956793),
    o = n(714114),
    s = n(323073),
    u = n(47167),
    c = n(378570),
    A = n(323443),
    g = n(332789),
    m = n(10862),
    b = n(70963),
    f = n(961350),
    E = n(576705),
    x = n(977997),
    h = n(652215),
    C = n(212590);
function M(e) {
    let { channel: t } = e,
        n = (0, u.Ay)(t);
    return (0, l.jsxs)("div", {
        className: C.W,
        children: [
            (0, l.jsx)(m.A, { channel: t, color: "currentColor", size: "xs", className: C.p }),
            (0, l.jsx)(r.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
        ],
    });
}
function p(e) {
    let { userId: t } = e,
        { voiceChannel: n } = (0, o.A)({ userId: t }),
        u = (0, a.bG)([E.A], () => {
            if (null == n) return !1;
            let e = (0, s.r9)() && (0, s.UK)(n.id);
            return (n.isPrivate() || E.A.can(h.xBc.CONNECT, n)) && !e;
        }),
        m = (0, a.bG)([x.A], () => x.A.isInChannel(n?.id)),
        C = (0, a.bG)([f.default], () => f.default.getId() === t),
        p = i.useCallback(() => {
            null != n && (n.isGuildStageVoice() ? (0, A.av)(n) : (d.default.selectVoiceChannel(n.id), (0, c.iN)(n.id)));
        }, [n]),
        { enabled: j } = (0, g.j)("useJoinVoiceItem");
    return j && u && !C && null != n
        ? (0, l.jsx)(r.Drp, {
              id: "join-voice",
              label: m ? (0, b.om)(n) : (0, b.M)(n),
              subtext: (0, l.jsx)(M, { channel: n }),
              action: p,
          })
        : null;
}
