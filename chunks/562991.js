"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(3026),
    c = n(397927),
    d = n(532622),
    u = n(309698),
    h = n(46054),
    A = n(954571),
    p = n(652215),
    g = n(985018),
    m = n(499711),
    _ = n(206314);
function f(e) {
    let { channel: t, connected: n, hovered: l, subtitle: f, onClick: x, showEmptyChannelTopic: C } = e,
        E = (0, a.bG)([u.A], () => u.A.getChannelStatus(t)),
        I = null != E && E.length > 0,
        b = (0, d.Ay)(t, !0),
        N = null != f && f.length > 0;
    if (
        (s.useEffect(() => {
            I && A.default.track(p.HAw.VOICE_CHANNEL_TOPIC_VIEWED, { channel_id: t.id, guild_id: t.guild_id });
        }, [I, t.id, t.guild_id]),
        null == t.guild_id)
    )
        return null;
    let S = r()(m.Ui, n && b ? m.BI : null);
    return I
        ? (0, i.jsx)(c.DUT, {
              className: S,
              onClick: b ? x : void 0,
              children: (0, i.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  className: r()(m.qS, _.PT),
                  children: (0, i.jsx)(o.A, { children: h.A.parseVoiceChannelStatus(E, !0, { channelId: t.id }) }),
              }),
          })
        : n && b && (!N || l) && C
          ? (0, i.jsxs)(c.DUT, {
                className: S,
                onClick: x,
                children: [
                    (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        className: m.qS,
                        children: g.intl.string(g.t.Mgpxiw),
                    }),
                    (0, i.jsx)(c.R2l, { color: "currentColor", className: m.rD, size: "xxs" }),
                ],
            })
          : N
            ? (0, i.jsx)(o.A, { children: f })
            : null;
}
