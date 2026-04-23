n.d(i, { default: () => l });
var s = n(627968);
n(64700);
var r = n(189213),
    e = n(985018);
function l(t) {
    let { onClose: i, transitionState: n, kind: l } = t;
    return (0, s.jsx)(r.Modal, {
        title: e.intl.string(e.t.r0DLNm),
        subtitle: "user" === l ? e.intl.string(e.t.Fqqbhg) : e.intl.string(e.t["6Y0JlN"]),
        actions: [{ text: e.intl.string(e.t.BddRzS), onClick: i }],
        onClose: i,
        transitionState: n,
    });
}
