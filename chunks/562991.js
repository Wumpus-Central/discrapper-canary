n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(3026),
    o = n(939249),
    d = n(834730),
    c = n(22231),
    u = n(532622),
    h = n(882840),
    A = n(581007),
    _ = n(522435),
    m = n(46054),
    g = n(954571),
    p = n(652215),
    f = n(985018),
    E = n(514416),
    x = n(992595);
function I(e) {
    let { channel: t, connected: n, hovered: s, subtitle: I, onClick: C } = e,
        b = (0, h.l)(t),
        { enableHangoutWindow: N } = (0, A.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        S = N && (0, _.lr)(t),
        v = null != b && b.length > 0,
        T = (0, u.Ay)(t, !0),
        y = null != I && I.length > 0;
    if (
        (l.useEffect(() => {
            v && g.default.track(p.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [v, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let R = a()(E.Ui, n && T ? E.BI : null);
    return v
        ? (0, i.jsx)(o.D, {
              className: R,
              onClick: T ? C : void 0,
              children: (0, i.jsx)(d.E, {
                  variant: "text-xs/medium",
                  className: a()(E.qS, x.PT),
                  children: (0, i.jsx)(r.A, { children: m.A.parseVoiceChannelStatus(b, !0, { channelId: t.id }) }),
              }),
          })
        : n && T && !S && (!y || s)
          ? (0, i.jsxs)(o.D, {
                className: R,
                onClick: C,
                children: [
                    (0, i.jsx)(d.E, {
                        variant: "text-xs/medium",
                        className: E.qS,
                        children: f.intl.string(f.t.Mgpxiw),
                    }),
                    (0, i.jsx)(c.R, { color: "currentColor", className: E.rD, size: "xxs" }),
                ],
            })
          : y
            ? (0, i.jsx)(r.A, { children: I })
            : null;
}
