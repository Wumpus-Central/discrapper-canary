n.d(t, { Z: () => C }), n(47120), n(536091);
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
    _ = n(626135),
    h = n(585483),
    p = n(115610),
    g = n(981631),
    f = n(388032),
    x = n(268102);
function C(e) {
    let { message: t, channel: a, compact: C } = e,
        v = (0, s.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [E, I] = l.useState(null);
    return (l.useEffect(() => {
        let e = setInterval(() => {
            v.length > 0 && I(v[Math.floor(Math.random() * v.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [v]),
    null == a.guild_id)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(c.Z, {
                      className: r()(x.mainContainer, { [x.compact]: C }),
                      icon: n(570111),
                      compact: C,
                      children: (0, i.jsx)('div', {
                          className: r()(x.__invalid_content, { [x.compact]: C }),
                          children: (0, i.jsx)('div', {
                              className: r()(x.__invalid_messageContent, { [x.compact]: C }),
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
                                      _.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          h.S.dispatch(g.CkL.UPLOAD_FILE),
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
                                      _.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, p.O)(t.id, a);
                                  },
                                  children:
                                      null != E
                                          ? (0, i.jsx)(m.ZP, {
                                                size: 32,
                                                sticker: E
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
