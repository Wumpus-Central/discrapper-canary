n.d(t, { Z: () => E }), n(47120), n(536091);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(834129),
    d = n(623292),
    u = n(926491),
    m = n(419922),
    h = n(626135),
    _ = n(585483),
    p = n(115610),
    g = n(981631),
    f = n(388032),
    x = n(268102);
function E(e) {
    let { message: t, channel: a, compact: E } = e,
        C = (0, s.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [v, I] = l.useState(null);
    return (l.useEffect(() => {
        let e = setInterval(() => {
            C.length > 0 && I(C[Math.floor(Math.random() * C.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [C]),
    null == a.guild_id)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(c.Z, {
                      className: r()(x.mainContainer, { [x.compact]: E }),
                      icon: n(570111),
                      compact: E,
                      children: (0, i.jsx)('div', {
                          className: r()(x.__invalid_content, { [x.compact]: E }),
                          children: (0, i.jsx)('div', {
                              className: r()(x.__invalid_messageContent, { [x.compact]: E }),
                              children: '' !== t.content ? t.content : f.intl.string(f.t.wnn1DQ)
                          })
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: x.actions,
                      children: [
                          (0, i.jsx)(o.DY3, {
                              text: f.intl.string(f.t.ASZTf3),
                              children: (0, i.jsx)(o.zxk, {
                                  color: o.zxk.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          _.S.dispatch(g.CkL.UPLOAD_FILE),
                                          (0, d.fE)({
                                              message: t,
                                              channel: a,
                                              shouldMention: !0
                                          });
                                  },
                                  children: (0, i.jsx)(o.FmF, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, i.jsx)(o.DY3, {
                              text: f.intl.string(f.t.gbrrAw),
                              children: (0, i.jsx)(o.zxk, {
                                  color: o.zxk.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, p.O)(t.id, a);
                                  },
                                  children:
                                      null != v
                                          ? (0, i.jsx)(m.ZP, {
                                                size: 32,
                                                sticker: v
                                            })
                                          : (0, i.jsx)(o.EO4, {
                                                size: 'md',
                                                color: 'currentColor'
                                            })
                              })
                          })
                      ]
                  })
              ]
          });
}
