n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(194983),
    c = n(481060),
    u = n(362721),
    d = n(12498),
    f = n(454585),
    h = n(626135),
    p = n(981631),
    g = n(388032),
    m = n(158871),
    b = n(430864);
function _(e) {
    let { channel: t, connected: n, hovered: l, subtitle: _, onClick: y, showEmptyChannelTopic: O } = e,
        v = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        j = null != v && v.length > 0,
        x = (0, u.ZP)(t, !0),
        C = null != _ && _.length > 0;
    if (
        (i.useEffect(() => {
            j &&
                h.default.track(p.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                });
        }, [j, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let E = o()(m.statusDiv, n && x ? m.hoverable : null);
    return j
        ? (0, r.jsx)(c.P3F, {
              className: E,
              onClick: x ? y : void 0,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(s.Z, { children: f.Z.parseVoiceChannelStatus(v, !0, { channelId: t.id }) }),
              }),
          })
        : n && x && (!C || l) && O
          ? (0, r.jsxs)(c.P3F, {
                className: E,
                onClick: y,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        className: m.statusText,
                        children: g.intl.string(g.t.Mgpxiw),
                    }),
                    (0, r.jsx)(c.vdY, {
                        color: "currentColor",
                        className: m.pencilIcon,
                        size: "xxs",
                    }),
                ],
            })
          : C
            ? (0, r.jsx)(s.Z, { children: _ })
            : null;
}
