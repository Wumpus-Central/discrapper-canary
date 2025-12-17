n.d(t, {
    f: () => g,
    y: () => m,
}),
    n(35282);
var i = n(54381);
n(473749);
var r = n(481060),
    a = n(341569),
    l = n(522474),
    o = n(556296),
    s = n(13140),
    c = n(44359),
    u = n(624864),
    d = n(620954),
    f = n(987650),
    h = n(981631),
    p = n(388032);
function m() {
    if (u.Z.isNotificationDisabled(f.n0.ClipsReminderNotification) || l.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, d.Rg)(f.n0.ClipsReminderNotification, {
            notif_type: f.n0.ClipsReminderNotification,
        }),
        n = o.ZP.getKeybindForAction(h.kg4.SAVE_CLIP),
        m = (0, a.LI)();
    if (null == n || !m) return null;
    let g = s.BB(n.shortcut, !0);
    return {
        title: p.intl.format(p.t.S5uhCN, {
            keybind: g,
            keybindHook: (e, t) => (0, i.jsx)(c.t, { keybind: g.split("+") }, t),
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
    let { trackView: t, trackClick: n } = (0, d.Rg)(f.n0.ClipsNotification, { notif_type: f.n0.ClipsNotification });
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
