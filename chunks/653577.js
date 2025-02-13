n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(362721),
    d = n(12498),
    u = n(111028),
    h = n(454585),
    p = n(626135),
    m = n(981631),
    g = n(388032),
    f = n(758164),
    _ = n(642367);
function v(e) {
    let { channel: t, connected: n, hovered: r, subtitle: v, onClick: C } = e,
        x = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        I = null != x && x.length > 0,
        Z = (0, c.ZP)(t, !0),
        b = null != v && v.length > 0;
    l.useEffect(() => {
        I &&
            p.default.track(m.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, I, t.guild_id]);
    let S = (0, s.bWb)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let N = o()(f.statusDiv, n && Z ? f.hoverable : null);
    return I
        ? (0, i.jsx)(s.P3F, {
              className: N,
              onClick: Z ? C : void 0,
              children: (0, i.jsx)(s.Text, {
                  variant: 'text-xs/medium',
                  className: o()(f.statusText, _.markup),
                  children: (0, i.jsx)(u.Z, { children: h.Z.parseVoiceChannelStatus(x, !0, { channelId: t.id }) })
              })
          })
        : n && Z && (!b || r)
          ? (0, i.jsxs)(s.P3F, {
                className: N,
                onClick: C,
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
