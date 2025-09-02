n.d(t, { W: () => m });
var l = n(951288);
n(647438);
var i = n(120356),
    r = n.n(i),
    a = n(399606),
    o = n(755721),
    s = n(481060),
    c = n(337682),
    u = n(115130),
    d = n(388032),
    p = n(625234);
function m(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: m,
            filter: f,
        } = (0, a.cj)(
            [u.Z],
            () => ({
                activityUrlOverride: u.Z.getActivityUrlOverride(),
                useActivityUrlOverride: u.Z.getUseActivityUrlOverride(),
                filter: u.Z.getFilter(),
            }),
            [],
        );
    return (0, l.jsxs)("div", {
        className: r()(p.container, n),
        children: [
            (0, l.jsx)(o.$q, {
                type: o.M0.INVERTED,
                value: m,
                onClick: c.Y$,
                children: (0, l.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: d.intl.string(d.t["3TSGuL"]),
                }),
            }),
            m
                ? (0, l.jsx)(s.xJW, {
                      title: d.intl.string(d.t["9rnmen"]),
                      children: (0, l.jsx)(s.oil, {
                          disabled: !m,
                          value: null != i ? i : void 0,
                          onChange: c.jS,
                          placeholder: "https://localhost:3000",
                      }),
                  })
                : null,
            !0 === t
                ? null
                : (0, l.jsx)("div", {
                      children: (0, l.jsx)(s.E1j, {
                          size: "sm",
                          className: p.searchBar,
                          query: f,
                          onChange: c.a8,
                          onClear: function () {
                              c.a8("");
                          },
                      }),
                  }),
        ],
    });
}
