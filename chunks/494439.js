t.d(e, { Z: () => d });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(40851),
    a = t(981631),
    u = t(388032);
function d(n) {
    let { label: e, onAction: t } = n,
        d = (0, r.Aq)();
    return (0, l.jsx)(i.sNh, {
        id: 'user-profile-overlay',
        label: null != e ? e : u.intl.string(u.t.LYju5O),
        action: () => {
            null == t || t(), d.dispatch(a.CkL.POPOUT_CLOSE);
        }
    });
}
