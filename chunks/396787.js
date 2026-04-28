n.d(t, { F5: () => h, XA: () => _, jv: () => m });
var a = n(627968);
n(64700);
var l = n(653922),
    i = n(192308),
    s = n(157559),
    o = n(308528),
    c = n(793574),
    r = n(576470),
    d = n(339984),
    u = n(985018);
let h = (e, t) =>
        (0, i.openModalLazy)(async () => {
            let { default: l } = await Promise.all([
                n.e("94232"),
                n.e("43662"),
                n.e("50985"),
                n.e("40851"),
                n.e("80436"),
                n.e("29666"),
                n.e("93513"),
                n.e("47011"),
                n.e("79149"),
                n.e("90017"),
                n.e("99150"),
                n.e("60987"),
            ]).then(n.bind(n, 902550));
            return (n) =>
                (0, a.jsx)(l, {
                    maxFileSizeBytes: 8388608,
                    onComplete: e,
                    uploadType: d.HL.AVATAR,
                    showUpsellHeader: !1,
                    modalTitle: u.intl.string(u.t["6yrpFR"]),
                    analyticsLocation: c.A.GROUP_DM_ICON_EDITOR,
                    analyticsLocations: t,
                    allowRecentAvatarsSelection: !1,
                    ...n,
                });
        }),
    m = (e, t) => {
        h(
            (n) => {
                o.A.setIcon(e, n.imageUri, t).catch(_);
            },
            [t],
        );
    },
    _ = (e) => {
        if (e?.body?.retry_after != null) {
            let t = (0, l.A)(new Date(), e.body.retry_after);
            s.A.show({
                title: u.intl.string(u.t.Whhv4w),
                body: u.intl.format(u.t.VIJkAy, { duration: (0, a.jsx)(r.A, { showUnits: !0, deadline: t }) }),
            });
        }
    };
