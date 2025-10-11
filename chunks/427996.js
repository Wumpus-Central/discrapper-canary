n.d(t, { W: () => p });
var i = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(399606),
    o = n(481060),
    s = n(337682),
    c = n(115130),
    u = n(388032),
    d = n(625234);
function p(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: p,
            filter: m,
        } = (0, a.cj)(
            [c.Z],
            () => ({
                activityUrlOverride: c.Z.getActivityUrlOverride(),
                useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
                filter: c.Z.getFilter(),
            }),
            [],
        );
    return (0, i.jsxs)("div", {
        className: r()(d.container, n),
        children: [
            (0, i.jsx)(o.Checkbox, {
                checked: p,
                onChange: s.Y$,
                label: u.intl.string(u.t["3TSGuL"]),
            }),
            p
                ? (0, i.jsx)(o.oil, {
                      label: u.intl.string(u.t["9rnmen"]),
                      disabled: !p,
                      value: null != l ? l : void 0,
                      onChange: s.jS,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)("div", {
                      children: (0, i.jsx)(o.E1j, {
                          size: "sm",
                          query: m,
                          onChange: s.a8,
                          onClear: function () {
                              s.a8("");
                          },
                      }),
                  }),
        ],
    });
}
