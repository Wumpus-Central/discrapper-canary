n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(3026),
    d = n(397927),
    c = n(532622),
    u = n(309698),
    h = n(46054),
    A = n(954571),
    g = n(652215),
    m = n(985018),
    p = n(499711),
    _ = n(206314);
function x(e) {
    let { channel: t, connected: n, hovered: s, subtitle: x, onClick: f, showEmptyChannelTopic: E } = e,
        C = (0, r.bG)([u.A], () => u.A.getChannelStatus(t)),
        I = null != C && C.length > 0,
        S = (0, c.Ay)(t, !0),
        b = null != x && x.length > 0;
    if (
        (l.useEffect(() => {
            I && A.default.track(g.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [I, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let N = a()(p.Ui, n && S ? p.BI : null);
    return I
        ? (0, i.jsx)(d.DUT, {
              className: N,
              onClick: S ? f : void 0,
              children: (0, i.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  className: a()(p.qS, _.PT),
                  children: (0, i.jsx)(o.A, { children: h.A.parseVoiceChannelStatus(C, !0, { channelId: t.id }) }),
              }),
          })
        : n && S && (!b || s) && E
          ? (0, i.jsxs)(d.DUT, {
                className: N,
                onClick: f,
                children: [
                    (0, i.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        className: p.qS,
                        children: m.intl.string(m.t.Mgpxiw),
                    }),
                    (0, i.jsx)(d.R2l, { color: "currentColor", className: p.rD, size: "xxs" }),
                ],
            })
          : b
            ? (0, i.jsx)(o.A, { children: x })
            : null;
}
