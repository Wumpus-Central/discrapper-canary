n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(710133),
    s = n(985018);

function o(e) {
    let { analyticsSection: t, buttonText: n } = e;
    return (0, r.jsx)(i.Button, {
        variant: "expressive",
        icon: i.tvc,
        text: null != n ? n : s.intl.string(s.t["8Sh5fg"]),
        onClick: () =>
            (0, a.A)({
                section: t,
            }),
    });
}
