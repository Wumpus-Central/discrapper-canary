i.d(e, { V: () => p, t: () => y });
var n = i(627968);
i(64700);
var l = i(176781),
    a = i(572164),
    r = i(532624),
    s = i(350535),
    o = i(22802),
    u = i(592598),
    c = i(581730),
    d = i(672396),
    A = i(652215),
    f = i(985018);
function y() {
    if (u.A.isNotificationDisabled(d.KS.ClipsReminderNotification)) return null;
    let { trackView: t, trackClick: e } = (0, c.Y9)(d.KS.ClipsReminderNotification, {
            notif_type: d.KS.ClipsReminderNotification,
        }),
        i = r.Ay.getKeybindForAction(A.hCu.SAVE_CLIP),
        y = (0, a.TD)();
    if (null == i || !y) return null;
    let p = s.dI(i.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
            keybind: p,
            keybindHook: (t, e) => (0, n.jsx)(o.b, { keybind: p.split("+") }, e),
        }),
        icon: (0, n.jsx)(l.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            e("dismiss");
        },
    };
}
function p(t) {
    let { trackView: e, trackClick: i } = (0, c.Y9)(d.KS.ClipsNotification, { notif_type: d.KS.ClipsNotification });
    return {
        title: t,
        icon: (0, n.jsx)(l.x, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            i("dismiss");
        },
    };
}
