n.d(t, {
    V: () => g,
    t: () => m,
}),
    n(747238);
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(572164),
    a = n(87001),
    o = n(532624),
    s = n(350535),
    c = n(22802),
    u = n(592598),
    d = n(581730),
    p = n(672396),
    h = n(652215),
    f = n(985018);
function m() {
    if (u.A.isNotificationDisabled(p.KS.ClipsReminderNotification) || a.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, d.Y9)(p.KS.ClipsReminderNotification, {
            notif_type: p.KS.ClipsReminderNotification,
        }),
        n = o.Ay.getKeybindForAction(h.hCu.SAVE_CLIP),
        m = (0, l.TD)();
    if (null == n || !m) return null;
    let g = s.dI(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
            keybind: g,
            keybindHook: (e, t) => (0, i.jsx)(c.b, { keybind: g.split("+") }, t),
        }),
        icon: (0, i.jsx)(r.xgA, {
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
    let { trackView: t, trackClick: n } = (0, d.Y9)(p.KS.ClipsNotification, { notif_type: p.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.xgA, {
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
