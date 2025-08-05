n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
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
function O(e) {
    let { channel: t, connected: n, hovered: l, subtitle: O, onClick: _, enableHangStatus: y, allowChannelTopic: C } = e,
        v = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        j = null != v && v.length > 0,
        E = (0, c.ZP)(t, !0),
        S = (!y || !!C) && E,
        x = null != O && O.length > 0;
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
    let I = o()(m.statusDiv, n && S ? m.hoverable : null);
    return j
        ? (0, r.jsx)(a.P3F, {
              className: I,
              onClick: S ? _ : void 0,
              children: (0, r.jsx)(a.Text, {
                  variant: 'text-xs/medium',
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(v, !0, { channelId: t.id }) })
              })
          })
        : n && S && (!x || l)
          ? (0, r.jsxs)(a.P3F, {
                className: I,
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
          : x
            ? (0, r.jsx)(d.Z, { children: O })
            : null;
}
