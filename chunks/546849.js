n.d(t, {
    A: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(128450),
    s = n(985018);
let o = 40;

function l(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: l,
        pendingPronouns: c,
        placeholder: u,
        currentPronouns: d,
        disabled: f = !1,
    } = e;

    function p(e) {
        l(e === d ? void 0 : e);
    }
    return (0, r.jsx)(a.A, {
        title: t,
        errors: n,
        disabled: f,
        children: (0, r.jsx)(i.ksK, {
            placeholder: null != u ? u : s.intl.string(s.t.NPEUUu),
            maxLength: o,
            value: null != c ? c : d,
            onChange: p,
            disabled: f,
        }),
    });
}
