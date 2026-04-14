n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(397927),
    c = n(532622),
    u = n(309698),
    h = n(581007),
    A = n(522435),
    _ = n(46054),
    m = n(954571),
    p = n(652215),
    g = n(985018),
    f = n(171616),
    E = n(782691);
function x(e) {
    let { channel: t, connected: n, hovered: s, subtitle: x, onClick: I } = e,
        C = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)),
        { enableHangoutWindow: N } = (0, h.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        T = N && (0, A.lr)(t),
        S = null != C && C.length > 0,
        b = (0, c.Ay)(t, !0),
        y = null != x && x.length > 0;
    if (
        (l.useEffect(() => {
            S && m.default.track(p.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [S, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let v = a()(f.Ui, n && b ? f.BI : null);
    return S
        ? (0, i.jsx)(d.DUT, {
              className: v,
              onClick: b ? I : void 0,
              children: (0, i.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  className: a()(f.qS, E.PT),
                  children: (0, i.jsx)(o.A, { children: _.A.parseVoiceChannelStatus(C, !0, { channelId: t.id }) }),
              }),
          })
        : n && b && !T && (!y || s)
          ? (0, i.jsxs)(d.DUT, {
                className: v,
                onClick: I,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: f.qS,
                        children: g.intl.string(g.t.Mgpxiw),
                    }),
                    (0, i.jsx)(d.R2l, { color: "currentColor", className: f.rD, size: "xxs" }),
                ],
            })
          : y
            ? (0, i.jsx)(o.A, { children: x })
            : null;
}
