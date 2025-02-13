n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(357156),
    l = n(343747),
    u = n(388032),
    c = n(279144);
function d(e) {
    let { guild: t, focused: n, onSelectItem: r, refreshEnabled: d, ...f } = e,
        { canCreateExpressions: _ } = (0, o.XJ)(t);
    return (0, i.jsx)(s.ua7, {
        text: u.intl.string(u.t['fHo+z8']),
        shouldShow: !_,
        children: (e) =>
            (0, i.jsx)('li', {
                className: c.soundButtonWrapper,
                ...e,
                children: (0, i.jsx)(s.kL8, {
                    ...f,
                    'aria-label': u.intl.formatToPlainString(u.t.c1qVYm, { guildName: t.name }),
                    className: a()(d ? c.soundAddButtonRefresh : c.soundAddButton, {
                        [c.focused]: n,
                        [c.disabled]: !_
                    }),
                    onClick: () => (null != r ? r() : (0, l.Z)(t.id)),
                    children: d
                        ? (0, i.jsxs)('div', {
                              className: c.soundAddInfoRefresh,
                              children: [
                                  (0, i.jsx)(s.oFk, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIconRefresh
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/medium',
                                      color: _ ? void 0 : 'text-muted',
                                      className: c.soundAddTextRefresh,
                                      children: u.intl.string(u.t['8Fu/S0'])
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.qJs, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: c.soundAddIcon
                                  }),
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: _ ? 'header-primary' : 'text-muted',
                                      children: u.intl.string(u.t['8Fu/S0'])
                                  })
                              ]
                          })
                })
            })
    });
}
