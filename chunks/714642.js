"use strict";
n.d(t, { V: () => m, t: () => h });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(572164),
    a = n(87001),
    o = n(532624),
    l = n(350535),
    u = n(22802),
    c = n(592598),
    d = n(581730),
    _ = n(672396),
    f = n(652215),
    p = n(985018);
function h() {
    if (c.A.isNotificationDisabled(_.KS.ClipsReminderNotification) || a.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT))
        return null;
    let { trackView: e, trackClick: t } = (0, d.Y9)(_.KS.ClipsReminderNotification, {
            notif_type: _.KS.ClipsReminderNotification,
        }),
        n = o.Ay.getKeybindForAction(f.hCu.SAVE_CLIP),
        h = (0, s.TD)();
    if (null == n || !h) return null;
    let m = l.dI(n.shortcut, !0);
    return {
        title: p.intl.format(p.t.S5uhCN, {
            keybind: m,
            keybindHook: (e, t) => (0, r.jsx)(u.b, { keybind: m.split("+") }, t),
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
function m(e) {
    let { trackView: t, trackClick: n } = (0, d.Y9)(_.KS.ClipsNotification, { notif_type: _.KS.ClipsNotification });
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
