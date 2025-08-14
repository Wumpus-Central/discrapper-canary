n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    p = n(454585),
    f = n(626135),
    h = n(981631),
    g = n(388032),
    m = n(158871),
    b = n(430864);
function O(e) {
    let {
            channel: t,
            connected: n,
            hovered: l,
            subtitle: O,
            onClick: _,
            enableHangStatus: y,
            allowChannelTopic: v,
        } = e,
        j = (0, a.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        C = null != j && j.length > 0,
        E = (0, c.ZP)(t, !0),
        x = (!y || !!v) && E,
        S = null != O && O.length > 0;
    if (
        (i.useEffect(() => {
            C &&
                f.default.track(h.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                });
        }, [C, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let P = o()(m.statusDiv, n && x ? m.hoverable : null);
    return C
        ? (0, r.jsx)(s.P3F, {
              className: P,
              onClick: x ? _ : void 0,
              children: (0, r.jsx)(s.Text, {
                  variant: "text-xs/medium",
                  className: o()(m.statusText, b.markup),
                  children: (0, r.jsx)(d.Z, { children: p.Z.parseVoiceChannelStatus(j, !0, { channelId: t.id }) }),
              }),
          })
        : n && x && (!S || l)
          ? (0, r.jsxs)(s.P3F, {
                className: P,
                onClick: _,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        className: m.statusText,
                        children: g.intl.string(g.t.Mgpxi4),
                    }),
                    (0, r.jsx)(s.vdY, {
                        color: "currentColor",
                        className: m.pencilIcon,
                        size: "xxs",
                    }),
                ],
            })
          : S
            ? (0, r.jsx)(d.Z, { children: O })
            : null;
}
