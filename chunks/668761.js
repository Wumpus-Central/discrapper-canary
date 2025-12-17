n.d(t, {
    f: () => h,
    y: () => f,
});
var i = n(54381);
n(473749);
var r = n(481060),
    a = n(312839),
    s = n(556296),
    o = n(13140),
    l = n(341569),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function f() {
    let { trackView: e, trackClick: t } = (0, a.R)(d.n0.ClipsReminderNotification, {
            notif_type: d.n0.ClipsReminderNotification,
        }),
        n = s.ZP.getKeybindForAction(c.kg4.SAVE_CLIP),
        f = (0, l.LI)();
    if (null == n || !f) return null;
    let h = o.BB(n.shortcut, !0);
    return {
        title: u.intl.format(u.t.S5uhCN, {
            keybind: h,
            keybindHook: () =>
                (0, i.jsx)("span", {
                    style: { display: "inline-block" },
                    children: (0, i.jsx)(r.M2$, { shortcut: h }),
                }),
        }),
        icon: (0, i.jsx)(r.AlX, {
            size: "xs",
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
function h(e) {
    let { trackView: t, trackClick: n } = (0, a.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
    return {
        title: e,
        icon: (0, i.jsx)(r.AlX, {
            size: "xs",
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
