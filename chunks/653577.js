n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(362721),
    d = n(12498),
    u = n(111028),
    h = n(454585),
    p = n(626135),
    m = n(981631),
    g = n(388032),
    f = n(316249),
    _ = n(665162);
function v(e) {
    let { channel: t, connected: n, hovered: r, subtitle: v, onClick: x } = e,
        C = (0, o.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        Z = null != C && C.length > 0,
        I = (0, c.ZP)(t, !0),
        b = null != v && v.length > 0;
    l.useEffect(() => {
        Z &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, Z, t.guild_id]);
    let S = (0, s.bWb)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let N = a()(f.statusDiv, n && I ? f.hoverable : null);
    return Z
        ? (0, i.jsx)(s.P3F, {
              className: N,
              onClick: I ? x : void 0,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: a()(f.statusText, _.markup),
                  children: (0, i.jsx)(u.Z, { children: h.Z.parseVoiceChannelStatus(C, !0, { channelId: t.id }) })
              })
          })
        : n && I && (!b || r)
          ? (0, i.jsxs)(s.P3F, {
                className: N,
                onClick: x,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        className: f.statusText,
                        children: g.intl.string(g.t.Mgpxi4)
                    }),
                    (0, i.jsx)(s.vdY, {
                        size: 'custom',
                        color: 'currentColor',
                        className: f.pencilIcon,
                        width: S,
                        height: S
                    })
                ]
            })
          : b
            ? (0, i.jsx)(u.Z, { children: v })
            : null;
}
