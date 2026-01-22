n.d(t, {
    V: () => p,
    t: () => h,
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(684748),
    l = n(532624),
    o = n(350535),
    a = n(572164),
    c = n(652215),
    d = n(672396),
    u = n(985018);

function h() {
    let { trackView: e, trackClick: t } = (0, s.Y)(d.KS.ClipsReminderNotification, {
            notif_type: d.KS.ClipsReminderNotification,
        }),
        n = l.Ay.getKeybindForAction(c.hCu.SAVE_CLIP),
        h = (0, a.TD)();
    if (null == n || !h) return null;
    let p = o.dI(n.shortcut, !0);
    return {
        title: u.intl.format(u.t.S5uhCN, {
            keybind: p,
            keybindHook: () =>
                (0, i.jsx)("span", {
                    style: {
                        display: "inline-block",
                    },
                    children: (0, i.jsx)(r.e7I, {
                        shortcut: p,
                    }),
                }),
        }),
        icon: (0, i.jsx)(r.xgA, {
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
    let { trackView: t, trackClick: n } = (0, s.Y)(d.KS.ClipsNotification, {
        notif_type: d.KS.ClipsNotification,
    });
    return {
        title: e,
        icon: (0, i.jsx)(r.xgA, {
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
