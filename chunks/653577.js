n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    f = n(981631),
    g = n(388032),
    m = n(32066),
    b = n(73433);
function _(e) {
    let { channel: t, connected: n, hovered: l, subtitle: _, onClick: O, enableHangStatus: y, allowChannelTopic: v } = e,
        C = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        j = null != C && C.length > 0,
        E = (0, c.ZP)(t, !0),
        x = (!y || !!v) && E,
        S = null != _ && _.length > 0;
    if (
        (i.useEffect(() => {
            j &&
                p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id
                });
        }, [j, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let I = o()(m.statusDiv, n && x ? m.hoverable : null);
    return j
        ? (0, r.jsx)(s.P3F, {
              className: I,
              onClick: x ? O : void 0,
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(C, !0, { channelId: t.id }) })
              })
          })
        : n && x && (!S || l)
          ? (0, r.jsxs)(s.P3F, {
                className: I,
                onClick: O,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        className: m.statusText,
                        children: g.intl.string(g.t.Mgpxi4)
                    }),
                    (0, r.jsx)(s.vdY, {
                        color: 'currentColor',
                        className: m.pencilIcon,
                        size: 'xxs'
                    })
                ]
            })
          : S
            ? (0, r.jsx)(d.Z, { children: _ })
            : null;
}
