n.d(t, { Z: () => y });
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
function y(e) {
    let { channel: t, connected: n, hovered: l, subtitle: y, onClick: _ } = e,
        O = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        v = null != O && O.length > 0,
        C = (0, c.ZP)(t, !0),
        S = null != y && y.length > 0;
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
    let j = o()(m.statusDiv, n && C ? m.hoverable : null);
    return v
        ? (0, r.jsx)(a.P3F, {
              className: j,
              onClick: C ? _ : void 0,
              children: (0, r.jsx)(a.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(O, !0, { channelId: t.id }) })
              })
          })
        : n && C && (!S || l)
          ? (0, r.jsxs)(a.P3F, {
                className: j,
                onClick: _,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/medium',
                        className: m.statusText,
                        children: g.intl.string(g.t.Mgpxi4)
                    }),
                    (0, r.jsx)(a.vdY, {
                        color: 'currentColor',
                        className: m.pencilIcon,
                        size: 'xxs'
                    })
                ]
            })
          : S
            ? (0, r.jsx)(d.Z, { children: y })
            : null;
}
