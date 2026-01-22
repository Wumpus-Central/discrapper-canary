n.d(t, { A: () => b }), n(896048), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(888675),
    u = n(118517),
    d = n(679382),
    f = n(148355),
    p = n(954571),
    _ = n(203982),
    h = n(420208),
    m = n(652215),
    g = n(985018),
    E = n(173990);
function b(e) {
    let { message: t, channel: a, compact: b } = e,
        y = (0, o.yK)([d.A], () => Array.from(d.A.getAllGuildStickers().values()).flat()).slice(0, 20),
        [O, A] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            y.length > 0 && A(y[Math.floor(Math.random() * y.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [y]),
    null == a.guild_id)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(c.A, {
                      className: s()(E.r, { [E.o]: b }),
                      icon: n(394803),
                      compact: b,
                      children: (0, r.jsx)("div", {
                          className: s()({ [E.o]: b }),
                          children: (0, r.jsx)("div", {
                              className: s()({ [E.o]: b }),
                              children: "" !== t.content ? t.content : g.intl.string(g.t.wnn1Dc),
                          }),
                      }),
                  }),
                  (0, r.jsxs)(l.ButtonGroup, {
                      children: [
                          (0, r.jsx)(l.Button, {
                              variant: "secondary",
                              text: g.intl.string(g.t.ASZTf3),
                              icon: l.XGR,
                              onClick: () => {
                                  p.default.track(m.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "upload_file",
                                  }),
                                      _._.dispatch(m.jej.UPLOAD_FILE, { channelId: a.id }),
                                      (0, u.Yf)({
                                          message: t,
                                          channel: a,
                                          shouldMention: !0,
                                      });
                              },
                          }),
                          (0, r.jsx)(l.Button, {
                              variant: "secondary",
                              text: g.intl.string(g.t.gbrrAz),
                              icon:
                                  null != O
                                      ? {
                                            type: "sticker",
                                            asset: O,
                                            component: f.A,
                                        }
                                      : l.nm2,
                              onClick: () => {
                                  p.default.track(m.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "sticker",
                                  }),
                                      (0, h.Q)(t.id, a);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
