n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(128450),
    a = n(985018);
function l(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: l,
        pendingPronouns: o,
        placeholder: c,
        currentPronouns: d,
        disabled: u = !1,
    } = e;
    return (0, i.jsx)(r.A, {
        title: t,
        errors: n,
        disabled: u,
        children: (0, i.jsx)(s.ksK, {
            placeholder: c ?? a.intl.string(a.t.NPEUUu),
            maxLength: 40,
            value: o ?? d,
            onChange: function (e) {
                l(e === d ? void 0 : e);
            },
            disabled: u,
        }),
    });
}
