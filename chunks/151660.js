n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(888675),
    c = n(118517),
    u = n(679382),
    m = n(148355),
    _ = n(954571),
    h = n(203982),
    p = n(420208),
    g = n(652215),
    A = n(985018),
    f = n(173990);
function x(e) {
    let { message: t, channel: a, compact: x } = e,
        E = (0, s.yK)([u.A], () => Array.from(u.A.getAllGuildStickers().values()).flat()).slice(0, 20),
        [C, I] = l.useState(null);
    return (l.useEffect(() => {
        let e = setInterval(() => {
            E.length > 0 && I(E[Math.floor(Math.random() * E.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [E]),
    null == a.guild_id)
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(d.A, {
                      className: r()(f.r, { [f.o]: x }),
                      icon: n(394803),
                      compact: x,
                      children: (0, i.jsx)("div", {
                          className: r()({ [f.o]: x }),
                          children: (0, i.jsx)("div", {
                              className: r()({ [f.o]: x }),
                              children: "" !== t.content ? t.content : A.intl.string(A.t.wnn1Dc),
                          }),
                      }),
                  }),
                  (0, i.jsxs)(o.ButtonGroup, {
                      children: [
                          (0, i.jsx)(o.Button, {
                              variant: "secondary",
                              text: A.intl.string(A.t.ASZTf3),
                              icon: o.XGR,
                              onClick: () => {
                                  _.default.track(g.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "upload_file",
                                  }),
                                      h._.dispatch(g.jej.UPLOAD_FILE, { channelId: a.id }),
                                      (0, c.Yf)({ message: t, channel: a, shouldMention: !0 });
                              },
                          }),
                          (0, i.jsx)(o.Button, {
                              variant: "secondary",
                              text: A.intl.string(A.t.gbrrAz),
                              icon: null != C ? { type: "sticker", asset: C, component: m.A } : o.nm2,
                              onClick: () => {
                                  _.default.track(g.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "sticker",
                                  }),
                                      (0, p.Q)(t.id, a);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
