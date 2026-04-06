"use strict";
n.d(t, { V: () => h, t: () => p });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(572164),
    a = n(532624),
    o = n(350535),
    l = n(22802),
    u = n(592598),
    c = n(581730),
    d = n(672396),
    _ = n(652215),
    f = n(985018);
function p() {
    if (u.A.isNotificationDisabled(d.KS.ClipsReminderNotification)) return null;
    let { trackView: e, trackClick: t } = (0, c.Y9)(d.KS.ClipsReminderNotification, {
            notif_type: d.KS.ClipsReminderNotification,
        }),
        n = a.Ay.getKeybindForAction(_.hCu.SAVE_CLIP),
        p = (0, s.TD)();
    if (null == n || !p) return null;
    let h = o.dI(n.shortcut, !0);
    return {
        title: f.intl.format(f.t.S5uhCN, {
            keybind: h,
            keybindHook: (e, t) => (0, r.jsx)(l.b, { keybind: h.split("+") }, t),
        }),
        icon: (0, r.jsx)(i.xgA, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t("dismiss");
        },
    };
}
function h(e) {
    let { trackView: t, trackClick: n } = (0, c.Y9)(d.KS.ClipsNotification, { notif_type: d.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, r.jsx)(i.xgA, { size: "lg", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
