n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var r = n(481060),
    i = n(40851),
    o = n(981631),
    a = n(388032);
function u(e) {
    let { label: t, onAction: n } = e,
        u = (0, i.Aq)();
    return (0, l.jsx)(r.sNh, {
        id: 'user-profile-overlay',
        label: null != t ? t : a.intl.string(a.t.LYju5O),
        action: () => {
            null == n || n(), u.dispatch(o.CkL.POPOUT_CLOSE);
        }
    });
}
