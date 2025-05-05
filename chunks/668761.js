n.d(t, {
    f: () => h,
    y: () => u
});
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(312839),
    o = n(556296),
    l = n(13140),
    a = n(981631),
    c = n(987650),
    d = n(388032);
function u() {
    let { trackView: e, trackClick: t } = (0, s.R)(c.n0.ClipsReminderNotification, { notif_type: c.n0.ClipsReminderNotification }),
        n = o.ZP.getKeybindForAction(a.kg4.SAVE_CLIP);
    if (null == n) return null;
    let u = l.BB(n.shortcut, !0);
    return {
        title: d.intl.format(d.t.S5uhCA, {
            keybind: u,
            keybindHook: () =>
                (0, i.jsx)('span', {
                    style: { display: 'inline-block' },
                    children: (0, i.jsx)(r.M2$, { shortcut: u })
                })
        }),
        icon: (0, i.jsx)(r.AlX, {
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
    let { trackView: t, trackClick: n } = (0, s.R)(c.n0.ClipsNotification, { notif_type: c.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.AlX, {
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
