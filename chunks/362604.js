(n.d(t, { Z: () => C }), n(388685), n(472816), n(794429));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(834129),
    d = n(623292),
    p = n(926491),
    m = n(419922),
    f = n(626135),
    g = n(585483),
    _ = n(115610),
    h = n(981631),
    b = n(388032),
    E = n(711643);
function C(e) {
    let { message: t, channel: l, compact: C } = e,
        x = (0, o.Wu)([p.Z], () => Array.from(p.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [v, y] = i.useState(null);
    return (i.useEffect(() => {
        let e = setInterval(() => {
            x.length > 0 && y(x[Math.floor(Math.random() * x.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [x]),
    null == l.guild_id)
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(u.Z, {
                      className: a()(E.mainContainer, { [E.compact]: C }),
                      icon: n(570111),
                      compact: C,
                      children: (0, r.jsx)('div', {
                          className: a()(E.__invalid_content, { [E.compact]: C }),
                          children: (0, r.jsx)('div', {
                              className: a()(E.__invalid_messageContent, { [E.compact]: C }),
                              children: '' !== t.content ? t.content : b.intl.string(b.t.wnn1DQ)
                          })
                      })
                  }),
                  (0, r.jsxs)('div', {
                      className: E.actions,
                      children: [
                          (0, r.jsx)(c.DY3, {
                              text: b.intl.string(b.t.ASZTf3),
                              children: (0, r.jsx)(s.zx, {
                                  color: s.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      (f.default.track(h.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: l.id,
                                          guild_id: l.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          g.S.dispatch(h.CkL.UPLOAD_FILE),
                                          (0, d.fE)({
                                              message: t,
                                              channel: l,
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
                              text: b.intl.string(b.t.gbrrAw),
                              children: (0, r.jsx)(s.zx, {
                                  color: s.zx.Colors.PRIMARY,
                                  onClick: () => {
                                      (f.default.track(h.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: l.id,
                                          guild_id: l.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, _.O)(t.id, l));
                                  },
                                  children:
                                      null != v
                                          ? (0, r.jsx)(m.Z, {
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
