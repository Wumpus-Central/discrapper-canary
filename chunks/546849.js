n.d(t, {
    A: () => a,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(128450),
    s = n(985018);

function a(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: a,
        pendingPronouns: o,
        placeholder: c,
        currentPronouns: d,
        disabled: u = !1,
    } = e;
    return (0, r.jsx)(l.A, {
        title: t,
        errors: n,
        disabled: u,
        children: (0, r.jsx)(i.ksK, {
            placeholder: null != c ? c : s.intl.string(s.t.NPEUUu),
            maxLength: 40,
            value: null != o ? o : d,
            onChange: function (e) {
                a(e === d ? void 0 : e);
            },
            disabled: u,
        }),
    });
}
