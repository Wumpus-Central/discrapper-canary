"use strict";
n.d(t, { F5: () => _, XA: () => h, jv: () => f });
var i = n(627968);
n(64700);
var r = n(653922),
    s = n(192308),
    a = n(157559),
    o = n(308528),
    l = n(793574),
    u = n(576470),
    c = n(339984),
    d = n(375708);
let _ = (e, t) =>
        (0, s.openModalLazy)(async () => {
            let { default: r } = await Promise.all([
                n.e("43908"),
                n.e("43662"),
                n.e("50985"),
                n.e("63232"),
                n.e("29666"),
                n.e("80436"),
                n.e("93513"),
                n.e("47011"),
                n.e("1530"),
                n.e("90017"),
                n.e("99150"),
                n.e("60987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
                (0, i.jsx)(r, {
                    maxFileSizeBytes: 8388608,
                    onComplete: e,
                    uploadType: c.HL.AVATAR,
                    showUpsellHeader: !1,
                    modalTitle: d.intl.string(d.t["6yrpFR"]),
                    analyticsLocation: l.A.GROUP_DM_ICON_EDITOR,
                    analyticsLocations: t,
                    allowRecentAvatarsSelection: !1,
                    ...n,
                });
        }),
    f = (e, t) => {
        _(
            (n) => {
                o.A.setIcon(e, n.imageUri, t).catch(h);
            },
            [t],
        );
    },
    h = (e) => {
        if (e?.body?.retry_after != null) {
            let t = (0, r.A)(new Date(), e.body.retry_after);
            a.A.show({
                title: d.intl.string(d.t.Whhv4w),
                body: d.intl.format(d.t.VIJkAy, { duration: (0, i.jsx)(u.A, { showUnits: !0, deadline: t }) }),
            });
        }
    };
