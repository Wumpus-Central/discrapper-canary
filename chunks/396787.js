n.d(t, { F5: () => h, XA: () => A, jv: () => m });
var i = n(627968);
n(64700);
var l = n(653922),
    a = n(192308),
    s = n(157559),
    r = n(308528),
    o = n(793574),
    c = n(576470),
    d = n(339984),
    u = n(985018);
let h = (e, t) =>
        (0, a.openModalLazy)(async () => {
            let { default: l } = await Promise.all([n.e("79149"), n.e("53653"), n.e("61788")]).then(n.bind(n, 551028));
            return (n) =>
                (0, i.jsx)(l, {
                    maxFileSizeBytes: 8388608,
                    onComplete: e,
                    uploadType: d.HL.AVATAR,
                    showUpsellHeader: !1,
                    modalTitle: u.intl.string(u.t["6yrpFR"]),
                    analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
                    analyticsLocations: t,
                    allowRecentAvatarsSelection: !1,
                    ...n,
                });
        }),
    m = (e, t) => {
        h(
            (n) => {
                r.A.setIcon(e, n.imageUri, t).catch(A);
            },
            [t],
        );
    },
    A = (e) => {
        if (e?.body?.retry_after != null) {
            let t = (0, l.A)(new Date(), e.body.retry_after);
            s.A.show({
                title: u.intl.string(u.t.Whhv4w),
                body: u.intl.format(u.t.VIJkAy, { duration: (0, i.jsx)(c.A, { showUnits: !0, deadline: t }) }),
            });
        }
    };
