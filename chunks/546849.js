n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(292666),
    l = n(128450),
    a = n(985018);
function r(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: r,
        pendingPronouns: o,
        placeholder: d,
        currentPronouns: u,
        disabled: c = !1,
    } = e;
    return (0, i.jsx)(l.A, {
        title: t,
        errors: n,
        disabled: c,
        children: (0, i.jsx)(s.k, {
            placeholder: d ?? a.intl.string(a.t.NPEUUu),
            maxLength: 40,
            value: o ?? u,
            onChange: function (e) {
                r(e === u ? void 0 : e);
            },
            disabled: c,
        }),
    });
}
