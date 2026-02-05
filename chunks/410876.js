n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(435371),
    r = n(397927),
    o = n(387755),
    d = n(313961),
    u = n(325909),
    c = n(994500),
    g = n(309010),
    h = n(562153),
    A = n(806931),
    p = n(985018);
function I(e) {
    let { user: t, channel: n, location: I } = e,
        m = (0, u.oP)(t, I, n.id),
        x = (0, u.lQ)(t, I, n),
        v = t.bot || t.system || t.isProvisional,
        S = (0, s.bG)([g.A], () => g.A.getVoiceChannelId() === n.id),
        y = (0, s.bG)([d.A], () => d.A.getParticipant(n.id, t.id)),
        E = null == y,
        C = null != y && y.type === A.lp.USER && y.ringing,
        f = (0, h.tx)(n.guild_id, n.id, t),
        _ = (0, s.bG)([c.A], () => c.A.isFriend(t.id)),
        T = !m && (!x || v),
        b = (0, l.useCallback)(() => {
            if (m) {
                if (E) return void o.A.ring(n.id, [t.id], I);
                C && o.A.stopRinging(n.id, [t.id]);
            }
        }, [E, C, m, I, n.id, t.id]);
    if (!S || T) return null;
    let N = _ ? (E ? p.intl.string(p.t["3Hv9qQ"]) : C ? p.intl.string(p.t.ygslb0) : null) : p.intl.string(p.t.TGqF9g);
    return (0, i.jsx)(a.m_, {
        text: N,
        children: (0, i.jsx)("div", {
            children: (0, i.jsx)(r.K0, {
                variant: "icon-only",
                icon: () =>
                    C
                        ? (0, i.jsx)(r.zWQ, { size: "sm", color: r.LU0.colors.ICON_FEEDBACK_CRITICAL })
                        : (0, i.jsx)(r._jp, { size: "sm" }),
                "aria-label": p.intl.formatToPlainString(p.t["3IPBG1"], { username: f }),
                size: "sm",
                onClick: b,
                disabled: !m,
            }),
        }),
    });
}
