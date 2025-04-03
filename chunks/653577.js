n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    p = n(454585),
    h = n(626135),
    f = n(981631),
    g = n(388032),
    m = n(32066),
    b = n(73433);
function y(e) {
    let { channel: t, connected: n, hovered: l, subtitle: y, onClick: _ } = e,
        v = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        O = null != v && v.length > 0,
        j = (0, c.ZP)(t, !0),
        x = null != y && y.length > 0;
    if (
        (i.useEffect(() => {
            O &&
                h.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id
                });
        }, [O, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let C = o()(m.statusDiv, n && j ? m.hoverable : null);
    return O
        ? (0, r.jsx)(s.P3F, {
              className: C,
              onClick: j ? _ : void 0,
              children: (0, r.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: p.Z.parseVoiceChannelStatus(v, !0, { channelId: t.id }) })
              })
          })
        : n && j && (!x || l)
          ? (0, r.jsxs)(s.P3F, {
                className: C,
                onClick: _,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        className: m.statusText,
                        children: g.NW.string(g.t.Mgpxi4)
                    }),
                    (0, r.jsx)(s.vdY, {
                        color: 'currentColor',
                        className: m.pencilIcon,
                        size: 'xxs'
                    })
                ]
            })
          : x
            ? (0, r.jsx)(d.Z, { children: y })
            : null;
}
