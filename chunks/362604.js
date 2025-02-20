n.d(t, { Z: () => v }), n(47120), n(86693), n(536091);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(834129),
    d = n(623292),
    u = n(926491),
    p = n(419922),
    m = n(626135),
    f = n(585483),
    h = n(115610),
    g = n(981631),
    _ = n(388032),
    b = n(986434);
function v(e) {
    let { message: t, channel: a, compact: v } = e,
        y = (0, l.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [x, O] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            y.length > 0 && O(y[Math.floor(Math.random() * y.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [y]),
    null == a.guild_id)
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: o()(b.mainContainer, { [b.compact]: v }),
                      icon: n(570111),
                      compact: v,
                      children: (0, r.jsx)('div', {
                          className: o()(b.__invalid_content, { [b.compact]: v }),
                          children: (0, r.jsx)('div', {
                              className: o()(b.__invalid_messageContent, { [b.compact]: v }),
                              children: '' !== t.content ? t.content : _.NW.string(_.t.wnn1DQ)
                          })
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: b.actions,
                      children: [
                          (0, r.jsx)(s.DY3, {
                              text: _.NW.string(_.t.ASZTf3),
                              children: (0, r.jsx)(s.zxk, {
                                  color: s.zxk.Colors.PRIMARY,
                                  onClick: () => {
                                      m.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          f.S.dispatch(g.CkL.UPLOAD_FILE),
                                          (0, d.fE)({
                                              message: t,
                                              channel: a,
                                              shouldMention: !0
                                          });
                                  },
                                  children: (0, r.jsx)(s.FmF, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, r.jsx)(s.DY3, {
                              text: _.NW.string(_.t.gbrrAw),
                              children: (0, r.jsx)(s.zxk, {
                                  color: s.zxk.Colors.PRIMARY,
                                  onClick: () => {
                                      m.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, h.O)(t.id, a);
                                  },
                                  children:
                                      null != x
                                          ? (0, r.jsx)(p.ZP, {
                                                size: 32,
                                                sticker: x
                                            })
                                          : (0, r.jsx)(s.EO4, {
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
