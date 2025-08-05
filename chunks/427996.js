n.d(t, { W: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(337682),
    c = n(115130),
    u = n(388032),
    d = n(642804);
function f(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: f,
            filter: _
        } = (0, o.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter()
            }),
            []
        );
    function p() {
        l.a8('');
    }
    return (0, r.jsxs)('div', {
        className: a()(d.container, n),
        children: [
            (0, r.jsx)(s.XZJ, {
                type: s.XZJ.Types.INVERTED,
                value: f,
                onClick: l.Y$,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-md/semibold',
                    children: u.intl.string(u.t['3TSGuL'])
                })
            }),
            f
                ? (0, r.jsx)(s.xJW, {
                      title: u.intl.string(u.t['9rnmen']),
                      children: (0, r.jsx)(s.oil, {
                          disabled: !f,
                          value: null != i ? i : void 0,
                          onChange: l.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)('div', {
                      children: (0, r.jsx)(s.E1j, {
                          size: 'sm',
                          className: d.searchBar,
                          query: _,
                          onChange: l.a8,
                          onClear: p
                      })
                  })
        ]
    });
}
