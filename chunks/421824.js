n.d(t, {
    f: () => g,
    y: () => m,
}),
    n(35282);
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(435064),
    o = n(522474),
    a = n(556296),
    s = n(13140),
    c = n(44359),
    u = n(624864),
    d = n(620954),
    h = n(987650),
    p = n(981631),
    f = n(388032);
function m() {
    if (u.Z.isNotificationDisabled(h.n0.ClipsReminderNotification) || o.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, d.Rg)(h.n0.ClipsReminderNotification, {
            notif_type: h.n0.ClipsReminderNotification,
        }),
        n = a.ZP.getKeybindForAction(p.kg4.SAVE_CLIP),
        m = l.Z.getSettings().clipsEnabled;
    if (null == n || !m) return null;
    let g = s.BB(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
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
