n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(194983),
    c = n(481060),
    u = n(362721),
    d = n(12498),
    f = n(454585),
    h = n(626135),
    p = n(981631),
    g = n(388032),
    b = n(433507),
    m = n(960324);
function y(e) {
    let { channel: t, connected: n, hovered: l, subtitle: y, onClick: O, showEmptyChannelTopic: v } = e,
        j = (0, o.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        C = null != j && j.length > 0,
        x = (0, u.ZP)(t, !0),
        E = null != y && y.length > 0;
    if (
        (i.useEffect(() => {
            C &&
                h.default.track(p.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                });
        }, [C, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let S = a()(b.statusDiv, n && x ? b.hoverable : null);
    return C
        ? (0, r.jsx)(c.P3F, {
              className: S,
              onClick: x ? O : void 0,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: a()(b.statusText, m.markup),
                  children: (0, r.jsx)(s.Z, { children: f.Z.parseVoiceChannelStatus(j, !0, { channelId: t.id }) }),
              }),
          })
        : n && x && (!E || l) && v
          ? (0, r.jsxs)(c.P3F, {
                className: S,
                onClick: O,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        className: b.statusText,
                        children: g.intl.string(g.t.Mgpxiw),
                    }),
                    (0, r.jsx)(c.vdY, {
                        color: "currentColor",
                        className: b.pencilIcon,
                        size: "xxs",
                    }),
                ],
            })
          : E
            ? (0, r.jsx)(s.Z, { children: y })
            : null;
}
