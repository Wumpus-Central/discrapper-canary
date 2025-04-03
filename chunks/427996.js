n.d(t, { W: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(337682),
    s = n(115130),
    u = n(388032),
    d = n(642804);
function p(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: r,
            useActivityUrlOverride: p,
            filter: m
        } = (0, a.cj)(
            [s.Z],
            () => ({
                activityUrlOverride: s.Z.getActivityUrlOverride(),
                useActivityUrlOverride: s.Z.getUseActivityUrlOverride(),
                filter: s.Z.getFilter()
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: l()(d.container, n),
        children: [
            (0, i.jsx)(o.XZJ, {
                type: o.XZJ.Types.INVERTED,
                value: p,
                onClick: c.Y$,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    children: u.NW.string(u.t['3TSGuL'])
                })
            }),
            p
                ? (0, i.jsx)(o.xJW, {
                      title: u.NW.string(u.t['9rnmen']),
                      children: (0, i.jsx)(o.oil, {
                          disabled: !p,
                          value: null != r ? r : void 0,
                          onChange: c.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)('div', {
                      children: (0, i.jsx)(o.E1j, {
                          className: d.searchBar,
                          query: m,
                          onChange: c.a8,
                          onClear: function () {
                              c.a8('');
                          }
                      })
                  })
        ]
    });
}
