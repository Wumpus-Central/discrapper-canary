n.d(t, { Z: () => u });
var l = n(54381);
n(473749);
var r = n(481060),
    i = n(728285),
    o = n(981631),
    a = n(388032);
function u(e) {
    let { label: t, onAction: n } = e,
        u = (0, i.Aq)();
    return (0, l.jsx)(r.sNh, {
        id: "user-profile-overlay",
        label: null != t ? t : a.intl.string(a.t.LYju5J),
        action: () => {
            null == n || n(), u.dispatch(o.CkL.POPOUT_CLOSE);
        },
    });
}
