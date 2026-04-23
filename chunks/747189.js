"use strict";
n.d(t, { V: () => A, t: () => p });
var i = n(627968);
n(64700);
var s = n(475358),
    l = n(176781),
    a = n(684748),
    r = n(532624),
    o = n(350535),
    d = n(572164),
    c = n(652215),
    u = n(672396),
    h = n(985018);
function p() {
    let { trackView: e, trackClick: t } = (0, a.Y)(u.KS.ClipsReminderNotification, {
            notif_type: u.KS.ClipsReminderNotification,
        }),
        n = r.Ay.getKeybindForAction(c.hCu.SAVE_CLIP),
        p = (0, d.TD)();
    if (null == n || !p) return null;
    let A = o.dI(n.shortcut, !0);
    return {
        title: h.intl.format(h.t.S5uhCN, {
            keybind: A,
            keybindHook: () =>
                (0, i.jsx)("span", { style: { display: "inline-block" }, children: (0, i.jsx)(s.e, { shortcut: A }) }),
        }),
        icon: (0, i.jsx)(l.x, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t("dismiss");
        },
    };
}
function A(e) {
    let { trackView: t, trackClick: n } = (0, a.Y)(u.KS.ClipsNotification, { notif_type: u.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(l.x, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
