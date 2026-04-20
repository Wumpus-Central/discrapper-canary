n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(3026),
    o = n(397927),
    d = n(532622),
    c = n(882840),
    u = n(581007),
    h = n(522435),
    A = n(46054),
    _ = n(954571),
    m = n(652215),
    p = n(985018),
    g = n(514416),
    f = n(992595);
function E(e) {
    let { channel: t, connected: n, hovered: s, subtitle: E, onClick: x } = e,
        I = (0, c.l)(t),
        { enableHangoutWindow: C } = (0, u.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        N = C && (0, h.lr)(t),
        T = null != I && I.length > 0,
        S = (0, d.Ay)(t, !0),
        b = null != E && E.length > 0;
    if (
        (l.useEffect(() => {
            T && _.default.track(m.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [T, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let y = a()(g.Ui, n && S ? g.BI : null);
    return T
        ? (0, i.jsx)(o.DUT, {
              className: y,
              onClick: S ? x : void 0,
              children: (0, i.jsx)(o.Text, {
                  variant: "text-xs/medium",
                  className: a()(g.qS, f.PT),
                  children: (0, i.jsx)(r.A, { children: A.A.parseVoiceChannelStatus(I, !0, { channelId: t.id }) }),
              }),
          })
        : n && S && !N && (!b || s)
          ? (0, i.jsxs)(o.DUT, {
                className: y,
                onClick: x,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        className: g.qS,
                        children: p.intl.string(p.t.Mgpxiw),
                    }),
                    (0, i.jsx)(o.R2l, { color: "currentColor", className: g.rD, size: "xxs" }),
                ],
            })
          : b
            ? (0, i.jsx)(r.A, { children: E })
            : null;
}
