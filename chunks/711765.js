"use strict";
n.d(t, { F: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(417597),
    o = n(397927),
    l = n(909206),
    u = n(10716),
    c = n(985018),
    d = n(878753);
function _(e) {
    let { hideSearch: t, className: n } = e,
        {
            activityUrlOverride: i,
            useActivityUrlOverride: _,
            filter: f,
        } = (0, s.cf)(
            [u.A],
            () => ({
                activityUrlOverride: u.A.getActivityUrlOverride(),
                useActivityUrlOverride: u.A.getUseActivityUrlOverride(),
                filter: u.A.getFilter(),
            }),
            [],
        );
    function p() {
        l._9("");
    }
    return (0, r.jsxs)("div", {
        className: a()(d.kL, n),
        children: [
            (0, r.jsx)(o.Checkbox, { checked: _, onChange: l.c2, label: c.intl.string(c.t["3TSGuD"]) }),
            _
                ? (0, r.jsx)(o.ksK, {
                      label: c.intl.string(c.t["9rnmem"]),
                      disabled: !_,
                      value: i ?? void 0,
                      onChange: l.ri,
                      placeholder: "https://localhost:3000",
                  })
                : null,
            !0 === t
                ? null
                : (0, r.jsx)("div", {
                      children: (0, r.jsx)(o.IWV, { size: "sm", query: f, onChange: l._9, onClear: p }),
                  }),
        ],
    });
}
