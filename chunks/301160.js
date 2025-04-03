i.d(o, { EmojiAddModal: () => j }), i(47120);
var a = i(200651),
    t = i(192379),
    n = i(481060),
    s = i(313201),
    l = i(768581),
    c = i(570533),
    r = i(388032),
    m = i(129458);
function d(e) {
    let { emoji: o, onChange: i, value: t } = e,
        s = l.ZP.getEmojiURL({
            id: o.id,
            animated: o.animated,
            size: 24
        });
    return (0, a.jsx)(n.XZJ, {
        size: 20,
        className: m.emojiRow,
        onChange: i,
        type: n.XZJ.Types.INVERTED,
        value: t,
        reverse: !0,
        children: (0, a.jsxs)('div', {
            className: m.emojiLabel,
            children: [
                (0, a.jsx)('img', {
                    className: m.emojiImage,
                    src: s,
                    width: 24,
                    height: 24,
                    alt: ''
                }),
                (0, a.jsx)(n.Text, {
                    color: 'header-primary',
                    variant: 'text-md/medium',
                    className: m.emojiAlias,
                    children: o.name
                })
            ]
        })
    });
}
function j(e) {
    let { guildId: o, initialTierEmojiIds: i, onSubmit: l, transitionToManageEmoji: j, transitionState: h, onClose: x } = e,
        u = (0, c.Z)(o),
        [_, f] = t.useState(new Set()),
        C = _.size > 0,
        p = (0, s.Dt)();
    return (0, a.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), l(_), x();
        },
        children: (0, a.jsxs)(n.Y0X, {
            transitionState: h,
            'aria-labelledby': p,
            children: [
                (0, a.jsxs)(n.xBx, {
                    children: [
                        (0, a.jsx)(n.X6q, {
                            variant: 'heading-md/semibold',
                            id: p,
                            children: r.NW.string(r.t.xC6tUl)
                        }),
                        (0, a.jsx)(n.olH, {
                            className: m.closeButton,
                            onClick: x
                        })
                    ]
                }),
                (0, a.jsxs)(n.hzk, {
                    className: m.modalContent,
                    children: [
                        (0, a.jsx)(n.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: r.NW.format(r.t['OnK+Cw'], { transitionToManageEmoji: j })
                        }),
                        (0, a.jsx)(n.LZC, { size: 16 }),
                        null != u &&
                            u.length > 0 &&
                            (0, a.jsx)('div', {
                                className: m.emojiContainer,
                                children: u.map((e) =>
                                    null != i && i.has(e.id)
                                        ? null
                                        : (0, a.jsx)(
                                              d,
                                              {
                                                  emoji: e,
                                                  onChange: () => {
                                                      var o;
                                                      return (
                                                          (o = e.id),
                                                          void f((e) => {
                                                              let i = new Set(e);
                                                              return _.has(o) ? i.delete(o) : i.add(o), i;
                                                          })
                                                      );
                                                  },
                                                  value: _.has(e.id)
                                              },
                                              e.id
                                          )
                                )
                            }),
                        (0, a.jsx)(n.LZC, { size: 8 })
                    ]
                }),
                (0, a.jsxs)(n.mzw, {
                    className: m.modalFooter,
                    children: [
                        (0, a.jsx)(n.zxk, {
                            type: 'submit',
                            disabled: !C,
                            children: r.NW.format(r.t.pX74jo, { totalEmoji: _.size })
                        }),
                        (0, a.jsx)(n.zxk, {
                            look: n.zxk.Looks.LINK,
                            color: n.zxk.Colors.PRIMARY,
                            className: m.cancelButton,
                            onClick: x,
                            children: r.NW.string(r.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
