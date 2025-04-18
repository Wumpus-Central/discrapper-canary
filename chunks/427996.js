n.d(t, { W: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(399606),
    a = n(481060),
    s = n(337682),
    c = n(115130),
    u = n(388032),
    d = n(550163);
function p(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: r,
            useActivityUrlOverride: p,
            filter: m
        } = (0, o.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter()
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: l()(d.container, n),
        children: [
            (0, i.jsx)(a.XZJ, {
                type: a.XZJ.Types.INVERTED,
                value: p,
                onClick: s.Y$,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/semibold',
                    children: u.NW.string(u.t['3TSGuL'])
                })
            }),
            p
                ? (0, i.jsx)(a.xJW, {
                      title: u.NW.string(u.t['9rnmen']),
                      children: (0, i.jsx)(a.oil, {
                          disabled: !p,
                          value: null != r ? r : void 0,
                          onChange: s.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)('div', {
                      children: (0, i.jsx)(a.E1j, {
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
