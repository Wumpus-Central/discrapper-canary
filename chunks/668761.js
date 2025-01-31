n.d(t, {
    f: () => h,
    y: () => u
});
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(312839),
    r = n(556296),
    o = n(13140),
    a = n(981631),
    d = n(987650),
    c = n(388032);
function u() {
    let { trackView: e, trackClick: t } = (0, l.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        n = r.Z.getKeybindForAction(a.kg4.SAVE_CLIP);
    if (null == n) return null;
    let u = o.BB(n.shortcut, !0);
    return {
        title: c.intl.format(c.t.S5uhCA, {
            keybind: u,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(s.M2$, { shortcut: u })
                })
        }),
        icon: (0, i.jsx)(s.AlX, {
            size: 'xs',
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
    let { trackView: t, trackClick: n } = (0, l.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(s.AlX, {
            size: 'xs',
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
