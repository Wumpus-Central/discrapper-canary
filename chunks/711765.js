n.d(t, { F: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(417597),
    r = n(150934),
    o = n(292666),
    c = n(892547),
    d = n(909206),
    u = n(10716),
    m = n(985018),
    p = n(393856);
function _(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: l,
            useActivityUrlOverride: _,
            filter: A,
        } = (0, s.cf)(
            [u.A],
            () => ({
                activityUrlOverride: u.A.getActivityUrlOverride(),
                useActivityUrlOverride: u.A.getUseActivityUrlOverride(),
                filter: u.A.getFilter(),
            }),
            [],
        );
    return (0, i.jsxs)("div", {
        className: a()(p.kL, n),
        children: [
            (0, i.jsx)(r.S, { checked: _, onChange: d.c2, label: m.intl.string(m.t["3TSGuD"]) }),
            _
                ? (0, i.jsx)(o.k, {
                      label: m.intl.string(m.t["9rnmem"]),
                      disabled: !_,
                      value: l ?? void 0,
                      onChange: d.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, i.jsx)("div", {
                      children: (0, i.jsx)(c.I, {
                          size: "sm",
                          query: A,
                          onChange: d._9,
                          onClear: function () {
                              d._9("");
                          },
                      }),
                  }),
        ],
    });
}
