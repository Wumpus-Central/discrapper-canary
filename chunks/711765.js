n.d(t, {
    F: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(417597),
    o = n(397927),
    l = n(909206),
    c = n(10716),
    u = n(985018),
    d = n(878753);

function f(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: f,
            filter: p,
        } = (0, s.cf)(
            [c.A],
            () => ({
                activityUrlOverride: c.A.getActivityUrlOverride(),
                useActivityUrlOverride: c.A.getUseActivityUrlOverride(),
                filter: c.A.getFilter(),
            }),
            [],
        );

    function _() {
        l._9("");
    }
    return (0, r.jsxs)("div", {
        className: a()(d.kL, n),
        children: [
            (0, r.jsx)(o.Checkbox, {
                checked: f,
                onChange: l.c2,
                label: u.intl.string(u.t["3TSGuD"]),
            }),
            f
                ? (0, r.jsx)(o.ksK, {
                      label: u.intl.string(u.t["9rnmem"]),
                      disabled: !f,
                      value: null != i ? i : void 0,
                      onChange: l.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(o.IWV, {
                          size: "sm",
                          query: p,
                          onChange: l._9,
                          onClear: _,
                      }),
                  }),
        ],
    });
}
