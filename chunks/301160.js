(t.d(i, { EmojiAddModal: () => j }), t(388685));
var a = t(255367),
    n = t(73800),
    o = t(82659),
    s = t(481060),
    l = t(768581),
    r = t(570533),
    m = t(388032),
    d = t(129458);
function c(e) {
    let { emoji: i, onChange: t, value: n } = e,
        o = l.ZP.getEmojiURL({
            id: i.id,
            animated: i.animated,
            size: 24
        });
    return (0, a.jsx)(s.XZJ, {
        size: 20,
        className: d.emojiRow,
        onChange: t,
        type: s.XZJ.Types.INVERTED,
        value: n,
        reverse: !0,
        children: (0, a.jsxs)('div', {
            className: d.emojiLabel,
            children: [
                (0, a.jsx)('img', {
                    className: d.emojiImage,
                    src: o,
                    width: 24,
                    height: 24,
                    alt: ''
                }),
                (0, a.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-md/medium',
                    className: d.emojiAlias,
                    children: i.name
                })
            ]
        })
    });
}
function j(e) {
    let { guildId: i, initialTierEmojiIds: t, onSubmit: l, transitionToManageEmoji: j, transitionState: h, onClose: u } = e,
        x = (0, r.Z)(i),
        [p, f] = n.useState(new Set()),
        g = p.size > 0;
    return (0, a.jsx)(o.Modal, {
        transitionState: h,
        onClose: u,
        title: m.intl.string(m.t.xC6tUl),
        actions: [
            {
                text: m.intl.string(m.t['ETE/oK']),
                variant: 'secondary',
                onClick: u
            },
            {
                text: m.intl.format(m.t.pX74jo, { totalEmoji: p.size }),
                variant: 'primary',
                onClick: function () {
                    (l(p), u());
                },
                disabled: !g
            }
        ],
        children: (0, a.jsxs)(s.Kqy, {
            gap: 'md',
            children: [
                (0, a.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: m.intl.format(m.t['OnK+Cw'], { transitionToManageEmoji: j })
                }),
                null != x &&
                    x.length > 0 &&
                    (0, a.jsx)('div', {
                        className: d.emojiContainer,
                        children: x.map((e) =>
                            null != t && t.has(e.id)
                                ? null
                                : (0, a.jsx)(
                                      c,
                                      {
                                          emoji: e,
                                          onChange: () => {
                                              var i;
                                              return (
                                                  (i = e.id),
                                                  void f((e) => {
                                                      let t = new Set(e);
                                                      return (p.has(i) ? t.delete(i) : t.add(i), t);
                                                  })
                                              );
                                          },
                                          value: p.has(e.id)
                                      },
                                      e.id
                                  )
                        )
                    })
            ]
        })
    });
}
