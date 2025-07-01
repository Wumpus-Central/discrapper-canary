(o.d(i, { EmojiAddModal: () => j }), o(388685));
var t = o(255367),
    a = o(73800),
    n = o(481060),
    s = o(313201),
    l = o(768581),
    m = o(570533),
    r = o(388032),
    c = o(129458);
function d(e) {
    let { emoji: i, onChange: o, value: a } = e,
        s = l.ZP.getEmojiURL({
            id: i.id,
            animated: i.animated,
            size: 24
        });
    return (0, t.jsx)(n.XZJ, {
        size: 20,
        className: c.emojiRow,
        onChange: o,
        type: n.XZJ.Types.INVERTED,
        value: a,
        reverse: !0,
        children: (0, t.jsxs)('div', {
            className: c.emojiLabel,
            children: [
                (0, t.jsx)('img', {
                    className: c.emojiImage,
                    src: s,
                    width: 24,
                    height: 24,
                    alt: ''
                }),
                (0, t.jsx)(n.Text, {
                    color: 'header-primary',
                    variant: 'text-md/medium',
                    className: c.emojiAlias,
                    children: i.name
                })
            ]
        })
    });
}
function j(e) {
    let { guildId: i, initialTierEmojiIds: o, onSubmit: l, transitionToManageEmoji: j, transitionState: h, onClose: x } = e,
        u = (0, m.Z)(i),
        [_, f] = a.useState(new Set()),
        C = _.size > 0,
        p = (0, s.Dt)();
    return (0, t.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), l(_), x());
        },
        children: (0, t.jsxs)(n.Y0X, {
            transitionState: h,
            'aria-labelledby': p,
            parentComponent: 'EmojiAddModal',
            children: [
                (0, t.jsxs)(n.xBx, {
                    children: [
                        (0, t.jsx)(n.X6q, {
                            variant: 'heading-md/semibold',
                            id: p,
                            children: r.intl.string(r.t.xC6tUl)
                        }),
                        (0, t.jsx)(n.olH, {
                            className: c.closeButton,
                            onClick: x
                        })
                    ]
                }),
                (0, t.jsxs)(n.hzk, {
                    className: c.modalContent,
                    children: [
                        (0, t.jsx)(n.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.intl.format(r.t['OnK+Cw'], { transitionToManageEmoji: j })
                        }),
                        (0, t.jsx)(n.LZC, { size: 16 }),
                        null != u &&
                            u.length > 0 &&
                            (0, t.jsx)('div', {
                                className: c.emojiContainer,
                                children: u.map((e) =>
                                    null != o && o.has(e.id)
                                        ? null
                                        : (0, t.jsx)(
                                              d,
                                              {
                                                  emoji: e,
                                                  onChange: () => {
                                                      var i;
                                                      return (
                                                          (i = e.id),
                                                          void f((e) => {
                                                              let o = new Set(e);
                                                              return (_.has(i) ? o.delete(i) : o.add(i), o);
                                                          })
                                                      );
                                                  },
                                                  value: _.has(e.id)
                                              },
                                              e.id
                                          )
                                )
                            }),
                        (0, t.jsx)(n.LZC, { size: 8 })
                    ]
                }),
                (0, t.jsxs)(n.mzw, {
                    className: c.modalFooter,
                    children: [
                        (0, t.jsx)(n.zxk, {
                            type: 'submit',
                            disabled: !C,
                            children: r.intl.format(r.t.pX74jo, { totalEmoji: _.size })
                        }),
                        (0, t.jsx)(n.zxk, {
                            look: n.zxk.Looks.LINK,
                            color: n.zxk.Colors.PRIMARY,
                            className: c.cancelButton,
                            onClick: x,
                            children: r.intl.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
