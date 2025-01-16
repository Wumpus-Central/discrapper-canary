r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(357156),
    u = r(343747),
    c = r(388032),
    d = r(795287);
function f(e) {
    let { guild: n, focused: r, onSelectItem: a, refreshEnabled: f, ..._ } = e,
        { canCreateExpressions: h } = (0, l.XJ)(n);
    return (0, i.jsx)(o.Tooltip, {
        text: c.intl.string(c.t['fHo+z8']),
        shouldShow: !h,
        children: (e) =>
            (0, i.jsx)('li', {
                className: d.soundButtonWrapper,
                ...e,
                children: (0, i.jsx)(o.ClickableContainer, {
                    ..._,
                    'aria-label': c.intl.formatToPlainString(c.t.c1qVYm, { guildName: n.name }),
                    className: s()(f ? d.soundAddButtonRefresh : d.soundAddButton, {
                        [d.focused]: r,
                        [d.disabled]: !h
                    }),
                    onClick: () => (null != a ? a() : (0, u.Z)(n.id)),
                    children: f
                        ? (0, i.jsxs)('div', {
                              className: d.soundAddInfoRefresh,
                              children: [
                                  (0, i.jsx)(o.CirclePlusIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: d.soundAddIconRefresh
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-xs/medium',
                                      color: h ? void 0 : 'text-muted',
                                      className: d.soundAddTextRefresh,
                                      children: c.intl.string(c.t['8Fu/S0'])
                                  })
                              ]
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(o.PlusSmallIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: d.soundAddIcon
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: h ? 'header-primary' : 'text-muted',
                                      children: c.intl.string(c.t['8Fu/S0'])
                                  })
                              ]
                          })
                })
            })
    });
}
