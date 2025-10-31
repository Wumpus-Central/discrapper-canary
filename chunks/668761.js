n.d(t, {
    f: () => p,
    y: () => h,
});
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(312839),
    o = n(556296),
    s = n(13140),
    a = n(435064),
    c = n(981631),
    d = n(987650),
    u = n(388032);
function h() {
    let { trackView: e, trackClick: t } = (0, l.R)(d.n0.ClipsReminderNotification, {
            notif_type: d.n0.ClipsReminderNotification,
        }),
        n = o.ZP.getKeybindForAction(c.kg4.SAVE_CLIP),
        h = a.Z.getSettings().clipsEnabled;
    if (null == n || !h) return null;
    let p = s.BB(n.shortcut, !0);
    return {
        title: u.intl.format(u.t.S5uhCN, {
            keybind: p,
            keybindHook: () =>
                (0, i.jsx)("span", {
                    style: { display: "inline-block" },
                    children: (0, i.jsx)(r.M2$, { shortcut: p }),
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
function p(e) {
    let { trackView: t, trackClick: n } = (0, l.R)(d.n0.ClipsNotification, { notif_type: d.n0.ClipsNotification });
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
