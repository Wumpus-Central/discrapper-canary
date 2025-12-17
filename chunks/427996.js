n.d(t, { W: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(337682),
    c = n(115130),
    u = n(388032),
    d = n(735071);
function f(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: f,
            filter: p,
        } = (0, o.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter(),
            }),
            [],
        );
    function _() {
        l.a8("");
    }
    return (0, r.jsxs)("div", {
        className: a()(d.container, n),
        children: [
            (0, r.jsx)(s.Checkbox, {
                checked: f,
                onChange: l.Y$,
                label: u.intl.string(u.t["3TSGuD"]),
            }),
            f
                ? (0, r.jsx)(s.oil, {
                      label: u.intl.string(u.t["9rnmem"]),
                      disabled: !f,
                      value: null != i ? i : void 0,
                      onChange: l.jS,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(s.E1j, {
                          size: "sm",
                          query: p,
                          onChange: l.a8,
                          onClear: _,
                      }),
                  }),
        ],
    });
}
