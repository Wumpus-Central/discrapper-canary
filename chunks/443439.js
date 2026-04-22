n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(267102),
    r = n(652215),
    d = n(985018);
function o(e) {
    let { label: t, onAction: n } = e,
        o = (0, a.aL)();
    return (0, i.jsx)(l.Dr, {
        id: "user-profile-overlay",
        label: t ?? d.intl.string(d.t.LYju5J),
        action: () => {
            n?.(), o.dispatch(r.jej.POPOUT_CLOSE);
        },
    });
}
