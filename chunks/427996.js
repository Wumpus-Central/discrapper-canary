i.d(t, { W: () => p });
var l = i(200651);
i(192379);
var n = i(120356),
    a = i.n(n),
    r = i(399606),
    d = i(481060),
    o = i(337682),
    u = i(115130),
    c = i(388032),
    s = i(114228);
function p(e) {
    let { hideSearch: t, className: i } = e,
        {
            activityUrlOverride: n,
            useActivityUrlOverride: p,
            filter: f
        } = (0, r.cj)(
            [u.Z],
            () => ({
                activityUrlOverride: u.Z.getActivityUrlOverride(),
                useActivityUrlOverride: u.Z.getUseActivityUrlOverride(),
                filter: u.Z.getFilter()
            }),
            []
        );
    return (0, l.jsxs)('div', {
        className: a()(s.container, i),
        children: [
            (0, l.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                value: p,
                onClick: o.Y$,
                children: (0, l.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    children: c.intl.string(c.t['3TSGuL'])
                })
            }),
            p
                ? (0, l.jsx)(d.xJW, {
                      title: c.intl.string(c.t['9rnmen']),
                      children: (0, l.jsx)(d.oil, {
                          disabled: !p,
                          value: null != n ? n : void 0,
                          onChange: o.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, l.jsx)('div', {
                      children: (0, l.jsx)(d.E1j, {
                          className: s.searchBar,
                          query: f,
                          onChange: o.a8,
                          onClear: function () {
                              o.a8('');
                          }
                      })
                  })
        ]
    });
}
