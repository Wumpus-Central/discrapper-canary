"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(3026),
    c = n(397927),
    d = n(532622),
    u = n(309698),
    h = n(581007),
    A = n(522435),
    m = n(46054),
    p = n(954571),
    g = n(652215),
    _ = n(985018),
    f = n(978001),
    x = n(830412);
function C(e) {
    let { channel: t, connected: n, hovered: l, subtitle: C, onClick: E, showEmptyChannelTopic: I } = e,
        N = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)),
        { enableHangoutWindow: b } = (0, h.Dm)({ guildId: t.guild_id, location: "VoiceChannelStatus" }),
        S = b && (0, A.TP)(N),
        T = null != N && N.length > 0 && !S,
        v = (0, d.Ay)(t, !0),
        y = null != C && C.length > 0;
    if (
        (s.useEffect(() => {
            T && p.default.track(g.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [T, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let j = a()(f.Ui, n && v ? f.BI : null);
    return T
        ? (0, i.jsx)(c.DUT, {
              className: j,
              onClick: v ? E : void 0,
              children: (0, i.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: a()(f.qS, x.PT),
                  children: (0, i.jsx)(o.A, { children: m.A.parseVoiceChannelStatus(N, !0, { channelId: t.id }) }),
              }),
          })
        : n && v && !S && (!y || l) && I
          ? (0, i.jsxs)(c.DUT, {
                className: j,
                onClick: E,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        className: f.qS,
                        children: _.intl.string(_.t.Mgpxiw),
                    }),
                    (0, i.jsx)(c.R2l, { color: "currentColor", className: f.rD, size: "xxs" }),
                ],
            })
          : y
            ? (0, i.jsx)(o.A, { children: C })
            : null;
}
