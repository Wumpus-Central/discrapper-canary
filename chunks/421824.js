i.d(e, {
    f: () => p,
    y: () => E
});
var n = i(200651);
i(192379);
var l = i(481060),
    s = i(522474),
    o = i(556296),
    r = i(13140),
    a = i(44359),
    d = i(620954),
    u = i(987650),
    c = i(981631),
    h = i(388032);
function E() {
    if (s.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: t, trackClick: e } = (0, d.R)(u.n0.ClipsReminderNotification, { notif_type: u.n0.ClipsReminderNotification }),
        i = o.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == i) return null;
    let E = r.BB(i.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCA, {
            keybind: E,
            keybindHook: (t, e) => (0, n.jsx)(a.Z, { keybind: E.split('+') }, e)
        }),
        icon: (0, n.jsx)(l.AlX, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            e('dismiss');
        }
    };
}
function p(t) {
    let { trackView: e, trackClick: i } = (0, d.R)(u.n0.ClipsNotification, { notif_type: u.n0.ClipsNotification });
    return {
        title: t,
        icon: (0, n.jsx)(l.AlX, {
            size: 'lg',
            color: 'currentColor'
        }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i('dismiss');
        }
    };
}
