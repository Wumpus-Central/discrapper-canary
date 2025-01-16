n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120),
    n(536091);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(834129),
    d = n(623292),
    u = n(926491),
    m = n(419922),
    h = n(626135),
    f = n(585483),
    p = n(115610),
    _ = n(981631),
    g = n(388032),
    E = n(268102);
function C(e) {
    let { message: t, channel: l, compact: C } = e,
        I = (0, o.Wu)([u.Z], () => Array.from(u.Z.getAllGuildStickers().values()).flat()).slice(0, 20),
        [x, N] = r.useState(null);
    return (r.useEffect(() => {
        let e = setInterval(() => {
            I.length > 0 && N(I[Math.floor(Math.random() * I.length)]);
        }, 500);
        return () => clearInterval(e);
    }, [I]),
    null == l.guild_id)
        ? null
        : (0, i.jsxs)('div', {
              children: [
                  (0, i.jsx)(c.Z, {
                      className: a()(E.mainContainer, { [E.compact]: C }),
                      icon: n(570111),
                      compact: C,
                      children: (0, i.jsx)('div', {
                          className: a()(E.__invalid_content, { [E.compact]: C }),
                          children: (0, i.jsx)('div', {
                              className: a()(E.__invalid_messageContent, { [E.compact]: C }),
                              children: '' !== t.content ? t.content : g.intl.string(g.t.wnn1DQ)
                          })
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: E.actions,
                      children: [
                          (0, i.jsx)(s.TooltipContainer, {
                              text: g.intl.string(g.t.ASZTf3),
                              children: (0, i.jsx)(s.Button, {
                                  color: s.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(_.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: l.id,
                                          guild_id: l.guild_id,
                                          action_type: 'upload_file'
                                      }),
                                          f.S.dispatch(_.CkL.UPLOAD_FILE),
                                          (0, d.fE)({
                                              message: t,
                                              channel: l,
                                              shouldMention: !0
                                          });
                                  },
                                  children: (0, i.jsx)(s.ImagePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor'
                                  })
                              })
                          }),
                          (0, i.jsx)(s.TooltipContainer, {
                              text: g.intl.string(g.t.gbrrAw),
                              children: (0, i.jsx)(s.Button, {
                                  color: s.Button.Colors.PRIMARY,
                                  onClick: () => {
                                      h.default.track(_.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
                                          message_id: t.id,
                                          channel_id: l.id,
                                          guild_id: l.guild_id,
                                          action_type: 'sticker'
                                      }),
                                          (0, p.O)(t.id, l);
                                  },
                                  children:
                                      null != x
                                          ? (0, i.jsx)(m.ZP, {
                                                size: 32,
                                                sticker: x
                                            })
                                          : (0, i.jsx)(s.ReactionIcon, {
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
