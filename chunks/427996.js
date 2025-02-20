n.d(t, { W: () => s });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(399606),
    c = n(481060),
    a = n(337682),
    u = n(115130),
    d = n(388032),
    p = n(187586);
function s(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: r,
            useActivityUrlOverride: s,
            filter: f
        } = (0, o.cj)(
            [u.Z],
            () => ({
                activityUrlOverride: u.Z.getActivityUrlOverride(),
                useActivityUrlOverride: u.Z.getUseActivityUrlOverride(),
                filter: u.Z.getFilter()
            }),
            []
        );
    return (0, i.jsxs)('div', {
        className: l()(p.container, n),
        children: [
            (0, i.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: s,
                onClick: a.Y$,
                children: (0, i.jsx)(c.Text, {
                    variant: 'text-md/semibold',
                    children: d.NW.string(d.t['3TSGuL'])
                })
            }),
            s
                ? (0, i.jsx)(c.xJW, {
                      title: d.NW.string(d.t['9rnmen']),
                      children: (0, i.jsx)(c.oil, {
                          disabled: !s,
                          value: null != r ? r : void 0,
                          onChange: a.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)('div', {
                      children: (0, i.jsx)(c.E1j, {
                          className: p.searchBar,
                          query: f,
                          onChange: a.a8,
                          onClear: function () {
                              a.a8('');
                          }
                      })
                  })
        ]
    });
}
