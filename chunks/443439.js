n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(267102),
    a = n(652215),
    o = n(985018);
function u(e) {
    let { label: t, onAction: n } = e,
        u = (0, i.aL)();
    return (0, r.jsx)(l.Drp, {
        id: "user-profile-overlay",
        label: null != t ? t : o.intl.string(o.t.LYju5J),
        action: () => {
            null == n || n(), u.dispatch(a.jej.POPOUT_CLOSE);
        },
    });
}
