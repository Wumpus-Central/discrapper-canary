n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(194983),
    c = n(481060),
    u = n(362721),
    d = n(12498),
    p = n(454585),
    h = n(626135),
    f = n(981631),
    g = n(388032),
    m = n(158871),
    b = n(430864);
function _(e) {
    let {
            channel: t,
            connected: n,
            hovered: l,
            subtitle: _,
            onClick: y,
            enableHangStatus: O,
            showEmptyChannelTopic: v,
        } = e,
        j = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        C = null != j && j.length > 0,
        x = (0, u.ZP)(t, !0),
        E = (!O || !!v) && x,
        S = null != _ && _.length > 0;
    if (
        (i.useEffect(() => {
            C &&
                h.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                });
        }, [C, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let I = o()(m.statusDiv, n && E ? m.hoverable : null);
    return C
        ? (0, r.jsx)(c.P3F, {
              className: I,
              onClick: E ? y : void 0,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(s.Z, { children: p.Z.parseVoiceChannelStatus(j, !0, { channelId: t.id }) }),
              }),
          })
        : n && E && (!S || l)
          ? (0, r.jsxs)(c.P3F, {
                className: I,
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
          : S
            ? (0, r.jsx)(s.Z, { children: _ })
            : null;
}
