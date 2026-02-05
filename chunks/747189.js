"use strict";
n.d(t, { V: () => p, t: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(684748),
    a = n(532624),
    r = n(350535),
    o = n(572164),
    d = n(652215),
    c = n(672396),
    u = n(985018);
function h() {
    let { trackView: e, trackClick: t } = (0, l.Y)(c.KS.ClipsReminderNotification, {
            notif_type: c.KS.ClipsReminderNotification,
        }),
        n = a.Ay.getKeybindForAction(d.hCu.SAVE_CLIP),
        h = (0, o.TD)();
    if (null == n || !h) return null;
    let p = r.dI(n.shortcut, !0);
    return {
        title: u.intl.format(u.t.S5uhCN, {
            keybind: p,
            keybindHook: () =>
                (0, i.jsx)("span", {
                    style: { display: "inline-block" },
                    children: (0, i.jsx)(s.e7I, { shortcut: p }),
                }),
        }),
        icon: (0, i.jsx)(s.xgA, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            e();
        },
        onDismissClick: () => {
            t("dismiss");
        },
    };
}
function p(e) {
    let { trackView: t, trackClick: n } = (0, l.Y)(c.KS.ClipsNotification, { notif_type: c.KS.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(s.xgA, { size: "xs", color: "currentColor" }),
        onNotificationShow: () => {
            t();
        },
        onDismissClick: () => {
            n("dismiss");
        },
    };
}
