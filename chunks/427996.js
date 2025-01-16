n.d(t, {
    W: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(399606),
    u = n(481060),
    a = n(337682),
    c = n(115130),
    d = n(388032),
    f = n(114228);
function s(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: s,
            filter: p
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
        className: r()(f.container, n),
        children: [
            (0, i.jsx)(u.Checkbox, {
                type: u.Checkbox.Types.INVERTED,
                value: s,
                onClick: a.Y$,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/semibold',
                    children: d.intl.string(d.t['3TSGuL'])
                })
            }),
            s
                ? (0, i.jsx)(u.FormItem, {
                      title: d.intl.string(d.t['9rnmen']),
                      children: (0, i.jsx)(u.TextInput, {
                          disabled: !s,
                          value: null != l ? l : void 0,
                          onChange: a.jS,
                          placeholder: 'https://localhost:3000'
                      })
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)('div', {
                      children: (0, i.jsx)(u.SearchBar, {
                          className: f.searchBar,
                          query: p,
                          onChange: a.a8,
                          onClear: function () {
                              a.a8('');
                          }
                      })
                  })
        ]
    });
}
