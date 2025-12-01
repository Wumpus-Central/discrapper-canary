n.d(t, {
    f: () => g,
    y: () => m,
}),
    n(35282);
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(341569),
    a = n(522474),
    o = n(556296),
    s = n(13140),
    u = n(44359),
    c = n(624864),
    d = n(620954),
    h = n(987650),
    p = n(981631),
    f = n(388032);
function m() {
    if (c.Z.isNotificationDisabled(h.n0.ClipsReminderNotification) || a.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, d.Rg)(h.n0.ClipsReminderNotification, {
            notif_type: h.n0.ClipsReminderNotification,
        }),
        n = o.ZP.getKeybindForAction(p.kg4.SAVE_CLIP),
        m = (0, l.LI)();
    if (null == n || !m) return null;
    let g = s.BB(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
            keybind: g,
            keybindHook: (e, t) => (0, i.jsx)(u.t, { keybind: g.split("+") }, t),
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
function g(e) {
    let { trackView: t, trackClick: n } = (0, d.Rg)(h.n0.ClipsNotification, { notif_type: h.n0.ClipsNotification });
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
