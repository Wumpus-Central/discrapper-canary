n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(665149),
    s = n(585483),
    o = n(723170),
    c = n(64247),
    d = n(124368),
    u = n(981631),
    h = n(388032),
    p = n(594559);
function m(e) {
    let { channel: t } = e,
        n = (0, o.B)(t),
        [m, f] = l.useState(!1),
        g = (0, r.useRedesignIconContext)().enabled;
    l.useEffect(() => {
        let e = () => f(!0);
        return (
            s.S.subscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                s.S.unsubscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let C = h.intl.string(h.t.h850Sk);
    return (0, i.jsx)(r.Popout, {
        shouldShow: m,
        animation: r.Popout.Animation.NONE,
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
            return (0, i.jsx)(a.ZP.Icon, {
                ...e,
                onClick: () => f((e) => !e),
                tooltip: l ? null : C,
                icon: n === d.iN.NO_MESSAGES ? r.BellSlashIcon : r.BellIcon,
                foreground: n !== d.iN.NO_MESSAGES || g ? null : p.strikethrough,
                'aria-label': C,
                selected: l
            });
        }
    });
}
