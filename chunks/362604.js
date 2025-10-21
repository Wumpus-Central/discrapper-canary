n.d(t, { Z: () => b }), n(388685), n(472816), n(794429);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(834129),
    u = n(623292),
    d = n(926491),
    f = n(419922),
    _ = n(626135),
    p = n(585483),
    h = n(115610),
    m = n(981631),
    g = n(388032),
    E = n(38297);
function b(e) {
    let { message: t, channel: a, compact: b } = e,
        y = (0, s.Wu)([d.Z], () => Array.from(d.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [O, v] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            y.length > 0 && v(y[Math.floor(Math.random() * y.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [y]),
    null == a.guild_id)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: o()(E.mainContainer, { [E.compact]: b }),
                      icon: n(570111),
                      compact: b,
                      children: (0, r.jsx)("div", {
                          className: o()({ [E.compact]: b }),
                          children: (0, r.jsx)("div", {
                              className: o()({ [E.compact]: b }),
                              children: "" !== t.content ? t.content : g.intl.string(g.t.wnn1Dc),
                          }),
                      }),
                  }),
                  (0, r.jsxs)(l.ButtonGroup, {
                      children: [
                          (0, r.jsx)(l.Button, {
                              variant: "secondary",
                              text: g.intl.string(g.t.ASZTf3),
                              icon: l.FmF,
                              onClick: () => {
                                  _.default.track(m.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "upload_file",
                                  }),
                                      p.S.dispatch(m.CkL.UPLOAD_FILE),
                                      (0, u.fE)({
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
                                            component: f.Z,
                                        }
                                      : l.EO4,
                              onClick: () => {
                                  _.default.track(m.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                      message_id: t.id,
                                      channel_id: a.id,
                                      guild_id: a.guild_id,
                                      action_type: "sticker",
                                  }),
                                      (0, h.O)(t.id, a);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
