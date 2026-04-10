n.d(t, { A: () => E });
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
    g = n(652215),
    p = n(985018),
    f = n(171616),
    x = n(782691);
function E(e) {
    let { channel: t, connected: n, hovered: s, subtitle: E, onClick: I, showEmptyChannelTopic: C } = e,
        N = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)),
        { enableHangoutWindow: T } = (0, h.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        S = T && (0, A.lr)(t),
        b = null != N && N.length > 0,
        v = (0, c.Ay)(t, !0),
        y = null != E && E.length > 0;
    if (
        (l.useEffect(() => {
            b && m.default.track(g.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [b, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let j = a()(f.Ui, n && v ? f.BI : null);
    return b
        ? (0, i.jsx)(d.DUT, {
              className: j,
              onClick: v ? I : void 0,
              children: (0, i.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  className: a()(f.qS, x.PT),
                  children: (0, i.jsx)(o.A, { children: _.A.parseVoiceChannelStatus(N, !0, { channelId: t.id }) }),
              }),
          })
        : n && v && !S && (!y || s) && C
          ? (0, i.jsxs)(d.DUT, {
                className: j,
                onClick: I,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: f.qS,
                        children: p.intl.string(p.t.Mgpxiw),
                    }),
                    (0, i.jsx)(d.R2l, { color: "currentColor", className: f.rD, size: "xxs" }),
                ],
            })
          : y
            ? (0, i.jsx)(o.A, { children: E })
            : null;
}
