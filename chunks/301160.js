(i.d(t, { EmojiAddModal: () => x }), i(388685));
var o = i(255367),
    a = i(73800),
    n = i(755721),
    s = i(481060),
    l = i(313201),
    r = i(768581),
    m = i(570533),
    c = i(388032),
    d = i(129458);
function j(e) {
    let { emoji: t, onChange: i, value: a } = e,
        n = r.ZP.getEmojiURL({
            id: t.id,
            animated: t.animated,
            size: 24
        });
    return (0, o.jsx)(s.XZJ, {
        size: 20,
        className: d.emojiRow,
        onChange: i,
        type: s.XZJ.Types.INVERTED,
        value: a,
        reverse: !0,
        children: (0, o.jsxs)('div', {
            className: d.emojiLabel,
            children: [
                (0, o.jsx)('img', {
                    className: d.emojiImage,
                    src: n,
                    width: 24,
                    height: 24,
                    alt: ''
                }),
                (0, o.jsx)(s.Text, {
                    color: 'header-primary',
                    variant: 'text-md/medium',
                    className: d.emojiAlias,
                    children: t.name
                })
            ]
        })
    });
}
function x(e) {
    let { guildId: t, initialTierEmojiIds: i, onSubmit: r, transitionToManageEmoji: x, transitionState: h, onClose: u } = e,
        _ = (0, m.Z)(t),
        [f, p] = a.useState(new Set()),
        C = f.size > 0,
        v = (0, l.Dt)();
    return (0, o.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), r(f), u());
        },
        children: (0, o.jsxs)(s.Y0X, {
            transitionState: h,
            'aria-labelledby': v,
            parentComponent: 'EmojiAddModal',
            children: [
                (0, o.jsxs)(s.xBx, {
                    children: [
                        (0, o.jsx)(s.X6q, {
                            variant: 'heading-md/semibold',
                            id: v,
                            children: c.intl.string(c.t.xC6tUl)
                        }),
                        (0, o.jsx)(s.olH, {
                            className: d.closeButton,
                            onClick: u
                        })
                    ]
                }),
                (0, o.jsxs)(s.hzk, {
                    className: d.modalContent,
                    children: [
                        (0, o.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: c.intl.format(c.t['OnK+Cw'], { transitionToManageEmoji: x })
                        }),
                        (0, o.jsx)(s.LZC, { size: 16 }),
                        null != _ &&
                            _.length > 0 &&
                            (0, o.jsx)('div', {
                                className: d.emojiContainer,
                                children: _.map((e) =>
                                    null != i && i.has(e.id)
                                        ? null
                                        : (0, o.jsx)(
                                              j,
                                              {
                                                  emoji: e,
                                                  onChange: () => {
                                                      var t;
                                                      return (
                                                          (t = e.id),
                                                          void p((e) => {
                                                              let i = new Set(e);
                                                              return (f.has(t) ? i.delete(t) : i.add(t), i);
                                                          })
                                                      );
                                                  },
                                                  value: f.has(e.id)
                                              },
                                              e.id
                                          )
                                )
                            }),
                        (0, o.jsx)(s.LZC, { size: 8 })
                    ]
                }),
                (0, o.jsxs)(s.mzw, {
                    className: d.modalFooter,
                    children: [
                        (0, o.jsx)(s.zxk, {
                            variant: 'primary',
                            text: c.intl.format(c.t.pX74jo, { totalEmoji: f.size }),
                            type: 'submit',
                            disabled: !C
                        }),
                        (0, o.jsx)(n.zx, {
                            look: n.zx.Looks.LINK,
                            color: n.zx.Colors.PRIMARY,
                            className: d.cancelButton,
                            onClick: u,
                            children: c.intl.string(c.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
