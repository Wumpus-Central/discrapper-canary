n.d(t, {
    f: () => m,
    y: () => h,
}),
    n(35282);
var i = n(951288);
n(647438);
var r = n(481060),
    o = n(435064),
    l = n(522474),
    a = n(556296),
    s = n(13140),
    c = n(44359),
    u = n(620954),
    d = n(987650),
    p = n(981631),
    f = n(388032);
function h() {
    if (l.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT)) return null;
    let { trackView: e, trackClick: t } = (0, u.R)(d.n0.ClipsReminderNotification, {
            notif_type: d.n0.ClipsReminderNotification,
        }),
        n = a.ZP.getKeybindForAction(p.kg4.SAVE_CLIP),
        h = o.Z.getSettings().clipsEnabled;
    if (null == n || !h) return null;
    let m = s.BB(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCA, {
            keybind: m,
            keybindHook: (e, t) => (0, i.jsx)(c.Z, { keybind: m.split("+") }, t),
        }),
        icon: (0, i.jsx)(r.AlX, {
            size: "lg",
            color: "currentColor",
        }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t("dismiss");
        },
    };
}
function m(e) {
    let { trackView: t, trackClick: n } = (0, u.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.AlX, {
            size: "lg",
            color: "currentColor",
        }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
