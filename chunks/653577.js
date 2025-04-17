n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
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
    let { channel: t, connected: n, hovered: l, subtitle: _, onClick: y } = e,
        v = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        O = null != v && v.length > 0,
        C = (0, c.ZP)(t, !0),
        S = null != _ && _.length > 0;
    if (
        (i.useEffect(() => {
            O &&
                p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id
                });
        }, [O, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let j = o()(m.statusDiv, n && C ? m.hoverable : null);
    return O
        ? (0, r.jsx)(a.P3F, {
              className: j,
              onClick: C ? y : void 0,
              children: (0, r.jsx)(a.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(v, !0, { channelId: t.id }) })
              })
          })
        : n && C && (!S || l)
          ? (0, r.jsxs)(a.P3F, {
                className: j,
                onClick: y,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        className: m.statusText,
                        children: g.NW.string(g.t.Mgpxi4)
                    }),
                    (0, r.jsx)(a.vdY, {
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
