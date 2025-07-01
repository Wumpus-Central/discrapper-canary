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
    let { channel: t, connected: n, hovered: l, subtitle: _, onClick: O } = e,
        y = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        v = null != y && y.length > 0,
        C = (0, c.ZP)(t, !0),
        j = null != _ && _.length > 0;
    if (
        (i.useEffect(() => {
            v &&
                p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id
                });
        }, [v, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let S = o()(m.statusDiv, n && C ? m.hoverable : null);
    return v
        ? (0, r.jsx)(s.P3F, {
              className: S,
              onClick: C ? O : void 0,
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(y, !0, { channelId: t.id }) })
              })
          })
        : n && C && (!j || l)
          ? (0, r.jsxs)(s.P3F, {
                className: S,
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
          : j
            ? (0, r.jsx)(d.Z, { children: _ })
            : null;
}
