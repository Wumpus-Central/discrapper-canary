n.d(t, {
    f: () => h,
    y: () => f
}),
    n(301563);
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(522474),
    l = n(556296),
    a = n(13140),
    s = n(44359),
    c = n(620954),
    u = n(987650),
    d = n(981631),
    p = n(388032);
function f() {
    if (o.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: e, trackClick: t } = (0, c.R)(u.n0.ClipsReminderNotification, { notif_type: u.n0.ClipsReminderNotification }),
        n = l.ZP.getKeybindForAction(d.kg4.SAVE_CLIP);
    if (null == n) return null;
    let f = a.BB(n.shortcut, !0);
    return {
        title: p.NW.format(p.t.S5uhCA, {
            keybind: f,
            keybindHook: (e, t) => (0, i.jsx)(s.Z, { keybind: f.split('+') }, t)
        }),
        icon: (0, i.jsx)(r.AlX, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t('dismiss');
        }
    };
}
function h(e) {
    let { trackView: t, trackClick: n } = (0, c.R)(u.n0.ClipsNotification, { notif_type: u.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.AlX, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n('dismiss');
        }
    };
}
