i.d(e, {
    f: function () {
        return p;
    },
    y: function () {
        return E;
    }
});
var n = i(200651);
i(192379);
var l = i(481060),
    o = i(522474),
    r = i(556296),
    s = i(13140),
    a = i(44359),
    u = i(620954),
    d = i(987650),
    c = i(981631),
    h = i(388032);
function E() {
    if (o.Z.getWindowOpen(c.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: t, trackClick: e } = (0, u.R)(d.n0.ClipsReminderNotification, { notif_type: d.n0.ClipsReminderNotification }),
        i = r.Z.getKeybindForAction(c.kg4.SAVE_CLIP);
    if (null == i) return null;
    let E = s.BB(i.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCA, {
            keybind: E,
            keybindHook: (t, e) => (0, n.jsx)(a.Z, { keybind: E.split('+') }, e)
        }),
        icon: (0, n.jsx)(l.ClipsIcon, {
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
    let { trackView: e, trackClick: i } = (0, u.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: t,
        icon: (0, n.jsx)(l.ClipsIcon, {
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
