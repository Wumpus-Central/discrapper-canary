n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(665149),
    s = n(585483),
    o = n(723170),
    c = n(64247),
    d = n(124368),
    u = n(981631),
    h = n(388032),
    p = n(482543);
function m(e) {
    let { channel: t } = e,
        n = (0, o.B)(t),
        [m, f] = l.useState(!1),
        g = (0, a.bWb)().enabled;
    l.useEffect(() => {
        let e = () => f(!0);
        return (
            s.S.subscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                s.S.unsubscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let _ = h.intl.string(h.t.h850Sk);
    return (0, i.jsx)(a.yRy, {
        shouldShow: m,
        animation: a.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => f(!1),
        renderPopout: (e) =>
            (0, i.jsx)(c.Z, {
                ...e,
                channel: t,
                navId: 'thread-context',
                label: h.intl.string(h.t['1NBjqa'])
            }),
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, i.jsx)(r.ZP.Icon, {
                ...e,
                onClick: () => f((e) => !e),
                tooltip: l ? null : _,
                icon: n === d.iN.NO_MESSAGES ? a.owu : a.Dkj,
                foreground: n !== d.iN.NO_MESSAGES || g ? null : p.strikethrough,
                'aria-label': _,
                selected: l
            });
        }
    });
}
