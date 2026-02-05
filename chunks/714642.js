n.d(t, { V: () => p, t: () => g });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(572164),
    s = n(87001),
    r = n(532624),
    o = n(350535),
    d = n(22802),
    u = n(592598),
    c = n(581730),
    h = n(672396),
    A = n(652215),
    m = n(985018);
function g() {
    if (u.A.isNotificationDisabled(h.KS.ClipsReminderNotification) || s.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, c.Y9)(h.KS.ClipsReminderNotification, {
            notif_type: h.KS.ClipsReminderNotification,
        }),
        n = r.Ay.getKeybindForAction(A.hCu.SAVE_CLIP),
        g = (0, a.TD)();
    if (null == n || !g) return null;
    let p = o.dI(n.shortcut, !0);
    return {
        title: m.intl.format(m.t.S5uhCN, {
            keybind: p,
            keybindHook: (e, t) => (0, i.jsx)(d.b, { keybind: p.split("+") }, t),
        }),
        icon: (0, i.jsx)(l.xgA, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t("dismiss");
        },
    };
}
function p(e) {
    let { trackView: t, trackClick: n } = (0, c.Y9)(h.KS.ClipsNotification, { notif_type: h.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(l.xgA, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
