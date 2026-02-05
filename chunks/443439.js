n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(267102),
    r = n(652215),
    d = n(985018);
function s(e) {
    let { label: t, onAction: n } = e,
        s = (0, a.aL)();
    return (0, i.jsx)(l.Drp, {
        id: "user-profile-overlay",
        label: t ?? d.intl.string(d.t.LYju5J),
        action: () => {
            n?.(), s.dispatch(r.jej.POPOUT_CLOSE);
        },
    });
}
