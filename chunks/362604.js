(n.d(t, { Z: () => y }), n(388685), n(472816), n(794429));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(834129),
    d = n(623292),
    f = n(926491),
    _ = n(419922),
    p = n(626135),
    h = n(585483),
    m = n(115610),
    g = n(981631),
    E = n(388032),
    b = n(711643);
function y(e) {
    let { message: t, channel: a, compact: y } = e,
        O = (0, s.Wu)([f.Z], () => Array.from(f.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [v, I] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            O.length > 0 && I(O[Math.floor(Math.random() * O.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [O]),
    null == a.guild_id)
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(u.Z, {
                      className: o()(b.mainContainer, { [b.compact]: y }),
                      icon: n(570111),
                      compact: y,
                      children: (0, r.jsx)('div', {
                          className: o()(b.__invalid_content, { [b.compact]: y }),
                          children: (0, r.jsx)('div', {
                              className: o()(b.__invalid_messageContent, { [b.compact]: y }),
                              children: '' !== t.content ? t.content : E.intl.string(E.t.wnn1DQ)
                          })
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: b.actions,
                      children: [
                          (0, r.jsx)(c.DY3, {
                              text: E.intl.string(E.t.ASZTf3),
                              children: (0, r.jsx)(l.zx, {
                                  color: l.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      (p.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
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
                                          }));
                                  },
                                  children: (0, r.jsx)(c.FmF, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, r.jsx)(c.DY3, {
                              text: E.intl.string(E.t.gbrrAw),
                              children: (0, r.jsx)(l.zx, {
                                  color: l.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      (p.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: a.id,
                                          guild_id: a.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, m.O)(t.id, a));
                                  },
                                  children:
                                      null != v
                                          ? (0, r.jsx)(_.Z, {
                                                size: 32,
                                                sticker: v
                                            })
                                          : (0, r.jsx)(c.EO4, {
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
