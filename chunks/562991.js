n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(3026),
    c = n(397927),
    u = n(532622),
    d = n(309698),
    f = n(46054),
    p = n(954571),
    h = n(652215),
    b = n(985018),
    g = n(499711),
    m = n(206314);
function A(e) {
    let { channel: t, connected: n, hovered: i, subtitle: A, onClick: y, showEmptyChannelTopic: O } = e,
        j = (0, s.bG)([d.A], () => d.A.getChannelStatus(t)),
        v = null != j && j.length > 0,
        x = (0, u.Ay)(t, !0),
        E = null != A && A.length > 0;
    if (
        (l.useEffect(() => {
            v &&
                p.default.track(h.HAw.VOICE_CHANNEL_TOPIC_VIEWED, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                });
        }, [v, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let _ = a()(g.Ui, n && x ? g.BI : null);
    return v
        ? (0, r.jsx)(c.DUT, {
              className: _,
              onClick: x ? y : void 0,
              children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: a()(g.qS, m.PT),
                  children: (0, r.jsx)(o.A, { children: f.A.parseVoiceChannelStatus(j, !0, { channelId: t.id }) }),
              }),
          })
        : n && x && (!E || i) && O
          ? (0, r.jsxs)(c.DUT, {
                className: _,
                onClick: y,
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        className: g.qS,
                        children: b.intl.string(b.t.Mgpxiw),
                    }),
                    (0, r.jsx)(c.R2l, {
                        color: "currentColor",
                        className: g.rD,
                        size: "xxs",
                    }),
                ],
            })
          : E
            ? (0, r.jsx)(o.A, { children: A })
            : null;
}
