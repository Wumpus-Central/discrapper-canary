t.d(i, { EmojiAddModal: () => j }), t(47120);
var o = t(200651),
    a = t(192379),
    n = t(481060),
    s = t(313201),
    l = t(768581),
    c = t(570533),
    r = t(388032),
    m = t(94046);
function d(e) {
    let { emoji: i, onChange: t, value: a } = e,
        s = l.ZP.getEmojiURL({
            id: i.id,
            animated: i.animated,
            size: 24
        });
    return (0, o.jsx)(n.XZJ, {
        size: 20,
        className: m.emojiRow,
        onChange: t,
        type: n.XZJ.Types.INVERTED,
        value: a,
        reverse: !0,
        children: (0, o.jsxs)('div', {
            className: m.emojiLabel,
            children: [
                (0, o.jsx)('img', {
                    className: m.emojiImage,
                    src: s,
                    width: 24,
                    height: 24,
                    alt: ''
                }),
                (0, o.jsx)(n.Text, {
                    color: 'header-primary',
                    variant: 'text-md/medium',
                    className: m.emojiAlias,
                    children: i.name
                })
            ]
        })
    });
}
function j(e) {
    let { guildId: i, initialTierEmojiIds: t, onSubmit: l, transitionToManageEmoji: j, transitionState: h, onClose: x } = e,
        u = (0, c.Z)(i),
        [_, f] = a.useState(new Set()),
        C = _.size > 0,
        p = (0, s.Dt)();
    return (0, o.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), l(_), x();
        },
        children: (0, o.jsxs)(n.Y0X, {
            transitionState: h,
            'aria-labelledby': p,
            children: [
                (0, o.jsxs)(n.xBx, {
                    children: [
                        (0, o.jsx)(n.X6q, {
                            variant: 'heading-md/semibold',
                            id: p,
                            children: r.intl.string(r.t.xC6tUl)
                        }),
                        (0, o.jsx)(n.olH, {
                            className: m.closeButton,
                            onClick: x
                        })
                    ]
                }),
                (0, o.jsxs)(n.hzk, {
                    className: m.modalContent,
                    children: [
                        (0, o.jsx)(n.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.intl.format(r.t['OnK+Cw'], { transitionToManageEmoji: j })
                        }),
                        (0, o.jsx)(n.LZC, { size: 16 }),
                        null != u &&
                            u.length > 0 &&
                            (0, o.jsx)('div', {
                                className: m.emojiContainer,
                                children: u.map((e) =>
                                    null != t && t.has(e.id)
                                        ? null
                                        : (0, o.jsx)(
                                              d,
                                              {
                                                  emoji: e,
                                                  onChange: () => {
                                                      var i;
                                                      return (
                                                          (i = e.id),
                                                          void f((e) => {
                                                              let t = new Set(e);
                                                              return _.has(i) ? t.delete(i) : t.add(i), t;
                                                          })
                                                      );
                                                  },
                                                  value: _.has(e.id)
                                              },
                                              e.id
                                          )
                                )
                            }),
                        (0, o.jsx)(n.LZC, { size: 8 })
                    ]
                }),
                (0, o.jsxs)(n.mzw, {
                    className: m.modalFooter,
                    children: [
                        (0, o.jsx)(n.zxk, {
                            type: 'submit',
                            disabled: !C,
                            children: r.intl.format(r.t.pX74jo, { totalEmoji: _.size })
                        }),
                        (0, o.jsx)(n.zxk, {
                            look: n.zxk.Looks.LINK,
                            color: n.zxk.Colors.PRIMARY,
                            className: m.cancelButton,
                            onClick: x,
                            children: r.intl.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
