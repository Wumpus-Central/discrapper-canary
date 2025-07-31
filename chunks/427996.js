n.d(t, { W: () => p });
var l = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    a = n(399606),
    o = n(481060),
    s = n(337682),
    c = n(115130),
    u = n(388032),
    d = n(642804);
function p(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: p,
            filter: m
        } = (0, a.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter()
            }),
            []
        );
    return (0, l.jsxs)('div', {
        className: r()(d.container, n),
        children: [
            (0, l.jsx)(o.XZJ, {
                type: o.XZJ.Types.INVERTED,
                value: p,
                onClick: s.Y$,
                children: (0, l.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    children: u.intl.string(u.t['3TSGuL'])
                })
            }),
            p
                ? (0, l.jsx)(o.xJW, {
                      title: u.intl.string(u.t['9rnmen']),
                      children: (0, l.jsx)(o.oil, {
                          disabled: !p,
                          value: null != i ? i : void 0,
                          onChange: s.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, l.jsx)('div', {
                      children: (0, l.jsx)(o.E1j, {
                          size: 'sm',
                          className: d.searchBar,
                          query: m,
                          onChange: s.a8,
                          onClear: function () {
                              s.a8('');
                          }
                      })
                  })
        ]
    });
}
