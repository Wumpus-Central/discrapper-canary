n.d(t, { B: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(1561),
    s = n(922770),
    l = n(481060),
    c = n(388032),
    u = n(159529);
let d = (e) => {
    let { hasContent: t, onClear: n, className: i, isLoading: d, size: f = 'sm' } = e;
    return (0, r.jsx)(o.P, {
        className: a()(i, u.iconLayout, { [u.pointer]: t }),
        'data-size': f,
        onClick: (e) => {
            (e.stopPropagation(), null != n && n(e));
        },
        tabIndex: t ? 0 : -1,
        'aria-hidden': !t,
        onMouseDown: (e) => {
            (e.preventDefault(), e.stopPropagation());
        },
        children: (0, r.jsx)('div', {
            className: u.iconContainer,
            children: d
                ? (0, r.jsx)(s.$, {
                      type: s.$.Type.SPINNING_CIRCLE,
                      className: a()(u.icon, u.visible)
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l._Ve, {
                              color: 'currentColor',
                              className: a()(u.icon, { [u.visible]: !t }),
                              'aria-label': c.intl.string(c.t['5h0QOD'])
                          }),
                          (0, r.jsx)(l.Dio, {
                              color: 'currentColor',
                              className: a()(u.clear, { [u.visible]: t }),
                              'aria-label': c.intl.string(c.t.VkKicX)
                          })
                      ]
                  })
        })
    });
};
