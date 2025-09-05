n.d(t, { Z: () => O }), n(388685), n(472816), n(794429);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(834129),
    f = n(623292),
    _ = n(926491),
    p = n(419922),
    h = n(626135),
    m = n(585483),
    g = n(115610),
    E = n(981631),
    b = n(388032),
    y = n(247708);
function O(e) {
    let { message: t, channel: a, compact: O } = e,
        v = (0, s.Wu)([_.Z], () => Array.from(_.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [I, T] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            v.length > 0 && T(v[Math.floor(Math.random() * v.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [v]),
    null == a.guild_id)
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(d.Z, {
                      className: o()(y.mainContainer, { [y.compact]: O }),
                      icon: n(570111),
                      compact: O,
                      children: (0, r.jsx)("div", {
                          className: o()(y.__invalid_content, { [y.compact]: O }),
                          children: (0, r.jsx)("div", {
                              className: o()(y.__invalid_messageContent, { [y.compact]: O }),
                              children: "" !== t.content ? t.content : b.intl.string(b.t.wnn1DQ),
                          }),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: y.actions,
                      children: [
                          (0, r.jsx)(l.u, {
                              asContainer: !0,
                              text: b.intl.string(b.t.ASZTf3),
                              children: (0, r.jsx)(c.zx, {
                                  color: c.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(E.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: "upload_file",
                                      }),
                                          m.S.dispatch(E.CkL.UPLOAD_FILE),
                                          (0, f.fE)({
                                              message: t,
                                              channel: a,
                                              shouldMention: !0,
                                          });
                                  },
                                  children: (0, r.jsx)(u.FmF, {
                                      size: "md",
                                      color: "currentColor",
                                  }),
                              }),
                          }),
                          (0, r.jsx)(l.u, {
                              asContainer: !0,
                              text: b.intl.string(b.t.gbrrAw),
                              children: (0, r.jsx)(c.zx, {
                                  color: c.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(E.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: "sticker",
                                      }),
                                          (0, g.O)(t.id, a);
                                  },
                                  children:
                                      null != I
                                          ? (0, r.jsx)(p.Z, {
                                                size: 32,
                                                sticker: I,
                                            })
                                          : (0, r.jsx)(u.EO4, {
                                                size: "md",
                                                color: "currentColor",
                                            }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
