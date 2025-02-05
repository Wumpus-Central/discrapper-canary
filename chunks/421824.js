n.d(t, {
    f: () => p,
    y: () => _
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(522474),
    l = n(556296),
    a = n(13140),
    s = n(44359),
    d = n(620954),
    c = n(987650),
    u = n(981631),
    h = n(388032);
function _() {
    if (o.Z.getWindowOpen(u.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: e, trackClick: t } = (0, d.R)(c.n0.ClipsReminderNotification, { notif_type: c.n0.ClipsReminderNotification }),
        n = l.Z.getKeybindForAction(u.kg4.SAVE_CLIP);
    if (null == n) return null;
    let _ = a.BB(n.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCA, {
            keybind: _,
            keybindHook: (e, t) => (0, i.jsx)(s.Z, { keybind: _.split('+') }, t)
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
function p(e) {
    let { trackView: t, trackClick: n } = (0, d.R)(c.n0.ClipsNotification, { notif_type: c.n0.ClipsNotification });
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
